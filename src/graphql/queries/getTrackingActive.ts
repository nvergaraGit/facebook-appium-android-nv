import { gql } from '@apollo/client';

const getTrackingActive = gql`
  query ($getTrackingActiveInput: GetTrackingActiveInput!) {
    getTrackingActive(getTrackingActiveInput: $getTrackingActiveInput) {
      data {
        trackingId
        clientId
        status {
          id
          nombre
        }
        reviews {
          catalogoId
        }
      }
      error {
        details
      }
    }
  }
`;

export default getTrackingActive;
