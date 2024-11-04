/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import HomeNavigator from '@navigation/homeNavigator';
import UserIcon from '@assets/icons/user.svg';
import GridIcon from '@assets/icons/grid.svg';
import StoreIcon from '@assets/icons/shape.svg';
import StockIcon from '@assets/icons/stock.svg';
import MenuNavigator from '@navigation/menuNavigator';
import UserIconActive from '@assets/icons/user-active.svg';
import GridIconActive from '@assets/icons/grid-active.svg';
import StoreIconActive from '@assets/icons/shape-active.svg';
import StockIconActive from '@assets/icons/stock-active.svg';
import SalesFloorNavigator from '@navigation/salesFloorNavigator';
import { ContainerItem, StyledHomeIcon, TabText } from './styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderNavigator from '@navigation/orders';
import { useAppContext } from '@context/state';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
import {
  ANALITICS_ACTION_HOME,
  ANALITICS_ACTION_MORE,
  ANALITICS_ACTION_PO,
  ANALITICS_ACTION_SALES_FLOOR,
  ANALITICS_ACTION_STOCK,
  ANALITICS_CATEGORY_NAVBAR,
} from '@libraries/constants';
import { Route, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CatalogsNavigator from '@navigation/CatalogsNavigator';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { setPlant, resetPlant, setStock, setPrincipalPlant, resetPrincipalPlant, auth } =
    useAppContext();

  const getValidatePath = (route: Route<string>) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Initial';
    const validRoutes = [
      'Initial',
      'Home',
      'SalesFloor',
      'Stock',
      'Orders',
      'Menu',
      'Catalogs',
      'Products',
    ];
    return validRoutes.includes(routeName) ? false : true;
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
            backgroundColor: '#fff',
            shadowColor: '0px -4px 80px 0px #02296414',
            zIndex: 100,
          },
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <ContainerItem testID="HomeTab">
                <StyledHomeIcon focused={focused} />
                <TabText focused={focused}>Inicio</TabText>
              </ContainerItem>
            ),
            tabBarStyle: { display: getValidatePath(route) ? 'none' : 'flex', height: 80 },
          })}
          listeners={{
            tabPress: () => {
              // Registering Analitics Event
              registerFirebaseAnaliticsEvent(
                ANALITICS_CATEGORY_NAVBAR,
                ANALITICS_ACTION_HOME,
                auth,
              );
            },
          }}
        />
        <Tab.Screen
          name="SalesFloorNavigator"
          component={SalesFloorNavigator}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <ContainerItem>
                {focused ? <StoreIconActive /> : <StoreIcon />}
                <TabText focused={focused} testID="SalasTab">
                  Salas
                </TabText>
              </ContainerItem>
            ),
            tabBarStyle: { display: getValidatePath(route) ? 'none' : 'flex', height: 80 },
          })}
          listeners={{
            tabPress: () => {
              // Registering Analitics Event
              registerFirebaseAnaliticsEvent(
                ANALITICS_CATEGORY_NAVBAR,
                ANALITICS_ACTION_SALES_FLOOR,
                auth,
              );
            },
          }}
        />
        <Tab.Screen
          name="CatalogsNavigator"
          component={CatalogsNavigator}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <ContainerItem>
                {focused ? <StockIconActive /> : <StockIcon />}
                <TabText focused={focused}>Catálogo</TabText>
              </ContainerItem>
            ),
            tabBarStyle: { display: getValidatePath(route) ? 'none' : 'flex', height: 80 },
          })}
          listeners={{
            tabPress: () => {
              setPlant(resetPlant), setStock('ALL'), setPrincipalPlant(resetPrincipalPlant);

              // Registering Analitics Event
              registerFirebaseAnaliticsEvent(
                ANALITICS_CATEGORY_NAVBAR,
                ANALITICS_ACTION_STOCK,
                auth,
              );
            },
          }}
        />
        <Tab.Screen
          name="OrderNavigator"
          component={OrderNavigator}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <ContainerItem>
                {focused ? <UserIconActive /> : <UserIcon />}
                <TabText focused={focused}>Órdenes</TabText>
              </ContainerItem>
            ),
            tabBarStyle: { display: getValidatePath(route) ? 'none' : 'flex', height: 80 },
          })}
          listeners={{
            tabPress: () => {
              // Registering Analitics Event
              registerFirebaseAnaliticsEvent(ANALITICS_CATEGORY_NAVBAR, ANALITICS_ACTION_PO, auth);
            },
          }}
        />
        <Tab.Screen
          name="MenuNavigator"
          component={MenuNavigator}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <ContainerItem>
                {focused ? <GridIconActive /> : <GridIcon />}
                <TabText focused={focused}>Más</TabText>
              </ContainerItem>
            ),
            tabBarStyle: { display: getValidatePath(route) ? 'none' : 'flex', height: 80 },
          })}
          listeners={{
            tabPress: () => {
              // Registering Analitics Event
              registerFirebaseAnaliticsEvent(
                ANALITICS_CATEGORY_NAVBAR,
                ANALITICS_ACTION_MORE,
                auth,
              );
            },
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </>
  );
};
export default Tabs;
