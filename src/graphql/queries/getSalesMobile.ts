import { gql } from '@apollo/client';

const GET_SALES_MOBILE = gql`
  query GetSalesMobile($getSalesMobileInput: GetSalesMobileInput!) {
    getSalesMobile(getSalesMobileInput: $getSalesMobileInput) {
      data {
        acumulado {
          aa
          actual
          porcentaje
        }
        fechasMovilVentas {
          acumuladoAaInicio
          acumuladoAaTermino
          acumuladoActualInicio
          acumuladoActualTermino
          movilAaInicio
          movilAaTermino
          movilActualInicio
          movilActualTermino
        }
        movil {
          aa
          actual
          porcentaje
        }
        movilPromedio
      }
    }
  }
`;

export default GET_SALES_MOBILE;
