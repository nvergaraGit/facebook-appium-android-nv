/**
 * @method interface IPresaleDetail
 */
export interface IPresaleDetail {
  codigoBasis: number;
  nombLargo: string;
  cjFis: string;
  cjUni: string;
}

/**
 * @method interface IPresale
 */
export interface IPresale {
  dia: string;
  mes: string;
  annio: string;
  fecha: string;
  nroDoc: string;
  nroFactura: string;
  clte: string;
  camion: string;
  viaje: string;
  oc: string;
  total: number;
  totalCajas: number;
  totalPaletas: number;
  detalle: Array<IPresaleDetail>;
}

/**
 * @method interface IResponsePresale
 */
export interface IResponsePresale {
  getPresales: {
    presales: Array<IPresale>;
  };
}
export type TPresalesDetail = {
  clte: string;
  fecha: string;
  oc: string;
  invoices: TInvoices[];
  totalCajas: string;
  camion: string;
  viaje: string;
  total: number;
  detalle: Array<IPresaleDetail>;
};
export type TInvoices = {
  nroDoc: string;
  nroFactura: string;
};
export type TPresalesDetailData = {
  getPresalesDetails: TPresalesDetail;
};
