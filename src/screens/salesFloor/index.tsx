/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect } from 'react';
import Header from '@components/Header/Header';
import { useLazyQuery } from '@apollo/client';
import WithApollo from '@components/hocs/WithApollo';
import { View, RefreshControl, FlatList } from 'react-native';
import NoResults from '@components/NoResults/NoResults';
import SalesFloorCard from '@components/salesFloorCard';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import getSalesFloor from '@graphql/queries/getSalesFloor';
import EmptyImage from '@assets/icons/empty-image-sales.svg';
import { StackNavigationProp } from '@react-navigation/stack';
import SearchInput from '@components/SearchInput/SearchInput';
import { TextTitle, TextNoResults, SalesFloorContainer, SalesResultContainer } from './styles';
import { TSalesFloor, TSalesFloorsData } from 'types/salesFloors';
import { useAppContext } from '@context/state';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { NoResultScroll } from '@styles/sharedStyles';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
type Props = StackScreenProps<SalesFloorsDetailsStack, 'SalesFloor'>;
const SalesFloor = ({ route }: Props) => {
  const [data, setData] = useState<TSalesFloor[]>([]);
  const [customers, setCustomers] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const { salesFloor } = route?.params ?? {};
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setModalInternetConnection, isInternet } = useAppContext();
  const [getSalesFloorInfo, { loading }] = useLazyQuery(getSalesFloor, {
    fetchPolicy: 'network-only',
  });
  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }
    getSalesFloorInfo({
      variables: {
        pagination: {
          page: 1,
          size: 200,
        },
        filter: salesFloor ? salesFloor : '',
      },
      onCompleted: (data: TSalesFloorsData) => {
        setData(data.customers.customers);
      },
    });
  }, [refreshing]);

  const handleDetails = (item: TSalesFloor) => {
    navigation.navigate('Details', {
      salesFloor: item,
    });
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);
  const results = data.filter(
    (item: TSalesFloor) =>
      (item.codClient && item.codClient.toString().includes(customers)) ||
      (item.csalaSupermercado &&
        item.csalaSupermercado.toLowerCase().includes(customers.toLowerCase())),
  );
  // console.log('sala data', JSON.stringify(data, null, 2));

  return (
    <SalesFloorContainer>
      <Header title="Salas" />
      <View style={{ marginHorizontal: 20, marginBottom: 8 }}>
        <SearchInput
          placeholder="Ingresa el nombre o código de la sala"
          value={customers}
          onSearch={(text) => {
            setCustomers(text);
          }}
          showFilter={false}
        />
      </View>
      {loading && isInternet ? <LoaderFullScreen /> : null}
      {results.length === 0 && !loading && (
        <NoResultScroll
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <View style={{ marginHorizontal: 20 }}>
            <NoResults icon={<EmptyImage />}>
              <TextNoResults textImportant>Búsqueda sin coincidencias</TextNoResults>
              <TextNoResults> Inténtalo nuevamente</TextNoResults>
            </NoResults>
          </View>
        </NoResultScroll>
      )}

      {results.length > 0 && !loading && (
        <>
          <SalesResultContainer>
            {customers.length === 0 && <TextTitle>Listado de salas ({results.length})</TextTitle>}
            {customers.length > 0 && (
              <TextTitle>Resultados de búsqueda: {results.length} salas</TextTitle>
            )}

            <FlatList
              data={results}
              renderItem={({ item }) => (
                <SalesFloorCard salesFloor={item} handleDetails={() => handleDetails(item)} />
              )}
              keyExtractor={(item, index) => index.toString()}
              onEndReachedThreshold={0.5}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
          </SalesResultContainer>
        </>
      )}
    </SalesFloorContainer>
  );
};
export default WithApollo(SalesFloor);
