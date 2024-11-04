import { gql } from '@apollo/client';

const getIndicators = gql`
  query GetIndicators($getIndicatorsInput: GetIndicatorsInput!) {
    getIndicators(getIndicatorsInput: $getIndicatorsInput) {
      data {
        actual {
          mes
          mesAnterior
          porcentaje
        }
        acumulado {
          acumuladoActual
          acumuladoAnterior
          porcentaje
        }
        fechasIndicadores {
          actualAaInicio
          actualAaTermino
          actualMesInicio
          actualMesTermino
          acumuladoAaInicio
          acumuladoAaTermino
          acumuladoActualInicio
          acumuladoActualTermino
        }
      }
      error {
        details
      }
    }
  }
`;

export default getIndicators;
