import { gql } from '@apollo/client';

const getOptionsByIndicator = gql`
  query getOptionsByIndicator($getOptionsByIndicatorInput: GetOptionsByIndicatorInput!) {
    getOptionsByIndicator(getOptionsByIndicatorInput: $getOptionsByIndicatorInput) {
      data {
        id
        option
      }
      error {
        details
      }
    }
  }
`;

export default getOptionsByIndicator;
