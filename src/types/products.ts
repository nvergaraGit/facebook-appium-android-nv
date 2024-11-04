export interface TProductsData {
  products: {
    totalPages: number;
    items: number;
    products: TProducts[];
  };
}
export interface TProductsDetailsData {
  getProductDetail: {
    product: TDetailsProducts;
  };
}
export type TProducts = {
  codigoBasis: number;
  nombLargo: string;
  largeName?: string;
  botellasPorCaja?: string;
  cjFis?: string;
  stock?: string;
  boxesAvailable?: string;
  imagen?: string;
  edoArciculo?: string;
  isEssential?: boolean;
};

export type TDetailsProducts = {
  codigoBasis: string;
  nombLargo: string;
  descripcionMarcaMkt: string;
  botellasPorCaja: string;
  descripcionUniMedidaSuu: string;
  cjsXPall: string;
  descripcionFormatomkt: string;
  descripcionCategoriamkt: string;
  descripcionFamliamkt: string;
  descripcionEmpaqueMkt: string;
  descripcionRetornaMkt: string;
  descripcionMaterial: string;
  codiBarra: string;
  ean: string;
  dun: string;
  descripcionIla: string;
  descripcionCategoriaIaba: string;
  imagen: string;
};
export type TMarketing = {
  brand: string;
  format: string;
  category: string;
  family: string;
  packing: string;
  retornability: string;
  material: string;
};
export type TCode = {
  barCode: number;
  eanCode: number;
  dunCode: string;
};
export type TTaxes = {
  ILA: string;
  IABA: string;
};
export type TStock = {
  branch: string;
  boxesAvailable: string;
};
export type ProductStackParamList = {
  ProductsDetails: undefined;
  DetailsProducts: {
    product: TDetailsProducts;
    stock?: TStock[] | null;
    showStock?: boolean;
  };
};
export interface TDetailSku {
  getDetailStockBySku: {
    data: TStock[];
  };
}
