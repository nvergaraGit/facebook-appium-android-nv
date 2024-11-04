import React from 'react';
import Menu from '@components/Menu';
import AboutScreen from '@screens/about';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuStackParamList } from 'types/menu';
import FillRateGeneralScreen from '@screens/FillRateGeneral/FillRateGeneral';
import HelpCenterScreen from '@screens/HelpCenter/HelpCenter';
import HelpCenterListFilesScreen from '@screens/HelpCenterListFiles/HelpCenterListFiles';
import HelpCenterFilesScreen from '@screens/HelpCenterFiles/HelpCenterFiles';
import BudgetGoalsScreen from '@screens/BudgetGoals/BudgetGoals';
import DetailsCatalog from '@components/DetailsCatalog';
import DetailsProductsScreen from '@components/DetailsProducts/DetailsProducts';
import { SalesFloorsDetailsStack } from './salesFloorNavigator';
import products from '@screens/products';
import { StockStackParamList } from 'types/stock';
import StockScreen from '@screens/Stock/stock';

const MenuNavigatorStack = createStackNavigator<MenuStackParamList>();
const SalesFloorStack = createStackNavigator<SalesFloorsDetailsStack>();
const StockStack = createStackNavigator<StockStackParamList>();

const MenuNavigator = () => {
  return (
    <MenuNavigatorStack.Navigator initialRouteName="Menu">
      <MenuNavigatorStack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <MenuNavigatorStack.Screen
        name="Products"
        component={products}
        options={{ headerShown: false }}
      />
      <MenuNavigatorStack.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <MenuNavigatorStack.Screen
        name="FillRate"
        component={FillRateGeneralScreen}
        options={{ headerShown: false }}
      />
      <MenuNavigatorStack.Screen
        name="HelpCenter"
        component={HelpCenterScreen}
        options={{ headerShown: false }}
      />
      <MenuNavigatorStack.Screen
        name="HelpCenterListFiles"
        component={HelpCenterListFilesScreen}
        options={{ headerShown: false }}
      />
      <MenuNavigatorStack.Screen
        name="HelpCenterFiles"
        component={HelpCenterFilesScreen}
        options={{ headerShown: false }}
      />
      <MenuNavigatorStack.Screen
        name="BudgetGoals"
        component={BudgetGoalsScreen}
        options={{ headerShown: false }}
      />

      <SalesFloorStack.Screen
        name="DetailsCatalog"
        component={DetailsCatalog}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="DetailsProducts"
        component={DetailsProductsScreen}
        options={{ headerShown: false }}
      />

      <StockStack.Screen name="Stock" component={StockScreen} options={{ headerShown: false }} />
    </MenuNavigatorStack.Navigator>
  );
};

export default MenuNavigator;
