/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import React, { useState, useCallback } from 'react';
import { useAppContext } from '@context/state';
import WithApollo from '@components/hocs/WithApollo';
import { Categories } from '@utils/categoriesDefined';
import { ListContainer, MainContainer } from './styles';
import { useNavigation } from '@react-navigation/native';
import CategoryCard from '@components/CatalogCategoryCard';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { TProducts } from 'types/products';
import { Products } from 'types/b2b';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'B2BCategories'>;

export interface ItemData {
  nombre?: string;
  amount: number;
  icon: string;
  nameCategory: string;
  productos: {
    sku: string;
    descripcion: string;
    imagen: string;
    isEssential?: boolean;
  }[];
}

const B2BCategories = ({ route }: Props) => {
  const { title, b2bInfo } = route.params;
  const [refreshing, setRefreshing] = useState<boolean>(false);
  /* eslint-disable-next-line @typescript-eslint/unbound-method*/
  const [loadingStart] = useState<boolean>(false);
  const { isInternet } = useAppContext();
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const handled = () => {
    navigation.goBack();
  };

  const goCategoriesDetail = (items: ItemData) => {
    const formattedProducts: TProducts[] = items.productos.map((item) => {
      return {
        codigoBasis: parseInt(item.sku),
        nombLargo: item.descripcion,
        largeName: item.descripcion,
        imagen: item.imagen,
        isEssential: item.isEssential,
      };
    });
    navigation.navigate('B2BProductsList', {
      title: title,
      categoryName: items.nameCategory,
      products: formattedProducts,
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

  const formattedArray = (
    b2bInfo.stockFantasma.length > 0 ? b2bInfo.stockFantasma : b2bInfo.ventaCero
  ).map((item: Products) => {
    const category = Categories.find(
      (category) => category.nameCategory.toUpperCase() === item.nombre.toUpperCase(),
    );
    return {
      nameCategory: item.nombre,
      amount: item.productos.length,
      icon: category?.icon || '',
      productos: item.productos,
    };
  });

  return (
    <>
      <HeaderDetailScreenNavigation title={title} goBack={() => handled()} />
      <MainContainer>
        <ListContainer>
          {loadingStart && isInternet ? (
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
          {formattedArray.length > 0 && !loadingStart && (
            <FlatList
              data={formattedArray}
              renderItem={({ item }) => {
                return (
                  <CategoryCard
                    params={{ item: item as ItemData }}
                    onNext={() => goCategoriesDetail(item as ItemData)}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
          )}
        </ListContainer>
      </MainContainer>
    </>
  );
};

export default WithApollo(B2BCategories);
