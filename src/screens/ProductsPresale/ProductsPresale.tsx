import { useNavigation } from '@react-navigation/native';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import DetailsPresale from '@components/DetailsPresale/DetailsPresale';
import { IPresaleDetail, TPresalesDetail, TPresalesDetailData } from 'types/orderPresale';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { useLazyQuery } from '@apollo/client';
import getPresalesDetails from '@graphql/queries/getPresalesDetails';
import moment from 'moment';
import SearchInput from '@components/SearchInput/SearchInput';
import ProductsCard from '@components/productsCard';
import { TDetailsProducts, TProductsDetailsData } from 'types/products';
import { ORDENES } from '@libraries/constants';
import getDetailsProducts from '@graphql/queries/getDetailsProducts';
import { ConteinerResult, TextTitle } from '@screens/products/styles';
import FooterAbsolute from '@shared/FooterAbsolute/FooterAbsolute';
import WithApollo from '@components/hocs/WithApollo';
import { Container } from '@screens/orders/styles';
type Props = StackScreenProps<SalesFloorsDetailsStack, 'ProductsPresale'>;

const ProductsPresale = ({ route }: Props) => {
  const { oc, salesFloor } = route.params;
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const [detailsPresale, setDetailsPresale] = useState<TPresalesDetail | null>(null);
  const [products, setProducts] = useState('');
  const [dataProduct, setDataProduct] = useState<IPresaleDetail[]>([]);
  const [itemsDetails, setItemsDetails] = useState<number>(0);
  const [productsDetails, setProductsDetails] = useState<TDetailsProducts | undefined>(undefined);
  const [queryPresalesDetail, { loading }] = useLazyQuery(getPresalesDetails, {
    onCompleted: (result: TPresalesDetailData) => {
      setDetailsPresale(result.getPresalesDetails);
      setDataProduct(result.getPresalesDetails.detalle);
    },
  });
  const [getDetailsProductsInfo, { loading: loadingDetails }] = useLazyQuery(getDetailsProducts, {
    fetchPolicy: 'no-cache',
  });
  useEffect(() => {
    void queryPresalesDetail({
      variables: {
        getPresalesInput: {
          oc: oc,
          date: moment().format('YYYYMMDD'),
          codClient: salesFloor.codClient.toString(),
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const results =
    !products || products.length <= 2
      ? dataProduct
      : dataProduct.filter(
          (item: IPresaleDetail) =>
            (item.codigoBasis && item.codigoBasis.toString().includes(products)) ||
            (item.nombLargo && item.nombLargo.toLowerCase().includes(products.toLowerCase())),
        );
  const handleDetails = (item: IPresaleDetail) => {
    setItemsDetails(item.codigoBasis);
    if (item.codigoBasis !== itemsDetails) {
      void getDetailsProductsInfo({
        variables: {
          codigoBasis: parseInt(item.codigoBasis.toString()),
        },
        onCompleted: (data: TProductsDetailsData) => {
          setProductsDetails(data.getProductDetail.product);
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
      <HeaderDetailScreenNavigation
        title="Detalle de OCs Facturadas"
        goBack={() => navigation.goBack()}
      />
      <Container>
        {loading || loadingDetails ? (
          <FooterAbsolute loader={loading} />
        ) : (
          <>
            {detailsPresale && <DetailsPresale presalesDetail={detailsPresale} />}
            <View style={{ marginHorizontal: 20 }}>
              <SearchInput
                placeholder="Búsqueda de productos..."
                value={products}
                onSearch={(text) => {
                  setProducts(text);
                }}
              />
            </View>
            <ConteinerResult>
              {loadingDetails && <FooterAbsolute loader={loadingDetails} />}
              <TextTitle>Listado de productos</TextTitle>
              <FlatList
                data={results}
                renderItem={({ item, index }) => (
                  <ProductsCard
                    products={item}
                    handleDetails={() => handleDetails(item)}
                    viewType={ORDENES}
                    border={index}
                  />
                )}
              />
            </ConteinerResult>
          </>
        )}
      </Container>
    </>
  );
};

export default WithApollo(ProductsPresale);
