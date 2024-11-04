import { gql } from '@apollo/client';

const getCatalogueFilterData = gql`
  query GetCatalogueFiltersData {
    getCatalogueFiltersData {
      filtersList {
        id
        placeholder
        options {
          label
          value
        }
      }
    }
  }
`;
export default getCatalogueFilterData;
