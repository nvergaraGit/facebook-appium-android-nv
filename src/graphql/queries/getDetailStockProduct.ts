import { gql } from '@apollo/client';

const getDetailStockProduct = gql`
  query GetDetailStockProduct($getDetailStockProductInput: GetDetailStockProductInput!) {
    getDetailStockProduct(getDetailStockProductInput: $getDetailStockProductInput) {
      pageInfo {
        records
        totalRecords
        offset
        currentPage
        totalPages
      }
      data {
        codigoBasis
        stock
        boxesAvailable
        largeName
        imagen
        isEssential
      }
      error {
        details
      }
    }
  }
`;

export default getDetailStockProduct;
