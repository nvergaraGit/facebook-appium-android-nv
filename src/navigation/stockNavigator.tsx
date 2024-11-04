import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StockScreen from '@screens/Stock/stock';
import { StockStackParamList } from 'types/stock';
import { ProductStackParamList } from 'types/products';
import DetailsProductsScreen from '@components/DetailsProducts/DetailsProducts';
const StockStack = createStackNavigator<StockStackParamList>();
const ProductStack = createStackNavigator<ProductStackParamList>();
const StockNavigator = () => {
  return (
    <StockStack.Navigator initialRouteName="Stock">
      <StockStack.Screen name="Stock" component={StockScreen} options={{ headerShown: false }} />
      <ProductStack.Screen
        name="DetailsProducts"
        component={DetailsProductsScreen}
        options={{ headerShown: false }}
      />
    </StockStack.Navigator>
  );
};

export default StockNavigator;
