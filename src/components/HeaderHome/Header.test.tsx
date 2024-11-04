import React from 'react';
import { render } from '@testing-library/react-native';
import Header from './HeaderHome';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@styles/themes';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
describe('Header', () => {
  test('should render correctly with a title', () => {
    const title = 'Test Title';
    const backgroundColor = '#ff0000';

    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header title={title} backgroundColor={backgroundColor} />,
      </ThemeProvider>,
    );

    const titleElement = getByText(title);
    expect(titleElement).toBeTruthy();
  });
});
