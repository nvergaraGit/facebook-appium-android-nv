import { gql } from '@apollo/client';

const getFillrateGeneral = gql`
  query GetFillrateGeneral($getFillRateGeneralInput: GetFillRateGeneralInput!) {
    getFillrateGeneral(getFillRateGeneralInput: $getFillRateGeneralInput) {
      data {
        percentageWeekly {
          percentage
          nuevo
          dateIni
          dateEnd
          estado
        }
        percentageMonthly {
          month
          percentage
          estado
        }
        reasonNoDelivery {
          reasonName
          percentage
        }
        fillrateByChain {
          percentage
          chain
        }
      }
      error {
        details
      }
    }
  }
`;

export default getFillrateGeneral;
