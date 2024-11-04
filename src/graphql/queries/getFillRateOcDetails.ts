import { gql } from '@apollo/client';

const getFillRateOcDetails = gql`
  query GetFillrateDetails($getFullRateDetailsInput: GetFullRateDetailsInput!) {
    getFillrateDetails(getFullRateDetailsInput: $getFullRateDetailsInput) {
      data {
        oc
        qtyReasonForNonDelivery
        client
        emission
        vcto
        productDetails {
          status
          sku
          description
          image
          cjsRequested
          cjsInvoiced
        }
      }
      error {
        details
      }
    }
  }
`;

export default getFillRateOcDetails;
