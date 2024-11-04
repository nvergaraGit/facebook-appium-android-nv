import { gql } from '@apollo/client';

const getBranchWithCatlaogues = gql`
  query {
    getBranchsWithCatalogues {
      cadenas {
        nombre
        banderas {
          nombre
          tieneCatalogo
        }
      }
      error {
        details
      }
    }
  }
`;

export default getBranchWithCatlaogues;
