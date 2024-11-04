import { gql } from '@apollo/client';

const getCatalogs = gql`
  query GetCatalogues($getCataloguesInput: GetCataloguesInput!) {
    getCatalogues(getCataloguesInput: $getCataloguesInput) {
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
        totalPages
        currentPage
        offset
        totalRecords
        records
      }
    }
  }
`;

export default getCatalogs;
