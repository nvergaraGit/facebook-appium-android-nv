import { gql } from '@apollo/client';

const getFormatByCategories = gql`
  query GetFormatsByCategories($getFormatsByCategoriesInput: GetFormatsByCategoriesInput!) {
    getFormatsByCategories(getFormatsByCategoriesInput: $getFormatsByCategoriesInput) {
      data {
        categorias {
          cantidadFormatos
          categoria
          formatos {
            data {
              mecanica
              patron
              marca
            }
            formato
          }
        }
        fechaFin
        fechaInicio
        idCatalogo
        nombreCatalogo
      }
    }
  }
`;

export default getFormatByCategories;
