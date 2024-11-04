import { gql } from '@apollo/client';
const getProducts = gql`
  query Products($pagination: PaginationInput!, $filter: String) {
    products(pagination: $pagination, filter: $filter) {
      items
      totalPages
      products {
        codigoBasis
        nombLargo
        botellasPorCaja
        imagen
      }
    }
  }
`;

export default getProducts;
