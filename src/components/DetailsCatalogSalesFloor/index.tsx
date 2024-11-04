/* eslint-disable @typescript-eslint/no-floating-promises */
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import {
  DetailsCatalogContainer,
  DetailsCatalogContainerHeader,
  DetailsCatalogMain,
  DetailsCatalogTitle,
  TextTitle,
} from './styles';

import IconLeftArrow from '@assets/icons/icon-left-arrow.svg';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { DetailsCatalogStackParamList } from 'types/catalogs';
import { FlatList } from 'react-native-gesture-handler';
import ProductsCard from '@components/productsCard';
import { PRODUCTOS } from '@libraries/constants';
import {
  ProductStackParamList,
  TDetailsProducts,
  TProducts,
  TProductsDetailsData,
} from 'types/products';

import getDetailsProducts from '@graphql/queries/getDetailsProducts';
import WithApollo from '@components/hocs/WithApollo';

type Props = StackScreenProps<DetailsCatalogStackParamList, 'DetailsCatalog'>;

const DetailsCatalogSalesFloor = ({ route }: Props) => {
  const { catalogueProducts } = route.params.catalogDetailsInfo;
  const navigation = useNavigation<StackNavigationProp<ProductStackParamList>>();
  const [itemsDetails, setItemsDetails] = useState<number>(0);
  const [productsDetails, setProductsDetails] = useState<TDetailsProducts | null>(null);

  const [getDetailsProductsInfo, { loading: loadingProductDetail }] = useLazyQuery(
    getDetailsProducts,
    {
      fetchPolicy: 'no-cache',
    },
  );

  const handleDetails = (item: TProducts) => {
    setItemsDetails(item.codigoBasis);
    if (item.codigoBasis !== itemsDetails) {
      getDetailsProductsInfo({
        variables: {
          codigoBasis: item.codigoBasis,
        },
        onCompleted: (data: TProductsDetailsData) => {
          setProductsDetails(data.getProductDetail.product);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
          navigation.navigate('DetailsProducts', {
            product: data.getProductDetail.product,
          });
        },
      });
    } else {
      navigation.navigate('DetailsProducts', {
        product: productsDetails as TDetailsProducts,
      });
    }
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <DetailsCatalogContainer>
        <DetailsCatalogContainerHeader onPress={() => navigation.goBack()}>
          <IconLeftArrow />
          <DetailsCatalogTitle>Detalle del formato</DetailsCatalogTitle>
        </DetailsCatalogContainerHeader>
      </DetailsCatalogContainer>
      <DetailsCatalogMain>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <TextTitle>Listado de productos</TextTitle>
        </View>

        {loadingProductDetail && (
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
        <FlatList
          data={catalogueProducts}
          keyExtractor={(_, index) => index.toString()}
          style={{ marginHorizontal: 18, backgroundColor: 'white' }}
          renderItem={({ item, index }) => (
            <ProductsCard
              products={item}
              handleDetails={() => handleDetails(item)}
              viewType={PRODUCTOS}
              border={index}
              showEssentialProduct={item.isEssential}
            />
          )}
        />
      </DetailsCatalogMain>
    </>
  );
};

export default WithApollo(DetailsCatalogSalesFloor);
