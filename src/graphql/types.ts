import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

/** Representa la respuesta del login */
export type AuthResponse = {
  __typename?: 'AuthResponse';
  /** Error de login */
  error: Maybe<ServiceErrorPayload>;
  /** Token para refrescar el token de acceso */
  refreshToken: Scalars['String']['output'];
  /** Token de acceso */
  token: Scalars['String']['output'];
};

/** Datos de la bandera */
export type BanderasData = {
  __typename?: 'BanderasData';
  nombre: Maybe<Scalars['String']['output']>;
  tieneCatalogo: Maybe<Scalars['Boolean']['output']>;
};

/** Representa parámetros de entrada de una sucursal embonor */
export type BranchOfficeInput = {
  createdOn?: InputMaybe<Scalars['String']['input']>;
  horarioCierre?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  planta?: InputMaybe<PlantInput>;
  updatedOn?: InputMaybe<Scalars['String']['input']>;
};

/** Representa información de una sucursal */
export type BranchOfficePayload = {
  __typename?: 'BranchOfficePayload';
  createdOn: Maybe<Scalars['String']['output']>;
  horarioCierre: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  nombre: Maybe<Scalars['String']['output']>;
  planta: Maybe<PlantPayload>;
  updatedOn: Maybe<Scalars['String']['output']>;
};

/** Representa parámetros de entrada del detalle de un presupuesto */
export type BudgetDetailInput = {
  abiChile?: InputMaybe<Scalars['String']['input']>;
  aguas?: InputMaybe<Scalars['String']['input']>;
  capel?: InputMaybe<Scalars['String']['input']>;
  createdOn?: InputMaybe<Scalars['String']['input']>;
  diageo?: InputMaybe<Scalars['String']['input']>;
  emailVendedor?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  ncbs?: InputMaybe<Scalars['String']['input']>;
  nombreVendedor?: InputMaybe<Scalars['String']['input']>;
  santaRita?: InputMaybe<Scalars['String']['input']>;
  ssd?: InputMaybe<Scalars['String']['input']>;
  sucursal?: InputMaybe<BranchOfficeInput>;
  updatedOn?: InputMaybe<Scalars['String']['input']>;
  zrt?: InputMaybe<Scalars['String']['input']>;
};

/** Representa el detalle de un presupuesto */
export type BudgetDetailPayload = {
  __typename?: 'BudgetDetailPayload';
  abiChile: Maybe<Scalars['String']['output']>;
  aguas: Maybe<Scalars['String']['output']>;
  capel: Maybe<Scalars['String']['output']>;
  createdOn: Maybe<Scalars['String']['output']>;
  diageo: Maybe<Scalars['String']['output']>;
  emailVendedor: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  ncbs: Maybe<Scalars['String']['output']>;
  nombreVendedor: Maybe<Scalars['String']['output']>;
  santaRita: Maybe<Scalars['String']['output']>;
  ssd: Maybe<Scalars['String']['output']>;
  sucursal: Maybe<BranchOfficePayload>;
  updatedOn: Maybe<Scalars['String']['output']>;
  zrt: Maybe<Scalars['String']['output']>;
};

/** Representa parámetros de entrada de un presupuesto */
export type BudgetInput = {
  budgetDetails?: InputMaybe<Array<BudgetDetailInput>>;
  budgetStatus?: InputMaybe<BudgetStatusInput>;
  createdOn?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  output?: InputMaybe<OutputInput>;
  plantId?: InputMaybe<Scalars['String']['input']>;
  updatedOn?: InputMaybe<Scalars['String']['input']>;
};

/** Representa un presupuesto de venta */
export type BudgetPayload = {
  __typename?: 'BudgetPayload';
  budgetDetailsList: Maybe<Array<BudgetDetailPayload>>;
  budgetStatus: Maybe<BudgetStatusPayload>;
  createdOn: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  output: Maybe<OutputPayload>;
  plantId: Maybe<Scalars['String']['output']>;
  updatedOn: Maybe<Scalars['String']['output']>;
};

/** Representa parámetros de entrada del estado de un presupuesto */
export type BudgetStatusInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  descripcion?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

/** Representa el estado de un presupuesto */
export type BudgetStatusPayload = {
  __typename?: 'BudgetStatusPayload';
  createdAt: Maybe<Scalars['String']['output']>;
  descripcion: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  nombre: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['String']['output']>;
};

/** Datos detallados de un catalogo */
export type CatalogueDetails = {
  __typename?: 'CatalogueDetails';
  /** Nombre de la bandera a la que pertenece el catalogo */
  bandera: Maybe<Scalars['String']['output']>;
  /** Nombre de la cadena a la que pertenece el catalogo */
  cadena: Maybe<Scalars['String']['output']>;
  /** Nombre del catalogo */
  catalogo: Maybe<Scalars['String']['output']>;
  /** Categoria del producto */
  categoria: Maybe<Scalars['String']['output']>;
  /** Presentacion del producto */
  formato: Maybe<Scalars['String']['output']>;
  /** Identificador del producto */
  id: Maybe<Scalars['Float']['output']>;
  /** Fecha de inicio de vigencia del catalogo */
  inicio: Maybe<Scalars['String']['output']>;
  /** Forma de aplicacion de la promocion */
  mecanica: Maybe<Scalars['String']['output']>;
  /** Primario o Secundario */
  patron: Maybe<Scalars['String']['output']>;
  /** Fecha de finalizacion de la vigencia del catalogo */
  termino: Maybe<Scalars['String']['output']>;
};

/** Represents categories cadem b2b data */
export type CategoriasCademB2b = {
  __typename?: 'CategoriasCademB2b';
  imagen: Scalars['String']['output'];
  nombre: Scalars['String']['output'];
  productos: Array<ProductsCademB2b>;
};

/** Represents Product Entity */
export type Categories = {
  __typename?: 'Categories';
  descripcion: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  nombre: Maybe<Scalars['String']['output']>;
};

/** Represents products list paged */
export type CategoriesPaged = {
  __typename?: 'CategoriesPaged';
  categories: Array<Categories>;
  items: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  size: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

/** Represents categories payload */
export type CategoriesPayload = {
  __typename?: 'CategoriesPayload';
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** Represents a input for save Tracking review */
export type ComentarioInput = {
  comentario?: InputMaybe<Scalars['String']['input']>;
  tipoComentarioId: Scalars['Float']['input'];
};

/** datos del comentaio de la revisión */
export type CommentData = {
  __typename?: 'CommentData';
  comentario: Maybe<Scalars['String']['output']>;
  imagenes: Maybe<Array<Scalars['String']['output']>>;
  tipoComentario: CommentType;
};

/** Datos con el resultado de la busqueda de productos */
export type CommentType = {
  __typename?: 'CommentType';
  /** Cantidad de productos en la pagina actual */
  id: Scalars['Float']['output'];
  /** Cantidad total de productos encontrados segun los parametros de busqueda */
  nombre: Scalars['String']['output'];
};

/** Representa parámetros de entrada de la creación de una salida */
export type CreateOutputInput = {
  anio: Scalars['Float']['input'];
  cantidadDias: Scalars['Float']['input'];
  mes: Scalars['Float']['input'];
};

/** Representa la creación de una salida */
export type CreateOutputPayload = {
  __typename?: 'CreateOutputPayload';
  error: Maybe<ServiceErrorPayload>;
  response: Maybe<GenericResponsePayload>;
};

/** Represents Customer Entity */
export type Customer = {
  __typename?: 'Customer';
  area: Scalars['String']['output'];
  atJuTels: Scalars['String']['output'];
  atLuTels: Scalars['String']['output'];
  atMaTels: Scalars['String']['output'];
  atMiTels: Scalars['String']['output'];
  atSaTels: Scalars['String']['output'];
  atViTels: Scalars['String']['output'];
  calle: Scalars['String']['output'];
  careaGeografi: Scalars['String']['output'];
  cavanzaMkt: Scalars['String']['output'];
  ccadena: Scalars['String']['output'];
  ccadenaNacionales: Scalars['String']['output'];
  ccanal: Scalars['String']['output'];
  ccanalDistribucion: Scalars['String']['output'];
  ccanalMkt: Scalars['String']['output'];
  ccdDespach: Scalars['String']['output'];
  cclieClave: Scalars['String']['output'];
  ccluster: Scalars['String']['output'];
  ccompetitividad: Scalars['String']['output'];
  ccomuna: Scalars['String']['output'];
  cctaClave: Scalars['String']['output'];
  cestadoClie: Scalars['String']['output'];
  cfranquicia: Scalars['String']['output'];
  cfrecPrev: Scalars['String']['output'];
  cfrecProg: Scalars['String']['output'];
  cgerencia: Scalars['String']['output'];
  cglobalCustomer: Scalars['String']['output'];
  cgrupoNacionales: Scalars['String']['output'];
  cgsd: Scalars['String']['output'];
  cindicadorRojo: Scalars['String']['output'];
  clienteAbi: Scalars['String']['output'];
  cmacroZona: Scalars['String']['output'];
  cmodalidadAtencion: Scalars['String']['output'];
  cncMay: Scalars['String']['output'];
  cnivelColaboracion: Scalars['String']['output'];
  codClient: Scalars['Float']['output'];
  codificacionCocacola: Scalars['String']['output'];
  codigoCredito: Scalars['Float']['output'];
  coordX: Scalars['String']['output'];
  coordY: Scalars['String']['output'];
  corganizacionVentas: Scalars['String']['output'];
  cperPreven: Scalars['String']['output'];
  cperTelsel: Scalars['String']['output'];
  cperiodoVisita: Scalars['String']['output'];
  cplanta: Scalars['String']['output'];
  cprogValor: Scalars['String']['output'];
  cprovincia: Scalars['String']['output'];
  createdOn: Scalars['String']['output'];
  cregion: Scalars['String']['output'];
  cruta: Scalars['String']['output'];
  crutaDist: Scalars['String']['output'];
  csalaSupermercado: Scalars['String']['output'];
  csector: Scalars['String']['output'];
  csecuencia: Scalars['String']['output'];
  csegmento: Scalars['String']['output'];
  csisVenta: Scalars['String']['output'];
  csubcanal: Scalars['String']['output'];
  csucDistr: Scalars['String']['output'];
  csucEqc: Scalars['String']['output'];
  csucursal: Scalars['String']['output'];
  cterrDistr: Scalars['String']['output'];
  cterritorio: Scalars['String']['output'];
  ctipoCuenta: Scalars['String']['output'];
  ctipoDocum: Scalars['String']['output'];
  ctipoMerc: Scalars['String']['output'];
  ctipoTarifa: Scalars['String']['output'];
  ctipoVenta: Scalars['String']['output'];
  ctipoVpp: Scalars['String']['output'];
  ctradeName: Scalars['String']['output'];
  ctradeembo: Scalars['String']['output'];
  cvendedor: Scalars['String']['output'];
  cvendedorSector: Scalars['String']['output'];
  czona: Scalars['String']['output'];
  czonaDist: Scalars['String']['output'];
  dareaGeografi: Scalars['String']['output'];
  davanzaMkt: Scalars['String']['output'];
  dcadena: Scalars['String']['output'];
  dcadenaNacionales: Scalars['String']['output'];
  dcanal: Scalars['String']['output'];
  dcanalDistribucion: Scalars['String']['output'];
  dcanalMkt: Scalars['String']['output'];
  dclieClave: Scalars['String']['output'];
  dcluster: Scalars['String']['output'];
  dcomuna: Scalars['String']['output'];
  dctaClave: Scalars['String']['output'];
  destadoClie: Scalars['String']['output'];
  dfranquicia: Scalars['String']['output'];
  dfrecPrev: Scalars['String']['output'];
  dfrecProg: Scalars['String']['output'];
  dgerencia: Scalars['String']['output'];
  dglobalCustomer: Scalars['String']['output'];
  dgrupoNacionales: Scalars['String']['output'];
  dgsd: Scalars['String']['output'];
  dhycentral: Scalars['String']['output'];
  diasPlazo: Scalars['Float']['output'];
  diasPlazoAbi: Scalars['String']['output'];
  diasPlazoLicor: Scalars['String']['output'];
  digitoVerificador: Scalars['String']['output'];
  dindicadorHelados: Scalars['String']['output'];
  dindicadorRojo: Scalars['String']['output'];
  dmacroZona: Scalars['String']['output'];
  dmodalidadAtencion: Scalars['String']['output'];
  dncMay: Scalars['String']['output'];
  dnivelColaboracion: Scalars['String']['output'];
  dorganizacionVentas: Scalars['String']['output'];
  dperPreven: Scalars['String']['output'];
  dperTelsel: Scalars['String']['output'];
  dplanta: Scalars['String']['output'];
  dprogValor: Scalars['String']['output'];
  dprovincia: Scalars['String']['output'];
  dregion: Scalars['String']['output'];
  druta: Scalars['String']['output'];
  drutaDist: Scalars['String']['output'];
  dsector: Scalars['String']['output'];
  dsegmento: Scalars['String']['output'];
  dsisVenta: Scalars['String']['output'];
  dsubcanal: Scalars['String']['output'];
  dsucDistr: Scalars['String']['output'];
  dsucEqc: Scalars['String']['output'];
  dsucursal: Scalars['String']['output'];
  dterrDistr: Scalars['String']['output'];
  dterritorio: Scalars['String']['output'];
  dtipoCuenta: Scalars['String']['output'];
  dtipoDocum: Scalars['String']['output'];
  dtipoMerc: Scalars['String']['output'];
  dtipoTarifa: Scalars['String']['output'];
  dtipoVenta: Scalars['String']['output'];
  dtipoVpp: Scalars['String']['output'];
  dtradeName: Scalars['String']['output'];
  dtradeembo: Scalars['String']['output'];
  dvendedor: Scalars['String']['output'];
  dvendedorSector: Scalars['String']['output'];
  dzona: Scalars['String']['output'];
  dzonaDist: Scalars['String']['output'];
  email: Scalars['String']['output'];
  fechaActualizacion: Scalars['String']['output'];
  fechaCreacion: Scalars['String']['output'];
  giro: Scalars['String']['output'];
  indCheque: Scalars['String']['output'];
  listaPrecios: Scalars['String']['output'];
  localidad: Scalars['String']['output'];
  montoCredito: Scalars['Float']['output'];
  nlistaPrecios: Scalars['String']['output'];
  nomreFantasia: Scalars['String']['output'];
  numero: Scalars['String']['output'];
  opTelsell: Scalars['String']['output'];
  razonSocial: Scalars['String']['output'];
  receptorf: Scalars['String']['output'];
  referencia: Scalars['String']['output'];
  rut: Scalars['String']['output'];
  sublocalidad: Scalars['String']['output'];
  telefono1: Scalars['String']['output'];
  telefono2: Scalars['String']['output'];
  updatedOn: Scalars['String']['output'];
};

/** Representa los datos de entrada para la busqueda de la informacion del cliente para el detalle de salas */
export type CustomerInput = {
  /** Codigo o identificacion del cliente */
  codClient?: InputMaybe<Scalars['String']['input']>;
  /** Fecha de la consulta. En la practica es la fecha actual */
  date?: InputMaybe<Scalars['String']['input']>;
};

/** Represents Customers Purchase Orders Qty Entity */
export type CustomerOrders = {
  __typename?: 'CustomerOrders';
  /** Codigo del grupo al que pertenece la sala o cliente */
  cCadenaNacionales: Scalars['String']['output'];
  /** Nombre de la calle donde se encuentra la sala o cliente */
  calle: Scalars['String']['output'];
  /** Codigo de la cadena a la que pertenece la sala o cliente */
  ccadena: Scalars['String']['output'];
  /** Codigo o identificador de la sala o cliente */
  codClient: Scalars['Float']['output'];
  /** Coordenada X */
  coordX: Scalars['String']['output'];
  /** Coordenada Y */
  coordY: Scalars['String']['output'];
  csalaSupermercado: Scalars['String']['output'];
  /** Nombre de la cadena a la que pertenece la sala o cliente */
  dcadena: Scalars['String']['output'];
  /** Nombre de la comuna donde se encuentra la sala o cliente */
  dcomuna: Scalars['String']['output'];
  dfrecProg: Scalars['String']['output'];
  /** Nombre de la planta que surte a la sucursal que atiende a la sala o cliente  */
  dplanta: Scalars['String']['output'];
  /** Nombre de la provincia donde se encuentra la sala o cliente */
  dprovincia: Scalars['String']['output'];
  /** Nombre de la region donde se encuentra la sala o cliente */
  dregion: Scalars['String']['output'];
  /** Nombre de la sucursal que surte a la sala o cliente */
  dsucursal: Scalars['String']['output'];
  /** Correo electronico de la sala o cliente */
  email: Scalars['String']['output'];
  /** Alias al nombre de la sala o cliente */
  nomreFantasia: Scalars['String']['output'];
  /** Numero que ubica a la sala o cliente dentro de la calle donde esta ubicado */
  numero: Scalars['String']['output'];
  /** Cantidad de ordenes de compra que posee la sala o cliente */
  purchaseOrderQty: Scalars['Float']['output'];
  /** Razon social de la sala o cliente */
  razonSocial: Scalars['String']['output'];
  /** Numero de identificacion fiscal de la sala o cliente */
  rut: Scalars['String']['output'];
  /** Fecha de la ultima visita que realizo un ejecutivo a la sala o cliente */
  ultimavisita: Scalars['String']['output'];
};

/** Representa el resumen de la informacion de la sala o cliente (ordenes de compra, preventa, fillrate, catalogos y exhibiciones) */
export type CustomerSummaryInfoResponse = {
  __typename?: 'CustomerSummaryInfoResponse';
  /** Resumen de la informacion de fillrate para la sala o cliente */
  fillRateLastWeek: Maybe<FillRateSummaryInfoResponse>;
  /** Numero total de catalogos para la sala o cliente */
  totalCatalogs: Scalars['Float']['output'];
  /** Numero total de exhibiciones para la sala o cliente */
  totalExhibitions: Scalars['Float']['output'];
  /** Numero total de ordenes de compra facturadas para la sala o cliente (preventa) */
  totalInvoices: Scalars['Float']['output'];
  /** Numero total de ordenes de compra para la sala o cliente */
  totalOrders: Scalars['Float']['output'];
};

/** Total de ordenes de compra para una sla o cliente junto con todas las ordenes de compra que posee segun la consulta solicitada */
export type CustomersOrdersResponse = {
  __typename?: 'CustomersOrdersResponse';
  /** Listado de ordenes de compra pertenecientes a la sala o cliente */
  customersOrdersTotal: Array<CustomerOrders>;
  /** Fecha de la ultima actualizacion de las ordenes de compra */
  lastUpdate: Scalars['String']['output'];
  /** Cantidad total de ordenes de compra contenidas en customersOrdersTotal */
  totalPurchaseOrders: Scalars['Float']['output'];
};

/** Represents customers list paged */
export type CustomersPaged = {
  __typename?: 'CustomersPaged';
  customers: Array<Customer>;
  items: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  size: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

/** Represents a input for delete catalogue */
export type DeleteCatalogueInput = {
  catalogueId: Scalars['Float']['input'];
};

/** Represents an delete catalogue payload */
export type DeleteCataloguePayload = {
  __typename?: 'DeleteCataloguePayload';
  error: Maybe<ServiceErrorPayload>;
  response: Maybe<GenericResponsePayload>;
};

/** Representa parámetros de entrada de la eliminación de detalle(s) de presupuesto */
export type DeleteDetailBudgetInput = {
  ids: Array<Scalars['Float']['input']>;
};

/** Representa la respuesta al eliminar un detalle presupuesto */
export type DeleteDetailBudgetPayload = {
  __typename?: 'DeleteDetailBudgetPayload';
  data: Maybe<MutationResponsePayload>;
  error: Maybe<ServiceErrorPayload>;
};

/** Represents a input for delete essential products */
export type DeleteEssentialProductInput = {
  skus: Array<Scalars['Float']['input']>;
};

/** Represents an delete essential product payload */
export type DeleteEssentialProductsPayload = {
  __typename?: 'DeleteEssentialProductsPayload';
  error: Maybe<ServiceErrorPayload>;
  response: Maybe<GenericResponsePayload>;
};

/** Represents a input for delete exhibition */
export type DeleteExhibitionInput = {
  exhibitionId: Scalars['Float']['input'];
};

/** Represents an delete exhibition payload */
export type DeleteExhibitionPayload = {
  __typename?: 'DeleteExhibitionPayload';
  error: Maybe<ServiceErrorPayload>;
  response: Maybe<GenericResponsePayload>;
};

/** Represents a input for delete packing catalogue */
export type DeletePackingCatalogueInput = {
  catalogueId: Scalars['Float']['input'];
  packing: Scalars['String']['input'];
};

/** Represents an delete packing catalogue payload */
export type DeletePackingCataloguePayload = {
  __typename?: 'DeletePackingCataloguePayload';
  error: Maybe<ServiceErrorPayload>;
  response: Maybe<GenericResponsePayload>;
};

/** Represents video data */
export type DocumentsData = {
  __typename?: 'DocumentsData';
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  link: Scalars['String']['output'];
  title: Scalars['String']['output'];
  visible: Scalars['Boolean']['output'];
};

/** Represents a service generic response payload */
export type ErrorBodyPayload = {
  __typename?: 'ErrorBodyPayload';
  line: Scalars['Float']['output'];
  message: Scalars['String']['output'];
};

/** Datos de los formatos de un catálogo */
export type ExhibitionDataPayload = {
  __typename?: 'ExhibitionDataPayload';
  comentario: Maybe<CommentData>;
  descripcion: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  inicio: Maybe<Scalars['String']['output']>;
  marca: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  termino: Maybe<Scalars['String']['output']>;
  tipo: Maybe<Scalars['String']['output']>;
  trackingReviewId: Maybe<Scalars['String']['output']>;
};

/** Definicion de la clase Exhibicion */
export type Exhibitions = {
  __typename?: 'Exhibitions';
  /** Categoria de la exhibicion */
  categoria: Scalars['String']['output'];
  /** Descripcion de la exhibicion */
  descripcion: Maybe<Scalars['String']['output']>;
  /** Fecha de inicio */
  inicio: Maybe<Scalars['String']['output']>;
  /** Marca o asociado de la exhibicion */
  marca: Maybe<Scalars['String']['output']>;
  /** Fecha de termino */
  termino: Maybe<Scalars['String']['output']>;
  /** Tipo de exhibicion */
  tipo: Maybe<Scalars['String']['output']>;
};

/** Defines file type */
export enum FileType {
  /** catalogue file */
  Catalogue = 'CATALOGUE',
  /** essential product */
  EssentialProduct = 'ESSENTIAL_PRODUCT',
  /** Exhibition file */
  Exhibition = 'EXHIBITION'
}

/** Representa la informacion semanal de fillrate de la sala o cliente */
export type FillRateSummaryInfoResponse = {
  __typename?: 'FillRateSummaryInfoResponse';
  /** Fecha de finalizacion de la consulta */
  dateEnd: Scalars['String']['output'];
  /** Fecha de inicio de la consulta */
  dateIni: Scalars['String']['output'];
  /** Bandera que indica si bajo, subio o se mantuvo el valor de la medicon */
  flag: Scalars['String']['output'];
  /** Porcentaje de fillrate de la semana */
  percentage: Scalars['String']['output'];
  /** Semana a la que pertenece la informacion */
  week: Scalars['String']['output'];
};

/** Representa los filtros de la consulta de cadem b2b */
export type FiltersCademInput = {
  /** Fecha de inicio */
  inicio?: InputMaybe<Scalars['String']['input']>;
  /** Código del cliente embonor */
  sCodEmbonor?: InputMaybe<Scalars['String']['input']>;
  /** Fecha de término */
  termino?: InputMaybe<Scalars['String']['input']>;
};

/** Representa los filtros de entrada para la busqueda de catalogos */
export type FiltersCatalogue = {
  /** Nombre de la bandera */
  bandera?: InputMaybe<Scalars['String']['input']>;
  /** Nombre de la cadena */
  cadena?: InputMaybe<Scalars['String']['input']>;
  /** Categoria del producto */
  categoria?: InputMaybe<Scalars['String']['input']>;
  /** Descripcion */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Nombre del empaque */
  empaque?: InputMaybe<Scalars['String']['input']>;
  /** Fecha de inicio de la vigencia del catalogo */
  inicio?: InputMaybe<Scalars['String']['input']>;
  /** Nombre del producto */
  nombre?: InputMaybe<Scalars['String']['input']>;
  /** Producto */
  producto?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del producto */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Fecha de finalizacion de la vigencia del catalogo */
  termino?: InputMaybe<Scalars['String']['input']>;
};

/** Represents filter catalogue base input */
export type FiltersCatalogueBase = {
  bandera?: InputMaybe<Scalars['String']['input']>;
  cadena?: InputMaybe<Scalars['String']['input']>;
  inicio?: InputMaybe<Scalars['String']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  termino?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para la busqueda de las exhibiciones */
export type FiltersExhibition = {
  /** Categoria de los clientes */
  categoria?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Arreglo con los codigos o identificadores de los clientes */
  cliente?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Fecha de inicio */
  inicio?: InputMaybe<Scalars['String']['input']>;
  /** Marcas o asociados */
  marcas?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Mes para la consulta */
  monthDate?: InputMaybe<Scalars['String']['input']>;
  /** Fecha de termino */
  termino?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a input for Finish Tracking */
export type FinishTrackingInput = {
  clientCode: Scalars['String']['input'];
  trackingId?: InputMaybe<Scalars['Float']['input']>;
};

/** Represents an finish tracking payload */
export type FinishTrackingPayload = {
  __typename?: 'FinishTrackingPayload';
  error: Maybe<ServiceErrorPayload>;
  response: Maybe<GenericResponsePayload>;
};

/** Datos de los formatos de un catálogo */
export type FormatsDataPayload = {
  __typename?: 'FormatsDataPayload';
  catalogueId: Maybe<Scalars['Float']['output']>;
  comentario: Maybe<CommentData>;
  formato: Maybe<Scalars['String']['output']>;
  marca: Maybe<Scalars['String']['output']>;
  mecanica: Maybe<Scalars['String']['output']>;
  patron: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  trackingReviewId: Maybe<Scalars['String']['output']>;
};

/** Elemento generico */
export type GenericData = {
  __typename?: 'GenericData';
  /** Codigo del elemento generico */
  codigo: Scalars['String']['output'];
  /** Nombre o descripcion del elemento generico */
  nombre: Maybe<Scalars['String']['output']>;
};

/** Objeto con contenido generico que contiene una lista de resultados donde, cada elemento esta conformado por un codigo y un valor, ademas del total de elementos */
export type GenericDataList = {
  __typename?: 'GenericDataList';
  /** Arreglo de elementos */
  list: Array<GenericData>;
  /** Cantidad total de elementos */
  totalItems: Scalars['Float']['output'];
};

/** Represents a service generic response payload */
export type GenericResponsePayload = {
  __typename?: 'GenericResponsePayload';
  message: Scalars['String']['output'];
  statusCode: Scalars['Float']['output'];
};

/** Represents all customers list */
export type GetAllCustomersPayload = {
  __typename?: 'GetAllCustomersPayload';
  customers: Array<Customer>;
  error: Maybe<ServiceErrorPayload>;
};

/** Represents application data */
export type GetApplicationData = {
  __typename?: 'GetApplicationData';
  descripcion: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  nombre: Scalars['String']['output'];
};

/** Represents get application payload */
export type GetApplicationPayload = {
  __typename?: 'GetApplicationPayload';
  data: Maybe<Array<GetApplicationData>>;
  error: Maybe<ServiceErrorPayload>;
};

/** Represents branch data */
export type GetBranchData = {
  __typename?: 'GetBranchData';
  closingTime: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  nombre: Scalars['String']['output'];
  plantId: Scalars['String']['output'];
};

/** Representa el filtro para las sucursales según id de las plantas */
export type GetBranchsInput = {
  plantIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Represents get branchs payload */
export type GetBranchsPayload = {
  __typename?: 'GetBranchsPayload';
  data: Maybe<Array<GetBranchData>>;
  error: Maybe<ServiceErrorPayload>;
};

/** Datos de las cadenas y banderas que poseen catalogo activo */
export type GetBranchsWithCatalogueData = {
  __typename?: 'GetBranchsWithCatalogueData';
  banderas: Maybe<Array<BanderasData>>;
  nombre: Maybe<Scalars['String']['output']>;
};

/** Representa las banderas que contiene catalogo activos */
export type GetBranchsWithCataloguesPayload = {
  __typename?: 'GetBranchsWithCataloguesPayload';
  cadenas: Maybe<Array<GetBranchsWithCatalogueData>>;
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Representa datos del presupuesto */
export type GetBudgetData = {
  __typename?: 'GetBudgetData';
  budgetId: Maybe<Scalars['Float']['output']>;
  date: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
};

/** Representa datos del historico de prepuesto */
export type GetBudgetHistoryData = {
  __typename?: 'GetBudgetHistoryData';
  current: Maybe<GetBudgetData>;
  draft: Maybe<GetBudgetData>;
  previous: Maybe<Array<GetBudgetData>>;
};

/** Representa parámetros de entrada del histórico de presupuestos */
export type GetBudgetHistoryInput = {
  plantId: Scalars['String']['input'];
};

/** Representa los históricos de presupuestos */
export type GetBudgetHistoryPayload = {
  __typename?: 'GetBudgetHistoryPayload';
  data: Maybe<GetBudgetHistoryData>;
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Representa parámetros de entrada para obtener los presupuestos y su detalle */
export type GetBudgetsInput = {
  filters?: InputMaybe<BudgetInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** Representa datos del presupuesto con su detalle */
export type GetBudgetsPayload = {
  __typename?: 'GetBudgetsPayload';
  budgetsList: Maybe<Array<BudgetPayload>>;
  error: Maybe<ServiceErrorPayload>;
  pageInfo: Maybe<PageInfoPayload>;
};

/** Represents cadem b2b data */
export type GetCademB2BData = {
  __typename?: 'GetCademB2BData';
  stockFantasma: Array<CategoriasCademB2b>;
  ventaCero: Array<CategoriasCademB2b>;
};

/** Representa los filtros de la consulta de cadem b2b */
export type GetCademB2BInput = {
  /** Objeto filtro */
  filters?: InputMaybe<FiltersCademInput>;
};

/** Represents get cadem B2B payload */
export type GetCademB2BPayload = {
  __typename?: 'GetCademB2BPayload';
  data: Maybe<GetCademB2BData>;
  error: Maybe<ServiceErrorPayload>;
};

/** Cabecera del detalle del catalogo y la lista de productos que engloba */
export type GetCatalogueDetailsDataPayload = {
  __typename?: 'GetCatalogueDetailsDataPayload';
  /** Datos del catalogo */
  catalogueDetails: Maybe<CatalogueDetails>;
  /** Lista de productos del catalogo */
  catalogueProducts: Maybe<Array<ProductShort>>;
};

/** Datos para buscar un catalogo */
export type GetCatalogueDetailsInput = {
  /** Identificador del catalogo */
  catalogueId?: InputMaybe<Scalars['Float']['input']>;
  /** Categoria del catalogo */
  categoria?: InputMaybe<Scalars['String']['input']>;
  /** Formato */
  formato?: InputMaybe<Scalars['String']['input']>;
  /** Mecanica del catagolo para el o los productos */
  mecanica?: InputMaybe<Scalars['String']['input']>;
  /** Patron */
  patron?: InputMaybe<Scalars['String']['input']>;
};

/** Representa la respuesta del detalle de un catalogo */
export type GetCatalogueDetailsPayload = {
  __typename?: 'GetCatalogueDetailsPayload';
  /** Datos que conforman el detalle de un catalogo */
  data: Maybe<GetCatalogueDetailsDataPayload>;
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Represents Catalogue Patron */
export type GetCataloguePatronPayload = {
  __typename?: 'GetCataloguePatronPayload';
  patrones: Maybe<Array<PatronPayload>>;
};

/** Represents catalogues data payload */
export type GetCataloguesDataPayload = {
  __typename?: 'GetCataloguesDataPayload';
  bandera: Maybe<Scalars['String']['output']>;
  cadena: Maybe<Scalars['String']['output']>;
  catalogo: Maybe<Scalars['String']['output']>;
  categoria: Maybe<Scalars['String']['output']>;
  empaque: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  inicio: Maybe<Scalars['String']['output']>;
  mecanica: Maybe<Scalars['String']['output']>;
  patron: Maybe<Scalars['String']['output']>;
  termino: Maybe<Scalars['String']['output']>;
};

/** Represents las entradas para la busqueda de catalogos */
export type GetCataloguesInput = {
  /** Filtros de busqueda */
  filters?: InputMaybe<FiltersCatalogue>;
  /** Datos para la paginacion */
  pagination?: InputMaybe<PaginationInput>;
};

/** Representa la respuesta del GetCatalogues */
export type GetCataloguesPayload = {
  __typename?: 'GetCataloguesPayload';
  data: Maybe<Array<GetCataloguesDataPayload>>;
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
  pageInfo: Maybe<PageInfoPayload>;
};

/** Represents get catalogues without group input */
export type GetCataloguesWithoutGroupInput = {
  filters?: InputMaybe<FiltersCatalogueBase>;
  pagination?: InputMaybe<PaginationInput>;
};

/** Represents an payload for get categories catalogue */
export type GetCategoriesCataloguePayload = {
  __typename?: 'GetCategoriesCataloguePayload';
  categories: Array<CategoriesPayload>;
  error: Maybe<ServiceErrorPayload>;
};

/** Represents catalogues data payload */
export type GetCategoriesDataPayload = {
  __typename?: 'GetCategoriesDataPayload';
  cantidadFormatos: Maybe<Scalars['Float']['output']>;
  categoria: Maybe<Scalars['String']['output']>;
  formatos: Maybe<Array<GetFormatsDataGroupPayload>>;
};

/** Represents categories exhibitions payload */
export type GetCategoriesExhibitionPayload = {
  __typename?: 'GetCategoriesExhibitionPayload';
  categories: Array<Categories>;
  error: Maybe<ServiceErrorPayload>;
};

/** Detalle del stock del producto */
export type GetDetailStockBySkuDataPayload = {
  __typename?: 'GetDetailStockBySkuDataPayload';
  /** Cantidad de cajas disponibles del producto */
  boxesAvailable: Maybe<Scalars['String']['output']>;
  /** Sucursal donde ese encuentra el producto */
  branch: Maybe<Scalars['String']['output']>;
  /** Codigo de la sucursal donde ese encuentra el producto */
  branchCode: Maybe<Scalars['String']['output']>;
  /** Indica si un producto es imprescindible */
  isEssential: Maybe<Scalars['Boolean']['output']>;
  /** Identificador del producto */
  sku: Maybe<Scalars['String']['output']>;
};

/** Conjunto de datos de entrada para realizar la busqueda del detalle del stock de un producto */
export type GetDetailStockBySkuInput = {
  /** Identificador del producto */
  sku?: InputMaybe<Scalars['String']['input']>;
};

/** Respuesta del detalle del stock del producto */
export type GetDetailStockBySkuPayload = {
  __typename?: 'GetDetailStockBySkuPayload';
  /** Detalle del producto */
  data: Maybe<Array<GetDetailStockBySkuDataPayload>>;
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Datos del stock de un producto */
export type GetDetailStockProductDataPayload = {
  __typename?: 'GetDetailStockProductDataPayload';
  /** Cantidad de cajas disponibles */
  boxesAvailable: Maybe<Scalars['String']['output']>;
  /** Codigo o identificador del producto */
  codigoBasis: Maybe<Scalars['String']['output']>;
  /** URL de la imagen del producto */
  imagen: Maybe<Scalars['String']['output']>;
  /** Indica si un producto es imprescindible */
  isEssential: Maybe<Scalars['Boolean']['output']>;
  /** Nombre del producto */
  largeName: Maybe<Scalars['String']['output']>;
  /** Tipo de stock (con stock, bajo stock o sin stock) */
  stock: Maybe<Scalars['String']['output']>;
};

/** Represents get total stock input */
export type GetDetailStockProductInput = {
  /** Sucursal */
  branch?: InputMaybe<Scalars['String']['input']>;
  /** Datos para realizar la busqueda del stock de los productos */
  filter?: InputMaybe<Scalars['String']['input']>;
  /** Datos para la paginacion */
  pagination?: InputMaybe<PaginationInput>;
  /** Inidica si se esta buscando productos con stock, bajo stock, sin stock o todos */
  stockType?: InputMaybe<StockType>;
};

/** Listado del stock de productos */
export type GetDetailStockProductPayload = {
  __typename?: 'GetDetailStockProductPayload';
  /** Listado del stock de productos */
  data: Maybe<Array<GetDetailStockProductDataPayload>>;
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
  /** Datos de la paginacion */
  pageInfo: Maybe<PageInfoPayload>;
};

/** Represents essential product data payload */
export type GetEssentialProductDataPayload = {
  __typename?: 'GetEssentialProductDataPayload';
  description: Maybe<Scalars['String']['output']>;
  sku: Maybe<Scalars['String']['output']>;
};

/** Representa la respuesta de la lista de productos imprescindibles */
export type GetEssentialProductPayload = {
  __typename?: 'GetEssentialProductPayload';
  data: Maybe<Array<GetEssentialProductDataPayload>>;
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
  pageInfo: Maybe<PageInfoPayload>;
};

/** Represents las entradas para la busqueda de productos imprescindibles */
export type GetEssentialProductsInput = {
  /** Filtro de busqueda */
  filter?: InputMaybe<Scalars['String']['input']>;
  /** Datos para la paginacion */
  pagination?: InputMaybe<PaginationInput>;
};

/** Datos de una Exhibicion */
export type GetExhibitionDataPayload = {
  __typename?: 'GetExhibitionDataPayload';
  /** Categoria de la exhibicion */
  categoria: Maybe<Scalars['String']['output']>;
  /** Nombre del cliente */
  cliente: Maybe<Scalars['String']['output']>;
  /** Identificador de la exhibicion */
  id: Maybe<Scalars['Float']['output']>;
  /** Fecha de inicio */
  inicio: Maybe<Scalars['String']['output']>;
  /** Marca o asociado */
  marca: Maybe<Scalars['String']['output']>;
  /** Nombre del producto */
  producto: Maybe<Scalars['String']['output']>;
  /** Fecha de termino */
  termino: Maybe<Scalars['String']['output']>;
  /** Tipo de exhibicion */
  tipoExhibicion: Maybe<Scalars['String']['output']>;
};

/** Exhibiciones asociadas a una sala o cliente */
export type GetExhibitionsByClientPayload = {
  __typename?: 'GetExhibitionsByClientPayload';
  /** Detalle del error */
  error: Maybe<ServiceErrorPayload>;
  /** Arreglo de exhibiciones asociadas a unasala o cliente */
  exhibitions: Maybe<Array<Exhibitions>>;
};

/** Datos para la busqueda de las exhibiciones */
export type GetExhibitionsInput = {
  /** Datos para la busqueda de las exhibiciones */
  filters?: InputMaybe<FiltersExhibition>;
  /** Datos oara la paginacion */
  pagination?: InputMaybe<PaginationInput>;
};

/** Exhibiciobes registradas */
export type GetExhibitionsPayload = {
  __typename?: 'GetExhibitionsPayload';
  /** Arreglo de las exhibiciobes registradas */
  data: Maybe<Array<GetExhibitionDataPayload>>;
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
  /** Datos de la paginacion */
  pageInfo: Maybe<PageInfoPayload>;
};

/** Fillrate general por cadenas */
export type GetFillRateByChain = {
  __typename?: 'GetFillRateByChain';
  /** Nombre o descripcion de la cadena */
  chain: Maybe<Scalars['String']['output']>;
  /** Valor porcentual del fillrate general de la cadena */
  percentage: Maybe<Scalars['Float']['output']>;
};

/** Detalle del fillrate */
export type GetFillRateDetailsDataPayload = {
  __typename?: 'GetFillRateDetailsDataPayload';
  /** Cliente */
  client: Maybe<Scalars['String']['output']>;
  /** Fecha de emision del fillrate */
  emission: Maybe<Scalars['String']['output']>;
  /** Identificador de la orden de compra */
  oc: Maybe<Scalars['String']['output']>;
  /** Arreglo de productos pertenecientes a la orden de compra */
  productDetails: Maybe<Array<GetFillRateProductDetail>>;
  /** Cantidad de motivos de no entrega presentados en la orden de compra */
  qtyReasonForNonDelivery: Maybe<Scalars['Float']['output']>;
  /** Fecha de vencimiento del fillrate */
  vcto: Maybe<Scalars['String']['output']>;
};

/** Detalle del fillrate devuelto por el servicio */
export type GetFillRateDetailsPayload = {
  __typename?: 'GetFillRateDetailsPayload';
  /** Detalle del fillrate devuelto por el servicio */
  data: Maybe<GetFillRateDetailsDataPayload>;
  /** Detalle del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Datos del fillrate general */
export type GetFillRateGeneralDataPayload = {
  __typename?: 'GetFillRateGeneralDataPayload';
  /** Fillrate general por cadena */
  fillrateByChain: Maybe<Array<GetFillRateByChain>>;
  /** Valor porcentual del fillrate mensual */
  percentageMonthly: Maybe<GetFillRateMonthlyData>;
  /** Valor porcentual del fillrate semanal */
  percentageWeekly: Maybe<GetFillRateWeeklyData>;
  /** Arreglo con los motivos de no entrega */
  reasonNoDelivery: Maybe<Array<GetFillRateReasonNoDfelivery>>;
};

/** Datos de entrada para la busqueda del fillrate general */
export type GetFillRateGeneralInput = {
  /** Cadena a la que pertenece la sala o cliente */
  cadena?: InputMaybe<Scalars['String']['input']>;
};

/** Datos del fillrate general */
export type GetFillRateGeneralPayload = {
  __typename?: 'GetFillRateGeneralPayload';
  /** Datos del fillrate general */
  data: Maybe<GetFillRateGeneralDataPayload>;
  /** Detalle del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Datos del fillrate mensual */
export type GetFillRateMonthlyData = {
  __typename?: 'GetFillRateMonthlyData';
  /** Estado del fillrate */
  estado: Maybe<Scalars['String']['output']>;
  /** Mes de la medicion */
  month: Maybe<Scalars['String']['output']>;
  /** Valor porcentual del fillrate mensual */
  percentage: Maybe<Scalars['Float']['output']>;
};

/** Detalle del fillrate del producto */
export type GetFillRateProductDetail = {
  __typename?: 'GetFillRateProductDetail';
  /** Cantidad de cajas del producto facturadas al cliente */
  cjsInvoiced: Maybe<Scalars['String']['output']>;
  /** Cantidad de cajas del producto solicitadas por el cliente */
  cjsRequested: Maybe<Scalars['String']['output']>;
  /** Descripcion del producto */
  description: Maybe<Scalars['String']['output']>;
  /** URL de la imagen del producto */
  image: Maybe<Scalars['String']['output']>;
  /** Identificador del producto */
  sku: Maybe<Scalars['String']['output']>;
  /** Estado del fillrate */
  status: Maybe<Scalars['String']['output']>;
};

/** Motivo de no entrega de productos */
export type GetFillRateReasonNoDfelivery = {
  __typename?: 'GetFillRateReasonNoDfelivery';
  /** Valor porcentual de cajas con el motivo de no entrega con respecto a las cajas totales  */
  percentage: Maybe<Scalars['Float']['output']>;
  /** Descripcion del motivo de no entrega */
  reasonName: Maybe<Scalars['String']['output']>;
};

/** Datos del fillrate semanal */
export type GetFillRateWeeklyData = {
  __typename?: 'GetFillRateWeeklyData';
  /** Fecha de finalizacion de la medicion */
  dateEnd: Maybe<Scalars['String']['output']>;
  /** Fecha de inicio de la medicion */
  dateIni: Maybe<Scalars['String']['output']>;
  /** Estado del fillrate */
  estado: Maybe<Scalars['String']['output']>;
  /** Bandera que indica si el fillrate se calculo recientemente o si tiene varios dias */
  nuevo: Scalars['Boolean']['output'];
  /** Valor porcentual del fillrate semanal */
  percentage: Maybe<Scalars['Float']['output']>;
};

/** Fillrate semanal de una sala o cliente */
export type GetFillRateWeeklyDataPayload = {
  __typename?: 'GetFillRateWeeklyDataPayload';
  /** Porcentaje del fillrate acumulado */
  percentageAccumulated: Maybe<Scalars['String']['output']>;
  /** Datos del fillrate semanal de una sala o cliente */
  weeklyInfo: Maybe<Array<WeeklyInfo>>;
};

/** Datos de entrada para la busqueda del fillrate semanal de una sala o cliente */
export type GetFillRateWeeklyInput = {
  /** Identificador de la sala o cliente */
  clientId?: InputMaybe<Scalars['String']['input']>;
};

/** Fillrate semanal de una sala o cliente */
export type GetFillRateWeeklyPayload = {
  __typename?: 'GetFillRateWeeklyPayload';
  /** Fillrate semanal de una sala o cliente */
  data: Maybe<GetFillRateWeeklyDataPayload>;
  /** Detalle del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Represents get format by categories data payload */
export type GetFormatByCategoriesDataPayload = {
  __typename?: 'GetFormatByCategoriesDataPayload';
  categorias: Maybe<Array<GetCategoriesDataPayload>>;
  fechaFin: Maybe<Scalars['String']['output']>;
  fechaInicio: Maybe<Scalars['String']['output']>;
  idCatalogo: Maybe<Scalars['Float']['output']>;
  /** Indica si un producto es imprescindible */
  isEssential: Maybe<Scalars['Boolean']['output']>;
  nombreCatalogo: Maybe<Scalars['String']['output']>;
};

/** Represents get formats by categories input */
export type GetFormatsByCategoriesInput = {
  idCatalogo: Scalars['Float']['input'];
  pagination?: InputMaybe<PaginationInput>;
};

/** Represents  get formats by categories payload */
export type GetFormatsByCategoriesPayload = {
  __typename?: 'GetFormatsByCategoriesPayload';
  data: Maybe<GetFormatByCategoriesDataPayload>;
  error: Maybe<ServiceErrorPayload>;
  pageInfo: Maybe<PageInfoPayload>;
};

/** Represents formats data payload */
export type GetFormatsDataGroupPayload = {
  __typename?: 'GetFormatsDataGroupPayload';
  data: Maybe<Array<GetFormatsDataPayload>>;
  formato: Maybe<Scalars['String']['output']>;
};

/** Represents formats data payload */
export type GetFormatsDataPayload = {
  __typename?: 'GetFormatsDataPayload';
  marca: Maybe<Scalars['String']['output']>;
  mecanica: Maybe<Scalars['String']['output']>;
  patron: Maybe<Scalars['String']['output']>;
};

/** Datos de entrada para la busqueda del fillrate */
export type GetFullRateDetailsInput = {
  /** Identificador de la orden de compra */
  orderId?: InputMaybe<Scalars['String']['input']>;
};

/** Represents get help documents data */
export type GetHelpDocumentsData = {
  __typename?: 'GetHelpDocumentsData';
  documents: Array<DocumentsData>;
  videos: Array<VideoData>;
};

/** Represents get help documents payload */
export type GetHelpDocumentsPayload = {
  __typename?: 'GetHelpDocumentsPayload';
  data: GetHelpDocumentsData;
  error: Maybe<ServiceErrorPayload>;
};

/** Representa el input para obtener los mensajes de inbox utilizando el servicio expuesto por Embonor */
export type GetInboxMessagesInput = {
  /** Ordenamiento de los mensajes de inbox puede tomar los siguientes valores: true o false */
  asc?: InputMaybe<Scalars['String']['input']>;
  /** Categoría de los mensajes de inbox puede tomar los siguientes valores: comunicados, campañas o lanzamientos */
  category?: InputMaybe<Scalars['String']['input']>;
  /** Texto opcional en formato UUID empleado para páginación de elementos */
  limitId?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de mensajes de inbox que se van a obtener */
  pageLimit?: InputMaybe<Scalars['Float']['input']>;
  /** Criterio de búsqueda de los mensajes de inbox */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Estado de los mensajes de inbox puede tomar los siguientes valores: created, delivered, opened, deleted */
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Representa el payload para obtener los mensajes de inbox utilizando el servicio expuesto por Embonor */
export type GetInboxMessagesPayload = {
  __typename?: 'GetInboxMessagesPayload';
  /** Arreglo de mensajes inbox */
  data: Maybe<Array<InboxMessagePayload>>;
  /** Error de respuesta sobre el envío de la notificación */
  error: Maybe<ServiceErrorPayload>;
};

/** Represents indicators data */
export type GetIndicatorsData = {
  __typename?: 'GetIndicatorsData';
  actual: IndicatorsMonthData;
  acumulado: IndicatorsAccumulatedData;
  fechasIndicadores: Maybe<IndicatorsDatesPayload>;
};

/** Representa el parámetro para la consulta indicadores, cliente_id, option_indicator */
export type GetIndicatorsInput = {
  clientId: Scalars['Float']['input'];
  optionIndicator: Scalars['Float']['input'];
};

/** Represents get indicators by option payload */
export type GetIndicatorsPayload = {
  __typename?: 'GetIndicatorsPayload';
  data: Maybe<GetIndicatorsData>;
  error: Maybe<ServiceErrorPayload>;
};

/** Datos para buscar un catalogo */
export type GetInfoTrackingByCategoriesInput = {
  /** Id del catalogo */
  catalogoId?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la categoría */
  categoria: Scalars['String']['input'];
  /** Código del cliente */
  clientId: Scalars['String']['input'];
};

/** Representa la información de formatos y exhibiciones de tracking de visita */
export type GetInfoTrackingByCategoriesPayload = {
  __typename?: 'GetInfoTrackingByCategoriesPayload';
  /** Datos de formatos y exhibiciones de tracking de visita */
  data: Maybe<GetInfoTrackingDataPayload>;
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Datos de la revisión de tracking de visita */
export type GetInfoTrackingDataPayload = {
  __typename?: 'GetInfoTrackingDataPayload';
  exhibiciones: Maybe<Array<ExhibitionDataPayload>>;
  formatosCatalogo: Maybe<Array<FormatsDataPayload>>;
  nombreCatalogo: Maybe<Scalars['String']['output']>;
  nombreCategoria: Maybe<Scalars['String']['output']>;
};

/** Representa los filtros de la consulta del detalle de marcas de Nota Red */
export type GetNotaRedMarcaIndicadorInput = {
  /** ID del Cliente Nota Red */
  codClient?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicio de la obtención de datos */
  fechaInicio?: InputMaybe<Scalars['String']['input']>;
  /** Fecha término de la obtención de datos */
  fechaTermino?: InputMaybe<Scalars['String']['input']>;
  /** Nombre del indicador de la marca */
  nombreIndicador?: InputMaybe<Scalars['String']['input']>;
  /** Nombre de la marca de la nota red */
  nombreMarca?: InputMaybe<Scalars['String']['input']>;
};

/** Obtener datos de indicadores por marca de nota red */
export type GetNotaRedMarcaIndicadorPayload = {
  __typename?: 'GetNotaRedMarcaIndicadorPayload';
  /** Detalle de indicador de Nota Red por marcas */
  data: Maybe<NotaRedMarcaIndicadorPayload>;
  error: Maybe<ServiceErrorPayload>;
};

/** Representa los filtros de la consulta del detalle de marcas de Nota Red */
export type GetNotaRedMarcasInput = {
  /** ID del Cliente Nota Red */
  codClient?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicio de la obtención de datos */
  fechaInicio?: InputMaybe<Scalars['String']['input']>;
  /** Fecha término de la obtención de datos */
  fechaTermino?: InputMaybe<Scalars['String']['input']>;
};

/** Datos de las marcas de la nota red */
export type GetNotaRedMarcasPayload = {
  __typename?: 'GetNotaRedMarcasPayload';
  /** Detalle de Nota Red de las marcas */
  notaRedMarcas: Maybe<Array<NotaRedMarcaPayload>>;
};

/** Ordenes de compra asociadas al fillrate semanal de una sala o cliente */
export type GetOcFillRateWeekDataPayload = {
  __typename?: 'GetOCFillRateWeekDataPayload';
  /** Fecha de emision del fillrate */
  emission: Maybe<Scalars['String']['output']>;
  /** Cantidad de cajas facturedas a la sala o cliente */
  invoiced: Maybe<Scalars['String']['output']>;
  /** Numero de la orden de compra */
  oc: Maybe<Scalars['String']['output']>;
  /** Cantidad de cajas solicitadas por la sala o cliente */
  requested: Maybe<Scalars['String']['output']>;
  /** Estado del fillrate de la orden de compra */
  status: Maybe<Scalars['String']['output']>;
  /** Fecha de vencimiento del fillrate */
  vcto: Maybe<Scalars['String']['output']>;
};

/** Ordenes de compra asociadas al fillrate semanal de una sala o cliente */
export type GetOcFillRateWeekPayload = {
  __typename?: 'GetOCFillRateWeekPayload';
  /** Ordenes de compra asociadas al fillrate semanal de una sala o cliente */
  data: Maybe<Array<GetOcFillRateWeekDataPayload>>;
  /** Detalle del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Datos de entrada para la busqueda de las ordenes de compra del fillrate semanal de una sala o cliente */
export type GetOcFullRateWeekInput = {
  /** Identificador o codigo de la sala o cliente */
  clientId?: InputMaybe<Scalars['String']['input']>;
  /** Fecha de emision del fillrate */
  dateEmission?: InputMaybe<Scalars['String']['input']>;
};

/** Represents options by indicator data */
export type GetOptionsByIndicatorData = {
  __typename?: 'GetOptionsByIndicatorData';
  id: Scalars['Float']['output'];
  option: Scalars['String']['output'];
};

/** Representa el tipo de indicador,debe ser: 1 = Foco Estratégico, 2 = Volumen CU, 3 = Formato CU */
export type GetOptionsByIndicatorInput = {
  indicatorType: Scalars['Float']['input'];
};

/** Represents get options by indicator payload */
export type GetOptionsByIndicatorPayload = {
  __typename?: 'GetOptionsByIndicatorPayload';
  data: Maybe<Array<GetOptionsByIndicatorData>>;
  error: Maybe<ServiceErrorPayload>;
};

/** Representa parámetros de entrada para obtener las salidas */
export type GetOutputsInput = {
  anio?: InputMaybe<Scalars['Float']['input']>;
  mes?: InputMaybe<Scalars['Float']['input']>;
};

/** Representa datos de las salidas */
export type GetOutputsPayload = {
  __typename?: 'GetOutputsPayload';
  error: Maybe<ServiceErrorPayload>;
  outputs: Maybe<Array<OutputPayload>>;
};

/** Represents plants data */
export type GetPlantsData = {
  __typename?: 'GetPlantsData';
  branchs: Array<GetBranchData>;
  id: Scalars['Float']['output'];
  nombre: Scalars['String']['output'];
};

/** Representa el filtro para las plantas según aplicación */
export type GetPlantsInput = {
  applicationId?: InputMaybe<Scalars['Float']['input']>;
};

/** Represents get plants payload */
export type GetPlantsPayload = {
  __typename?: 'GetPlantsPayload';
  data: Maybe<Array<GetPlantsData>>;
  error: Maybe<ServiceErrorPayload>;
};

/** Datos de entrada para buscar las ordenes de compra facturadas a una sala o cliente (preventa) */
export type GetPresalesInput = {
  /** Identificador o codigo de la sala o cliente */
  codClient?: InputMaybe<Scalars['String']['input']>;
  /** Fecha del dia de la busqueda */
  date?: InputMaybe<Scalars['String']['input']>;
  /** Numero de la orden de compra */
  oc?: InputMaybe<Scalars['String']['input']>;
};

/** Ordenes de compra facturadas */
export type GetPresalesPayload = {
  __typename?: 'GetPresalesPayload';
  /** Ordenes de compra facturadas */
  presales: Array<PresalesPayload>;
};

/** Represents get problem options review payload */
export type GetProblemOptionsReviewPayload = {
  __typename?: 'GetProblemOptionsReviewPayload';
  data: Array<ProblemOptionReviewData>;
  error: Maybe<ServiceErrorPayload>;
};

/** Detalle de un producto */
export type GetProductDetailPayload = {
  __typename?: 'GetProductDetailPayload';
  error: Maybe<ServiceErrorPayload>;
  /** Datos detallados de un producto */
  product: Maybe<Product>;
};

/** Detalle de una orden de compra */
export type GetPurchaseOrderDetailPayload = {
  __typename?: 'GetPurchaseOrderDetailPayload';
  /** Detalle de una orden de compra */
  purchaseOrder: PurchaseOrderPayload;
};

/** Datos de entrada para la busqueda de las ordenes de compra */
export type GetPurchaseOrderInput = {
  /** Codigo o identificador de la sala o cliente */
  codCLient?: InputMaybe<Scalars['String']['input']>;
  /** Fecha en la que se desae realizar la busqueda de ordenes de compra */
  date?: InputMaybe<Scalars['String']['input']>;
  /** Numero de la orden de compra */
  oc?: InputMaybe<Scalars['String']['input']>;
};

/** Ordenes de compra */
export type GetPurchaseOrderPayload = {
  __typename?: 'GetPurchaseOrderPayload';
  /** Arreglo contentivo de las ordenes de compra resultantes de la busqueda */
  purchaseOrder: Array<PurchaseOrderPayload>;
};

/** Represents sales mobile data */
export type GetSalesMobileData = {
  __typename?: 'GetSalesMobileData';
  acumulado: Maybe<SalesMobileData>;
  fechasMovilVentas: Maybe<SalesMobileDatesPayload>;
  movil: Maybe<SalesMobileData>;
  movilPromedio: Maybe<Scalars['String']['output']>;
};

/** Representa el parámetro para la consulta de móvil de ventas, cliente id */
export type GetSalesMobileInput = {
  clienteId: Scalars['String']['input'];
};

/** Represents get sales mobile payload */
export type GetSalesMobilePayload = {
  __typename?: 'GetSalesMobilePayload';
  data: Maybe<GetSalesMobileData>;
  error: Maybe<ServiceErrorPayload>;
};

/** Datos para buscar un catalogo */
export type GetStatisticsByCategoriesInput = {
  /** Id del catalogo */
  catalogoId?: InputMaybe<Scalars['Float']['input']>;
  /** Código del cliente */
  clientId: Scalars['String']['input'];
};

/** Representa las estadisticas de revisión de tracking de visita */
export type GetStatisticsByCategoriesPayload = {
  __typename?: 'GetStatisticsByCategoriesPayload';
  /** Datos que conforman el detalle de un catalogo */
  data: Maybe<GetStatisticsDataPayload>;
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Datos de la revisión de tracking de visita */
export type GetStatisticsDataPayload = {
  __typename?: 'GetStatisticsDataPayload';
  catalogueId: Maybe<Scalars['Float']['output']>;
  categories: Maybe<Array<TrackingCategoriesPayload>>;
  nameCatalogue: Maybe<Scalars['String']['output']>;
};

/** Datos del stock de las sucursales asociadas a un ejecutivo */
export type GetTotalStockDataPayload = {
  __typename?: 'GetTotalStockDataPayload';
  /** Arreglo con los datos del stock de las sucursales asociadas a un ejecutivo */
  branchs: Array<GetTotalStockTotalesPayload>;
};

/** Datos para la busqueda del stock de las sucursales asociadas a un ejecutivo */
export type GetTotalStockInput = {
  /** Correo electronico del ejecutivo */
  email?: InputMaybe<Scalars['String']['input']>;
};

/** Datos del stock de las sucursales asociadas a un ejecutivo */
export type GetTotalStockPayload = {
  __typename?: 'GetTotalStockPayload';
  /** Datos del stock de las sucursales asociadas a un ejecutivo */
  data: Array<GetTotalStockDataPayload>;
  /** Detalle del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Datos del stock de una sucursal */
export type GetTotalStockTotalesPayload = {
  __typename?: 'GetTotalStockTotalesPayload';
  /** Nombre de la sucursal */
  branch: Maybe<Scalars['String']['output']>;
  /** Codigo o identificador de la sucursal */
  branchCode: Maybe<Scalars['String']['output']>;
  /** Cantidad de productos en la categoria Con Basjo Stock */
  lowStock: Maybe<Scalars['Float']['output']>;
  /** Nombre de la planta que surte a la sucursal */
  plant: Maybe<Scalars['String']['output']>;
  /** Ultima hora de actualizacion de la informacion del stock */
  updatedHour: Maybe<Scalars['String']['output']>;
  /** Cantidad de productos en la categoria Con Stock */
  withStock: Maybe<Scalars['Float']['output']>;
  /** Cantidad de productos en la categoria Sin Stock */
  withoutStock: Maybe<Scalars['Float']['output']>;
};

/** Represents get tracking active data payload */
export type GetTrackingActiveDataPayload = {
  __typename?: 'GetTrackingActiveDataPayload';
  clientId: Scalars['String']['output'];
  reviews: Maybe<Array<ReviewsTrackingPayload>>;
  status: StatusTracking;
  trackingId: Scalars['Float']['output'];
};

/** Represents get tracking active input */
export type GetTrackingActiveInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

/** Represents  get tracking active payload */
export type GetTrackingActivePayload = {
  __typename?: 'GetTrackingActivePayload';
  data: Maybe<GetTrackingActiveDataPayload>;
  error: Maybe<ServiceErrorPayload>;
};

/** Representa los datos de entrada para obtener los catálogos de una bandera */
export type GetTrackingCataloguesInput = {
  bandera?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
};

/** Datos de una Exhibicion */
export type GetTrackingCataloguesPayload = {
  __typename?: 'GetTrackingCataloguesPayload';
  /** Representa los catálogos de la sala que se está haciendo un Tracking */
  data: Maybe<TrackingCataloguesPayload>;
  error: Maybe<ServiceErrorPayload>;
};

/** Represents get tracking report data payload */
export type GetTrackingReportsDataPayload = {
  __typename?: 'GetTrackingReportsDataPayload';
  trackingDate: Scalars['String']['output'];
  trackingId: Scalars['Float']['output'];
};

/** Represents get tracking reports input */
export type GetTrackingReportsInput = {
  clientCode: Scalars['String']['input'];
};

/** Represents  get tracking reports payload */
export type GetTrackingReportsPayload = {
  __typename?: 'GetTrackingReportsPayload';
  data: Maybe<Array<GetTrackingReportsDataPayload>>;
  error: Maybe<ServiceErrorPayload>;
};

/** Representa datos de territorio del ejecutivo */
export type GetUserInfo = {
  __typename?: 'GetUserInfo';
  cplanta: Maybe<Scalars['String']['output']>;
  csucursal: Maybe<Scalars['String']['output']>;
  cterritorio: Maybe<Scalars['String']['output']>;
  czona: Maybe<Scalars['String']['output']>;
  planta: Maybe<Scalars['String']['output']>;
  sucursal: Maybe<Scalars['String']['output']>;
};

/** Representa datos de un usuario por plantas */
export type GetUserInfoByPlantData = {
  __typename?: 'GetUserInfoByPlantData';
  email: Maybe<Scalars['String']['output']>;
  qtyBranchs: Maybe<Scalars['Float']['output']>;
  userId: Maybe<Scalars['Float']['output']>;
  userInfo: Maybe<Array<GetUserInfo>>;
  userName: Maybe<Scalars['String']['output']>;
};

/** Representa parámetros de entrada para obtener información del usuario por planta */
export type GetUserInfoByPlantInput = {
  plantId: Scalars['String']['input'];
};

/** Representa los ejecutivos asociados a una planta */
export type GetUserInfoByPlantPayload = {
  __typename?: 'GetUserInfoByPlantPayload';
  /** Datos del error */
  error: Maybe<ServiceErrorPayload>;
  info: Maybe<Array<GetUserInfoByPlantData>>;
};

/** Representa el payload de un mensaje inbox del servicio expuesto por Embonor */
export type InboxMessagePayload = {
  __typename?: 'InboxMessagePayload';
  /** Cuerpo de mensaje inbox */
  body: Maybe<Scalars['String']['output']>;
  /** Categoría de mensaje inbox */
  category: Maybe<Scalars['String']['output']>;
  /** Fecha de creación de mensaje inbox */
  createdAt: Maybe<Scalars['String']['output']>;
  /** Imagen de mensaje inbox */
  image: Maybe<Scalars['Float']['output']>;
  /** ID mensaje inbox */
  messageId: Maybe<Scalars['String']['output']>;
  /** Formato UUID. El cual representa el indentificador del UserMessage del mensaje de inbox */
  pairId: Maybe<Scalars['String']['output']>;
  /** Estado de mensaje inbox */
  status: Maybe<Scalars['String']['output']>;
  /** Título de mensaje inbox */
  title: Maybe<Scalars['String']['output']>;
  /** Fecha de actualización de mensaje inbox */
  updatedAt: Maybe<Scalars['String']['output']>;
};

/** Represents indicators accumulated Data */
export type IndicatorsAccumulatedData = {
  __typename?: 'IndicatorsAccumulatedData';
  acumuladoActual: Scalars['String']['output'];
  acumuladoAnterior: Scalars['String']['output'];
  porcentaje: Scalars['String']['output'];
};

/** Fechas de los indicadores de analítica avanzada */
export type IndicatorsDatesPayload = {
  __typename?: 'IndicatorsDatesPayload';
  /** Indicadores año anterior fecha de inicio */
  actualAaInicio: Maybe<Scalars['String']['output']>;
  /** Indicadores año anterior fecha de inicio */
  actualAaTermino: Maybe<Scalars['String']['output']>;
  /** Indicadores actuales fecha de inicio */
  actualMesInicio: Maybe<Scalars['String']['output']>;
  /** Indicadores actuales fecha de término */
  actualMesTermino: Maybe<Scalars['String']['output']>;
  /** Acumulado año anterior fecha de inicio */
  acumuladoAaInicio: Maybe<Scalars['String']['output']>;
  /** Acumulado año anterior fecha de término */
  acumuladoAaTermino: Maybe<Scalars['String']['output']>;
  /** Acumulado actual fecha de inicio */
  acumuladoActualInicio: Maybe<Scalars['String']['output']>;
  /** Acumulado actual fecha de término */
  acumuladoActualTermino: Maybe<Scalars['String']['output']>;
};

/** Represents indicators month Data */
export type IndicatorsMonthData = {
  __typename?: 'IndicatorsMonthData';
  mes: Scalars['String']['output'];
  mesAnterior: Scalars['String']['output'];
  porcentaje: Scalars['String']['output'];
};

/** Represents a input for Init Tracking */
export type InitTrackingInput = {
  clientCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
  geolocationLat?: InputMaybe<Scalars['String']['input']>;
  geolocationLon?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an init tracking payload */
export type InitTrackingPayload = {
  __typename?: 'InitTrackingPayload';
  error: Maybe<ServiceErrorPayload>;
  response: Maybe<GenericResponsePayload>;
};

/** Representa un documento de factura */
export type InvoceAaFileInput = {
  /** Descripción del documento subido */
  description?: InputMaybe<Scalars['String']['input']>;
  invoice: Scalars['Upload']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Servicio que crea una salida en base de datos */
  createOutput: CreateOutputPayload;
  /** Servicio que elimina toda la información de un catálogo */
  deleteCatalogue: DeleteCataloguePayload;
  /** Elimina detalle(s) de presupuesto */
  deleteDetailBudget: DeleteDetailBudgetPayload;
  /** Servicio que elimina productos imprescindibles */
  deleteEssentialProducts: DeleteEssentialProductsPayload;
  /** Servicio que elimina una exhibición */
  deleteExhibition: DeleteExhibitionPayload;
  /** Servicio que elimina paquetes de un catálogo */
  deletePackingCatalogue: DeletePackingCataloguePayload;
  /** Servicio que finaliza la visita en base de datos */
  finishTracking: FinishTrackingPayload;
  /** Servicio que guarda una exhibición en base de datos */
  initTracking: InitTrackingPayload;
  /** Servicio para iniciar sesion en el sistema */
  login: AuthResponse;
  /** Servicio que registra un nuevo token de dispositivo para un cliente */
  registerDevice: RegisterDevicePayload;
  /** Servicio que guarda un presupuesto en base de datos */
  saveBudget: SaveBudgetPayload;
  /** Servicio que guarda una exhibición en base de datos */
  saveExhibition: SaveExhibitionPayload;
  /** Servicio guarda y/o elimina los productos de un paquete de un catalogo  */
  saveProductsToPackingCatalogue: SaveProductToPackingCataloguePayload;
  /** Servicio que guarda la revisión en traking de visita, comentarios e imagenes */
  saveTrackingReview: SaveTrackingReviewPayload;
  /** Servicio que envía un nuevo mensaje de inbox para uno o más clientes */
  sendInboxMessage: SendInboxMessagePayload;
  /** Servicio que envía una notificación Push */
  sendPushNotification: SendPushNotificationPayload;
  /** Actualiza los presupuestos */
  updateBudget: UpdateBudgetPayload;
  /** Actualiza el detalle de un presupuesto */
  updateDetailBudget: UpdateDetailBudgetPayload;
  /** Servicio que actualiza un mensaje de inbox */
  updateInboxMessage: UpdateInboxMessagePayload;
  /** Servicio que guarda la revisión en traking de visita, comentarios e imagenes */
  updateTrackingReview: SaveTrackingReviewPayload;
  /** Servicio para subir archivos al sistema */
  uploadFile: UploadFilePayload;
  /** Servicio para subir archivos al sistema */
  uploadInvoicesAa: GenericResponsePayload;
};


export type MutationCreateOutputArgs = {
  createOutputInput: CreateOutputInput;
};


export type MutationDeleteCatalogueArgs = {
  deleteCatalogueInput: DeleteCatalogueInput;
};


export type MutationDeleteDetailBudgetArgs = {
  deleteDetailBudgetInput: DeleteDetailBudgetInput;
};


export type MutationDeleteEssentialProductsArgs = {
  deleteEssentialProductInput: DeleteEssentialProductInput;
};


export type MutationDeleteExhibitionArgs = {
  deleteExhibitionInput: DeleteExhibitionInput;
};


export type MutationDeletePackingCatalogueArgs = {
  deletePackingCatalogueInput: DeletePackingCatalogueInput;
};


export type MutationFinishTrackingArgs = {
  finishTrackingInput: FinishTrackingInput;
};


export type MutationInitTrackingArgs = {
  initTrackingInput: InitTrackingInput;
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRegisterDeviceArgs = {
  registerDeviceInput: RegisterDeviceInput;
};


export type MutationSaveBudgetArgs = {
  saveBudgetInput: SaveBudgetInput;
};


export type MutationSaveExhibitionArgs = {
  saveExhibitionInput: SaveExhibitionInput;
};


export type MutationSaveProductsToPackingCatalogueArgs = {
  saveProductPackingCatalogueInput: SaveProductPackingCatalogueInput;
};


export type MutationSaveTrackingReviewArgs = {
  saveTrackingReviewInput: SaveTrackingReviewInput;
};


export type MutationSendInboxMessageArgs = {
  sendInboxMessageInput: SendInboxMessageInput;
};


export type MutationSendPushNotificationArgs = {
  sendPushNotificationInput: SendPushNotificationInput;
};


export type MutationUpdateBudgetArgs = {
  updateBudgetInput: UpdateBudgetInput;
};


export type MutationUpdateDetailBudgetArgs = {
  updateDetailBudgetInput: UpdateDetailBudgetInput;
};


export type MutationUpdateInboxMessageArgs = {
  updateInboxMessageInput: UpdateInboxMessageInput;
};


export type MutationUpdateTrackingReviewArgs = {
  updateTrackingReviewInput: UpdateTrackingReviewInput;
};


export type MutationUploadFileArgs = {
  uploadFileInput: UploadFileInput;
};


export type MutationUploadInvoicesAaArgs = {
  uploadInvoicesAaInput: UploadInvoicesAaInput;
};

/** Retorna información de de registro alterado con la operación */
export type MutationResponsePayload = {
  __typename?: 'MutationResponsePayload';
  actionExecuted: Maybe<Scalars['Boolean']['output']>;
  affectedDescription: Maybe<Scalars['String']['output']>;
  affectedId: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
};

/** Datos de la categoría del indicador tipo SOVI */
export type NotaRedIndicadorCategoriaSoviPayload = {
  __typename?: 'NotaRedIndicadorCategoriaSoviPayload';
  /** Nombre de la categoría del indicador tipo SOVI */
  nombre: Maybe<Scalars['String']['output']>;
  /** Promedio actual de la categoría del indicador tipo SOVI */
  promedioActual: Maybe<Scalars['String']['output']>;
  /** Promedio anterior de la categoría del indicador tipo SOVI */
  promedioAnterior: Maybe<Scalars['String']['output']>;
};

/** Datos de los indicadores de la marca de la nota red */
export type NotaRedIndicadorPayload = {
  __typename?: 'NotaRedIndicadorPayload';
  /** Cantidad de sku del indicador solo con respuesta 1 */
  cantidadExistente: Maybe<Scalars['Float']['output']>;
  /** Cantidad de sku del indicador con respuesta 0 y 1 */
  cantidadSolicitada: Maybe<Scalars['Float']['output']>;
  /** Estado del indicador comparado con la semana anterior */
  estado: Maybe<Scalars['String']['output']>;
  /** Fecha inicio de la obtención de datos */
  fechaInicio: Scalars['String']['output'];
  /** Fecha término de la obtención de datos */
  fechaTermino: Scalars['String']['output'];
  /** ID del indicador */
  id: Scalars['Float']['output'];
  /** Nombre del indicador */
  nombre: Scalars['String']['output'];
  /** Peso en % del indicador */
  peso: Scalars['String']['output'];
  /** Promedio en % del indicador */
  promedio: Scalars['String']['output'];
};

/** Datos de los indicadores de la marca de tipo Exhibición */
export type NotaRedIndicadorTipoExhibicionPayload = {
  __typename?: 'NotaRedIndicadorTipoExhibicionPayload';
  /** Descripción de la exhibición */
  descripcionExhibicion: Maybe<Scalars['String']['output']>;
  /** Identificador de la exhibición */
  id: Maybe<Scalars['Float']['output']>;
  /** Tipo de exhibición */
  tipo: Maybe<Scalars['String']['output']>;
};

/** Datos de los indicadores de la marca de tipo Productos */
export type NotaRedIndicadorTipoProductosPayload = {
  __typename?: 'NotaRedIndicadorTipoProductosPayload';
  /** Descripción del producto */
  descripcionProducto: Maybe<Scalars['String']['output']>;
  /** Identificador del producto */
  id: Maybe<Scalars['Float']['output']>;
};

/** Datos de los indicadores de la marca de tipo SOVI */
export type NotaRedIndicadorTipoSoviPayload = {
  __typename?: 'NotaRedIndicadorTipoSoviPayload';
  /** Detalle de la categoria sovi */
  detalleCategoriaSovi: Maybe<Array<NotaRedIndicadorCategoriaSoviPayload>>;
  /** Nombre del indicador tipo SOVI */
  nombre: Maybe<Scalars['String']['output']>;
  /** Promedio actual del indicador tipo SOVI */
  promedioActual: Maybe<Scalars['String']['output']>;
  /** Promedio anterior del indicador tipo SOVI */
  promedioAnterior: Maybe<Scalars['String']['output']>;
};

/** Datos de los indicadores de la marca de la nota red */
export type NotaRedMarcaIndicadorPayload = {
  __typename?: 'NotaRedMarcaIndicadorPayload';
  /** Nombre del indicador de la marca de Nota Red */
  nombreIndicadorMarca: Maybe<Scalars['String']['output']>;
  /** Detalle del indicador tipo exhibicion por marca Nota Red */
  tipoExhibicion: Maybe<Array<NotaRedIndicadorTipoExhibicionPayload>>;
  /** Detalle del indicador tipo productos por marca Nota Red */
  tipoProductos: Maybe<Array<NotaRedIndicadorTipoProductosPayload>>;
  /** Detalle del indicador tipo sovi por marca Nota Red */
  tipoSovi: Maybe<Array<NotaRedIndicadorTipoSoviPayload>>;
};

/** Datos de la marca de la nota red */
export type NotaRedMarcaPayload = {
  __typename?: 'NotaRedMarcaPayload';
  /** Cantidad de sku de la marca solo con respuesta 1 */
  cantidadExistente: Maybe<Scalars['Float']['output']>;
  /** Cantidad de sku de la marca con respuesta 0 y 1 */
  cantidadSolicitada: Maybe<Scalars['Float']['output']>;
  /** Estado de la marca comparado con la semana anterior */
  estado: Maybe<Scalars['String']['output']>;
  /** Fecha inicio de la obtención de datos */
  fechaInicio: Maybe<Scalars['String']['output']>;
  /** Fecha término de la obtención de datos */
  fechaTermino: Maybe<Scalars['String']['output']>;
  /** ID de la marca */
  id: Maybe<Scalars['Float']['output']>;
  /** Indicadores de la marca */
  indicadores: Maybe<Array<NotaRedIndicadorPayload>>;
  /** Nombre de la marca */
  nombre: Maybe<Scalars['String']['output']>;
  /** Promedio en % de la marca */
  promedio: Maybe<Scalars['String']['output']>;
};

/** Representa parámetros de entrada de las salidas */
export type OutputInput = {
  anio?: InputMaybe<Scalars['Float']['input']>;
  cantidadDias?: InputMaybe<Scalars['Float']['input']>;
  createdOn?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  mes?: InputMaybe<Scalars['Float']['input']>;
  updatedOn?: InputMaybe<Scalars['String']['input']>;
};

/** Representa datos de una salida */
export type OutputPayload = {
  __typename?: 'OutputPayload';
  anio: Maybe<Scalars['Float']['output']>;
  cantidadDias: Maybe<Scalars['Float']['output']>;
  mes: Maybe<Scalars['Float']['output']>;
};

/** Representa la respuesta de los catalogos */
export type PageInfoPayload = {
  __typename?: 'PageInfoPayload';
  /** Numero de la pagina actual */
  currentPage: Maybe<Scalars['Float']['output']>;
  /** Offset */
  offset: Scalars['Float']['output'];
  /** Cantidad de registros devueltos para la pagina actual */
  records: Scalars['Float']['output'];
  /** Cantidad de paginas totales */
  totalPages: Maybe<Scalars['Float']['output']>;
  /** Cantidad de registros totales para la consulta */
  totalRecords: Scalars['Float']['output'];
};

/** Parametros para la paginacion */
export type PaginationInput = {
  /** Numero de la pagina */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Cantidad de elementos por pagina */
  size?: InputMaybe<Scalars['Float']['input']>;
};

/** Represents Catalogue Patron */
export type PatronPayload = {
  __typename?: 'PatronPayload';
  createdAt: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  name: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['String']['output']>;
};

/** Detalle del pedido */
export type PedidoDetailDataPayload = {
  __typename?: 'PedidoDetailDataPayload';
  /** Arreglo con el detalle de los productos pertenecientes al pedido */
  detalle: Array<PurchaseOrderDetailPayload>;
  /** Estado del pedido */
  edoPdo: Maybe<Scalars['String']['output']>;
  /** Fecha del pedido */
  fecPdo: Maybe<Scalars['String']['output']>;
  /** Numero del pedido */
  nroPdo: Maybe<Scalars['String']['output']>;
};

/** Representa parámetros de entrada de una planta embonor */
export type PlantInput = {
  createdOn?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  updatedOn?: InputMaybe<Scalars['String']['input']>;
};

/** Representa datos de planta embonor */
export type PlantPayload = {
  __typename?: 'PlantPayload';
  createdOn: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  nombre: Maybe<Scalars['String']['output']>;
  updatedOn: Maybe<Scalars['String']['output']>;
};

/** Producto perteneciente a una orden de compra */
export type PresalesDetailsPayload = {
  __typename?: 'PresalesDetailsPayload';
  /** Cantidad de cajas fisicas necesarias para satisfacer la compra del cliente */
  cjFis: Maybe<Scalars['Float']['output']>;
  /** Cantidad de unidades del producto contenidas en una caja */
  cjUni: Maybe<Scalars['Float']['output']>;
  /** Codigo o identificador del producto */
  codigoBasis: Maybe<Scalars['String']['output']>;
  /** Nomnre o descripcion del producto */
  nombLargo: Maybe<Scalars['String']['output']>;
};

/** Factura realizada para la orden de compra */
export type PresalesInvoicesPayload = {
  __typename?: 'PresalesInvoicesPayload';
  /** Numero de documento */
  nroDoc: Maybe<Scalars['String']['output']>;
  /** Numero de factura */
  nroFactura: Maybe<Scalars['String']['output']>;
};

/** Ordenes de compra facturadas (preventa) */
export type PresalesPayload = {
  __typename?: 'PresalesPayload';
  /** Año de facturacion de la orden de compra */
  annio: Maybe<Scalars['String']['output']>;
  /** Camion en el que fueron enviados los productos de la orden de compra */
  camion: Maybe<Scalars['String']['output']>;
  /** Identificador o codigo de la sala o cliente */
  clte: Maybe<Scalars['String']['output']>;
  /** Arreglo de productos que se encuentran en la orden de compra */
  detalle: Array<PresalesDetailsPayload>;
  /** Dia de facturacion de la orden de compra */
  dia: Maybe<Scalars['String']['output']>;
  /** Fecha completa de facturacion de la orden de compra */
  fecha: Maybe<Scalars['String']['output']>;
  /** Arreglo de facturas realizadas para la orden de compra */
  invoices: Array<PresalesInvoicesPayload>;
  /** Mes de facturacion de la orden de compra */
  mes: Maybe<Scalars['String']['output']>;
  /** Numero de la orden de compra */
  oc: Maybe<Scalars['String']['output']>;
  /** Monto facturado */
  total: Maybe<Scalars['Float']['output']>;
  /** Cantidad de cajas facturadas en la orden de compra */
  totalCajas: Maybe<Scalars['Float']['output']>;
  /** Cantidad de pallets necesarios para trasladar los productos de la orden de compra */
  totalPaletas: Maybe<Scalars['Float']['output']>;
  /** Viaje en el que fueron enviados los productos de la orden de compra */
  viaje: Maybe<Scalars['String']['output']>;
};

/** Represents  problem options review data */
export type ProblemOptionReviewData = {
  __typename?: 'ProblemOptionReviewData';
  id: Scalars['Float']['output'];
  option: Maybe<Scalars['String']['output']>;
};

/** Datos del producto */
export type Product = {
  __typename?: 'Product';
  adic18: Maybe<Scalars['String']['output']>;
  artClsCod: Maybe<Scalars['String']['output']>;
  artTaxCod1: Maybe<Scalars['String']['output']>;
  artTaxCod2: Maybe<Scalars['String']['output']>;
  artname2: Maybe<Scalars['String']['output']>;
  botelXCama: Maybe<Scalars['String']['output']>;
  /** Cantidad de botellas por caja */
  botellasPorCaja: Maybe<Scalars['String']['output']>;
  cajsDcto: Maybe<Scalars['String']['output']>;
  calibre: Maybe<Scalars['String']['output']>;
  camasXPall: Maybe<Scalars['String']['output']>;
  cantTotal: Maybe<Scalars['String']['output']>;
  categoriaIaba: Maybe<Scalars['String']['output']>;
  categoriamkt: Maybe<Scalars['String']['output']>;
  /** Cantidad de cajas del producto que se despachan en un pallet */
  cjsXPall: Maybe<Scalars['String']['output']>;
  codiBarra: Maybe<Scalars['String']['output']>;
  /** Codigo o identificador del producto */
  codigoBasis: Scalars['Float']['output'];
  codigoIsscom: Maybe<Scalars['String']['output']>;
  consumo: Maybe<Scalars['String']['output']>;
  ctaContab: Maybe<Scalars['String']['output']>;
  ctaInter: Maybe<Scalars['String']['output']>;
  descripcionAdic: Maybe<Scalars['String']['output']>;
  descripcionBotXCaja: Maybe<Scalars['String']['output']>;
  descripcionCategoriaIaba: Maybe<Scalars['String']['output']>;
  descripcionCategoriamkt: Maybe<Scalars['String']['output']>;
  descripcionConsumo: Maybe<Scalars['String']['output']>;
  descripcionEmpaqueMkt: Maybe<Scalars['String']['output']>;
  descripcionEndulzante: Maybe<Scalars['String']['output']>;
  descripcionFamilia: Maybe<Scalars['String']['output']>;
  descripcionFamliamkt: Maybe<Scalars['String']['output']>;
  descripcionFormato: Maybe<Scalars['String']['output']>;
  /** Descripcion del formato de presentacion del producto */
  descripcionFormatomkt: Maybe<Scalars['String']['output']>;
  descripcionGrupoFormato: Maybe<Scalars['String']['output']>;
  descripcionIla: Maybe<Scalars['String']['output']>;
  descripcionIva: Maybe<Scalars['String']['output']>;
  descripcionMarca: Maybe<Scalars['String']['output']>;
  descripcionMarcaMkt: Maybe<Scalars['String']['output']>;
  descripcionMarcatm: Maybe<Scalars['String']['output']>;
  descripcionMaterial: Maybe<Scalars['String']['output']>;
  descripcionOrigen: Maybe<Scalars['String']['output']>;
  descripcionPinta: Maybe<Scalars['String']['output']>;
  descripcionRetornaMkt: Maybe<Scalars['String']['output']>;
  descripcionRetornabil: Maybe<Scalars['String']['output']>;
  descripcionSabor: Maybe<Scalars['String']['output']>;
  descripcionSubCateMkt: Maybe<Scalars['String']['output']>;
  descripcionTamano: Maybe<Scalars['String']['output']>;
  descripcionTipoArticu: Maybe<Scalars['String']['output']>;
  descripcionTipoArticulo: Maybe<Scalars['String']['output']>;
  descripcionUniMedida: Maybe<Scalars['String']['output']>;
  descripcionUniMedidaSuu: Maybe<Scalars['String']['output']>;
  descripionGrupo: Maybe<Scalars['String']['output']>;
  detMonto: Maybe<Scalars['String']['output']>;
  dun: Maybe<Scalars['String']['output']>;
  ean: Maybe<Scalars['String']['output']>;
  empaqueMkt: Maybe<Scalars['String']['output']>;
  endulzante: Maybe<Scalars['String']['output']>;
  envase: Maybe<Scalars['String']['output']>;
  envaseUni: Maybe<Scalars['String']['output']>;
  estadoCodigo: Maybe<Scalars['String']['output']>;
  facCjaConv: Maybe<Scalars['String']['output']>;
  factCFis: Maybe<Scalars['String']['output']>;
  factCUni: Maybe<Scalars['String']['output']>;
  familia: Maybe<Scalars['String']['output']>;
  famliamkt: Maybe<Scalars['String']['output']>;
  fechaActualizacion: Maybe<Scalars['String']['output']>;
  formato: Maybe<Scalars['String']['output']>;
  /** Formato de presentacion del producto */
  formatomkt: Maybe<Scalars['String']['output']>;
  grupo: Maybe<Scalars['String']['output']>;
  grupoFormato: Maybe<Scalars['String']['output']>;
  hlXCaja: Maybe<Scalars['String']['output']>;
  ila: Maybe<Scalars['String']['output']>;
  /** URL con la imagen del producto */
  imagen: Maybe<Scalars['String']['output']>;
  indAudit: Maybe<Scalars['String']['output']>;
  indDcto: Maybe<Scalars['String']['output']>;
  iva: Maybe<Scalars['String']['output']>;
  litrosCc: Maybe<Scalars['String']['output']>;
  marca02: Maybe<Scalars['String']['output']>;
  marcaMkt: Maybe<Scalars['String']['output']>;
  marcatm: Maybe<Scalars['String']['output']>;
  material: Maybe<Scalars['String']['output']>;
  mixtosap: Maybe<Scalars['String']['output']>;
  noSecuen1: Maybe<Scalars['String']['output']>;
  noSecuen2: Maybe<Scalars['String']['output']>;
  nombCaptu: Maybe<Scalars['String']['output']>;
  /** Nombre o descripcion del producto */
  nombLargo: Maybe<Scalars['String']['output']>;
  nombMini: Maybe<Scalars['String']['output']>;
  origen: Maybe<Scalars['String']['output']>;
  pesoXCjKg: Maybe<Scalars['String']['output']>;
  pinta: Maybe<Scalars['String']['output']>;
  ptProveedor: Maybe<Scalars['String']['output']>;
  retornaMkt: Maybe<Scalars['String']['output']>;
  retornabil: Maybe<Scalars['String']['output']>;
  sabor02: Maybe<Scalars['String']['output']>;
  skuExterno: Maybe<Scalars['String']['output']>;
  subCateMkt: Maybe<Scalars['String']['output']>;
  tamano02: Maybe<Scalars['String']['output']>;
  tipArticulo: Maybe<Scalars['String']['output']>;
  tipoArticu: Maybe<Scalars['String']['output']>;
  tipoEnvase: Maybe<Scalars['String']['output']>;
  topeDesc: Maybe<Scalars['String']['output']>;
  totGrupo: Maybe<Scalars['String']['output']>;
  unMedSuu: Maybe<Scalars['String']['output']>;
  uniMedida: Maybe<Scalars['String']['output']>;
  vigenciaDesde: Maybe<Scalars['String']['output']>;
  vigenciaHasta: Maybe<Scalars['String']['output']>;
};

/** Datos del producto */
export type ProductShort = {
  __typename?: 'ProductShort';
  /** Cantidad de botellas por caja */
  botellasPorCaja: Maybe<Scalars['Float']['output']>;
  /** Categoria del producto */
  categoria: Maybe<Scalars['String']['output']>;
  /** Cantidad de cajas por pallet */
  cjsXPall: Maybe<Scalars['Float']['output']>;
  /** Codigo del producto */
  codigoBasis: Maybe<Scalars['Float']['output']>;
  /** URL de la imagen del producto */
  imagen: Maybe<Scalars['String']['output']>;
  /** Indica si un producto es imprescindible */
  isEssential: Maybe<Scalars['Boolean']['output']>;
  /** Nombre de producto */
  nombLargo: Maybe<Scalars['String']['output']>;
};

/** Represents product list cadem b2b data */
export type ProductsCademB2b = {
  __typename?: 'ProductsCademB2b';
  descripcion: Scalars['String']['output'];
  imagen: Scalars['String']['output'];
  isEssential: Maybe<Scalars['Boolean']['output']>;
  sku: Scalars['String']['output'];
  totalCjs: Maybe<Scalars['String']['output']>;
};

/** Datos con el resultado de la busqueda de productos */
export type ProductsPaged = {
  __typename?: 'ProductsPaged';
  /** Cantidad de productos en la pagina actual */
  items: Scalars['Float']['output'];
  /** Numero de la pagina */
  page: Scalars['Float']['output'];
  /** Arreglo con los productos a desplegar en la pagina actual */
  products: Array<Product>;
  /** Tamaño de la pagina */
  size: Scalars['Float']['output'];
  /** Cantidad total de productos encontrados segun los parametros de busqueda */
  totalItems: Scalars['Float']['output'];
  /** Cantidad total de paginas */
  totalPages: Scalars['Float']['output'];
};

/** Detalle de los productos pertenecientes a la orden de compra */
export type PurchaseOrderDetailPayload = {
  __typename?: 'PurchaseOrderDetailPayload';
  /** Categoria del producto */
  categoria: Maybe<Scalars['String']['output']>;
  /** Numero de cajas solicitadas por la sala o cliente en la orden de compra */
  cjFis: Maybe<Scalars['String']['output']>;
  /** Codigo o identificador del producto */
  codigoBasis: Maybe<Scalars['String']['output']>;
  /** Estado del articulo */
  edoArciculo: Maybe<Scalars['String']['output']>;
  /** URL de la imagen del producto */
  imagen: Maybe<Scalars['String']['output']>;
  /** Nombre del producto */
  nombLargo: Maybe<Scalars['String']['output']>;
};

/** Ordenes de compra */
export type PurchaseOrderPayload = {
  __typename?: 'PurchaseOrderPayload';
  /** Arreglo de las categorias involucradas en las órdenes de compra */
  categories: Array<Scalars['String']['output']>;
  /** Codigo o identificador de la sala o cliente */
  clte: Maybe<Scalars['String']['output']>;
  /** Nombre de la sala o cliente */
  clteNombre: Maybe<Scalars['String']['output']>;
  /** Fecha de actualizacion */
  fecAct: Maybe<Scalars['String']['output']>;
  /** Fecha de despacho de la orden de compra */
  fecDespacho: Maybe<Scalars['String']['output']>;
  hsAct: Maybe<Scalars['String']['output']>;
  /** Nombre del ejecutivo */
  nombreVendedor: Maybe<Scalars['String']['output']>;
  /** Numero de la orden de compra */
  oc: Maybe<Scalars['String']['output']>;
  or: Maybe<Scalars['String']['output']>;
  /** detalle del pedido */
  pedidoDetail: Array<PedidoDetailDataPayload>;
  /** Cantidad de cajas que se deben despachar segun los productos solicitados en la orden de compra */
  totalCajas: Scalars['Float']['output'];
  /** Cantidad de pallets necesarios para transportar todos los productos solicitados por la sala o cliente */
  totalPaletas: Scalars['Float']['output'];
  /** Identificador del usuario que elimino la orden de compra */
  usuarioElimino: Maybe<Scalars['String']['output']>;
  /** Codigo del ejecutivo */
  vendedor: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  categories: CategoriesPaged;
  /** Servicio que devuelve los clientes o salas registrados en el sistema */
  customers: CustomersPaged;
  getAllCustomers: GetAllCustomersPayload;
  /** Servicio que devuelve las aplicaciones configuradas */
  getApplications: GetApplicationPayload;
  /** Servicio que devuelve las sucursales */
  getBranchs: GetBranchsPayload;
  /** Servicio que devuelve la información de formatos y exhibisiones asociados a la revisión del tracking de visita */
  getBranchsWithCatalogues: GetBranchsWithCataloguesPayload;
  /** Servicio que devuelve el historico de presupuestos */
  getBudgetHistory: GetBudgetHistoryPayload;
  /** Obtener presupuestos y sus detalles */
  getBudgets: GetBudgetsPayload;
  /** Servicio que devuelve la información de cadem B2B, stock fantasma y venta cero */
  getCademB2B: GetCademB2BPayload;
  /** Servicio que devuelve el detalle de un catalogo */
  getCatalogueDetails: GetCatalogueDetailsPayload;
  getCatalogueFiltersData: StockFiltersData;
  getCataloguePatron: GetCataloguePatronPayload;
  /** Servicio que devuelve los catalogos registrados en el sistema */
  getCatalogues: GetCataloguesPayload;
  /** Servicio obtiene la información de catálogos sin agrupamiento */
  getCataloguesWithoutGroup: GetCataloguesPayload;
  getCategoriesCatalogue: GetCategoriesCataloguePayload;
  /** Servicio que retorna las categorias de las exhibiciones */
  getCategoriesExhibition: GetCategoriesExhibitionPayload;
  /** Servicio que devuelve los datos para el detalle de salas (ordenes de compra, preventa, fillrate, catalogos y exhibiciones) */
  getCustomerSummaryInfo: CustomerSummaryInfoResponse;
  /** Servicio que devuelve las ordenes de compra que posee una sala o clientes junto con el total de ellas */
  getCustomersOrdersTotals: CustomersOrdersResponse;
  /** Obtiene el detalle del stock de un producto. La busqueda se realiza por SKU */
  getDetailStockBySku: GetDetailStockBySkuPayload;
  /** Servicio que devuelve el listado del stock de productos pertenecientes a una sucursal */
  getDetailStockProduct: GetDetailStockProductPayload;
  /** Servicio que devuelve los productos imprescindibles registrados en el sistema */
  getEssentialProduct: GetEssentialProductPayload;
  /** Servicio que devuelve todas las exhibiciones registradas */
  getExhibitions: GetExhibitionsPayload;
  /** Servicio que devuelve todas las exhibiciones asociadas a una sala o cliente */
  getExhibitionsByClient: GetExhibitionsByClientPayload;
  /** Servicio que devuelve el detalle del fillrate */
  getFillrateDetails: GetFillRateDetailsPayload;
  /** Servicio que devuelve la informacion del fillrate general */
  getFillrateGeneral: GetFillRateGeneralPayload;
  /** Servicio que devuelve el fillrate semanal de una sala o cliente */
  getFillrateWeekly: GetFillRateWeeklyPayload;
  /** Servicio obtiene los distintos formatos de los productos por categoria */
  getFormatsByCategories: GetFormatsByCategoriesPayload;
  /** Servicio que devuelve la información de ayuda de la app, videos y documentos */
  getHelpDocuments: GetHelpDocumentsPayload;
  /** Servicio que obtiene los mensajes de inbox */
  getInboxMessages: GetInboxMessagesPayload;
  /** Servicio que devuelve los indicadores segun opción (Volumen CU, Formato CU, Foco estratégico) */
  getIndicators: GetIndicatorsPayload;
  /** Servicio que devuelve la información de formatos y exhibisiones asociados a la revisión del tracking de visita */
  getInfoTrackingByCategories: GetInfoTrackingByCategoriesPayload;
  getNotaRedMarcaIndicador: GetNotaRedMarcaIndicadorPayload;
  getNotaRedMarcas: GetNotaRedMarcasPayload;
  /** Servicio que devuelve las ordenes de compra consideradas en la medicion del fillrate semanal de una sala o cliente */
  getOCFillrateWeek: GetOcFillRateWeekPayload;
  /** Servicio que devuelve las opciones en base al tipo de indicador */
  getOptionsByIndicator: GetOptionsByIndicatorPayload;
  /** Servicio que devuelve la información de las salidas en base a una planta */
  getOutputs: GetOutputsPayload;
  /** Servicio que devuelve las plantas */
  getPlants: GetPlantsPayload;
  /** Servicio que devuelve las ordenes de compra facturadas a una sala o cliente (preventa) */
  getPresales: GetPresalesPayload;
  /** Servicio que devuelve el detalle de las ordenes de compra facturadas (preventa) */
  getPresalesDetails: PresalesPayload;
  /** Servicio que retorna las categorias de las exhibiciones */
  getProblemOptionsReview: GetProblemOptionsReviewPayload;
  /** Servicio que devuelve el detalle de un producto */
  getProductDetail: GetProductDetailPayload;
  /** Servicio que devuelve las ordenes de compra de una fecha dada y asociadas a una sala o cliente o un numero de orden de compra */
  getPurchaseOrders: GetPurchaseOrderPayload;
  /** Servicio que devuelve las ordenes de compra de una fecha dada y asociadas a una sala o cliente */
  getPurchaseOrdersByClient: GetPurchaseOrderPayload;
  /** Servicio que devuelve el detalle de una orden de compra segun el numero de orden de compra */
  getPurchaseOrdersById: GetPurchaseOrderDetailPayload;
  /** Servicio qque devuelve la Nota Red de una sala o cliente */
  getRedNote: RedNoteResponse;
  /** Servicio que devuelve el valor mensual de la nota red de una sala o cliente */
  getRedNoteMonth: RedNoteMonthResponse;
  /** Servicio que devuelve la información de móvil de ventas */
  getSalesMobile: GetSalesMobilePayload;
  /** Servicio que devuelve las estadisticas de revisión del tracking de visita */
  getStatisticsByCategories: GetStatisticsByCategoriesPayload;
  getStockFiltersData: StockFiltersData;
  /** Servicio que devuelve las sucursales asociadas a un ejecutivo */
  getSucursales: GenericDataList;
  /** Servicio que devuelve la informacion resumida del stock de las sucursales asociadas a un ejecutivo */
  getTotalStock: GetTotalStockPayload;
  /** Servicio obtiene el tracking activo para un cliente */
  getTrackingActive: GetTrackingActivePayload;
  getTrackingCatalogues: GetTrackingCataloguesPayload;
  /** Servicio obtiene el tracking activo para un cliente */
  getTrackingReports: GetTrackingReportsPayload;
  /** Servicio que devuelve la información de los ejecutivos en base a una planta */
  getUserInfoByPlant: GetUserInfoByPlantPayload;
  /** Servicio que devuelve el listado de productos registrados en el sistema */
  products: ProductsPaged;
  /** Servicio para realizar el refrescamiento del token */
  refreshToken: RefreshTokenResponse;
  /** Servicio para solicitar un nuevo RefreshToken */
  rotateToken: RotateTokenResponse;
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  pagination: PaginationInput;
};


export type QueryCustomersArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  pagination: PaginationInput;
};


export type QueryGetBranchsArgs = {
  getBranchsInput: GetBranchsInput;
};


export type QueryGetBudgetHistoryArgs = {
  getBudgetHistoryInput: GetBudgetHistoryInput;
};


export type QueryGetBudgetsArgs = {
  getBudgetsInput: GetBudgetsInput;
};


export type QueryGetCademB2BArgs = {
  getCademB2BInput: GetCademB2BInput;
};


export type QueryGetCatalogueDetailsArgs = {
  getCatalogueDetailsInput: GetCatalogueDetailsInput;
};


export type QueryGetCataloguesArgs = {
  getCataloguesInput: GetCataloguesInput;
};


export type QueryGetCataloguesWithoutGroupArgs = {
  getCataloguesWithoutGroupInput: GetCataloguesWithoutGroupInput;
};


export type QueryGetCustomerSummaryInfoArgs = {
  customerInput?: InputMaybe<CustomerInput>;
};


export type QueryGetCustomersOrdersTotalsArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetDetailStockBySkuArgs = {
  getDetailStockBySkuInput: GetDetailStockBySkuInput;
};


export type QueryGetDetailStockProductArgs = {
  getDetailStockProductInput: GetDetailStockProductInput;
};


export type QueryGetEssentialProductArgs = {
  getEssentialProductsInput: GetEssentialProductsInput;
};


export type QueryGetExhibitionsArgs = {
  getExhibitionsInput: GetExhibitionsInput;
};


export type QueryGetExhibitionsByClientArgs = {
  codClient: Scalars['Float']['input'];
};


export type QueryGetFillrateDetailsArgs = {
  getFullRateDetailsInput: GetFullRateDetailsInput;
};


export type QueryGetFillrateGeneralArgs = {
  getFillRateGeneralInput: GetFillRateGeneralInput;
};


export type QueryGetFillrateWeeklyArgs = {
  getFillRateWeeklyInput: GetFillRateWeeklyInput;
};


export type QueryGetFormatsByCategoriesArgs = {
  getFormatsByCategoriesInput: GetFormatsByCategoriesInput;
};


export type QueryGetInboxMessagesArgs = {
  getInboxMessagesInput: GetInboxMessagesInput;
};


export type QueryGetIndicatorsArgs = {
  getIndicatorsInput: GetIndicatorsInput;
};


export type QueryGetInfoTrackingByCategoriesArgs = {
  getInfoTrackingByCategoriesInput: GetInfoTrackingByCategoriesInput;
};


export type QueryGetNotaRedMarcaIndicadorArgs = {
  getNotaRedMarcaIndicadorInput: GetNotaRedMarcaIndicadorInput;
};


export type QueryGetNotaRedMarcasArgs = {
  getNotaRedMarcasInput: GetNotaRedMarcasInput;
};


export type QueryGetOcFillrateWeekArgs = {
  getOCFullRateWeekInput: GetOcFullRateWeekInput;
};


export type QueryGetOptionsByIndicatorArgs = {
  getOptionsByIndicatorInput: GetOptionsByIndicatorInput;
};


export type QueryGetOutputsArgs = {
  getOutputsInput: GetOutputsInput;
};


export type QueryGetPlantsArgs = {
  getPlantsInput: GetPlantsInput;
};


export type QueryGetPresalesArgs = {
  getPresalesInput: GetPresalesInput;
};


export type QueryGetPresalesDetailsArgs = {
  getPresalesInput: GetPresalesInput;
};


export type QueryGetProductDetailArgs = {
  codigoBasis: Scalars['Float']['input'];
};


export type QueryGetPurchaseOrdersArgs = {
  getPurchaseOrderInput: GetPurchaseOrderInput;
};


export type QueryGetPurchaseOrdersByClientArgs = {
  getPurchaseOrderInput: GetPurchaseOrderInput;
};


export type QueryGetPurchaseOrdersByIdArgs = {
  getPurchaseOrderInput: GetPurchaseOrderInput;
};


export type QueryGetRedNoteArgs = {
  codClient?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRedNoteMonthArgs = {
  codClient?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetSalesMobileArgs = {
  getSalesMobileInput: GetSalesMobileInput;
};


export type QueryGetStatisticsByCategoriesArgs = {
  getStatisticsByCategoriesInput: GetStatisticsByCategoriesInput;
};


export type QueryGetTotalStockArgs = {
  getTotalStockInput: GetTotalStockInput;
};


export type QueryGetTrackingActiveArgs = {
  getTrackingActiveInput: GetTrackingActiveInput;
};


export type QueryGetTrackingCataloguesArgs = {
  getTrackingCataloguesInput: GetTrackingCataloguesInput;
};


export type QueryGetTrackingReportsArgs = {
  getTrackingReportsInput: GetTrackingReportsInput;
};


export type QueryGetUserInfoByPlantArgs = {
  getUserInfoByPlantInput: GetUserInfoByPlantInput;
};


export type QueryProductsArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  pagination: PaginationInput;
};

/** Nota Red de una sala o cliente */
export type RedNoteResponse = {
  __typename?: 'RedNoteResponse';
  /** Nota Red de una sala o cliente */
  data: Maybe<RedNoteResponseData>;
  /** Detalle del error */
  error: Maybe<ServiceErrorPayload>;
};

/** Detalle de la Nota Red */
export type RedNoteResponseData = {
  __typename?: 'RedNoteResponseData';
  /** Indica si subio, bajo o mantuvo su valor en relacion con la semana anterior */
  estadoActual: Maybe<Scalars['String']['output']>;
  /** Bandera que, si esta encendida, indica si la medicion es reciente, es decir, si tiene una antiguiedad menor a 2 dias. Si esta apagada, indica que la medicion tiene mas de 2 dias */
  nuevo: Maybe<Scalars['Float']['output']>;
  /** Porcentaje de cumplimiento segun la evaluacion */
  porcentajeNotaRed: Maybe<Scalars['String']['output']>;
  /** Nota Red de las 3 o 4 semanas anteriores a la actual */
  rednote: Maybe<Array<RedNote>>;
  /** Indica la semana de la que se ensta mostrando la medicion */
  semanaActual: Maybe<Scalars['String']['output']>;
};

/** Represents la respuesta del Refresh Token */
export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  /** Token de acceso */
  token: Scalars['String']['output'];
};

/** Representa el input para registrar un nuevo dispositivo de usuario para poder recibir notificaciones por medio de el servicio expuesto por Embonor */
export type RegisterDeviceInput = {
  /** Canal donde se enviará la notificación */
  appId?: InputMaybe<Scalars['String']['input']>;
  /** Token de Firebase del destinatario */
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Representa el payload para registrar un nuevo dispositivo de usuario para poder recibir notificaciones por medio de el servicio expuesto por Embonor */
export type RegisterDevicePayload = {
  __typename?: 'RegisterDevicePayload';
  /** Estado de respuesta sobre el registro de dispositivo para el envío de notificación */
  data: Maybe<GenericResponsePayload>;
  /** Error de respuesta sobre el registro de dispositivo para el envío de notificación */
  error: Maybe<ServiceErrorPayload>;
};

/** Datos con el resultado de la busqueda de productos */
export type ReviewType = {
  __typename?: 'ReviewType';
  /** Cantidad de productos en la pagina actual */
  id: Scalars['Float']['output'];
  /** Cantidad total de productos encontrados segun los parametros de busqueda */
  nombre: Scalars['String']['output'];
};

/** Represents reviews tracking data */
export type ReviewsTrackingPayload = {
  __typename?: 'ReviewsTrackingPayload';
  catalogoId: Maybe<Scalars['String']['output']>;
  categoria: Scalars['String']['output'];
  comentario: Maybe<CommentData>;
  exhibicionId: Maybe<Scalars['String']['output']>;
  exhibicionType: Maybe<Scalars['String']['output']>;
  formato: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  marca: Maybe<Scalars['String']['output']>;
  mecanica: Maybe<Scalars['String']['output']>;
  patron: Maybe<Scalars['String']['output']>;
  producto: Maybe<Scalars['String']['output']>;
  status: StatusReview;
  tipoRevision: ReviewType;
};

/** Represents la respuesta del Rotate Token */
export type RotateTokenResponse = {
  __typename?: 'RotateTokenResponse';
  /** Refresh Token */
  refreshToken: Scalars['String']['output'];
};

/** Represents Sales Mobile Data */
export type SalesMobileData = {
  __typename?: 'SalesMobileData';
  aa: Scalars['String']['output'];
  actual: Scalars['String']['output'];
  porcentaje: Scalars['String']['output'];
};

/** Fechas del móvil de ventas */
export type SalesMobileDatesPayload = {
  __typename?: 'SalesMobileDatesPayload';
  /** Acumulado año anterior fecha de inicio */
  acumuladoAaInicio: Maybe<Scalars['String']['output']>;
  /** Acumulado año anterior fecha de término */
  acumuladoAaTermino: Maybe<Scalars['String']['output']>;
  /** Acumulado actual fecha de inicio */
  acumuladoActualInicio: Maybe<Scalars['String']['output']>;
  /** Acumulado actual fecha de término */
  acumuladoActualTermino: Maybe<Scalars['String']['output']>;
  /** Móvil año anterior fecha de inicio */
  movilAaInicio: Maybe<Scalars['String']['output']>;
  /** Móvil año anterior fecha de término */
  movilAaTermino: Maybe<Scalars['String']['output']>;
  /** Móvil actual fecha de inicio */
  movilActualInicio: Maybe<Scalars['String']['output']>;
  /** Móvil actual fecha de término */
  movilActualTermino: Maybe<Scalars['String']['output']>;
};

/** Representa parámetros de entrada de para guardar detalle de presupuesto */
export type SaveBudgetDataInput = {
  abiChile: Scalars['String']['input'];
  aguas: Scalars['String']['input'];
  capel: Scalars['String']['input'];
  diageo: Scalars['String']['input'];
  emailVendedor: Scalars['String']['input'];
  ncbs: Scalars['String']['input'];
  nombreVendedor: Scalars['String']['input'];
  santaRita: Scalars['String']['input'];
  ssd: Scalars['String']['input'];
  sucursalId: Scalars['String']['input'];
  zrt: Scalars['String']['input'];
};

/** Representa parámetros de entrada para guardar un presupuesto */
export type SaveBudgetInput = {
  data: Array<SaveBudgetDataInput>;
  plantId: Scalars['String']['input'];
};

/** Representa la respuesta de guardar presupuesto */
export type SaveBudgetPayload = {
  __typename?: 'SaveBudgetPayload';
  error: Maybe<ServiceErrorPayload>;
  response: Maybe<GenericResponsePayload>;
};

/** Represents a input for save Exhibition */
export type SaveExhibitionInput = {
  categoryId: Scalars['Float']['input'];
  clientCode: Scalars['String']['input'];
  exhibitionType: Scalars['String']['input'];
  inicio: Scalars['String']['input'];
  marcaId: Scalars['Float']['input'];
  product: Scalars['String']['input'];
  termino: Scalars['String']['input'];
};

/** Represents an save exhibition payload */
export type SaveExhibitionPayload = {
  __typename?: 'SaveExhibitionPayload';
  error: Maybe<ServiceErrorPayload>;
  response: Maybe<GenericResponsePayload>;
};

/** Represents a input for save product packing catalogue */
export type SaveProductPackingCatalogueInput = {
  catalogueId: Scalars['Float']['input'];
  mecanica: Scalars['String']['input'];
  packing: Scalars['String']['input'];
  patron?: InputMaybe<Scalars['String']['input']>;
  productIds: Array<Scalars['Float']['input']>;
};

/** Represents an save product to packing catalogue payload */
export type SaveProductToPackingCataloguePayload = {
  __typename?: 'SaveProductToPackingCataloguePayload';
  error: Maybe<ServiceErrorPayload>;
  response: Maybe<GenericResponsePayload>;
};

/** Represents an save tracking review payload */
export type SaveTrackingReviewData = {
  __typename?: 'SaveTrackingReviewData';
  response: Maybe<GenericResponsePayload>;
  trackingId: Maybe<Scalars['Float']['output']>;
};

/** Represents a input for save Tracking review */
export type SaveTrackingReviewInput = {
  catalogoId?: InputMaybe<Scalars['Float']['input']>;
  categoria: Scalars['String']['input'];
  clientCode: Scalars['String']['input'];
  comentario?: InputMaybe<ComentarioInput>;
  exhibicionId?: InputMaybe<Scalars['Float']['input']>;
  formato?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<Array<Scalars['Upload']['input']>>;
  marca?: InputMaybe<Scalars['String']['input']>;
  mecanica?: InputMaybe<Scalars['String']['input']>;
  patron?: InputMaybe<Scalars['String']['input']>;
  producto?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  tipoExhibicion?: InputMaybe<Scalars['String']['input']>;
  tipoRevision: Scalars['String']['input'];
};

/** Represents an save tracking review payload */
export type SaveTrackingReviewPayload = {
  __typename?: 'SaveTrackingReviewPayload';
  data: Maybe<SaveTrackingReviewData>;
  error: Maybe<ServiceErrorPayload>;
};

/** Representa el input para enviar un mensaje de inbox utilizando el servicio expuesto por Embonor */
export type SendInboxMessageInput = {
  /** Contenido del mensaje de inbox */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Categoría del mensaje de inbox puede tomar los siguientes valores: comunicados, campañas o lanzamientos */
  category?: InputMaybe<Scalars['String']['input']>;
  /** ID de referencia de la imagen que se encuentra creada en el media service */
  image?: InputMaybe<Scalars['Float']['input']>;
  /** ID de destinatario */
  target?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Título del mensaje de inbox */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Representa el payload para enviar un mensaje de inbox utilizando el servicio expuesto por Embonor */
export type SendInboxMessagePayload = {
  __typename?: 'SendInboxMessagePayload';
  /** Estado de respuesta sobre el envío de la notificación */
  data: Maybe<GenericResponsePayload>;
  /** Error de respuesta sobre el envío de la notificación */
  error: Maybe<ServiceErrorPayload>;
};

/** Representa el input para enviar una notificación push utilizando el servicio expuesto por Embonor */
export type SendPushNotificationInput = {
  /** Contenido de la notificación */
  body?: InputMaybe<Scalars['String']['input']>;
  /** ID de referencia de la imagen que se encuentra creada en el media service */
  image?: InputMaybe<Scalars['Float']['input']>;
  /** Título de la notificación */
  title?: InputMaybe<Scalars['String']['input']>;
  /** ID de usuario a quién se le enviará la notificación */
  userId?: InputMaybe<Scalars['String']['input']>;
  /** ID de destinatario */
  userReference?: InputMaybe<Scalars['String']['input']>;
};

/** Representa el payload para enviar una notificación push utilizando el servicio expuesto por Embonor */
export type SendPushNotificationPayload = {
  __typename?: 'SendPushNotificationPayload';
  /** Estado de respuesta sobre el envío de la notificación */
  data: Maybe<GenericResponsePayload>;
  /** Error de respuesta sobre el envío de la notificación */
  error: Maybe<ServiceErrorPayload>;
};

/** Representacion del error */
export type ServiceErrorPayload = {
  __typename?: 'ServiceErrorPayload';
  /** Detalle del error */
  details: Scalars['String']['output'];
};

/** Datos con el resultado de la busqueda de productos */
export type StatusReview = {
  __typename?: 'StatusReview';
  /** Cantidad de productos en la pagina actual */
  id: Scalars['Float']['output'];
  /** Cantidad total de productos encontrados segun los parametros de busqueda */
  nombre: Scalars['String']['output'];
};

/** Datos con el resultado de la busqueda de productos */
export type StatusTracking = {
  __typename?: 'StatusTracking';
  /** Cantidad de productos en la pagina actual */
  id: Scalars['Float']['output'];
  /** Cantidad total de productos encontrados segun los parametros de busqueda */
  nombre: Scalars['String']['output'];
};

/** Represents Filters Data for Stocks Entity */
export type StockFiltersData = {
  __typename?: 'StockFiltersData';
  filtersList: Array<TSelect>;
};

/** Defines stock type */
export enum StockType {
  /** todos los productos */
  All = 'ALL',
  /** Bajo stock */
  LowStock = 'LOW_STOCK',
  /** Sin stock */
  WithoutStock = 'WITHOUT_STOCK',
  /** Con stock */
  WithStock = 'WITH_STOCK'
}

/** Represents TSelect Filters Data Entity */
export type TSelect = {
  __typename?: 'TSelect';
  id: Scalars['Float']['output'];
  options: Array<TSelectOptions>;
  placeholder: Scalars['String']['output'];
};

/** Represents simple data for options Entity */
export type TSelectOptions = {
  __typename?: 'TSelectOptions';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TrackingCatalogueInfoPayload = {
  __typename?: 'TrackingCatalogueInfoPayload';
  /** Información del catálogo */
  catalogueInfo: Maybe<GetCataloguesDataPayload>;
  /** Estado de tracking en curso del catálogo */
  status: Maybe<Scalars['String']['output']>;
};

/** Información de los catálogos de la visita en curso */
export type TrackingCataloguesPayload = {
  __typename?: 'TrackingCataloguesPayload';
  /** Información de Catálogos del Tracking */
  cataloguesList: Maybe<Array<TrackingCatalogueInfoPayload>>;
  /** Indica disponibilidad de desacarga de reporte para el catálogo del tracking */
  reportAvailable: Maybe<Scalars['Boolean']['output']>;
};

/** Datos de la revisión de tracking de visita */
export type TrackingCategoriesPayload = {
  __typename?: 'TrackingCategoriesPayload';
  nameCategory: Maybe<Scalars['String']['output']>;
  qtyExhibitions: Maybe<Scalars['Float']['output']>;
  qtyFormats: Maybe<Scalars['Float']['output']>;
  qtyFormatsApproved: Maybe<Scalars['Float']['output']>;
  qtyFormatsCommented: Maybe<Scalars['Float']['output']>;
  qtyFormatsPending: Maybe<Scalars['Float']['output']>;
  qtyTotalFormats: Maybe<Scalars['Float']['output']>;
  statusCategory: Maybe<Scalars['String']['output']>;
};

/** Representa parámetros de entrada para obtener los presupuestos y su detalle */
export type UpdateBudgetInput = {
  budget?: InputMaybe<BudgetInput>;
};

/** Representa la respuesta al actualizar un presupuesto */
export type UpdateBudgetPayload = {
  __typename?: 'UpdateBudgetPayload';
  data: Maybe<MutationResponsePayload>;
  error: Maybe<ServiceErrorPayload>;
};

/** Representa parámetros de entrada para actualizar detalle de presupuesto */
export type UpdateDetailBudgetInput = {
  abiChile?: InputMaybe<Scalars['String']['input']>;
  aguas?: InputMaybe<Scalars['String']['input']>;
  capel?: InputMaybe<Scalars['String']['input']>;
  diageo?: InputMaybe<Scalars['String']['input']>;
  emailVendedor?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  ncbs?: InputMaybe<Scalars['String']['input']>;
  nombreVendedor?: InputMaybe<Scalars['String']['input']>;
  santaRita?: InputMaybe<Scalars['String']['input']>;
  ssd?: InputMaybe<Scalars['String']['input']>;
  sucursalId?: InputMaybe<Scalars['String']['input']>;
  zrt?: InputMaybe<Scalars['String']['input']>;
};

/** Representa la respuesta al actualizar un detalle presupuesto */
export type UpdateDetailBudgetPayload = {
  __typename?: 'UpdateDetailBudgetPayload';
  data: Maybe<MutationResponsePayload>;
  error: Maybe<ServiceErrorPayload>;
};

/** Representa el input para actualizar un mensaje de inbox utilizando el servicio expuesto por Embonor */
export type UpdateInboxMessageInput = {
  /** Formato UUID. El cual representa el indentificador del UserMessage del mensaje de inbox */
  pairId?: InputMaybe<Scalars['String']['input']>;
  /** Estado de los mensajes de inbox puede tomar los siguientes valores: created, delivered, opened, deleted */
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Representa el payload para actualizar un mensaje de inbox utilizando el servicio expuesto por Embonor */
export type UpdateInboxMessagePayload = {
  __typename?: 'UpdateInboxMessagePayload';
  /** Estado de respuesta sobre la actualización del mensaje de inbox */
  data: Maybe<GenericResponsePayload>;
  /** Error de respuesta sobre la actualización del mensaje de inbox */
  error: Maybe<ServiceErrorPayload>;
};

/** Represents a input for update Tracking review */
export type UpdateTrackingReviewInput = {
  comentario?: InputMaybe<ComentarioInput>;
  imageFile?: InputMaybe<Array<Scalars['Upload']['input']>>;
  status: Scalars['String']['input'];
  trackingReviewId?: InputMaybe<Scalars['Float']['input']>;
};

/** Representa los datos de entrada para subir archivos */
export type UploadFileInput = {
  /** Identificador de la categoria */
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  /** Archivo a subir */
  document: Scalars['Upload']['input'];
  /** Tipo de archivo */
  fileType: FileType;
};

/** Represents an payload generic response */
export type UploadFilePayload = {
  __typename?: 'UploadFilePayload';
  error: Maybe<ServiceErrorPayload>;
  errorsFile: Maybe<Array<ErrorBodyPayload>>;
  response: Maybe<GenericResponsePayload>;
};

/** Representa los datos de entrada para subir documentos de facturas */
export type UploadInvoicesAaInput = {
  invoices?: InputMaybe<Array<InvoceAaFileInput>>;
};

/** Represents video data */
export type VideoData = {
  __typename?: 'VideoData';
  description: Scalars['String']['output'];
  duration: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  link: Scalars['String']['output'];
  title: Scalars['String']['output'];
  visible: Scalars['Boolean']['output'];
};

/** Datos del fillrate semanal de una sala o cliente */
export type WeeklyInfo = {
  __typename?: 'WeeklyInfo';
  /** Fecha de finalizacion de la medicion */
  dateEnd: Maybe<Scalars['String']['output']>;
  /** Fecha de inicio de la medicion */
  dateIni: Maybe<Scalars['String']['output']>;
  /** Valor porcentual del fillrate semanal para una sala o cliente */
  percentage: Maybe<Scalars['String']['output']>;
  /** Numero de la semana del año a la que pertenece la medicion */
  week: Maybe<Scalars['String']['output']>;
};

/** Datos de la nota red */
export type RedNote = {
  __typename?: 'redNote';
  /** Indica si subio, bajo o mantuvo su valor en relacion con la semana anterior */
  estado: Scalars['String']['output'];
  /** Fecha de la medicion */
  fecha: Scalars['String']['output'];
  /** Valor porcentual de la nota red */
  notaRed: Scalars['String']['output'];
  /** Semana de la medicion */
  semana: Scalars['String']['output'];
};

/** Datos mensuales de la nota red */
export type RedNoteMonth = {
  __typename?: 'redNoteMonth';
  /** Indica si subio, bajo o mantuvo su valor en relacion con el mes anterior */
  estado: Scalars['String']['output'];
  /** Mes de la medicion */
  mes: Scalars['String']['output'];
  /** Valor porcentual de la nota red */
  porcentajeNotaRed: Scalars['String']['output'];
  /** Datos de la nota red */
  redNote: Array<RedNote>;
};

/** Datos mensuales de la nota red */
export type RedNoteMonthDataResponse = {
  __typename?: 'redNoteMonthDataResponse';
  error: Maybe<ServiceErrorPayload>;
  /** Indica si subio, bajo o mantuvo su valor en relacion con la semana anterior */
  estadoActual: Scalars['String']['output'];
  /** Valor porcentual de la nota red */
  porcentajeNotaRed: Scalars['String']['output'];
  /** Datos mensuales de la nota red */
  rednoteMonth: Array<RedNoteMonth>;
  /** Semana en la que se esta realizando la medicion */
  semanaActual: Scalars['String']['output'];
};

/** Nota Red mensual */
export type RedNoteMonthResponse = {
  __typename?: 'redNoteMonthResponse';
  /** Nota Red mensual */
  data: Maybe<RedNoteMonthDataResponse>;
  /** Detalle del error */
  error: Maybe<ServiceErrorPayload>;
};

export type GetCataloguesWithoutGroupQueryVariables = Exact<{
  getCataloguesWithoutGroupInput: GetCataloguesWithoutGroupInput;
}>;


export type GetCataloguesWithoutGroupQuery = { __typename?: 'Query', getCataloguesWithoutGroup: { __typename?: 'GetCataloguesPayload', data: Array<{ __typename?: 'GetCataloguesDataPayload', id: number | null | undefined, catalogo: string | null | undefined, inicio: string | null | undefined, termino: string | null | undefined, categoria: string | null | undefined, cadena: string | null | undefined, bandera: string | null | undefined, mecanica: string | null | undefined, patron: string | null | undefined, empaque: string | null | undefined }> | null | undefined, pageInfo: { __typename?: 'PageInfoPayload', records: number, totalRecords: number, offset: number, currentPage: number | null | undefined, totalPages: number | null | undefined } | null | undefined } };

export type GetTrackingCataloguesQueryVariables = Exact<{
  getTrackingCataloguesInput: GetTrackingCataloguesInput;
}>;


export type GetTrackingCataloguesQuery = { __typename?: 'Query', getTrackingCatalogues: { __typename?: 'GetTrackingCataloguesPayload', data: { __typename?: 'TrackingCataloguesPayload', reportAvailable: boolean | null | undefined, cataloguesList: Array<{ __typename?: 'TrackingCatalogueInfoPayload', status: string | null | undefined, catalogueInfo: { __typename?: 'GetCataloguesDataPayload', id: number | null | undefined, bandera: string | null | undefined, cadena: string | null | undefined, catalogo: string | null | undefined, categoria: string | null | undefined, inicio: string | null | undefined, termino: string | null | undefined } | null | undefined }> | null | undefined } | null | undefined } };

export type GetStatisticsByCategoriesQueryVariables = Exact<{
  getStatisticsByCategoriesInput: GetStatisticsByCategoriesInput;
}>;


export type GetStatisticsByCategoriesQuery = { __typename?: 'Query', getStatisticsByCategories: { __typename?: 'GetStatisticsByCategoriesPayload', data: { __typename?: 'GetStatisticsDataPayload', nameCatalogue: string | null | undefined, catalogueId: number | null | undefined, categories: Array<{ __typename?: 'TrackingCategoriesPayload', nameCategory: string | null | undefined, qtyFormats: number | null | undefined, qtyExhibitions: number | null | undefined, qtyTotalFormats: number | null | undefined, qtyFormatsPending: number | null | undefined, qtyFormatsApproved: number | null | undefined, qtyFormatsCommented: number | null | undefined, statusCategory: string | null | undefined }> | null | undefined } | null | undefined, error: { __typename?: 'ServiceErrorPayload', details: string } | null | undefined } };

export type GetCustomersQueryVariables = Exact<{
  pagination: PaginationInput;
  filter?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCustomersQuery = { __typename?: 'Query', customers: { __typename?: 'CustomersPaged', items: number, totalItems: number, totalPages: number, customers: Array<{ __typename?: 'Customer', codClient: number, rut: string, razonSocial: string, dfrecProg: string, nomreFantasia: string, dcadena: string, dsucursal: string, calle: string, numero: string, dregion: string, ccadenaNacionales: string, ccadena: string, dprovincia: string, dcomuna: string, dplanta: string, coordX: string, coordY: string, dcadenaNacionales: string, dgrupoNacionales: string, csalaSupermercado: string }> } };

export type GetCustomerSummaryInfoQueryVariables = Exact<{
  customerInput?: InputMaybe<CustomerInput>;
}>;


export type GetCustomerSummaryInfoQuery = { __typename?: 'Query', getCustomerSummaryInfo: { __typename?: 'CustomerSummaryInfoResponse', totalCatalogs: number, totalExhibitions: number, totalInvoices: number, totalOrders: number, fillRateLastWeek: { __typename?: 'FillRateSummaryInfoResponse', dateEnd: string, dateIni: string, percentage: string, week: string, flag: string } | null | undefined } };

export type FinishTrackingMutationVariables = Exact<{
  finishTrackingInput: FinishTrackingInput;
}>;


export type FinishTrackingMutation = { __typename?: 'Mutation', finishTracking: { __typename?: 'FinishTrackingPayload', response: { __typename?: 'GenericResponsePayload', statusCode: number, message: string } | null | undefined, error: { __typename?: 'ServiceErrorPayload', details: string } | null | undefined } };


export const GetCataloguesWithoutGroupDocument = gql`
    query GetCataloguesWithoutGroup($getCataloguesWithoutGroupInput: GetCataloguesWithoutGroupInput!) {
  getCataloguesWithoutGroup(
    getCataloguesWithoutGroupInput: $getCataloguesWithoutGroupInput
  ) {
    data {
      id
      catalogo
      inicio
      termino
      categoria
      cadena
      bandera
      mecanica
      patron
      empaque
    }
    pageInfo {
      records
      totalRecords
      offset
      currentPage
      totalPages
    }
  }
}
    `;

/**
 * __useGetCataloguesWithoutGroupQuery__
 *
 * To run a query within a React component, call `useGetCataloguesWithoutGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCataloguesWithoutGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCataloguesWithoutGroupQuery({
 *   variables: {
 *      getCataloguesWithoutGroupInput: // value for 'getCataloguesWithoutGroupInput'
 *   },
 * });
 */
export function useGetCataloguesWithoutGroupQuery(baseOptions: Apollo.QueryHookOptions<GetCataloguesWithoutGroupQuery, GetCataloguesWithoutGroupQueryVariables> & ({ variables: GetCataloguesWithoutGroupQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCataloguesWithoutGroupQuery, GetCataloguesWithoutGroupQueryVariables>(GetCataloguesWithoutGroupDocument, options);
      }
export function useGetCataloguesWithoutGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCataloguesWithoutGroupQuery, GetCataloguesWithoutGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCataloguesWithoutGroupQuery, GetCataloguesWithoutGroupQueryVariables>(GetCataloguesWithoutGroupDocument, options);
        }
export function useGetCataloguesWithoutGroupSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCataloguesWithoutGroupQuery, GetCataloguesWithoutGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCataloguesWithoutGroupQuery, GetCataloguesWithoutGroupQueryVariables>(GetCataloguesWithoutGroupDocument, options);
        }
export type GetCataloguesWithoutGroupQueryHookResult = ReturnType<typeof useGetCataloguesWithoutGroupQuery>;
export type GetCataloguesWithoutGroupLazyQueryHookResult = ReturnType<typeof useGetCataloguesWithoutGroupLazyQuery>;
export type GetCataloguesWithoutGroupSuspenseQueryHookResult = ReturnType<typeof useGetCataloguesWithoutGroupSuspenseQuery>;
export type GetCataloguesWithoutGroupQueryResult = Apollo.QueryResult<GetCataloguesWithoutGroupQuery, GetCataloguesWithoutGroupQueryVariables>;
export const GetTrackingCataloguesDocument = gql`
    query GetTrackingCatalogues($getTrackingCataloguesInput: GetTrackingCataloguesInput!) {
  getTrackingCatalogues(getTrackingCataloguesInput: $getTrackingCataloguesInput) {
    data {
      cataloguesList {
        status
        catalogueInfo {
          id
          bandera
          cadena
          catalogo
          categoria
          inicio
          termino
        }
      }
      reportAvailable
    }
  }
}
    `;

/**
 * __useGetTrackingCataloguesQuery__
 *
 * To run a query within a React component, call `useGetTrackingCataloguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrackingCataloguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrackingCataloguesQuery({
 *   variables: {
 *      getTrackingCataloguesInput: // value for 'getTrackingCataloguesInput'
 *   },
 * });
 */
export function useGetTrackingCataloguesQuery(baseOptions: Apollo.QueryHookOptions<GetTrackingCataloguesQuery, GetTrackingCataloguesQueryVariables> & ({ variables: GetTrackingCataloguesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrackingCataloguesQuery, GetTrackingCataloguesQueryVariables>(GetTrackingCataloguesDocument, options);
      }
export function useGetTrackingCataloguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrackingCataloguesQuery, GetTrackingCataloguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrackingCataloguesQuery, GetTrackingCataloguesQueryVariables>(GetTrackingCataloguesDocument, options);
        }
export function useGetTrackingCataloguesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTrackingCataloguesQuery, GetTrackingCataloguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTrackingCataloguesQuery, GetTrackingCataloguesQueryVariables>(GetTrackingCataloguesDocument, options);
        }
export type GetTrackingCataloguesQueryHookResult = ReturnType<typeof useGetTrackingCataloguesQuery>;
export type GetTrackingCataloguesLazyQueryHookResult = ReturnType<typeof useGetTrackingCataloguesLazyQuery>;
export type GetTrackingCataloguesSuspenseQueryHookResult = ReturnType<typeof useGetTrackingCataloguesSuspenseQuery>;
export type GetTrackingCataloguesQueryResult = Apollo.QueryResult<GetTrackingCataloguesQuery, GetTrackingCataloguesQueryVariables>;
export const GetStatisticsByCategoriesDocument = gql`
    query getStatisticsByCategories($getStatisticsByCategoriesInput: GetStatisticsByCategoriesInput!) {
  getStatisticsByCategories(
    getStatisticsByCategoriesInput: $getStatisticsByCategoriesInput
  ) {
    data {
      nameCatalogue
      catalogueId
      categories {
        nameCategory
        qtyFormats
        qtyExhibitions
        qtyTotalFormats
        qtyFormatsPending
        qtyFormatsApproved
        qtyFormatsCommented
        statusCategory
      }
    }
    error {
      details
    }
  }
}
    `;

/**
 * __useGetStatisticsByCategoriesQuery__
 *
 * To run a query within a React component, call `useGetStatisticsByCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticsByCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticsByCategoriesQuery({
 *   variables: {
 *      getStatisticsByCategoriesInput: // value for 'getStatisticsByCategoriesInput'
 *   },
 * });
 */
export function useGetStatisticsByCategoriesQuery(baseOptions: Apollo.QueryHookOptions<GetStatisticsByCategoriesQuery, GetStatisticsByCategoriesQueryVariables> & ({ variables: GetStatisticsByCategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatisticsByCategoriesQuery, GetStatisticsByCategoriesQueryVariables>(GetStatisticsByCategoriesDocument, options);
      }
export function useGetStatisticsByCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatisticsByCategoriesQuery, GetStatisticsByCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatisticsByCategoriesQuery, GetStatisticsByCategoriesQueryVariables>(GetStatisticsByCategoriesDocument, options);
        }
export function useGetStatisticsByCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetStatisticsByCategoriesQuery, GetStatisticsByCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStatisticsByCategoriesQuery, GetStatisticsByCategoriesQueryVariables>(GetStatisticsByCategoriesDocument, options);
        }
export type GetStatisticsByCategoriesQueryHookResult = ReturnType<typeof useGetStatisticsByCategoriesQuery>;
export type GetStatisticsByCategoriesLazyQueryHookResult = ReturnType<typeof useGetStatisticsByCategoriesLazyQuery>;
export type GetStatisticsByCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetStatisticsByCategoriesSuspenseQuery>;
export type GetStatisticsByCategoriesQueryResult = Apollo.QueryResult<GetStatisticsByCategoriesQuery, GetStatisticsByCategoriesQueryVariables>;
export const GetCustomersDocument = gql`
    query GetCustomers($pagination: PaginationInput!, $filter: String) {
  customers(pagination: $pagination, filter: $filter) {
    items
    totalItems
    totalPages
    customers {
      codClient
      rut
      razonSocial
      dfrecProg
      nomreFantasia
      dcadena
      dsucursal
      calle
      numero
      dregion
      ccadenaNacionales
      ccadena
      dprovincia
      dcomuna
      dplanta
      coordX
      coordY
      dcadenaNacionales
      dgrupoNacionales
      csalaSupermercado
    }
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables> & ({ variables: GetCustomersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
      }
export function useGetCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export function useGetCustomersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersSuspenseQueryHookResult = ReturnType<typeof useGetCustomersSuspenseQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetCustomerSummaryInfoDocument = gql`
    query GetCustomerSummaryInfo($customerInput: CustomerInput) {
  getCustomerSummaryInfo(customerInput: $customerInput) {
    totalCatalogs
    totalExhibitions
    totalInvoices
    totalOrders
    fillRateLastWeek {
      dateEnd
      dateIni
      percentage
      week
      flag
    }
  }
}
    `;

/**
 * __useGetCustomerSummaryInfoQuery__
 *
 * To run a query within a React component, call `useGetCustomerSummaryInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerSummaryInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerSummaryInfoQuery({
 *   variables: {
 *      customerInput: // value for 'customerInput'
 *   },
 * });
 */
export function useGetCustomerSummaryInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomerSummaryInfoQuery, GetCustomerSummaryInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerSummaryInfoQuery, GetCustomerSummaryInfoQueryVariables>(GetCustomerSummaryInfoDocument, options);
      }
export function useGetCustomerSummaryInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerSummaryInfoQuery, GetCustomerSummaryInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerSummaryInfoQuery, GetCustomerSummaryInfoQueryVariables>(GetCustomerSummaryInfoDocument, options);
        }
export function useGetCustomerSummaryInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCustomerSummaryInfoQuery, GetCustomerSummaryInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCustomerSummaryInfoQuery, GetCustomerSummaryInfoQueryVariables>(GetCustomerSummaryInfoDocument, options);
        }
export type GetCustomerSummaryInfoQueryHookResult = ReturnType<typeof useGetCustomerSummaryInfoQuery>;
export type GetCustomerSummaryInfoLazyQueryHookResult = ReturnType<typeof useGetCustomerSummaryInfoLazyQuery>;
export type GetCustomerSummaryInfoSuspenseQueryHookResult = ReturnType<typeof useGetCustomerSummaryInfoSuspenseQuery>;
export type GetCustomerSummaryInfoQueryResult = Apollo.QueryResult<GetCustomerSummaryInfoQuery, GetCustomerSummaryInfoQueryVariables>;
export const FinishTrackingDocument = gql`
    mutation FinishTracking($finishTrackingInput: FinishTrackingInput!) {
  finishTracking(finishTrackingInput: $finishTrackingInput) {
    response {
      statusCode
      message
    }
    error {
      details
    }
  }
}
    `;
export type FinishTrackingMutationFn = Apollo.MutationFunction<FinishTrackingMutation, FinishTrackingMutationVariables>;

/**
 * __useFinishTrackingMutation__
 *
 * To run a mutation, you first call `useFinishTrackingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFinishTrackingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [finishTrackingMutation, { data, loading, error }] = useFinishTrackingMutation({
 *   variables: {
 *      finishTrackingInput: // value for 'finishTrackingInput'
 *   },
 * });
 */
export function useFinishTrackingMutation(baseOptions?: Apollo.MutationHookOptions<FinishTrackingMutation, FinishTrackingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FinishTrackingMutation, FinishTrackingMutationVariables>(FinishTrackingDocument, options);
      }
export type FinishTrackingMutationHookResult = ReturnType<typeof useFinishTrackingMutation>;
export type FinishTrackingMutationResult = Apollo.MutationResult<FinishTrackingMutation>;
export type FinishTrackingMutationOptions = Apollo.BaseMutationOptions<FinishTrackingMutation, FinishTrackingMutationVariables>;