import { gql } from '@apollo/client';

const getPresalesDetails = gql`
  query GetPresalesDetails($getPresalesInput: GetPresalesInput!) {
    getPresalesDetails(getPresalesInput: $getPresalesInput) {
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
      detalle {
        codigoBasis
        nombLargo
        cjFis
        cjUni
      }
      invoices {
        nroDoc
        nroFactura
      }
    }
  }
`;

export default getPresalesDetails;
