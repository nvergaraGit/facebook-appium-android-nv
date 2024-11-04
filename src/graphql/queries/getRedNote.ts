import { gql } from '@apollo/client';

const getNoteRed = gql`
  query GetRedNote($date: String, $codClient: String) {
    getRedNote(date: $date, codClient: $codClient) {
      error {
        details
      }
      data {
        nuevo
        porcentajeNotaRed
        estadoActual
        rednote {
          estado
          fecha
          notaRed
          semana
        }
        semanaActual
      }
    }
  }
`;

export default getNoteRed;
