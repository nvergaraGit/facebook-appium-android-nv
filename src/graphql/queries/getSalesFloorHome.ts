import { gql } from '@apollo/client';

const getSalesFloorHome = gql`
  query GetCustomersOrdersResume($date: String) {
    getCustomersOrdersTotals(date: $date) {
      lastUpdate
      totalPurchaseOrders
      customersOrdersTotal {
        codClient
        rut
        razonSocial
        nomreFantasia
        email
        purchaseOrderQty
        calle
        numero
        dcadena
        dcomuna
        dfrecProg
        dplanta
        dprovincia
        dregion
        dsucursal
        ultimavisita
        cCadenaNacionales
        ccadena
        coordX
        coordY
        csalaSupermercado
      }
    }
  }
`;

export default getSalesFloorHome;
