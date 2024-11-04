import { gql } from '@apollo/client';

const getStockHome = gql`
  query GetTotalStock($getTotalStockInput: GetTotalStockInput!) {
    getTotalStock(getTotalStockInput: $getTotalStockInput) {
      data {
        branchs {
          branch
          branchCode
          lowStock
          plant
          updatedHour
          withStock
          withoutStock
        }
      }
    }
  }
`;

export default getStockHome;
