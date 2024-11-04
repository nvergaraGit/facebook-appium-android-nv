import React from 'react';
import { render } from '@testing-library/react-native';
import SalesFloorCard from '.';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@styles/themes';
import { TSalesFloor } from 'types/salesFloors';
jest.mock('../../../assets/icons/address-icon.svg', () => 'IconAdressMock');
jest.mock('../../../assets/icons/icon-right-arrow.svg', () => 'IconRightArrowMock');

describe('SalesFloorCard', () => {
  test('should render without problem', () => {
    const salesFloor: TSalesFloor = {
      calle: 'VICENTE MENDEZ   ',
      codClient: 1122360,
      coordX: '224526',
      coordY: '5946313',
      dcadena: 'TREBOL                        ',
      dcomuna: 'CHILLAN',
      dfrecProg: 'Mar-Jue-Sab',
      dprovincia: 'NUBLE',
      dregion: 'Biobío',
      dsucursal: 'CHILLAN',
      nomreFantasia: 'TREBOL CHILLAN',
      numero: '1545',
      razonSocial: 'COM.AMAR HERMANOS Y CIA LTDA',
      rut: '77349320',
    };
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <SalesFloorCard salesFloor={salesFloor} handleDetails={() => {}} />
      </ThemeProvider>,
    );

    const salesFloorCard = getByTestId('sales-floor-card');
    expect(salesFloorCard).toBeDefined();
    const codClientText = getByText(`Código de la sala: ${salesFloor.codClient}`);
    expect(codClientText).toBeDefined();

    const descriptionText = getByText(salesFloor.nomreFantasia);
    expect(descriptionText).toBeDefined();

    const cardStreetText = getByText(
      `${salesFloor.calle.trim()} ${salesFloor.numero}, ${salesFloor.dcomuna}`,
    );
    expect(cardStreetText).toBeDefined();
  });
});
