import { gql } from '@apollo/client';

const InitTracking = gql`
  mutation initTracking($initTrackingInput: InitTrackingInput!) {
    initTracking(initTrackingInput: $initTrackingInput) {
      response {
        statusCode
        message
      }
      error {
        details
      }
    }
  }
`;

export default InitTracking;
