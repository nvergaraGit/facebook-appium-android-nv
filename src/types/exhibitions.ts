export type TExhibitions = {
  categoria: string;
  tipo: string;
  descripcion: string;
  inicio: string;
  marca: string;
  termino: string;
};
export type TExhibitionsQuery = {
  getExhibitionsByClient: {
    exhibitions: TExhibitions[];
  };
};
