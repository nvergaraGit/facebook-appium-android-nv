import React from 'react';
import { render } from '@testing-library/react-native';
import NoResults from './NoResults';
import { Text } from 'react-native';
import EmptyImage from '@assets/icons/empty-image.svg';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@styles/themes';

// Simulación del componente de icono
jest.mock('../../../assets/icons/empty-image.svg', () => 'IconEmptyMock');

describe('NoResults', () => {
  test('renders correctly', () => {
    const mockIcon = <EmptyImage testID="mock-icon" />;
    const mockChildren = <Text testID="mock-children">No results found</Text>;

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NoResults icon={mockIcon} children={mockChildren} />
      </ThemeProvider>,
    );
    const icon = getByTestId('mock-icon');
    const children = getByTestId('mock-children');

    expect(icon).toBeTruthy();
    expect(children).toBeTruthy();
  });
});
