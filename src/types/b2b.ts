/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
  descripcion: string;
  imagen: string;
  sku: string;
  totalCjs: number;
}

export interface Products {
  imagen: string;
  nombre: string;
  productos: Array<Product>;
}

export interface CademB2BData {
  length: any;
  stockFantasma: Array<Products>;
  ventaCero: Array<Products>;
}

export interface CademB2BResponse {
  stockFantasma: CademB2BData;
  ventaCero: CademB2BData;
  getCademB2B: {
    data: CademB2BData;
  };
}
