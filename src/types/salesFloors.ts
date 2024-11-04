import { TOrders } from './orders';
import { TypeArrowFillRate } from '@utils/fillRateArrowType';

export interface TSalesFloorsData {
  customers: {
    totalPages: number;
    items: number;
    customers: TSalesFloor[];
  };
}

export interface TSalesFloorsData {
  id: number;
  items: TSalesFloor[];
}
export interface TSalesFloor {
  calle: string;
  coordX: string;
  coordY: string;
  dcadena: string;
  dcomuna: string;
  dfrecProg: string;
  dprovincia: string;
  dregion: string;
  dsucursal: string;
  dplanta: string;
  nomreFantasia: string;
  numero: string;
  razonSocial: string;
  rut: string;
  codClient: string;
  dcadenaNacionales: string;
  dgrupoNacionales: string;
  ccadenaNacionales?: string;
  ccadena?: string;
  csalaSupermercado: string;
}

export interface TSalesFloorCode {
  codClient: string;
}

export interface TSalesFloorHome {
  getCustomersOrdersTotals: {
    lastUpdate: string;
    totalPurchaseOrders: number;
    customersOrdersTotal: TSalesFloorHomeItems[];
  };
}

export type TSalesFloorHomeItems = {
  codClient: number;
  rut: string;
  razonSocial: string;
  nomreFantasia: string;
  email: string;
  purchaseOrderQty: number;
  cCadenaNacionales?: string;
  csalaSupermercado: string;
  ccadena: string;
  dcadena: string;
  coordX: string;
  coordY: string;
};

export interface TSalesFloorsDetails {
  salesFloor: string;
  nOrder: number;
  tag: string;
  delivery: string;
  startDate: string;
  boxes: number;
  pallets: number;
  clteNombre: string;
}

export interface TSalesFloorsOrderData {
  getPurchaseOrdersByClient: {
    purchaseOrder: TOrders[];
  };
}

export type TDetailsSalesFloorCard = {
  totalCatalogs: number;
  totalExhibitions: number;
  totalOrders: number;
  totalInvoices: number;
  fillRateLastWeek: {
    dateEnd: string;
    dateIni: string;
    percentage: string;
    week: string;
    flag: TypeArrowFillRate;
  };
};

export type TTItemsSalesFloorQuery = {
  getCustomerSummaryInfo: TDetailsSalesFloorCard;
};
export type TNoteRed = {
  nuevo: number;
  porcentajeNotaRed: string;
  semanaActual: string;
  estadoActual: string;
  rednote: TRedNote[];
  flag: TypeArrowFillRate;
};
export type TRedNote = {
  estado: string;
  fecha: string;
  notaRed: string;
  semana: string;
};
export type TRedNoteData = {
  getRedNote: GetRedNote;
};

export interface GetRedNote {
  error: Error;
  data: TNoteRed;
}

export interface Error {
  details: string;
}
export type TRedNoteMonth = {
  porcentajeNotaRed: string;
  estadoActual: string;
  semanaActual: string;
  rednoteMonth: rednoteMonth[];
};
export type rednoteMonth = {
  mes: string;
  estado: string;
  porcentajeNotaRed: string;
  redNote: TRedNote[];
};

export type TRedNoteBrandIndicatorCategoryDetails = {
  nombre: string;
  promedioActual: string;
  promedioAnterior: string;
};

export type TRedNoteBrandIndicatorDetailsCatalogs = {
  id: number;
  descripcionProducto: string;
};

export type TRedNoteBrandIndicatorDetailsExhibitions = {
  id: number;
  descripcionExhibicion: string;
};

export type TRedNoteBrandIndicatorDetails = {
  nombre: string;
  promedioActual: string;
  promedioAnterior: string;
  detalleCategoriaSovi: TRedNoteBrandIndicatorCategoryDetails[];
};

export type TRedNoteBrandIndicator = {
  nombreIndicadorMarca?: string;
  tipoExhibicion: TRedNoteBrandIndicatorDetailsExhibitions[];
  tipoProductos: TRedNoteBrandIndicatorDetailsCatalogs[];
  tipoSovi: TRedNoteBrandIndicatorDetails[];
};

export type TRedNoteMonthData = {
  getRedNoteMonth: {
    data: TRedNoteMonth;
  };
};

export type TRedNoteBrandIndicators = {
  getNotaRedMarcaIndicador: {
    data: TRedNoteBrandIndicator;
  };
};

export type TMapImage = {
  1: string;
  2: string;
  3: string;
};
export type TNoteRedBrand = {
  id: number;
  nombre: string;
  promedio: string;
  fechaInicio: string;
  fechaTermino: string;
  indicadores: TIndicadores[];
  estado: string;
};
export type TIndicadores = {
  id: number;
  nombre: string;
  promedio: string;
  fechaInicio: string;
  fechaTermino: string;
  peso: string;
  estado: string;
};
export type TRedNoteBrandData = {
  getNotaRedMarcas: {
    notaRedMarcas: TNoteRedBrand[];
  };
};
