import { gql } from '@apollo/client';

const getCataloguesWithoutGroup = gql`
  query GetCataloguesWithoutGroup(
    $getCataloguesWithoutGroupInput: GetCataloguesWithoutGroupInput!
  ) {
    getCataloguesWithoutGroup(getCataloguesWithoutGroupInput: $getCataloguesWithoutGroupInput) {
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

export default getCataloguesWithoutGroup;
