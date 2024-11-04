import React from 'react';
import { TOrders } from 'types/orders';
import HomeScreen from '@screens/home';
import { CatalogParamList } from 'types/catalogs';
import SalesFloorScreen from '@screens/salesFloor';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductStackParamList, TProducts } from 'types/products';
import { TDetailsSalesFloorCard, TSalesFloor, TSalesFloorHomeItems } from 'types/salesFloors';
import OrdersProductScreen from '@screens/OrdersProduct/OrdersProduct';
import DetailsProductsScreen from '@components/DetailsProducts/DetailsProducts';
import StockScreen from '@screens/Stock/stock';
import DetailsSalesFloorScreen from '@screens/DetailsSalesFloor/DetailsSalesFloor';
import AnnualExhibitions from '@screens/AnnualExhibitions/AnnualExhibitions';
import CatalogsSalesNavigator from './catalogsSalesNavigator';
import NotificationsNavigator from './notificationsNavigator';
import FillRateNavigator from './fillRateNavigator';
import NoteRed from '@screens/NoteRed/NoteRed';
import DetailsCatalog from '@components/DetailsCatalog';
import { SalesFloorsDetailsStack } from './salesFloorNavigator';
import CommentFormat from '@screens/CommentFormat/CommentFormat';
import DetailsNoteRed from '@screens/DetailsNoteRed/DetailsNoteRed';
import OrdersSalesFloor from '@screens/OrdersSalesFloor/OrdersSalesFloor';
import SaleFloorIndicators from '@screens/SaleFloorIndicators/SaleFloorIndicators';
import SalesFloorVisitStart from '@screens/SalesFloorVisitStart/SalesFloorVisitStart';
import ReviewCatalogsExhibitions from '@screens/ReviewCatalogsExhibitions/ReviewCatalogsExhibitions';
import SalesFloorIndicatorsDetails from '@components/SalesFloorIndicatorsDetails/SalesFloorIndicators';
import ReviewCatalogsExhibitionsEvaluate from '@screens/ReviewCatalogsExhibitionsEvaluate/ReviewCatalogsExhibitionsEvaluate';
import SalesMobile from '@screens/SalesMobile/SalesMobile';
import B2B from '@screens/B2B/B2B';
import OrderPresale from '@screens/OrderPresale/OrderPresale';
import ProductsPresale from '@screens/ProductsPresale/ProductsPresale';
import B2BCategories from '@components/B2BCategories/B2BCategories';
import B2BProductsList from '@components/B2BProductsList/B2BProductsList';
import DownloadReports from '@screens/DownloadReports/DownloadReports';
import AvailableCatalog from '@screens/AvailalbleCatalog/AvailableCatalog';
import DetailsPacking from '@screens/DetailsPacking';
import ProductsList from '@screens/ProductsList';

export type HomeStack = {
  Home: undefined;
  SalesFloor: { salesFloor: string };
  Details: { salesFloor: TSalesFloor | TSalesFloorHomeItems };
  FillRateWeekly: { salesFloor: TSalesFloor };
  NoteRed: { salesFloor: TSalesFloor };
  Exhibitions: { salesFloor: TSalesFloor };
  CatalogsSalesList: { sale: TSalesFloor };
  OrdersProducts: { dataProducts: TProducts[]; order: TOrders };
  DetailsProducts: undefined;
  Indicators: undefined;
  Stock: undefined;
  OrdersSalesFloor: {
    details?: TDetailsSalesFloorCard[];
    salesFloor: TSalesFloor | TSalesFloorHomeItems;
  };
  Notifications: undefined;
  SalesMobile: undefined;
};

const HomeStack = createStackNavigator<HomeStack>();
const ProductStack = createStackNavigator<ProductStackParamList>();
const Indicators = createStackNavigator<SalesFloorsDetailsStack>();
const SalesFloorStack = createStackNavigator<SalesFloorsDetailsStack>();
const CatalogStack = createStackNavigator<CatalogParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="SalesFloor"
        component={SalesFloorScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsSalesFloorScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="OrdersSalesFloor"
        component={OrdersSalesFloor}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="CatalogsSalesList"
        component={CatalogsSalesNavigator}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Exhibitions"
        component={AnnualExhibitions}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="FillRateWeekly"
        component={FillRateNavigator}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="NoteRed" component={NoteRed} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="OrdersProducts"
        component={OrdersProductScreen}
        options={{ headerShown: false }}
      />

      <Indicators.Screen
        name="Indicators"
        component={SaleFloorIndicators}
        options={{ headerShown: false }}
      />
      <Indicators.Screen
        name="SalesFloorIndicatorsDetails"
        component={SalesFloorIndicatorsDetails}
        options={{ headerShown: false }}
      />
      <ProductStack.Screen
        name="DetailsProducts"
        component={DetailsProductsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Stock" component={StockScreen} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="Notifications"
        component={NotificationsNavigator}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="SalesFloorVisit"
        component={SalesFloorVisitStart}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="SalesFloorReviewCatalogsExhibitions"
        component={ReviewCatalogsExhibitions}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="SalesFloorReviewCatalogsExhibitionsEvaluate"
        component={ReviewCatalogsExhibitionsEvaluate}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="SalesFloorReviewComments"
        component={CommentFormat}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="DetailsCatalog"
        component={DetailsCatalog}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="DetailsNoteRed"
        component={DetailsNoteRed}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="SalesMobile"
        component={SalesMobile}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen name="B2B" component={B2B} options={{ headerShown: false }} />
      <SalesFloorStack.Screen
        name="OrderPresale"
        component={OrderPresale}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="ProductsPresale"
        component={ProductsPresale}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="B2BCategories"
        component={B2BCategories}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="B2BProductsList"
        component={B2BProductsList}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="DownloadReports"
        component={DownloadReports}
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
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
