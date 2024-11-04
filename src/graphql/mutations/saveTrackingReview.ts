import { gql } from '@apollo/client';

const SaveTrackingReview = gql`
  mutation saveTrackingReview($saveTrackingReviewInput: SaveTrackingReviewInput!) {
    saveTrackingReview(saveTrackingReviewInput: $saveTrackingReviewInput) {
      data {
        response {
          message
          statusCode
        }
        trackingId
      }
      error {
        details
      }
    }
  }
`;

export default SaveTrackingReview;
