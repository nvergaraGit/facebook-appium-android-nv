import React from 'react';
import { render } from '@testing-library/react-native';
import ProductsCard from '.';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@styles/themes';
import { TProducts } from 'types/products';
import { PRODUCTOS } from '@libraries/constants';
jest.mock('../../../assets/icons/empty-image.svg', () => 'IconEmptyImageMock');
jest.mock('../../../assets/icons/icon-right-arrow.svg', () => 'IconRightArrowMock');

describe('ProductsCard', () => {
  const viewType = PRODUCTOS;
  test('should render without problem', () => {
    const products: TProducts = {
      codigoBasis: 1454,
      nombLargo: 'Jumbo',
      botellasPorCaja: '12',
    };
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <ProductsCard products={products} handleDetails={() => {}} viewType={PRODUCTOS} />
      </ThemeProvider>,
    );

    const productsCard = getByTestId('products-card');
    expect(productsCard).toBeDefined();
    const skuText = getByText(`SKU: ${products.codigoBasis}`);
    expect(skuText).toBeDefined();

    const descriptionText = getByText(products.nombLargo);
    expect(descriptionText).toBeDefined();
  });
});
