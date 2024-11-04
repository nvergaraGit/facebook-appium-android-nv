/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect } from 'react';
import { View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useLazyQuery } from '@apollo/client';
import { MainContainer } from '@components/CatalogsListCategories/styles';
import { Catalog, CatalogBySalesResponse, CatalogSalesStackParamList } from 'types/catalogs';
import CatalogListCard from '@components/CatalogsListCard';
import getCataloguesWithoutGroup from '@graphql/queries/getCataloguesWithoutGroup';
import WithApollo from '@components/hocs/WithApollo';
import { useAppContext } from '@context/state';

type Props = StackScreenProps<CatalogSalesStackParamList, 'CatalogsSalesListContainer'>;

const SalesAvailableCatalogs = ({ route }: Props) => {
  const [catalogsList, setCatalogsList] = useState<Catalog[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  /* eslint-disable-next-line @typescript-eslint/unbound-method*/
  const { setModalInternetConnection, isInternet } = useAppContext();

  const [getCatalogsAvailable, { loading: loadingStart, error: errorStart }] = useLazyQuery(
    getCataloguesWithoutGroup,
    {
      fetchPolicy: 'network-only',
    },
  );
  const navigation = useNavigation<StackNavigationProp<CatalogSalesStackParamList>>();
  const handled = () => {
    navigation.goBack();
  };

  const onPress = (item: Catalog) => {
    navigation.navigate('CatagoriesCatalogs', { catalog: item });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }

    getCatalogsAvailable({
      variables: {
        getCataloguesWithoutGroupInput: {
          filters: {
            // cadena: route?.params?.sale?.dgrupoNacionales,
            bandera: route?.params?.sale?.dcadena ? route?.params?.sale?.dcadena.trim() : '',
          },
        },
      },
      onCompleted: (data: CatalogBySalesResponse) => {
        setCatalogsList(data.getCataloguesWithoutGroup.data ?? []);
      },
    });
    /*eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [refreshing]);

  return (
    <>
      <HeaderDetailScreenNavigation title="Catálogos disponibles" goBack={() => handled()} />
      <MainContainer>
        {loadingStart && isInternet && !errorStart ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                position: 'absolute',

                zIndex: 9,
                elevation: 9,
              }}
            >
              <ActivityIndicator size="large" color="red" />
            </View>
          </View>
        ) : null}
        {catalogsList.length > 0 && !loadingStart && !errorStart && (
          <FlatList
            data={catalogsList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <CatalogListCard
                onPress={() => onPress(item)}
                nameList={item.catalogo}
                idList={item.id}
                inicio={item.inicio}
                termino={item.termino}
              />
            )}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
        )}
      </MainContainer>
    </>
  );
};

export default WithApollo(SalesAvailableCatalogs);
