import { gql } from '@apollo/client';

const getSalesFloor = gql`
  query Customers($pagination: PaginationInput!, $filter: String) {
    customers(pagination: $pagination, filter: $filter) {
      items
      totalItems
      totalPages
      customers {
        codClient
        rut
        razonSocial
        dfrecProg
        nomreFantasia
        dcadena
        dsucursal
        calle
        numero
        dregion
        ccadenaNacionales
        ccadena
        dprovincia
        dcomuna
        dplanta
        coordX
        coordY
        dcadenaNacionales
        dgrupoNacionales
        csalaSupermercado
      }
    }
  }
`;

export default getSalesFloor;
