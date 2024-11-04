import React from 'react';
import ProductsScreen from '@screens/products';
import { TDetailsProducts } from 'types/products';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsProductsScreen from '@components/DetailsProducts/DetailsProducts';

type ProductStackParamList = {
  ProductsMain: undefined;
  DetailsProducts: { product: TDetailsProducts };
};

const ProductStack = createStackNavigator<ProductStackParamList>();

const ProductNavigator = () => {
  return (
    <ProductStack.Navigator initialRouteName="ProductsMain">
      <ProductStack.Screen
        name="ProductsMain"
        component={ProductsScreen}
        options={{ headerShown: false }}
      />
      <ProductStack.Screen
        name="DetailsProducts"
        component={DetailsProductsScreen}
        options={{ headerShown: false }}
      />
    </ProductStack.Navigator>
  );
};

export default ProductNavigator;
