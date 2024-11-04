import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';

import {
  Loader,
  OrdersProductContainer,
  OrdersProductContainerFlatList,
  OrdersProductContainerHeader,
  OrdersProductDownloadOc,
  OrdersProductTitleSalesFloor,
  TextNoResults,
} from './styles';
import Error from '@components/ModalApp/ModaApp';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import SearchInput from '@components/SearchInput/SearchInput';
import { ScrollView } from 'react-native-gesture-handler';
import ProductsCard from '@components/productsCard';
import { OrderProductStackParamList } from 'types/orders';
import BottomSheetModal from '@components/BottomSheetModal/BottomSheetModal';
import DownloadOrder from '@components/DownloadOrder/DownloadOrder';
import { ORDENES } from '@libraries/constants';
import { useLazyQuery } from '@apollo/client';
import { ProductStackParamList, TProducts, TProductsDetailsData } from 'types/products';
import WithApollo from '@components/hocs/WithApollo';
import NoResults from '@components/NoResults/NoResults';
import IconEmpty from '@assets/icons/empty-img-not-result.svg';
import getDetailsProducts from '@graphql/queries/getDetailsProducts';
import { useAppContext } from '@context/state';
import { GRAPHQL_BACKEND_URL } from '@env';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { ProductsCardButton } from '@screens/DetailsSalesFloor/styles';
import IconDownArrow from '@assets/icons/icon-down-arrow.svg';
import IconUpArrow from '@assets/icons/icon-up-arrow.svg';
import IconSadFace from '@assets/icons/icon-sad.svg';
import IconCalendar from '@assets/icons/calendar.svg';
import { fileDownloader } from '@utils/fileDownloader';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import { formatDate } from '@utils/formatDate';

type Props = StackScreenProps<OrderProductStackParamList, 'OrdersProducts'>;

const OrdersProduct = ({ route }: Props) => {
  const { auth } = useAppContext();
  const { order } = route.params;
  const navigation = useNavigation<StackNavigationProp<ProductStackParamList>>();
  const [isVisible, setIsVisible] = useState(false);
  const [errorProduct, setErrorProduct] = useState(false);
  const [orderValue, setOrderValue] = useState('');
  const [itemsDetails, setItemsDetails] = useState<number>(0);
  const [loadingDownload, setLoadingDownload] = useState(false);
  const [canRenderSearch, setRenderSearch] = useState(false);
  const [selectedPdo, setSelectedPdo] = useState<string | null>(null);
  const [getDetailsProductsInfo, { loading: loadingDetails }] = useLazyQuery(getDetailsProducts, {
    fetchPolicy: 'no-cache',
  });
  const urlBackend = GRAPHQL_BACKEND_URL;
  const urlDomain = urlBackend?.split('/graphql')[0];
  const urlDownload = `${urlDomain}/purchase/purchase-order-report?oc=${order.oc}&email=${
    auth?.username as string
  }`;
  const downloadFile = async () => {
    setIsVisible(false);
    setLoadingDownload(true);
    await fileDownloader(urlDownload, `OC-${order.oc}.pdf`);
    setLoadingDownload(false);
  };
  const handleOpenBottomSheet = () => {
    setIsVisible(true);
  };
  const results =
    !orderValue || orderValue.length <= 2
      ? order.pedidoDetail
      : order.pedidoDetail.filter((element) => {
          const filteredItems = element.detalle.filter((item) => {
            const productName = item.nombLargo?.toLowerCase() || '';
            return (
              item.codigoBasis.toString().includes(orderValue) ||
              productName.includes(orderValue.toLowerCase())
            );
          });
          return filteredItems.length > 0;
        });

  const handleDetails = (item: TProducts) => {
    setItemsDetails(item.codigoBasis);
    if (item.codigoBasis !== itemsDetails) {
      void getDetailsProductsInfo({
        variables: {
          codigoBasis: parseInt(item.codigoBasis.toString()),
        },
        onCompleted: (data: TProductsDetailsData) => {
          if (data.getProductDetail.product !== null) {
            navigation.navigate('DetailsProducts', {
              product: data.getProductDetail.product,
            });
          } else {
            setErrorProduct(true);
          }
        },
      });
    } else {
      void getDetailsProductsInfo({
        variables: {
          codigoBasis: parseInt(item.codigoBasis.toString()),
        },
        onCompleted: (data: TProductsDetailsData) => {
          if (data.getProductDetail.product !== null) {
            navigation.navigate('DetailsProducts', {
              product: data.getProductDetail.product,
            });
          } else {
            setErrorProduct(true);
          }
        },
      });
    }
  };

  return (
    <>
      {loadingDownload ? (
        <LoaderFullScreen />
      ) : (
        <>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          {isVisible && (
            <BottomSheetModal isVisible={isVisible} setIsVisible={setIsVisible}>
              {loadingDownload && (
                <View
                  style={{
                    position: 'absolute',
                    left: '45%',
                    bottom: '45%',
                    zIndex: 9,
                    elevation: 9,
                  }}
                >
                  <Loader />
                </View>
              )}
              <DownloadOrder handlePress={() => downloadFile()} orders={order} />
            </BottomSheetModal>
          )}

          <HeaderDetailScreenNavigation title="Productos" goBack={() => navigation.goBack()} />
          <TouchableOpacity
            onPress={handleOpenBottomSheet}
            style={{ position: 'absolute', right: 20, top: 35 }}
          >
            <OrdersProductDownloadOc>Descargar OC</OrdersProductDownloadOc>
          </TouchableOpacity>

          <OrdersProductContainer>
            <OrdersProductContainerHeader>
              <View style={{ marginTop: 5 }}>
                <OrdersProductTitleSalesFloor style={{ color: '#81878E' }}>
                  {order.clteNombre}
                </OrdersProductTitleSalesFloor>
                <OrdersProductTitleSalesFloor style={{ color: '#354455' }} textImportant>
                  Orden: {order.oc}
                </OrdersProductTitleSalesFloor>
              </View>
            </OrdersProductContainerHeader>
            <ScrollView showsVerticalScrollIndicator={false}>
              {selectedPdo !== null && canRenderSearch && (
                <SearchInput
                  placeholder="Búsqueda de productos..."
                  value={orderValue}
                  onSearch={(text) => {
                    setOrderValue(text);
                  }}
                />
              )}
              <OrdersProductContainerFlatList>
                {!loadingDetails && results.length === 0 && (
                  <NoResults icon={<IconEmpty />}>
                    <TextNoResults textImportant>Búsqueda sin coincidencias</TextNoResults>
                    <TextNoResults> Inténtalo nuevamente</TextNoResults>
                  </NoResults>
                )}
              </OrdersProductContainerFlatList>
              {results.map((element) => {
                return (
                  <View key={element.nroPdo}>
                    <View
                      style={{
                        marginTop: 8,
                        paddingRight: 8,
                        backgroundColor: '#F7F9FC',
                        paddingVertical: 8,
                        borderWidth: 1,
                        borderColor: '#E8EBF7',
                        borderRadius: 8,
                        elevation: 2,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <OrdersProductTitleSalesFloor
                          textImportant
                          style={{ fontSize: 16, color: '#354455', lineHeight: 18 }}
                        >
                          Pedido: {element.nroPdo}
                        </OrdersProductTitleSalesFloor>
                        <OrdersProductTitleSalesFloor
                          textImportant
                          style={{
                            fontSize: 12,
                            color: '#1B4BC7',
                            lineHeight: 18,
                            backgroundColor: '#E9EDF8',
                            borderColor: '#1B4BC7',
                            borderWidth: 1,
                            paddingVertical: 3,
                            borderRadius: 5,
                          }}
                        >
                          Productos: {element.detalle.length}
                        </OrdersProductTitleSalesFloor>
                        <ProductsCardButton
                          onPress={() => {
                            setRenderSearch(element.detalle.length > 9);
                            setSelectedPdo(selectedPdo === element.nroPdo ? null : element.nroPdo); // Al hacer clic en el botón, cambia el nroPdo seleccionado
                          }}
                          style={{ backgroundColor: 'transparent', borderColor: 'white' }}
                        >
                          {selectedPdo === element.nroPdo ? <IconUpArrow /> : <IconDownArrow />}
                        </ProductsCardButton>
                      </View>
                      <View>
                        <OrdersProductTitleSalesFloor
                          style={{
                            fontSize: 14,
                            color: '#354455',
                            lineHeight: 18,
                            paddingVertical: 8,
                          }}
                        >
                          {element.edoPdo}
                        </OrdersProductTitleSalesFloor>
                        {order.pedidoDetail?.[0]?.fecPdo ? (
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              paddingTop: 6,
                              paddingLeft: 15,
                            }}
                          >
                            <IconCalendar />
                            <OrdersProductTitleSalesFloor
                              textImportant
                              style={{
                                fontSize: 14,
                                color: '#81878E',
                                paddingLeft: 0,
                                paddingHorizontal: 0,
                                marginLeft: 6,
                                marginRight: 6,
                              }}
                            >
                              Fecha de emision:
                            </OrdersProductTitleSalesFloor>
                            <OrdersProductTitleSalesFloor
                              style={{ fontSize: 14, color: '#81878E', paddingHorizontal: 0 }}
                            >
                              {formatDate(order.pedidoDetail[0].fecPdo)}
                            </OrdersProductTitleSalesFloor>
                          </View>
                        ) : null}
                      </View>
                    </View>

                    <View>
                      {selectedPdo === element.nroPdo &&
                        element.detalle.map((item, index) => {
                          return (
                            <ProductsCard
                              products={item}
                              handleDetails={() => handleDetails(item)}
                              viewType={ORDENES}
                              border={index}
                              key={index}
                            />
                          );
                        })}
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </OrdersProductContainer>
          <BottomSheetModal isVisible={errorProduct} setIsVisible={() => setErrorProduct(false)}>
            <Error
              icon={<IconSadFace />}
              title="El producto no existe"
              description="SKU no pertenece a Embonor"
              textButton="Cerrar"
              onPress={() => setErrorProduct(false)}
            />
          </BottomSheetModal>
        </>
      )}
    </>
  );
};

export default WithApollo(OrdersProduct);
