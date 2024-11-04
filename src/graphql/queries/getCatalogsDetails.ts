import { gql } from '@apollo/client';

const getCatalogDetails = gql`
  query GetProductDetail($getCatalogueDetailsInput: GetCatalogueDetailsInput!) {
    getCatalogueDetails(getCatalogueDetailsInput: $getCatalogueDetailsInput) {
      data {
        catalogueDetails {
          id
          catalogo
          inicio
          termino
          cadena
          bandera
          mecanica
          patron
          formato
        }
        catalogueProducts {
          codigoBasis
          nombLargo
          botellasPorCaja
          cjsXPall
          isEssential
          imagen
        }
      }
    }
  }
`;

export default getCatalogDetails;
