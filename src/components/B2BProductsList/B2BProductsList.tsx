/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import ProductsCard from '@components/productsCard';
import { TDetailsProducts } from 'types/products';
import WithApollo from '@components/hocs/WithApollo';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import getDetailsProducts from '@graphql/queries/getDetailsProducts';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { TProducts, TProductsDetailsData } from '../../types/products';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { B2BProductsListContainer, B2BProductListSubtitle } from './styles';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'B2BProductsList'>;

const B2BProductsList = ({ route }: Props) => {
  const { products } = route.params;
  const { title, categoryName } = route.params;
  const titleProduct = `${title} - ${categoryName}`;
  const [itemsDetails, setItemsDetails] = useState<number>(0);
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const [productsDetails, setProductsDetails] = useState<TDetailsProducts | null>(null);

  const [getDetailsProductsInfo] = useLazyQuery(getDetailsProducts, {
    fetchPolicy: 'no-cache',
  });

  const handleProducts = (item: TProducts) => {
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

  const handledBack = () => {
    navigation.goBack();
  };

  return (
    <B2BProductsListContainer>
      <HeaderDetailScreenNavigation title={titleProduct} goBack={handledBack} />
      <B2BProductListSubtitle>Listado de productos</B2BProductListSubtitle>
      <FlatList
        data={products}
        keyExtractor={(_, index) => index.toString()}
        style={{ marginHorizontal: 18, backgroundColor: 'white' }}
        renderItem={({ item, index }) => (
          <ProductsCard
            products={item}
            handleDetails={() => handleProducts(item)}
            viewType={'SALAS'}
            border={index}
            showEssentialProduct={item.isEssential}
          />
        )}
      />
    </B2BProductsListContainer>
  );
};

export default WithApollo(B2BProductsList);
