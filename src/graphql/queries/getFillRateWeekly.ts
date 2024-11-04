import { gql } from '@apollo/client';

const getFillRateWeekly = gql`
  query GetFullrateWeekly($getFullRateWeeklyInput: GetFillRateWeeklyInput!) {
    getFillrateWeekly(getFillRateWeeklyInput: $getFullRateWeeklyInput) {
      data {
        weeklyInfo {
          week
          percentage
          dateIni
          dateEnd
        }
        percentageAccumulated
      }
      error {
        details
      }
    }
  }
`;

export default getFillRateWeekly;
