import { gql } from '@apollo/client';

const getPurchaseOrders = gql`
  query GetPurchaseOrders($getPurchaseOrderInput: GetPurchaseOrderInput!) {
    getPurchaseOrders(getPurchaseOrderInput: $getPurchaseOrderInput) {
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
        totalPaletas
        categories
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

export default getPurchaseOrders;
