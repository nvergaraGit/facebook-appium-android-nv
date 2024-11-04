import { gql } from '@apollo/client';

const getExhibitionsByClient = gql`
  query GetExhibitionsByClient($codClient: Float!) {
    getExhibitionsByClient(codClient: $codClient) {
      exhibitions {
        categoria
        descripcion
        tipo
        inicio
        marca
        termino
      }
    }
  }
`;

export default getExhibitionsByClient;
