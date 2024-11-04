import React from 'react';
import { render } from '@testing-library/react-native';
import DownloadOrder from './DownloadOrder';
import { TOrders } from 'types/orders';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@styles/themes';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('../../../assets/icons/icon-download.svg', () => 'IconDownload');
const ordersData: TOrders = {
  oc: 12345,
  clte: 3434324,
  clteNombre: 'Sala de ejemplo',
  fecPdo: '2023-07-26',
  fecDespacho: '2023-07-28',
  hsAct: '14:00',
  totalCajas: 50,
  edoPdo: 'Programado',
  totalPaletas: 10,
};
describe('DownloadOrder', () => {
  test('should render "Descarga la orden de compra" when orders is null', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <DownloadOrder handlePress={() => {}} orders={null} />,
      </ThemeProvider>,
    );

    expect(
      getByText('Descarga la orden de compra en\nPDF directamente a tu dispositivo.'),
    ).toBeTruthy();
  });
});
