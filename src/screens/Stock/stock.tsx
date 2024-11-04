/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import { BackHandler, FlatList, RefreshControl } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextTitle } from '@screens/orders/styles';
import Header from '@components/Header/Header';
import { useLazyQuery, useQuery } from '@apollo/client';
import EmptyImage from '@assets/icons/empty-img-not-result.svg';
import OrdesNoAvailable from '@assets/icons/icon-sad.svg';
import BottomSheetModal from '@components/BottomSheetModal/BottomSheetModal';
import DetailsFilter from '@components/DetailsFilter/DetailsFilter';
import Error from '@components/ModalApp/ModaApp';
import Filters from '@components/Filters/Filters';
import NoResults from '@components/NoResults/NoResults';
import SearchInput from '@components/SearchInput/SearchInput';
import WithApollo from '@components/hocs/WithApollo';
import ProductsCard from '@components/productsCard';
import { useAppContext } from '@context/state';
import getDetailStockBySku from '@graphql/queries/getDetailStockBySku';
import getDetailStockProduct from '@graphql/queries/getDetailStockProduct';
import getDetailsProducts from '@graphql/queries/getDetailsProducts';
import getStockFilterData from '@graphql/queries/getStockFiltersData';
import { STOCK } from '@libraries/constants';
import { HomeStack } from '@navigation/homeNavigator';
import {
  ProductStackParamList,
  TDetailSku,
  TDetailsProducts,
  TProducts,
  TProductsDetailsData,
  TStock,
} from 'types/products';
import { TOption, TSelect } from 'types/select';
import { TDetailStockProduct, TStockFiltersData } from 'types/stock';
import { Container, ContainerList, ContainerNoResult, FooterTitle, TextNoResults } from './styles';
import FooterList from '@shared/FooterListLoader';
import { NoResultScroll } from '@styles/sharedStyles';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import LoaderChangeScreen from '@shared/LoaderChangeScreen/LoaderChangeScreen';

const Stock = () => {
  const navigation = useNavigation<StackNavigationProp<ProductStackParamList>>();
  const navigationHome = useNavigation<StackNavigationProp<HomeStack>>();
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [optionsFilter, setOptionsFilter] = useState<TOption[]>([]);
  const [showMsgResult, setShowMsgResult] = useState<boolean>(false);
  const [items, setItems] = useState<number>(0);
  const [titleFilter, setTitleFilter] = useState('');
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [selectedLabel, setSelectedLabels] = useState<{ [key: string]: string }>({});
  const [loadingStart, setLoadingStart] = useState<boolean>(false);
  const [dataStock, setDataStock] = useState<TProducts[]>([]);
  const {
    plant,
    stock,
    princiaplPlant,
    setStock,
    setPlant,
    setPrincipalPlant,
    setModalInternetConnection,
    isInternet,
  } = useAppContext();
  const [productsDetails, setProductsDetails] = useState<TDetailsProducts | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [itemsDetails, setItemsDetails] = useState<number>(0);
  const [stockInfo, setStockInfo] = useState<TStock[]>([]);
  const [showErrorDetail, setShowErrorDetail] = useState<boolean>(false);
  const [products, setProducts] = useState<string>('');
  const [selectors, setSelectors] = useState<TSelect[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [getProducts, { loading }] = useLazyQuery(getDetailStockProduct, {
    onError: () => {
      setLoadingStart(false);
    },
  });
  const { loading: loadingFiltersData } = useQuery(getStockFilterData, {
    onCompleted: (data: TStockFiltersData) => {
      setSelectors(data.getStockFiltersData.filtersList);
    },
  });
  const [getDetailsProductsInfo, { loading: loadingDetails }] = useLazyQuery(getDetailsProducts, {
    fetchPolicy: 'no-cache',

    onError: () => {
      setShowErrorDetail(true);
      setProductsDetails(null);
    },
  });
  const [detailStockBySku, { loading: loadingDetailSku }] = useLazyQuery(getDetailStockBySku, {
    fetchPolicy: 'no-cache',
  });

  const handleDetails = (item: TProducts) => {
    if (item.codigoBasis !== itemsDetails) {
      getDetailsProductsInfo({
        variables: {
          codigoBasis: parseInt(item.codigoBasis.toString()),
        },
        onCompleted: (dataProduct: TProductsDetailsData) => {
          setProductsDetails(dataProduct.getProductDetail.product);
          if (!dataProduct.getProductDetail.product) {
            setShowErrorDetail(true);
            return;
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
          detailStockBySku({
            variables: {
              getDetailStockBySkuInput: {
                sku: item.codigoBasis,
              },
            },
            onCompleted: (data: TDetailSku) => {
              setStockInfo(data.getDetailStockBySku.data);
              setItemsDetails(item.codigoBasis);
              navigation.navigate('DetailsProducts', {
                product: dataProduct.getProductDetail.product,
                showStock: true,
                stock: data.getDetailStockBySku.data,
              });
            },
          });
        },
      });
    } else {
      if (productsDetails !== null) {
        navigation.navigate('DetailsProducts', {
          product: productsDetails,
          showStock: true,
          stock: stockInfo,
        });
      }
    }
  };

  const loadMoreData = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    if (!loading && currentPage < totalPages) {
      getProducts({
        variables: {
          getDetailStockProductInput: {
            pagination: {
              page: nextPage,
              size: 20,
            },
            branch: plant,
            stockType: 'ALL',
            filter: products,
          },
        },
        onCompleted: (data: TDetailStockProduct) => {
          setDataStock((prevData) => [...prevData, ...data.getDetailStockProduct.data]);
          setTotalPages(data.getDetailStockProduct?.pageInfo?.totalPages ?? 0);
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
    getProducts({
      variables: {
        getDetailStockProductInput: {
          pagination: {
            size: 20,
            page: 1,
          },
          branch: plant,
          stockType: 'ALL',
        },
      },
      onCompleted: (data: TDetailStockProduct) => {
        setDataStock(data.getDetailStockProduct.data);
        setLoadingStart(false);
        setTotalPages(data.getDetailStockProduct?.pageInfo?.totalPages ?? 0);
        setCurrentPage(1);
        setShowMsgResult(false);
      },
    });
    setLoadingStart(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshing]);
  const handleChange = (text: string) => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }
    if (text.length > 2) {
      setProducts(text);
      getProducts({
        variables: {
          getDetailStockProductInput: {
            pagination: {
              size: 20,
              page: 1,
            },
            branch: selectedValues['Sucursal'] ? selectedValues['Sucursal'] : plant,
            stockType: selectedValues['Cant. Stock'] ? selectedValues['Cant. Stock'] : stock,
            filter: text,
          },
        },
        onCompleted: (data: TDetailStockProduct) => {
          setShowMsgResult(true);
          setDataStock(data.getDetailStockProduct.data);
          setLoadingStart(false);
          setTotalPages(data.getDetailStockProduct?.pageInfo?.totalPages ?? 0);
          setCurrentPage(1);
          setItems(data.getDetailStockProduct.pageInfo.totalRecords);
        },
      });
    } else {
      setProducts(text);
      setShowMsgResult(false);
      if (text.length === 0) {
        getProducts({
          variables: {
            getDetailStockProductInput: {
              pagination: {
                size: 20,
                page: 1,
              },
              branch: selectedValues['Sucursal'] ? selectedValues['Sucursal'] : plant,
              stockType: selectedValues['Cant. Stock'] ? selectedValues['Cant. Stock'] : stock,
              filter: '',
            },
          },
          onCompleted: (data: TDetailStockProduct) => {
            setDataStock(data.getDetailStockProduct.data);
            setLoadingStart(false);
            setTotalPages(data.getDetailStockProduct?.pageInfo?.totalPages ?? 0);
            setCurrentPage(1);
            setItems(0);
          },
        });
      }
    }
  };

  const showFilter = () => {
    setIsVisible(true);
  };
  const getOptions = (select: TSelect, options: TOption[]) => {
    setTitleFilter(select.placeholder);
    setShowOptions(true);
    setOptionsFilter(options);
  };

  const handleSelectChange = (selectId: string, newValue: string, newLabel: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [selectId]: newValue,
    }));
    setSelectedLabels((prevLabels) => ({
      ...prevLabels,
      [selectId]: newLabel,
    }));
  };

  const filterAdvanced = () => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }
    setLoadingStart(true);
    getProducts({
      variables: {
        getDetailStockProductInput: {
          pagination: {
            size: 20,
            page: 1,
          },
          branch: selectedValues['Sucursal'] ? selectedValues['Sucursal'] : plant,
          stockType: selectedValues['Cant. Stock'] ? selectedValues['Cant. Stock'] : stock,
          filter: products,
        },
      },
      onCompleted: (data: TDetailStockProduct) => {
        setDataStock(data.getDetailStockProduct.data);
        setLoadingStart(false);
        setTotalPages(data.getDetailStockProduct?.pageInfo?.totalPages ?? 0);
        setCurrentPage(1);
        setIsVisible(false);
        setStock(selectedValues['Cant. Stock'] ? selectedValues['Cant. Stock'] : stock);
        setPlant(selectedValues['Sucursal'] ? selectedValues['Sucursal'] : plant);
        setPrincipalPlant(selectedLabel['Sucursal'] ? selectedLabel['Sucursal'] : princiaplPlant);
        setShowMsgResult(false);
      },
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (showOptions) {
          setShowOptions(false);
        } else {
          navigation.goBack();
        }
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [showOptions, navigation]),
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 100);
  }, []);

  const onFilterRefresh = () => {
    setSelectedValues({});
    setSelectedLabels({});
  };

  return (
    <>
      {!showOptions && (
        <>
          <Header
            title="Stock Embonor"
            footer={<FooterTitle>Sucursal: {princiaplPlant}</FooterTitle>}
            hasFooter
          />

          <Container>
            <SearchInput
              placeholder="Búsqueda de productos..."
              value={products}
              onSearch={(text) => handleChange(text)}
              showFilter
              onFilter={showFilter}
            />
            <Filters
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              selectors={selectors}
              getOptions={getOptions}
              selectedLabel={selectedLabel}
              onPressFilter={filterAdvanced}
              refreshFilter={onFilterRefresh}
              showRefreshFilter
            />
            {loadingStart ? (
              <LoaderFullScreen />
            ) : (
              dataStock !== null && (
                <>
                  {dataStock.length === 0 && !loadingStart && (
                    <NoResultScroll
                      refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                      }
                    >
                      <ContainerNoResult>
                        <NoResults icon={<EmptyImage />}>
                          <TextNoResults textImportant>Búsqueda sin coincidencias</TextNoResults>
                          <TextNoResults> Inténtalo nuevamente</TextNoResults>
                        </NoResults>
                      </ContainerNoResult>
                    </NoResultScroll>
                  )}
                  {dataStock.length > 0 && !loadingStart && !loadingFiltersData && (
                    <ContainerList>
                      {!showMsgResult && <TextTitle>Listado de productos</TextTitle>}
                      {showMsgResult && (
                        <TextTitle>Resultados de búsqueda: {items} productos</TextTitle>
                      )}
                      {(loadingDetails || loadingDetailSku) && isInternet ? (
                        <LoaderChangeScreen />
                      ) : null}
                      <FlatList
                        data={dataStock}
                        renderItem={({ item, index }) => (
                          <ProductsCard
                            isLast={index === dataStock.length - 1}
                            products={item}
                            handleDetails={() => handleDetails(item)}
                            viewType={STOCK}
                            border={index}
                            showEssentialProduct={item.isEssential}
                          />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReached={loadMoreData}
                        onEndReachedThreshold={0.5}
                        refreshControl={
                          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                      />
                      {loading && !loadingStart && <FooterList loader={loading} />}
                    </ContainerList>
                  )}
                </>
              )
            )}
          </Container>
        </>
      )}
      {showOptions && (
        <DetailsFilter
          placeHolder={titleFilter}
          options={optionsFilter}
          goBack={() => setShowOptions(false)}
          selectedValue={
            selectedValues[titleFilter]
              ? selectedValues[titleFilter]
              : optionsFilter.length
              ? optionsFilter[0].value
              : ''
          }
          onValueChange={(newValue, label) => handleSelectChange(titleFilter, newValue, label)}
        />
      )}
      <BottomSheetModal isVisible={showErrorDetail} setIsVisible={() => setShowErrorDetail(false)}>
        <Error
          icon={<OrdesNoAvailable />}
          title="Sin resultados"
          description="No tenemos informacion sobre el detalle de este producto"
          textButton="Cerrar"
          onPress={() => setShowErrorDetail(false)}
        />
      </BottomSheetModal>
      <BottomSheetModal
        isVisible={dataStock === null}
        setIsVisible={() => navigationHome.navigate('Home')}
      >
        <Error
          icon={<OrdesNoAvailable />}
          title="No existe información"
          description="No tiene stock disponible para esta sucursal"
          textButton="Cerrar"
          onPress={() => navigationHome.navigate('Home')}
        />
      </BottomSheetModal>
    </>
  );
};

export default WithApollo(Stock);
