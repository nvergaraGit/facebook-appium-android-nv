import { gql } from '@apollo/client';

const getPurchaseOrdersDetails = gql`
  query GetPurchaseOrdersById($getPurchaseOrderInput: GetPurchaseOrderInput!) {
    getPurchaseOrdersById(getPurchaseOrderInput: $getPurchaseOrderInput) {
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
        detalle {
          codigoBasis
          cjFis
          nombLargo
          imagen
        }
        pedidoDetail {
          edoPdo
          fecPdo
          nroPdo
        }
      }
    }
  }
`;

export default getPurchaseOrdersDetails;
