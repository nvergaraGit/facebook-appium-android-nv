import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AvailableCatalog from '@screens/AvailalbleCatalog/AvailableCatalog';
import DetailsPacking from '@screens/DetailsPacking';
import ProductsList from '@screens/ProductsList';
import { CatalogParamList } from 'types/catalogs';
import CatalogsScreen from '@screens/catalogs';

import DetailsProducts from '@components/DetailsProducts/DetailsProducts';
const CatalogStack = createStackNavigator<CatalogParamList>();

const CatalogsSalesNavigator = () => {
  return (
    <CatalogStack.Navigator initialRouteName="Catalogs">
      <CatalogStack.Screen
        name="Catalogs"
        component={CatalogsScreen}
        options={{ headerShown: false }}
      />
      <CatalogStack.Screen
        name="DetailsCatalogue"
        component={AvailableCatalog}
        options={{ headerShown: false }}
      />
      <CatalogStack.Screen
        name="DetailsPacking"
        component={DetailsPacking}
        options={{ headerShown: false }}
      />
      <CatalogStack.Screen
        name="ProductsList"
        component={ProductsList}
        options={{ headerShown: false }}
      />
      <CatalogStack.Screen
        name="DetailsProducts"
        component={DetailsProducts}
        options={{ headerShown: false }}
      />
    </CatalogStack.Navigator>
  );
};

export default CatalogsSalesNavigator;
