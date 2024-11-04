import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import InputLogin from './InputLogin';
import { theme } from '@styles/themes';

jest.mock('../../../assets/icons/icon-info.svg', () => 'IconInfoMock');
jest.mock('../../../assets/phone.svg', () => 'PhoneMock');
jest.mock('../../../assets/icons/eye-password.svg', () => 'EyePassMock');
jest.mock('../../../assets/icons/close-eye-password.svg', () => 'CloseEyePassMock');
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
describe('InputLogin', () => {
  test('should update username when input changes', () => {
    const setUsername = jest.fn();
    const setPassword = jest.fn();
    const setShowPass = jest.fn();
    const openEmail = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <InputLogin
          username="prueba"
          setUsername={setUsername}
          password="prueba123"
          setPassword={setPassword}
          error={false}
          showPass={false}
          setShowPass={setShowPass}
          handleLogin={jest.fn()}
          openEmail={openEmail}
          invalidCredentials={false}
          setInvalidCredential={jest.fn()}
          setError={jest.fn()}
        />
      </ThemeProvider>,
    );

    const usernameInput = getByTestId('username-input');
    fireEvent.changeText(usernameInput, 'testuser');

    expect(setUsername).toHaveBeenCalledWith('testuser');
  });
});
