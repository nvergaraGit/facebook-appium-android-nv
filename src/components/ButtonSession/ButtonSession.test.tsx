import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonSession from './ButtonSession';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@styles/themes';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
const handlePressMock = jest.fn();
describe('ButtonSession', () => {
  test('ButtonSession should render without problem', async () => {
    await render(
      <ThemeProvider theme={theme}>
        <ButtonSession handlePress={handlePressMock} title="Test Button" />
      </ThemeProvider>,
    );
  });
  test('should invokes handlePres function', async () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonSession handlePress={handlePressMock} title="Test Button" />
      </ThemeProvider>,
    );
    const button = getByText('Test Button');

    fireEvent.press(button);
    await Promise.resolve();

    expect(handlePressMock).toHaveBeenCalled();
  });

  test('disables button when isDisabled prop is true', async () => {
    const handlePressMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ButtonSession isDisabled={true} handlePress={handlePressMock} title="Test Button" />
      </ThemeProvider>,
    );
    const button = getByTestId('idButton');
    fireEvent.press(button);
    expect(handlePressMock).not.toHaveBeenCalled();
  });
  test('applies correct style when isShowMsg prop is true', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ButtonSession
          handlePress={handlePressMock}
          title="Test Button"
          isShowMsg={true}
          width="200px"
        />
        ,
      </ThemeProvider>,
    );

    const authButton = getByTestId('auth-button');
    const style = authButton.props.style;
    expect(style.marginTop).toBe(0);
  });
  test('applies correct style when isShowMsg prop is false', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ButtonSession
          handlePress={handlePressMock}
          title="Test Button"
          isShowMsg={false}
          width="200px"
        />
        ,
      </ThemeProvider>,
    );

    const authButton = getByTestId('auth-button');
    const style = authButton.props.style;
    expect(style.marginTop).toBe(32);
  });
  test('applies custom width when width prop is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ButtonSession
          handlePress={handlePressMock}
          title="Test Button"
          isShowMsg={true}
          width="300px"
        />
      </ThemeProvider>,
    );

    const authContainerButton = getByTestId('idButton');
    const style = authContainerButton.props.style;

    expect(style.width).toBe(300);
  });

  test('applies default width when width prop is not provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ButtonSession handlePress={handlePressMock} title="Test Button" isShowMsg={true} />
      </ThemeProvider>,
    );

    const authContainerButton = getByTestId('idButton');
    const style = authContainerButton.props.style;

    expect(style.width).toBe('100%');
  });
});
