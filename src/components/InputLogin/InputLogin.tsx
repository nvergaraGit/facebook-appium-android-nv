import React from 'react';
import {
  LoginContainerInputSession,
  AuthContainerInput,
  AuthForgotContainer,
  AuthForgotContainerText,
  AuthForgotEmail,
  AuthForgotText,
} from './styles';
import IconInfo from '../../../assets/icons/icon-info.svg';
import Phone from '../../../assets/phone.svg';
import EyePass from '../../../assets/icons/eye-password.svg';
import CloseEyePass from '../../../assets/icons/close-eye-password.svg';
import ButtonSession from '@components/ButtonSession/ButtonSession';
import {
  AuthContainerErrorMessage,
  AuthContainerInputPass,
  AuthErrorMessage,
  AuthInputSession,
  AuthShowPassContainer,
  AuthText,
  AuthTextContainer,
  AuthTextValidate,
} from '@styles/StylesLogin/StylesLogin';
interface Props {
  username: string;
  setUsername: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  error: boolean;
  showPass: boolean;
  setShowPass: (value: boolean) => void;
  handleLogin: () => Promise<void>;
  openEmail: () => void;
  invalidCredentials: boolean;
  setInvalidCredential: (error: boolean) => void;
  setError: (error: boolean) => void;
}
const InputLogin = ({
  username,
  setUsername,
  password,
  setPassword,
  error,
  handleLogin,
  showPass,
  setShowPass,
  openEmail,
  invalidCredentials,
  setInvalidCredential,
  setError,
}: Props) => {
  const disableButton = username.length > 60 || password.length > 20;
  const showError = disableButton || error;
  const showIvalidCredentials = invalidCredentials && username.length > 0 && password.length > 0;
  const showMsg = showError || showIvalidCredentials || disableButton;
  const showCompletFields = (username.length === 0 || password.length === 0) && !disableButton;

  return (
    <LoginContainerInputSession>
      <AuthContainerInput>
        <AuthTextContainer>
          <AuthText>Correo electrónico</AuthText>
          <AuthTextValidate show={username.length > 60 || error}>*</AuthTextValidate>
        </AuthTextContainer>
        <AuthInputSession
          autoCapitalize="none"
          validateField={username.length > 60 || error}
          onChangeText={(text) => {
            setUsername(text), setInvalidCredential(false), setError(false);
          }}
          testID="username-input"
          value={username}
        />
      </AuthContainerInput>

      <AuthContainerInputPass validateField={password.length > 20 || error}>
        <AuthTextContainer>
          <AuthText>Contraseña</AuthText>
          <AuthTextValidate show={password.length > 20 || error}>*</AuthTextValidate>
        </AuthTextContainer>
        <AuthInputSession
          pass={true}
          onChangeText={(text) => {
            setPassword(text), setInvalidCredential(false), setError(false);
          }}
          secureTextEntry={showPass}
          value={password}
        />
        <AuthShowPassContainer onPress={() => setShowPass(!showPass)}>
          {showPass ? <EyePass width={22} height={19} /> : <CloseEyePass width={22} height={19} />}
        </AuthShowPassContainer>
      </AuthContainerInputPass>

      {showMsg && (
        <AuthContainerErrorMessage>
          <IconInfo />

          <AuthErrorMessage>
            {showIvalidCredentials && 'Tu usuario o contraseña son incorrectos'}
            {showCompletFields && 'Por favor completa los campos.'}
            {username.length > 60 ? 'El usuario no puede tener más de 60 caracteres' : ''}{' '}
            {password.length > 20 && username.length > 60 ? '\n' : null}
            {password.length > 20 ? 'La contraseña no puede tener más de 20 caracteres' : ''}
          </AuthErrorMessage>
        </AuthContainerErrorMessage>
      )}

      <ButtonSession
        isDisabled={disableButton}
        handlePress={() => handleLogin()}
        title="Iniciar sesión"
        isShowMsg={showMsg}
      />

      <AuthForgotContainer>
        <Phone width={45} height={45} />
        <AuthForgotContainerText>
          <AuthForgotText>¿Olvidaste tu contraseña? Comunícate al</AuthForgotText>
          <AuthForgotEmail onPress={openEmail}>operacionesti@embonor.cl</AuthForgotEmail>
        </AuthForgotContainerText>
      </AuthForgotContainer>
    </LoginContainerInputSession>
  );
};
export default InputLogin;
