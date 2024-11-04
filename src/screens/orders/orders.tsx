/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
import Header from '@components/Header/Header';
import React, { useState, useEffect } from 'react';
import {
  Container,
  ContainerLoader,
  ContainerOrders,
  Loader,
  LoaderView,
  TextNoResults,
} from './styles';
import moment from 'moment';
import SearchInput from '@components/SearchInput/SearchInput';
import IconEmpty from '@assets/icons/user.svg';
import OrderCard from '@components/OrdersCard/OrderCard';
import { OrderProductStackParamList, TOrders, TOrdersData } from 'types/orders';
import NoResults from '@components/NoResults/NoResults';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { View, RefreshControl, FlatList } from 'react-native';
import getPurchaseOrders from '@graphql/queries/getPurchaseOrders';
import { useLazyQuery } from '@apollo/client';
import WithApollo from '@components/hocs/WithApollo';
import { useAppContext } from '@context/state';

const Orders = () => {
  const navigation = useNavigation<StackNavigationProp<OrderProductStackParamList>>();
  const [orderValue, setOrderValue] = useState('');
  const [dataOrders, setDataOrders] = useState<TOrders[]>([]);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setModalInternetConnection, isInternet } = useAppContext();
  const [getPurchaseOrdersData, { loading: loadOrders, refetch }] = useLazyQuery(
    getPurchaseOrders,
    {
      onCompleted: (data: TOrdersData) => {
        setDataOrders(data.getPurchaseOrders.purchaseOrder);
      },
    },
  );

  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }
    setOrderValue('');

    const currentDate = moment().format('YYYYMMDD');

    getPurchaseOrdersData({
      variables: {
        getPurchaseOrderInput: {
          date: currentDate,
        },
      },
    });
  }, []);

  const results =
    !orderValue || orderValue.length <= 2
      ? dataOrders
      : dataOrders.filter(
          (item: TOrders) =>
            item.clte?.toString().includes(orderValue) ||
            item.oc?.toString().includes(orderValue) ||
            item.clteNombre.toLowerCase().includes(orderValue.toLowerCase()),
        );

  const showPurshaseOrder = (item: TOrders) => {
    navigation.navigate('OrdersProducts', {
      order: item,
    });
  };

  const onRefresh = React.useCallback(() => {
    refetch();
  }, []);

  return (
    <>
      <Header title="Órdenes de compra" />
      <Container>
        <View style={{ marginHorizontal: 20 }}>
          <SearchInput
            placeholder="Ingresa el código de la orden o sala"
            value={orderValue}
            onSearch={(text) => {
              setOrderValue(text);
            }}
          />
        </View>
        {loadOrders && isInternet ? (
          <ContainerLoader>
            <LoaderView>
              <Loader />
            </LoaderView>
          </ContainerLoader>
        ) : (
          <ContainerOrders>
            {results.length === 0 && !loadOrders && (
              <NoResults icon={<IconEmpty />}>
                <TextNoResults textImportant>Búsqueda sin coincidencias</TextNoResults>
                <TextNoResults> Inténtalo nuevamente</TextNoResults>
              </NoResults>
            )}
            {results.length > 0 && !loadOrders && (
              <>
                <FlatList
                  data={results}
                  renderItem={({ item }) => (
                    <OrderCard orders={item} getItemPurshaseOrder={() => showPurshaseOrder(item)} />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  refreshControl={<RefreshControl refreshing={loadOrders} onRefresh={onRefresh} />}
                />
              </>
            )}
          </ContainerOrders>
        )}
      </Container>
    </>
  );
};

export default WithApollo(Orders);
