import { gql } from '@apollo/client';

const getStatisticsByCategories = gql`
  query ($getStatisticsByCategoriesInput: GetStatisticsByCategoriesInput!) {
    getStatisticsByCategories(getStatisticsByCategoriesInput: $getStatisticsByCategoriesInput) {
      data {
        nameCatalogue
        catalogueId
        categories {
          nameCategory
          qtyFormats
          qtyExhibitions
          qtyTotalFormats
          qtyFormatsPending
          qtyFormatsApproved
          qtyFormatsCommented
          statusCategory
        }
      }
      error {
        details
      }
    }
  }
`;

export default getStatisticsByCategories;
