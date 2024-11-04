import { gql } from '@apollo/client';

const UpdateTrackingReview = gql`
  mutation UpdateTrackingReview($updateTrackingReviewInput: UpdateTrackingReviewInput!) {
    updateTrackingReview(updateTrackingReviewInput: $updateTrackingReviewInput) {
      data {
        trackingId
        response {
          message
          statusCode
        }
      }
    }
  }
`;

export default UpdateTrackingReview;
