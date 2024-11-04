import { gql } from '@apollo/client';

const getDetailStockBySku = gql`
  query GetDetailStockBySku($getDetailStockBySkuInput: GetDetailStockBySkuInput!) {
    getDetailStockBySku(getDetailStockBySkuInput: $getDetailStockBySkuInput) {
      data {
        boxesAvailable
        branch
        sku
      }
      error {
        details
      }
    }
  }
`;

export default getDetailStockBySku;
