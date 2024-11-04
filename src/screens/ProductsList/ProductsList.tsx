import { useLazyQuery } from '@apollo/client';
import { TitleMecanica, TitlePacking, TitlePatron } from '@components/CardPacking/Styles';
import WithApollo from '@components/hocs/WithApollo';
import ProductsCard from '@components/productsCard';
import getCatalogDetails from '@graphql/queries/getCatalogsDetails';
import getDetailsProducts from '@graphql/queries/getDetailsProducts';
import { PRODUCTOS } from '@libraries/constants';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { TextTitle } from '@screens/products/styles';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { ContainerScreen } from '@styles/sharedStyles';
import { getImageForCategoryOC } from '@utils/getCategoriesOc';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar, View } from 'react-native';
import { CatalogDetailResponse, CatalogParamList } from 'types/catalogs';

import { TProducts, TProductsDetailsData } from 'types/products';
type Props = StackScreenProps<CatalogParamList, 'ProductsList'>;
const ProductsList = ({ route }: Props) => {
  const navigation = useNavigation<StackNavigationProp<CatalogParamList>>();
  const { packing, idCatalogue, formato, category } = route?.params ?? {};
  const [products, setProducts] = useState<TProducts[]>([]);
  const [getCatalogDetailsQuery, { loading }] = useLazyQuery(getCatalogDetails, {
    fetchPolicy: 'network-only',
    onCompleted: (data: CatalogDetailResponse) => {
      setProducts(data.getCatalogueDetails.data.catalogueProducts);
    },
  });
  const [getDetailsProductsInfo, { loading: loadingProductDetail }] = useLazyQuery(
    getDetailsProducts,
    {
      fetchPolicy: 'no-cache',
    },
  );
  const handleDetails = (item: TProducts) => {
    void getDetailsProductsInfo({
      variables: {
        codigoBasis: item.codigoBasis,
      },
      onCompleted: (data: TProductsDetailsData) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
        navigation.navigate('DetailsProducts', {
          product: data.getProductDetail.product,
        });
      },
    });
  };
  useEffect(() => {
    void getCatalogDetailsQuery({
      variables: {
        getCatalogueDetailsInput: {
          formato: formato,
          mecanica: packing.mecanica,
          patron: packing.patron,
          catalogueId: idCatalogue,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const showLoader = loading || loadingProductDetail;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderDetailScreenNavigation
        title="Detalle del formato"
        goBack={() => navigation.goBack()}
      />

      <ContainerScreen style={{ paddingLeft: 0, paddingRight: 0 }}>
        {showLoader && (
          <View
            style={{
              position: 'absolute',
              left: '45%',
              bottom: '30%',
              zIndex: 9,
              elevation: 9,
            }}
          >
            <ActivityIndicator size="large" color="red" />
          </View>
        )}
        {!loading && (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 8,
                backgroundColor: '#F7F9FC',
                borderWidth: 1,
                borderColor: '#E6ECF4',
                paddingVertical: 8,
                marginHorizontal: 16,
                marginVertical: 17,
                borderRadius: 6,
              }}
            >
              <View style={{ paddingLeft: 5, flexDirection: 'row', alignItems: 'center' }}>
                {getImageForCategoryOC(category)}

                <View style={{ paddingLeft: 10 }}>
                  <TitlePacking style={{ color: '#030F1C' }}>{formato}</TitlePacking>
                  <TitleMecanica style={{ paddingTop: 8, color: '#030F1C' }}>
                    {packing.mecanica}
                  </TitleMecanica>
                </View>
              </View>

              <View>
                <TitlePatron category={packing.patron}>{packing.patron}</TitlePatron>
              </View>
            </View>
            <View style={{ paddingVertical: 16, paddingHorizontal: 21 }}>
              <TextTitle>Listado de productos ({products.length})</TextTitle>
              <FlatList
                data={products}
                renderItem={({ item, index }) => (
                  <ProductsCard
                    products={item}
                    handleDetails={() => handleDetails(item)}
                    viewType={PRODUCTOS}
                    border={index}
                  />
                )}
              />
            </View>
          </>
        )}
      </ContainerScreen>
    </>
  );
};

export default WithApollo(ProductsList);
