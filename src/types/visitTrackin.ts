export type TCategory = {
  nameCategory: string;
  qtyExhibitions: number;
  qtyFormats: number;
  qtyFormatsApproved: number;
  qtyFormatsCommented: number;
  qtyFormatsPending: number;
  qtyTotalFormats: number;
  statusCategory: string;
};

export type Data = {
  catalogueId: number;
  categories: TCategory[];
  nameCatalogue: string;
};

export type GetStatisticsResponse = {
  data: Data;
  error: null | string;
};

export type TStatisticsByCategories = {
  getStatisticsByCategories: GetStatisticsResponse;
};

export type ProblemOption = {
  id: number;
  option: string;
};

export type TrackingItem = {
  trackingDate: string;
  trackingId: number;
};

export type GetProblemOptionsReviewResponse = {
  data: ProblemOption[][];
};

export type TOptionsProblems = {
  getProblemOptionsReview: GetProblemOptionsReviewResponse;
};

export type TComments = {
  comentario: string;
  tipoComentarioId: number;
  imagenes: string[] | null;
};

export type Catalogs = {
  formato: string;
  marca: string;
  mecanica: string;
  patron: string;
  status: string;
  trackingReviewId: number;
  catalogueId: number;
};

export type Exhibitions = {
  id: number;
  tipo: string;
  marca: string;
  termino: string;
  status: string;
  descripcion: string;
  trackingReviewId: number;
};

export type InfoTrackingByCategoriesData = {
  exhibiciones: Exhibitions[];
  formatosCatalogo: Catalogs[];
  nombreCatalogo: string;
  nombreCategoria: string;
};

export type InfoTrackingByCategories = {
  getInfoTrackingByCategories: {
    data: InfoTrackingByCategoriesData;
    error: null;
  };
};

export type TSaveReview = {
  clientCode: string;
  status: string;
  tipoRevision: string;
  tipoExhibicion?: string;
  producto: string;
  marca: string;
  categoria: string;
  exhibicionId?: number;
  catalogoId?: number;
  patron: string;
  mecanica: string;
  formato: string;
  comentario: TComments;
};

export type Status = {
  id: number;
  nombre: string;
};

export type TrackingData = {
  trackingId: number;
  clientId: string;
  status: Status;
  reviews: TReviews[];
};

export type TReviews = {
  catalogoId: number;
};

export type ErrorDetails = {
  details: string;
};

export type ErrorWithDetails = {
  error: ErrorDetails;
};

export type ErrorWithoutDetails = {
  error: null;
};

export type ErrorResponse = ErrorWithDetails | ErrorWithoutDetails;

export type TrackingResponse = {
  getTrackingActive: {
    data: TrackingData;
    error: ErrorResponse;
  };
};
