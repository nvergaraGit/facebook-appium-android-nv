import { gql } from '@apollo/client';

const getStockFilterData = gql`
  query GetStockFiltersData {
    getStockFiltersData {
      filtersList {
        placeholder
        id
        options {
          value
          label
        }
      }
    }
  }
`;

export default getStockFilterData;
