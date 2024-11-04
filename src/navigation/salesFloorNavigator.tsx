/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AnnualExhibitions from '@screens/AnnualExhibitions/AnnualExhibitions';
import DetailsSalesFloorScreen from '@screens/DetailsSalesFloor/DetailsSalesFloor';
import OrdersProductScreen from '@screens/OrdersProduct/OrdersProduct';
import OrdersSalesFloor from '@screens/OrdersSalesFloor/OrdersSalesFloor';
import SalesFloorScreen from '@screens/salesFloor';
import { CatalogueDetailsResponse } from 'types/catalogs';
import { TOrders } from 'types/orders';
import { TDetailsProducts, TProducts } from 'types/products';
import {
  TDetailsSalesFloorCard,
  TSalesFloor,
  TSalesFloorCode,
  TSalesFloorHomeItems,
  TRedNoteBrandIndicator,
} from 'types/salesFloors';
import { CatalogParamList } from 'types/catalogs';
import CatalogsSalesNavigator from './catalogsSalesNavigator';
import DetailsProducts from '@components/DetailsProducts/DetailsProducts';
import FillRateNavigator from './fillRateNavigator';
import OrderPresale from '@screens/OrderPresale/OrderPresale';
import ProductsPresale from '@screens/ProductsPresale/ProductsPresale';
import NoteRed from '@screens/NoteRed/NoteRed';
import DetailsNoteRed from '@screens/DetailsNoteRed/DetailsNoteRed';
import NoteRedDetailsMark from '@screens/NoteRedDetailsMark/NoteRedDetailsMark';
import B2B from '@screens/B2B/B2B';
import B2BCategories from '@components/B2BCategories/B2BCategories';
import B2BProductsList from '@components/B2BProductsList/B2BProductsList';
import { CademB2BData } from 'types/b2b';
import SaleFloorIndicators from '@screens/SaleFloorIndicators/SaleFloorIndicators';
import SalesMobile from '@screens/SalesMobile/SalesMobile';
import CommentFormat from '@screens/CommentFormat/CommentFormat';
import DetailsCatalog from '@components/DetailsCatalog/index';
import { TSaveReview } from 'types/visitTrackin';
import SalesFloorVisitStart from '@screens/SalesFloorVisitStart/SalesFloorVisitStart';
import DownloadReports from '@screens/DownloadReports/DownloadReports';
import { TrackingItem } from 'types/visitTrackin';
import ReviewCatalogsExhibitions from '@screens/ReviewCatalogsExhibitions/ReviewCatalogsExhibitions';
import SalesFloorIndicatorsDetails from '@components/SalesFloorIndicatorsDetails/SalesFloorIndicators';
import ReviewCatalogsExhibitionsEvaluate from '@screens/ReviewCatalogsExhibitionsEvaluate/ReviewCatalogsExhibitionsEvaluate';
import AvailableCatalog from '@screens/AvailalbleCatalog/AvailableCatalog';
import DetailsPacking from '@screens/DetailsPacking';
import ProductsList from '@screens/ProductsList';
import CatalogRoomList from '@screens/CatalogRoomList/CatalogRoomList';

export type SalesFloorsDetailsStack = {
  CatalogRoomList: { salesFloor: TSalesFloor };
  SalesFloor: { salesFloor: string };
  OrdersProducts: { dataProducts: TProducts[]; order: TOrders };
  Details: { salesFloor: TSalesFloor | TSalesFloorHomeItems; finishTrackingState?: boolean };
  OrdersSalesFloor: {
    details?: TDetailsSalesFloorCard;
    salesFloor: TSalesFloor | TSalesFloorHomeItems;
  };
  CatalogsSalesList: { sale: TSalesFloor };
  DetailsCatalog: {
    catalogDetailsInfo: {
      catalogueDetails: CatalogueDetailsResponse;
      catalogueProducts: TProducts[];
    };
  };
  Exhibitions: { salesFloor: TSalesFloor };
  OrderPresale: { salesFloor: TSalesFloor };
  ProductsPresale: { oc: string; salesFloor: TSalesFloor };
  DetailsProducts: { product: TDetailsProducts };
  FillRateWeekly: { salesFloor: TSalesFloor };
  DetailsNoteRed: { salesFloor: TSalesFloor };
  NoteRed: { salesFloor: TSalesFloor };
  B2B: { b2bInfo: CademB2BData };
  B2BCategories: { title: string; b2bInfo: CademB2BData };
  B2BProductsList: { title: string; categoryName: string; products: TProducts[] };
  DetailsNoteRedMark: { data: TRedNoteBrandIndicator; week: string; average: string | undefined };
  Indicators: { salesFloor: TSalesFloor };
  SalesMobile: { SalesFloor: TSalesFloor };
  SalesFloorIndicatorsDetails: { title: string; codClient: string };
  SalesFloorVisit: { salesFloor: TSalesFloor | TSalesFloorCode };
  SalesFloorReviewCatalogsExhibitions: {
    salesFloor: TSalesFloor;
    catalogsId?: number;
    associatedName?: string;
  };
  SalesFloorReviewCatalogsExhibitionsEvaluate: {
    salesFloor?: TSalesFloor;
    catalogsId?: number;
    categoryName?: string;
  };
  SalesFloorReviewComments: {
    saveArray?: TSaveReview;
    salesFloor?: TSalesFloor;
    catalogsId?: number;
    categoryName?: string;
    type?: string;
    editValues?: any;
  };
  DownloadReports: { reportsData: TrackingItem[] };
  DetailsCatalogue: { catalogue: string };
};

const SalesFloorStack = createStackNavigator<SalesFloorsDetailsStack>();
const CatalogStack = createStackNavigator<CatalogParamList>();

const SalesFloorNavigator = () => {
  return (
    <SalesFloorStack.Navigator initialRouteName="SalesFloor">
      <SalesFloorStack.Screen
        name="SalesFloor"
        component={SalesFloorScreen}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="Details"
        component={DetailsSalesFloorScreen}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="CatalogRoomList"
        component={CatalogRoomList}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="OrderPresale"
        component={OrderPresale}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="OrdersProducts"
        component={OrdersProductScreen}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="OrdersSalesFloor"
        component={OrdersSalesFloor}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="CatalogsSalesList"
        component={CatalogsSalesNavigator}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="Exhibitions"
        component={AnnualExhibitions}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="ProductsPresale"
        component={ProductsPresale}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="DetailsProducts"
        component={DetailsProducts}
        options={{ headerShown: false }}
      />

      <SalesFloorStack.Screen
        name="FillRateWeekly"
        component={FillRateNavigator}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="DetailsNoteRed"
        component={DetailsNoteRed}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="DetailsNoteRedMark"
        component={NoteRedDetailsMark}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen name="NoteRed" component={NoteRed} options={{ headerShown: false }} />
      <SalesFloorStack.Screen name="B2B" component={B2B} options={{ headerShown: false }} />
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
        name="Indicators"
        component={SaleFloorIndicators}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="SalesMobile"
        component={SalesMobile}
        options={{ headerShown: false }}
      />
      <SalesFloorStack.Screen
        name="SalesFloorIndicatorsDetails"
        component={SalesFloorIndicatorsDetails}
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
    </SalesFloorStack.Navigator>
  );
};

export default SalesFloorNavigator;
