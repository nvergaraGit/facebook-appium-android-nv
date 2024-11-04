import React from 'react';
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import CatalogsSalesListContainer from '@components/CatalogsSalesAvailable';
import CatagoriesCatalogs from '@components/CatalogsListCategories';
import ProductsCatagoriesCatalogs from '@components/CatalogsProductsCategory';
import DetailsProductsScreen from '@components/DetailsProducts/DetailsProducts';
import DetailsCatalog from '@components/DetailsCatalogSalesFloor';
import { CatalogSalesStackParamList } from 'types/catalogs';
import { SalesFloorsDetailsStack } from './salesFloorNavigator';
const CatalogSalesStack = createStackNavigator<CatalogSalesStackParamList>();
type Props = StackScreenProps<SalesFloorsDetailsStack, 'CatalogsSalesList'>;
const CatalogsSalesNavigator = ({ route }: Props) => {
  return (
    <CatalogSalesStack.Navigator initialRouteName="CatalogsSalesListContainer">
      <CatalogSalesStack.Screen
        name="CatalogsSalesListContainer"
        component={CatalogsSalesListContainer}
        options={{ headerShown: false }}
        initialParams={{ sale: route.params.sale }}
      />
      <CatalogSalesStack.Screen
        name="CatagoriesCatalogs"
        component={CatagoriesCatalogs}
        options={{ headerShown: false }}
      />
      <CatalogSalesStack.Screen
        name="ProductsCategory"
        component={ProductsCatagoriesCatalogs}
        options={{ headerShown: false }}
      />
      <CatalogSalesStack.Screen
        name="DetailsCatalog"
        component={DetailsCatalog}
        options={{ headerShown: false }}
      />
      <CatalogSalesStack.Screen
        name="DetailsProducts"
        component={DetailsProductsScreen}
        options={{ headerShown: false }}
      />
    </CatalogSalesStack.Navigator>
  );
};

export default CatalogsSalesNavigator;
