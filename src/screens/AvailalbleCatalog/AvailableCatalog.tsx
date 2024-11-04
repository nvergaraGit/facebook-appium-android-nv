import { useLazyQuery } from '@apollo/client';
import { MainContainer } from '@components/CatalogsListCategories/styles';
import CatalogueCatagory from '@components/CatalogueCatagory';
import WithApollo from '@components/hocs/WithApollo';
import getCataloguesWithoutGroup from '@graphql/queries/getCataloguesWithoutGroup';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { getImageForSalesFloor } from '@utils/imageSalesFloor';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { Catalog, CatalogBySalesResponse, CatalogParamList } from 'types/catalogs';
import { TitleCadena } from './Styles';
import { ContainerLoader, Loader, LoaderView } from '@screens/orders/styles';
import 'moment/locale/es';
import moment from 'moment';
import { TitleNombreCatalogo } from '@screens/DetailsPacking/Styles';
import { theme } from '@styles/themes';

type Props = StackScreenProps<CatalogParamList, 'DetailsCatalogue'>;
const AvailableCatalog = ({ route }: Props) => {
  const navigation = useNavigation<StackNavigationProp<CatalogParamList>>();
  const { catalogue } = route?.params ?? {};
  const [catalogueList, setCatalogueList] = useState<Catalog[]>([]);
  const [monthString, setMonthString] = useState('');
  const [getCatalogsAvailable, { loading }] = useLazyQuery(getCataloguesWithoutGroup, {
    fetchPolicy: 'network-only',
    onCompleted: (result: CatalogBySalesResponse) => {
      setCatalogueList(result.getCataloguesWithoutGroup.data);
      const arrDate = result.getCataloguesWithoutGroup.data.map((element) => element.inicio);
      const fecha = moment(arrDate[0]);
      setMonthString(fecha.format('MMMM YYYY'));
    },
  });
  const handleDetails = (catalog: Catalog) => {
    navigation.navigate('DetailsPacking', {
      idCatalogue: catalog.id,
      categoria: catalog.categoria,
      bandera: catalogue,
    });
  };
  useEffect(() => {
    void getCatalogsAvailable({
      variables: {
        getCataloguesWithoutGroupInput: {
          filters: {
            bandera: catalogue,
          },
        },
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderDetailScreenNavigation
        title="Catálogos disponibles"
        goBack={() => navigation.goBack()}
      />
      <MainContainer style={{ paddingHorizontal: 15, paddingTop: 10 }}>
        {!loading && (
          <View style={{ backgroundColor: '#F7F9FC', paddingBottom: 14, paddingTop: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 21,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {getImageForSalesFloor(catalogue)}
                <View style={{ paddingLeft: 11 }}>
                  <TitleCadena>{catalogue}</TitleCadena>
                  <TitleNombreCatalogo style={{ textTransform: 'capitalize' }}>
                    {monthString}
                  </TitleNombreCatalogo>
                </View>
              </View>
              <View>
                <Text style={{ color: '#81878E', fontFamily: theme.fonts.mainFont }}>
                  {catalogueList.length} {catalogueList.length > 1 ? 'Catálogos' : 'Catálogo'}
                </Text>
              </View>
            </View>

            <FlatList
              data={catalogueList}
              contentContainerStyle={{ paddingBottom: 12 }}
              renderItem={({ item }) => {
                return (
                  <CatalogueCatagory catalogs={item} handleDetails={() => handleDetails(item)} />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
        {loading && (
          <ContainerLoader>
            <LoaderView>
              <Loader />
            </LoaderView>
          </ContainerLoader>
        )}
      </MainContainer>
    </>
  );
};

export default WithApollo(AvailableCatalog);
