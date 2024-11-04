import { TProducts } from './products';

export type TOrders = {
  length?: number;
  clteNombre: string;
  clte?: number;
  edoPdo: string;
  oc: number;
  fecAct: string;
  fecDespacho: string;
  totalCajas: number;
  hsAct?: string;
  totalPaletas: number;
  nroPdo: string;
  pedidoDetail: TPedidosDetail[];
  categories?: string[];
};
export type TPedidosDetail = {
  nroPdo: string;
  edoPdo: string;
  fecPdo: string;
  detalle: TProducts[];
};
export interface TOrdersData {
  getPurchaseOrders: {
    purchaseOrder: TOrders[];
  };
}

export interface TOrdersDetails {
  getPurchaseOrdersById: {
    purchaseOrder: {
      detalle: TProducts[];
      pedidoDetail: TPedidosDetail[];
    };
  };
}
export type TLoaderFooter = {
  loaderFooter: boolean;
};
export type OrderProductStackParamList = {
  OrdersList: undefined;
  OrdersProducts: {
    order: TOrders;
  };
};
