import { gql } from '@apollo/client';

const FinishTracking = gql`
  mutation FinishTracking($finishTrackingInput: FinishTrackingInput!) {
    finishTracking(finishTrackingInput: $finishTrackingInput) {
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

export default FinishTracking;
