/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-floating-promises */

import React, { useState, useEffect } from 'react';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import {
  CatalogSalesStackParamList,
  CategoriesType,
  GetFormatByCategoriesData,
} from 'types/catalogs';
import { View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { ListContainer, MainContainer } from './styles';
import { Categories } from '@utils/categoriesDefined';
import CategoryCard from '@components/CatalogCategoryCard';
import ListName from '@shared/ListNameDate';
import { dateFormatter } from '@utils/formatDate';
import getFormatByCategories from '@graphql/queries/getFormatByCatagories';
import WithApollo from '@components/hocs/WithApollo';
import { useAppContext } from '@context/state';

type Props = StackScreenProps<CatalogSalesStackParamList, 'CatagoriesCatalogs'>;

const CategoriesCatalogsList = ({ route }: Props) => {
  const { catalogo, id, inicio, termino } = route.params.catalog;
  const [categoriesList, setCategoriesList] = useState<CategoriesType[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  /* eslint-disable-next-line @typescript-eslint/unbound-method*/
  const { setModalInternetConnection, isInternet } = useAppContext();

  const [getCatalogsByCategories, { loading: loadingStart, error: errorStart }] = useLazyQuery(
    getFormatByCategories,
    { fetchPolicy: 'network-only' },
  );
  const navigation = useNavigation<StackNavigationProp<CatalogSalesStackParamList>>();
  const handled = () => {
    navigation.goBack();
  };

  const listItem = {
    listName: catalogo,
    startDate: inicio,
    endDate: termino,
    id: id,
  };

  const goCategoriesDetail = (item: CategoriesType) => {
    const newItem = {
      amount: item.amount,
      formats: item.formats,
      nameCategory: item.nameCategory,
      id: item.id,
    };
    navigation.navigate('ProductsCategory', { item: newItem, listItem: listItem });
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

    getCatalogsByCategories({
      variables: {
        getFormatsByCategoriesInput: {
          idCatalogo: id,
        },
      },
      onCompleted: (data: GetFormatByCategoriesData) => {
        const { categorias } = data.getFormatsByCategories.data;
        Categories.forEach((category) => {
          if (categorias) {
            const categorySearch = categorias.find(
              (categoryFinded) =>
                categoryFinded.categoria.toUpperCase() === category.nameCategory.toUpperCase(),
            );
            category.amount = categorySearch?.cantidadFormatos ?? 0;
            category.formats = categorySearch?.formatos ?? [];
          }
        });
        setCategoriesList(Categories);
      },
    });
    /*eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [refreshing]);

  return (
    <>
      <HeaderDetailScreenNavigation title="Catálogos disponibles" goBack={() => handled()} />
      <MainContainer>
        <ListName
          listName={catalogo}
          startDate={dateFormatter(inicio)}
          endDate={dateFormatter(termino)}
        />

        <ListContainer>
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
          {categoriesList.length > 0 && !loadingStart && !errorStart && (
            <FlatList
              data={categoriesList}
              renderItem={({ item }) => {
                return (
                  <CategoryCard params={{ item: item }} onNext={() => goCategoriesDetail(item)} />
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

export default WithApollo(CategoriesCatalogsList);
