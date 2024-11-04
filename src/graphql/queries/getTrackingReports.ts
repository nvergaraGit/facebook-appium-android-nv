import { gql } from '@apollo/client';

const getTrackingReports = gql`
  query ($getTrackingReportsInput: GetTrackingReportsInput!) {
    getTrackingReports(getTrackingReportsInput: $getTrackingReportsInput) {
      data {
        trackingId
        trackingDate
      }
      error {
        details
      }
    }
  }
`;

export default getTrackingReports;
