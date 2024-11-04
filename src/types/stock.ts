import { TProducts } from './products';
import { TSelect } from './select';

export interface TDetailStockProduct {
  getDetailStockProduct: {
    pageInfo: TPageInfo;
    data: TProducts[];
  };
}
export type TPageInfo = {
  records?: number;
  totalRecords: number;
  offset?: number;
  currentPage?: number;
  totalPages: number;
};
export type StockStackParamList = {
  Stock: undefined;
};
export interface TStockData {
  plant: string;
  items: {
    branch: string;
    withStock: number;
    withoutStock: number;
    lowStock: number;
    updatedHour: string;
  }[];
}
export interface TStockTotalData {
  getTotalStock: {
    data: [
      {
        branchs: TStockItem[];
      },
    ];
  };
}

export interface TStockItem {
  branch: string;
  branchCode: string;
  withStock: number;
  withoutStock: number;
  lowStock: number;
  updatedHour: string;
  plant: string;
}
export interface TStockFiltersData {
  getStockFiltersData: {
    filtersList: TSelect[];
  };
}
