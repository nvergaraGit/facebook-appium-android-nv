export const GRAPHQL_BACKEND_URL = process.env.GRAPHQL_BACKEND_URL;
export const RECEPCIONADO = 'Recepcionado';
export const DELIVERED = 'Entregado';
export const ELIMINADO = 'Eliminado';
export const PROGRAMADO = 'Programado';
export const PROGRAMADO_MANUAL = 'Pedido Programado Manual';
export const RETENIDO_ERROR_PISO = 'Retenido Error Piso';
export const ORDER_RECEIVED = 'Pedido Recepcionado';
export const SALAS = 'Salas';
export const ORDENES = 'Ordenes';
export const PRODUCTOS = 'Productos';
export const STOCK = 'Stock';
export const PEDIDO_RETENIDO_ERROR_PISO = 'Pedido Retenido Error Piso';
export const PEDIDO_PROC_FACTURACION = 'Pedido en Proc. Facturacion';
export const WITH_STOCK = 'Con stock';
export const WITHOUT_STOCK = 'Sin stock';
export const DOWN_STOCK = 'Bajo stock';
export const RECHAZO = 'Rechazo';
export const RETORNO = 'Retorno';
export const DIF_COSTO = 'Dif. costo';
export const MAESTRA = 'E. maestra';
export const CREDITO = 'Limite crédito';
export const NO_IDENTIFICADA = 'No identificada';
export const NOTA_DEBITO = 'Nota débito';
export const NOTA_CREDITO = 'Nota crédito';

export enum ERROR_CODE {
  GRAPHQL_PARSE_FAILED = 'GRAPHQL_PARSE_FAILED',
  GRAPHQL_VALIDATION_FAILED = 'GRAPHQL_VALIDATION_FAILED',
  BAD_USER_INPUT = 'BAD_USER_INPUT',
  PERSISTED_QUERY_NOT_FOUND = 'PERSISTED_QUERY_NOT_FOUND',
  PERSISTED_QUERY_NOT_SUPPORTED = 'PERSISTED_QUERY_NOT_SUPPORTED',
  OPERATION_RESOLUTION_FAILURE = 'OPERATION_RESOLUTION_FAILURE',
  BAD_REQUEST = 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  DEFAULT = '',
}

// Analitics Constants
// Constants to define Analitics Parameters
export const ANALITICS_PARAM_CATEGORY = 'Category';
export const ANALITICS_PARAM_ACTION = 'Action';

// Constants to define Analitics Category Definitions
export const ANALITICS_CATEGORY_LOGIN = 'Login';
export const ANALITICS_CATEGORY_NAVBAR = 'NavBar';
export const ANALITICS_CATEGORY_HOMEPAGE = 'HomePage';
export const ANALITICS_CATEGORY_MENU = 'Menu';
export const ANALITICS_HELP_CENTER = 'HelpCenter';
export const ANALITICS_CATEGORY_SALES_FLOOR = 'Sala';

// Constants to define Analitics Actions Definitions
export const ANALITICS_ACTION_LOGIN_SUCCESS = 'LoginExito';
export const ANALITICS_ACTION_LOGIN_FAIL = 'LoginError';
export const ANALITICS_ACTION_HOME = 'NavBarInicio';
export const ANALITICS_ACTION_SALES_FLOOR = 'NavBarSalas';
export const ANALITICS_ACTION_STOCK = 'NavBarStock';
export const ANALITICS_ACTION_PO = 'NavBarOrdenesDeCompra';
export const ANALITICS_ACTION_MORE = 'NavBarMas';
export const ANALITICS_ACTION_HOME_SF = 'HomeSalas';
export const ANALITICS_ACTION_HOME_SF_WITH_OC = 'HomeSalaConOCs';
export const ANALITICS_ACTION_HOME_PROD_NO_STOCK = 'HomeProductosSinStock';
export const ANALITICS_ACTION_HOME_PROD_LOW_STOCK = 'HomeProductosBajoStock';
export const ANALITICS_ACTION_HOME_PROD_WITH_STOCK = 'HomeProductosConStock';
export const ANALITICS_ACTION_MENU_PRODUCTS = 'MenuProductos';
export const ANALITICS_ACTION_MENU_CATALOGS = 'MenuCatalogs';
export const ANALITICS_ACTION_MENU_ABOUT = 'MenuAcercade';
export const ANALITICS_ACTION_MENU_LOGOUT = 'MenuCerrarSesion';

export const ANALITICS_ACTION_SALES_FLOOR_OC = 'SalaOCsDía';
export const ANALITICS_ACTION_SALES_FLOOR_INVOICED_OC = 'SalaOCsFacturadas';
export const ANALITICS_ACTION_SALES_FLOOR_FILLRATE = 'SalaFillRate';
export const ANALITICS_ACTION_SALES_FLOOR_CATALOGS = 'SalaCatalogos';
export const ANALITICS_ACTION_SALES_FLOOR_EXHIBITIONS = 'SalaExhibiciones';
export const ANALITICS_ACTION_SALES_FLOOR_RED_NOTE = 'SalaNotaRed';
export const ANALITICS_ACTION_SALES_FLOOR_B2B = 'SalaB2B';
export const ANALITICS_ACTION_SALES_FLOOR_INDICATORS = 'IndicadoresSala';

export const ANALITICS_ACTION_SALES_FLOOR_B2B_GHOST_STOCK = 'B2BStockFantasma';
export const ANALITICS_ACTION_SALES_FLOOR_B2B_0_SALES = 'B2BVenta0';
export const ANALITICS_ACTION_SALES_FLOOR_RED_NOTE_EMBONOR = 'IndSalaNotaRedEmbonor';
export const ANALITICS_ACTION_SALES_FLOOR_RED_NOTE_AB_IN_BEV = 'IndSalaNotaRedAbInBev';
export const ANALITICS_ACTION_SALES_FLOOR_RED_NOTE_SANTA_RITA = 'IndSalaNotaRedSantaRita';
export const ANALITICS_ACTION_SALES_FLOOR_SALES_MOBILE = 'IndMovilVenta';
export const ANALITICS_ACTION_SALES_FLOOR_STRATEGIC_FOCUS = 'IndFocoEstrategico';
export const ANALITICS_ACTION_SALES_FLOOR_CU_VOLUME = 'IndVolumenCU';
export const ANALITICS_ACTION_SALES_FLOOR_CU_FORMAT = 'IndFormatoCU';

export const ANALITICS_ACTION_TRACKING = 'Tracking';
export const ANALITICS_ACTION_TRACKING_START_VISIT = 'TknBtnIniciarVisita';
export const ANALITICS_ACTION_TRACKING_END_VISIT = 'TknBtnFinVisita';
export const ANALITICS_ACTION_TRACKING_REPORT_VISITS_SECTION = 'TknInfVisitas';
export const ANALITICS_ACTION_TRACKING_REPORT_CATEGORY = 'TknBtnDesgInfCat';
export const ANALITICS_ACTION_TRACKING_REPORT_GENERAL = 'TknBtnDesgInfGrl';

export const ANALITICS_ACTION_TRACKING_CATALOG = 'TknCatalogos';
export const ANALITICS_ACTION_TRACKING_CATALOG_REV = 'TknRevCatalogos';
export const ANALITICS_ACTION_TRACKING_CATALOG_COMMENT_FORMAT = 'TknCatalogoComFto';
export const ANALITICS_ACTION_TRACKING_CATALOG_UPDATE_COMMENT_FORMAT = 'TknCatalogoBtnMdfEvaFto';

export const ANALITICS_ACTION_TRACKING_EXHIBITION = 'TknExhibiciones';
export const ANALITICS_ACTION_TRACKING_EXHIBITION_REV = 'TknRevExhibiciones';
export const ANALITICS_ACTION_TRACKING_EXHIBITION_COMMENT_FORMAT = 'TknExhibicionesComFto';
export const ANALITICS_ACTION_TRACKING_EXHIBITION_UPDATE_COMMENT_FORMAT =
  'TknExhibicionesBtnMdfEvaFto';

export enum PATTERN_TYPE {
  FIRST = 'PRIMARIO',
  SECOND = 'SECUNDARIO',
}

export enum CatalogDetailRoute {
  SALES = 'SALES',
}

export enum FilterType {
  PRODUCT = 'PRODUCT',
  CALENDAR = 'CALENDAR',
  CATAGORIES = 'CATEGORIES',
  DEFAULT = 'DEFAULT',
  undefined = 'DEFAULT',
}
