import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from './Loader';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@styles/themes';

describe('Loader component', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Loader loading={false} />
      </ThemeProvider>,
    );

    const loaderText = getByText('Cargando la información del sistema');
    expect(loaderText).toBeTruthy();
  });
  test('displays loading indicator when loading is true', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Loader loading={true} />
      </ThemeProvider>,
    );

    const loadingIndicator = getByTestId('loader-activity-indicator');
    expect(loadingIndicator).toBeTruthy();
  });
  test('does not display loading indicator when loading is false', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Loader loading={false} />
      </ThemeProvider>,
    );

    const loadingIndicator = queryByTestId('loader-activity-indicator');
    expect(loadingIndicator).toBeNull();
  });
});
