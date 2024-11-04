import { gql } from '@apollo/client';

const getProducts = gql`
  query ($codigoBasis: Float!) {
    getProductDetail(codigoBasis: $codigoBasis) {
      product {
        codigoBasis
        nombLargo
        botellasPorCaja
        descripcionUniMedidaSuu
        cjsXPall
        descripcionMarcaMkt
        descripcionFormatomkt
        descripcionCategoriamkt
        descripcionFamliamkt
        descripcionEmpaqueMkt
        descripcionRetornaMkt
        descripcionMaterial
        codiBarra
        ean
        dun
        descripcionIla
        descripcionCategoriaIaba
        imagen
      }
    }
  }
`;

export default getProducts;
