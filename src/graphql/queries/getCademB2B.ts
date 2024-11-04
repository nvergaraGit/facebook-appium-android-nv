import { gql } from '@apollo/client';

const getCademB2B = gql`
  query GetCademB2B($getCademB2BInput: GetCademB2BInput!) {
    getCademB2B(getCademB2BInput: $getCademB2BInput) {
      data {
        stockFantasma {
          imagen
          nombre
          productos {
            descripcion
            imagen
            sku
            isEssential
            totalCjs
          }
        }
        ventaCero {
          imagen
          nombre
          productos {
            descripcion
            imagen
            sku
            isEssential
            totalCjs
          }
        }
      }
    }
  }
`;

export default getCademB2B;
