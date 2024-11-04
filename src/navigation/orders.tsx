import React from 'react';
import OrdersScreen from '@screens/orders/orders';
import { ProductStackParamList, TProducts } from 'types/products';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersProductScreen from '@screens/OrdersProduct/OrdersProduct';
import DetailsProductsScreen from '@components/DetailsProducts/DetailsProducts';
import { TOrders } from 'types/orders';
type OrderStackParamList = {
  Orders: undefined;
  OrdersProducts: { dataProducts: TProducts[]; order: TOrders };
};

const OrderStack = createStackNavigator<OrderStackParamList>();
const ProductStack = createStackNavigator<ProductStackParamList>();
const OrderNavigator = () => {
  return (
    <OrderStack.Navigator initialRouteName="Orders">
      <OrderStack.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false }} />
      <OrderStack.Screen
        name="OrdersProducts"
        component={OrdersProductScreen}
        options={{ headerShown: false }}
      />
      <ProductStack.Screen
        name="DetailsProducts"
        component={DetailsProductsScreen}
        options={{ headerShown: false }}
      />
    </OrderStack.Navigator>
  );
};

export default OrderNavigator;
