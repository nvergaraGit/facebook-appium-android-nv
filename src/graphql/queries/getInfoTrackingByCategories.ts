import { gql } from '@apollo/client';

const getInfoTrackingByCategories = gql`
  query ($getInfoTrackingByCategoriesInput: GetInfoTrackingByCategoriesInput!) {
    getInfoTrackingByCategories(
      getInfoTrackingByCategoriesInput: $getInfoTrackingByCategoriesInput
    ) {
      data {
        nombreCatalogo
        nombreCategoria
        formatosCatalogo {
          status
          patron
          formato
          marca
          mecanica
          trackingReviewId
          catalogueId
          comentario {
            imagenes
            tipoComentario {
              id
              nombre
            }
            comentario
          }
        }
        exhibiciones {
          id
          tipo
          termino
          status
          descripcion
          marca
          inicio
          termino
          trackingReviewId
          comentario {
            imagenes
            tipoComentario {
              id
              nombre
            }
            comentario
          }
        }
      }
      error {
        details
      }
    }
  }
`;

export default getInfoTrackingByCategories;
