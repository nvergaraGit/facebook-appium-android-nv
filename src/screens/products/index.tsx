/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect, useRef } from 'react';
import { ConteinerResult, ProductsContainer, TextNoResults, TextTitle } from './styles';
import ProductsCard from '@components/productsCard';
import { useLazyQuery } from '@apollo/client';
import WithApollo from '@components/hocs/WithApollo';
import getProducts from '@graphql/queries/getProducts';
import EmptyImage from '@assets/icons/empty-img-not-result.svg';
import { ActivityIndicator, View, RefreshControl } from 'react-native';
import { FlatList } from 'react-native';
import NoResults from '@components/NoResults/NoResults';
import { useNavigation } from '@react-navigation/native';
import SearchInput from '@components/SearchInput/SearchInput';
import getDetailsProducts from '@graphql/queries/getDetailsProducts';
import {
  ProductStackParamList,
  TDetailsProducts,
  TProducts,
  TProductsData,
  TProductsDetailsData,
} from 'types/products';
import Header from '@components/Header/Header';
import { StackNavigationProp } from '@react-navigation/stack';

import { PRODUCTOS } from '@libraries/constants';
import { useAppContext } from '@context/state';
import FooterList from '@shared/FooterListLoader';
import { NoResultScroll } from '@styles/sharedStyles';

const Products = () => {
  const [products, setProducts] = useState<string>('');
  const [data, setData] = useState<TProducts[]>([]);
  const [showMsgResult, setShowMsgResult] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const flatListRef = useRef<FlatList<TProducts>>(null);
  const [loadingStart, setLoadingStart] = useState<boolean>(false);
  const [items, setItems] = useState<number>(0);
  const [productsDetails, setProductsDetails] = useState<TDetailsProducts | null>(null);
  const [itemsDetails, setItemsDetails] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  /* eslint-disable-next-line @typescript-eslint/unbound-method*/
  const { setModalInternetConnection, isInternet } = useAppContext();
  const navigation = useNavigation<StackNavigationProp<ProductStackParamList>>();

  const [getproducts, { loading }] = useLazyQuery(getProducts, {
    fetchPolicy: 'network-only',
  });
  const [getDetailsProductsInfo, { loading: loadingDetails }] = useLazyQuery(getDetailsProducts, {
    fetchPolicy: 'no-cache',
  });

  const handleChange = (text: string) => {
    if (text.length > 3) {
      setProducts(text);
      setShowMsgResult(true);
    } else {
      setProducts(text);
      setShowMsgResult(false);
    }
  };
  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }
    if (products.length === 0) {
      getproducts({
        variables: {
          pagination: {
            page: 1,
            size: 20,
          },
          filter: '',
        },
        onCompleted: (data: TProductsData) => {
          setData(data.products.products);
          setTotalPages(data.products.totalPages);
          setCurrentPage(1);
          setItems(0);
          if (flatListRef.current) {
            flatListRef.current.scrollToOffset({ offset: 0, animated: true });
          }
        },
      });
    }
    if (products.length > 2) {
      getproducts({
        variables: {
          pagination: {
            page: 1,
            size: 20,
          },
          filter: products,
        },
        onCompleted: (data: TProductsData) => {
          setShowMsgResult(true);
          setItems(data.products.items);
          setData(data.products.products);
          setTotalPages(data.products.totalPages);
          setCurrentPage(1);
          if (flatListRef.current) {
            flatListRef.current.scrollToOffset({ offset: 0, animated: true });
          }
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
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
  const loadMoreData = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    if (!loading && currentPage < totalPages) {
      getproducts({
        variables: {
          pagination: {
            page: nextPage,
            size: 20,
          },
          filter: products.length ? products : '',
        },
        onCompleted: (data: TProductsData) => {
          setData((prevData) => [...prevData, ...data.products.products]);
          setTotalPages(data.products.totalPages);
          setLoadingStart(false);
        },
      });
    }
  };
  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }
    setProducts('');
    getproducts({
      variables: {
        pagination: {
          page: 1,
          size: 20,
        },
        filter: '',
      },
      onCompleted: (data: TProductsData) => {
        setData(data.products.products);
        setTotalPages(data.products.totalPages);
        setLoadingStart(false);
        setCurrentPage(1);
      },
    });
    setLoadingStart(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshing]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

  return (
    <>
      <ProductsContainer>
        <Header title="Productos" />
        <View style={{ marginHorizontal: 20 }}>
          <SearchInput
            placeholder="Búsqueda de productos..."
            value={products}
            onSearch={(text) => handleChange(text)}
            showFilter={true}
          />
        </View>
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

        {data.length === 0 && !loadingStart && (
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
        {data.length > 0 && !loadingStart && (
          <>
            <ConteinerResult>
              {!showMsgResult && <TextTitle>Listado de productos</TextTitle>}
              {showMsgResult && <TextTitle>Resultados de búsqueda: {items} productos</TextTitle>}
              {loadingDetails && (
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
                ref={flatListRef}
                style={{ marginHorizontal: 4 }}
                data={data}
                renderItem={({ item, index }) => (
                  <ProductsCard
                    products={item}
                    handleDetails={() => handleDetails(item)}
                    viewType={PRODUCTOS}
                    border={index}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.5}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              />
              {loading && <FooterList loader={loading} />}
            </ConteinerResult>
          </>
        )}
      </ProductsContainer>
    </>
  );
};
export default WithApollo(Products);
