import React from 'react';
import { ContainerBack, ContainerInfo, TextBack, TitleInfo } from './Style';
import EyePass from '../../../assets/icons/eye-password.svg';
import CloseEyePass from '../../../assets/icons/close-eye-password.svg';
import ButtonSession from '@components/ButtonSession';
import IconInfo from '../../../assets/icons/icon-info.svg';
import { validatePassword } from '@utils/validatePassword';
import {
  AuthContainerErrorMessage,
  AuthContainerInputPass,
  AuthContainerInputSession,
  AuthErrorMessage,
  AuthInputSession,
  AuthShowPassContainer,
  AuthText,
  AuthTextContainer,
  AuthTextValidate,
} from '@styles/StylesLogin/StylesLogin';

interface Props {
  password: string;
  setPassword: (text: string) => void;
  confirmPassword: string;
  setConfirmPassword: (text: string) => void;
  showPass: boolean;
  setShowPass: (value: boolean) => void;
  showConfirmPass: boolean;
  setShowConfirmPass: (value: boolean) => void;
  handleLogin: () => Promise<void>;

  goBack: () => void;
}
const InputForgetPassword = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleLogin,
  showPass,
  setShowPass,
  showConfirmPass,
  setShowConfirmPass,
  goBack,
}: Props) => {
  const invalidConfirmPassword = confirmPassword !== password;
  const invalidPassword = !validatePassword(password);
  const showMsg = (invalidPassword || invalidConfirmPassword) && password.length !== 0;
  const disableButton = password.length < 4 || confirmPassword.length < 4 || !showMsg;

  return (
    <AuthContainerInputSession>
      <AuthContainerInputPass isImportant validateField={invalidPassword && password.length > 4}>
        <AuthTextContainer>
          <AuthText>Nueva contraseña</AuthText>
          <AuthTextValidate show={invalidPassword && password.length > 4}>*</AuthTextValidate>
        </AuthTextContainer>
        <AuthInputSession
          autoCapitalize="none"
          pass={true}
          secureTextEntry={showPass}
          onChangeText={(text) => {
            setPassword(text);
          }}
          testID="username-input"
          value={password}
        />
        <AuthShowPassContainer onPress={() => setShowPass(!showPass)}>
          {showPass ? <EyePass width={22} height={19} /> : <CloseEyePass width={22} height={19} />}
        </AuthShowPassContainer>
      </AuthContainerInputPass>
      <ContainerInfo>
        <TitleInfo isImportant>La contraseña debe contener:</TitleInfo>
        <TitleInfo>. Mínimo 4 carácteres</TitleInfo>
        <TitleInfo>
          . Incluir al menos una letra en mayúscula, una minúscula, un numero y un carácter especial
          (+*-_$.)
        </TitleInfo>
      </ContainerInfo>
      <AuthContainerInputPass validateField={invalidConfirmPassword && confirmPassword.length > 4}>
        <AuthTextContainer>
          <AuthText>Repetir contraseña</AuthText>
          <AuthTextValidate show={invalidConfirmPassword && confirmPassword.length > 4}>
            *
          </AuthTextValidate>
        </AuthTextContainer>
        <AuthInputSession
          pass={true}
          onChangeText={(text) => {
            setConfirmPassword(text);
          }}
          secureTextEntry={showConfirmPass}
          value={confirmPassword}
        />
        <AuthShowPassContainer onPress={() => setShowConfirmPass(!showConfirmPass)}>
          {showConfirmPass ? (
            <EyePass width={22} height={19} />
          ) : (
            <CloseEyePass width={22} height={19} />
          )}
        </AuthShowPassContainer>
      </AuthContainerInputPass>

      {showMsg && (
        <AuthContainerErrorMessage>
          <IconInfo />
          <AuthErrorMessage>
            {invalidPassword && 'La contraseña no cumple con los requisitos'}
            {invalidConfirmPassword && !invalidPassword && 'Las contraseñas no coinciden'}
            {confirmPassword.length > 20 && password.length > 60 ? '\n' : null}
            {confirmPassword.length > 20 ? 'La contraseña no puede tener más de 20 caracteres' : ''}
          </AuthErrorMessage>
        </AuthContainerErrorMessage>
      )}

      <ButtonSession
        isDisabled={disableButton}
        handlePress={() => handleLogin()}
        title="Modificar contraseña"
        isShowMsg={showMsg}
      />

      <ContainerBack>
        <TextBack>
          ¿Deseas volver?{' '}
          <TextBack isImportant onPress={goBack}>
            Regresar
          </TextBack>
        </TextBack>
      </ContainerBack>
    </AuthContainerInputSession>
  );
};

export default InputForgetPassword;
