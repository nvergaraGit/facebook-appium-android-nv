import { gql } from '@apollo/client';

const getPurchaseOrdersByClient = gql`
  query GetPurchaseOrdersByClient($getPurchaseOrderInput: GetPurchaseOrderInput!) {
    getPurchaseOrdersByClient(getPurchaseOrderInput: $getPurchaseOrderInput) {
      purchaseOrder {
        clte
        clteNombre
        vendedor
        nombreVendedor
        oc
        usuarioElimino
        fecAct
        hsAct
        or
        fecDespacho
        totalCajas
        categories
        totalPaletas
        pedidoDetail {
          fecPdo
          nroPdo
          edoPdo
          detalle {
            codigoBasis
            cjFis
            nombLargo
            imagen
            edoArciculo
            categoria
          }
        }
      }
    }
  }
`;

export default getPurchaseOrdersByClient;
