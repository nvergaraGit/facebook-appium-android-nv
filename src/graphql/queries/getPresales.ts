import { gql } from '@apollo/client';

const getPresales = gql`
  query GetPresales($getPresalesInput: GetPresalesInput!) {
    getPresales(getPresalesInput: $getPresalesInput) {
      presales {
        dia
        mes
        annio
        fecha
        clte
        oc
        camion
        viaje
        total
        totalCajas
        totalPaletas
      }
    }
  }
`;

export default getPresales;
