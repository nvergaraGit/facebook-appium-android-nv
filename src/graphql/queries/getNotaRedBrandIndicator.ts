import { gql } from '@apollo/client';

const getNotaRedBrandIndicator = gql`
  query getNotaRedMarcaIndicador($getNotaRedMarcaIndicadorInput: GetNotaRedMarcaIndicadorInput!) {
    getNotaRedMarcaIndicador(getNotaRedMarcaIndicadorInput: $getNotaRedMarcaIndicadorInput) {
      data {
        nombreIndicadorMarca
        tipoSovi {
          nombre
          promedioActual
          promedioAnterior
          detalleCategoriaSovi {
            nombre
            promedioActual
            promedioAnterior
          }
        }
        tipoExhibicion {
          id
          descripcionExhibicion
          tipo
        }
        tipoProductos {
          id
          descripcionProducto
        }
      }
      error {
        details
      }
    }
  }
`;

export default getNotaRedBrandIndicator;
