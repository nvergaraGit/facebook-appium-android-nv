import { gql } from '@apollo/client';
const getNotaRedMarcas = gql`
  query GetNotaRedMarcas($getNotaRedMarcasInput: GetNotaRedMarcasInput!) {
    getNotaRedMarcas(getNotaRedMarcasInput: $getNotaRedMarcasInput) {
      notaRedMarcas {
        id
        nombre
        promedio
        fechaInicio
        estado
        fechaTermino
        indicadores {
          id
          nombre
          estado
          promedio
          peso
          fechaInicio
          fechaTermino
        }
      }
    }
  }
`;

export default getNotaRedMarcas;
