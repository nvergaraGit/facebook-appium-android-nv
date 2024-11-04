/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import WithApollo from '@components/hocs/WithApollo';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { useLazyQuery } from '@apollo/client';
import IconBackArrow from '@assets/icons/back-arrow.svg';
import {
  Container,
  ContainerList,
  ContainerLoader,
  DetailsSalesFloorButtonBack,
  DetailsSalesFloorContainerBackButton,
  DetailsSalesFloorHeaderTitle,
  Loader,
  LoaderView,
} from './Styles';
import { FlatList, StatusBar } from 'react-native';
import OrderCard from '@components/OrdersCard/OrderCard';
import getPurchaseOrdersByClient from '@graphql/queries/getPurchaseOrdersByClient';
import moment from 'moment';
import { TSalesFloorsOrderData } from 'types/salesFloors';
import { OrderProductStackParamList, TOrders } from 'types/orders';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { useNavigation } from '@react-navigation/native';
import { HomeStack } from '@navigation/homeNavigator';

type Props = StackScreenProps<
  SalesFloorsDetailsStack | HomeStack,
  'OrdersSalesFloor',
  'OrdersProducts'
>;
const OrdersSalesFloor = ({ route }: Props) => {
  const navigation = useNavigation<StackNavigationProp<OrderProductStackParamList>>();
  const { salesFloor } = route.params;
  const [dataOrders, setDataOrders] = useState<TOrders[]>([]);
  const [getPurchaseOrdersData, { loading }] = useLazyQuery(getPurchaseOrdersByClient, {
    fetchPolicy: 'network-only',
    onCompleted: (result: TSalesFloorsOrderData) => {
      setDataOrders(result.getPurchaseOrdersByClient.purchaseOrder);
    },
  });
  const showPurshaseOrder = (item: TOrders) => {
    navigation.navigate('OrdersProducts', {
      order: item,
    });
  };
  useEffect(() => {
    getPurchaseOrdersData({
      variables: {
        getPurchaseOrderInput: {
          codCLient: salesFloor.codClient.toString(),
          date: moment().format('YYYYMMDD'),
        },
      },
    });
  }, []);
  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <DetailsSalesFloorContainerBackButton>
        <DetailsSalesFloorButtonBack onPress={() => navigation.goBack()}>
          <IconBackArrow />
        </DetailsSalesFloorButtonBack>
        <DetailsSalesFloorHeaderTitle>Órdenes de compra de hoy</DetailsSalesFloorHeaderTitle>
      </DetailsSalesFloorContainerBackButton>
      {loading ? (
        <ContainerLoader>
          <LoaderView>
            <Loader />
          </LoaderView>
        </ContainerLoader>
      ) : (
        <ContainerList>
          <FlatList
            data={dataOrders}
            renderItem={({ item }) => (
              <OrderCard
                orders={item}
                getItemPurshaseOrder={() => showPurshaseOrder(item)}
                showNSalesFloor={false}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ContainerList>
      )}
    </Container>
  );
};

export default WithApollo(OrdersSalesFloor);
