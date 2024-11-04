import { CatalogDetailRoute, FilterType } from '@libraries/constants';
import { TDetailsProducts, TProducts, TStock } from './products';
import { TSalesFloor } from './salesFloors';

export type CatalogParamList = {
  Catalogs: undefined;
  DetailsProducts: { product: TDetailsProducts };
  DetailsCatalogue: { catalogue: string };
  DetailsPacking: { idCatalogue: number; bandera: string; categoria: string };
  ProductsList: { packing: Format; idCatalogue: number; formato: string; category: string };
};
export interface CatalogResponse {
  getCatalogues: GetCatalogues;
}

export interface GetCatalogues {
  data: Catalog[];
  pageInfo: PageInfo;
}

export interface Catalog {
  id: number;
  catalogo: string;
  inicio: string;
  termino: string;
  categoria: string;
  cadena: string;
  bandera: string;
  mecanica: string;
  patron: string;
  empaque: string;
}

export interface PageInfo {
  totalPages: number;
  currentPage: number;
  offset: number;
  totalRecords: number;
  records: number;
}

export interface CatalogDetailResponse {
  getCatalogueDetails: GetCatalogueDetails;
}

export interface GetCatalogueDetails {
  data: CatalogDetail;
}

export interface CatalogDetail {
  catalogueDetails: CatalogueDetailsResponse;
  catalogueProducts: TProducts[];
}

export interface CatalogueDetailsResponse {
  bandera: string;
  cadena: string;
  catalogo: string;
  formato: string;
  id: number;
  inicio: string;
  mecanica: string;
  patron: string;
  termino: string;
  routeType: CatalogDetailRoute;
}
export interface CatalogueProduct {
  cjsXPall: null;
  codigoBasis: number;
  nombLargo: string;
  unidadesXCaja: number;
}

export type DetailsCatalogStackParamList = {
  DetailsCatalog: {
    catalogDetailsInfo: {
      catalogueDetails: CatalogueDetailsResponse;
      catalogueProducts: TProducts[];
      categoryName?: string;
    };
  };
  CatalogsMain: undefined;
  DetailsProducts: {
    product: TDetailsProducts;
    stock?: TStock[] | null;
    showStock?: boolean;
  };
};

export type CatalogSalesStackParamList = {
  CatalogsSalesListContainer: { sale: TSalesFloor };
  CatagoriesCatalogs: { catalog: Catalog };
  ProductsCategory: {
    item: CategoriesType;
    listItem: {
      listName: string;
      startDate: string;
      endDate: string;
      id: number;
    };
  };
  DetailsCatalog: {
    catalogDetailsInfo: {
      catalogueDetails: CatalogueDetailsResponse;
      catalogueProducts: TProducts[];
      categoryName?: string;
    };
  };
  DetailsProducts: {
    product: TDetailsProducts;
    stock?: TStock[] | null;
    showStock?: boolean;
  };
  DetailsCatalogue: { catalogue: string };
};

export type CategoryItem = { item: CategoriesType };

export type CategoriesType = {
  id?: number;
  icon?: JSX.Element;
  nameCategory: string;
  amount: number;
  formats?: GetFormat[];
};

export interface CatalogBySalesResponse {
  getCataloguesWithoutGroup: GetCataloguesWithoutGroup;
}

export interface GetCataloguesWithoutGroup {
  data: Catalog[];
  pageInfo: PageInfo;
}

export interface GetFormatByCategoriesData {
  getFormatsByCategories: GetFormatsByCategories;
}

export interface GetFormatsByCategories {
  data: GetFormatsByCategoriesData;
}

export interface GetFormatsByCategoriesData {
  categorias: Category[];
  fechaInicio: string;
  fechaFin: string;
  nombreCatalogo: string;
  idCatalogo: number;
}

export interface Category {
  cantidadFormatos: number;
  categoria: string;
  formatos: Format[];
}
export type TFormato = {
  formato: string;
  patron: string;
  mecanica: string;
};
export interface Format {
  formato: string;
  mecanica: string;
  patron: string;
  marca: string;
  data: Format[];
}

export interface GetFormat {
  data: Format[];
  formato: string;
}

export interface CatalogFilterResponse {
  getCatalogueFiltersData: GetCatalogueFiltersData;
}

export interface GetCatalogueFiltersData {
  filtersList: FiltersList[];
}

export interface FiltersList {
  options: Option[];
  placeholder: string;
  id: string;
  filterType: FilterType;
}

export interface Option {
  label: string;
  value: string;
}
export interface Bandera {
  nombre: string;
  tieneCatalogo: boolean;
}

export interface Cadena {
  nombre: string;
  banderas: Bandera[];
}

export type TBranchWithCataloguesQuery = {
  getBranchsWithCatalogues: {
    cadenas: Cadena[];
  };
};
