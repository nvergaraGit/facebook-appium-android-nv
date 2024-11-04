import { TDetailsProducts, TStock } from './products';
import { TSalesFloor } from './salesFloors';

export type FillRateStackParamList = {
  FillRateWeeklyListContainer: { salesFloor: TSalesFloor };
  FillRateDetailsList: { ocFillRateList: OcListFillRate[]; salesFloor: TSalesFloor };
  FillRateDetail: { data: GetFillrateDetailsData; salesFloor: TSalesFloor };
  DetailsProducts: { product: TDetailsProducts; stock?: TStock[] | null; showStock?: boolean };
};

export interface FIllRateWeeklyResponse {
  getFillrateWeekly: GetFillRateWeekly;
}

export interface GetFillRateWeekly {
  data: GetFillRateWeeklyData;
  error: null;
}

export interface GetFillRateWeeklyData {
  weeklyInfo: WeeklyInfo[];
  percentageAccumulated: string;
}

export interface WeeklyInfo {
  week: string;
  percentage: string;
  dateIni: string;
  dateEnd: string;
}

export interface FIllRateOcResponse {
  getOCFillrateWeek: GetOCFillrateWeek;
}

export interface GetOCFillrateWeek {
  data: OcListFillRate[];
  error: null;
}

export interface OcListFillRate {
  oc: string;
  status: string;
  requested: string;
  invoiced: string;
  emission: string;
  vcto: string;
}

export interface FIllRateOcDetails {
  getFillrateDetails: GetFillrateDetails;
}

export interface GetFillrateDetails {
  data: GetFillrateDetailsData;
  error: null;
}

export interface GetFillrateDetailsData {
  oc: string;
  qtyReasonForNonDelivery: number;
  client: string;
  emission: string;
  vcto: string;
  productDetails: ProductDetail[];
}

export interface ProductDetail {
  status: string;
  sku: string;
  description: string;
  image: string;
  cjsRequested: string;
  cjsInvoiced: string;
}
export type percentageWeekly = {
  estado: string;
  nuevo: boolean;
  percentage: number;
  dateIni: string;
  dateEnd: string;
};
export type percentageMonthly = {
  estado: string;
  month: string;
  percentage: number;
};
export type TreasonNoDelivery = {
  reasonName: string;
  percentage: number;
};
export type TFillRateChain = {
  chain: string;
  percentage: number;
};
export type TQueryFillrateGeneral = {
  getFillrateGeneral: {
    data: {
      percentageWeekly: percentageWeekly | null;
      percentageMonthly: percentageMonthly | null;
      reasonNoDelivery: TreasonNoDelivery[];
      fillrateByChain: TFillRateChain[];
    };
    error: {
      details: string;
    };
  };
};
