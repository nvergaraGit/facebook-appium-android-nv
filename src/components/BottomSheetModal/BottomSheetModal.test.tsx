import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BottomSheet from './BottomSheetModal';
jest.useFakeTimers();
import { ThemeProvider } from 'styled-components/native';
import { Text } from 'react-native-paper';
import { theme } from '@styles/themes';

const setIsVisibleMock = jest.fn();

describe('BottomSheetModal', () => {
  test('renders correctly when isVisible is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <BottomSheet isVisible={true} setIsVisible={setIsVisibleMock}>
          <Text>Contenido del BottomSheet</Text>
        </BottomSheet>
      </ThemeProvider>,
    );
  });
  test('show  correctly when isVisible is true', () => {
    const setIsVisibleMock = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <BottomSheet setIsVisible={setIsVisibleMock} isVisible={true}>
          <Text>Contenido del BottomSheet</Text>
        </BottomSheet>
      </ThemeProvider>,
    );

    const bottomSheet = getByTestId('bottom-sheet');
    expect(bottomSheet).toBeTruthy();
  });
  test('hide when isVisible is false', () => {
    const setIsVisibleMock = jest.fn();

    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <BottomSheet setIsVisible={setIsVisibleMock} isVisible={false}>
          <Text>Contenido del BottomSheet</Text>
        </BottomSheet>
      </ThemeProvider>,
    );

    const bottomSheet = queryByTestId('bottom-sheet');

    expect(bottomSheet).toBeNull();
  });
});
