import { gql } from '@apollo/client';

const getRedNoteMonth = gql`
  query GetRedNoteMonth($date: String, $codClient: String) {
    getRedNoteMonth(date: $date, codClient: $codClient) {
      data {
        semanaActual
        porcentajeNotaRed
        estadoActual
        rednoteMonth {
          mes
          porcentajeNotaRed
          estado
          redNote {
            semana
            fecha
            notaRed
            estado
          }
        }
      }
      error {
        details
      }
    }
  }
`;

export default getRedNoteMonth;
