import { gql } from '@apollo/client';

const getFillRateOC = gql`
  query GetOCFillrateWeek($getOcFullRateWeekInput: GetOCFullRateWeekInput!) {
    getOCFillrateWeek(getOCFullRateWeekInput: $getOcFullRateWeekInput) {
      data {
        oc
        status
        requested
        invoiced
        emission
        vcto
      }
      error {
        details
      }
    }
  }
`;

export default getFillRateOC;
