import InputForgetPassword from '@components/InputForgetPassword/InputForgetPassword';

import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Logo from '../../../assets/logo.svg';
import Check from '@assets/icons/check-red.svg';
import { VERSION } from '@env';
import {
  AuthContainer,
  AuthContainerBody,
  AuthContainerHeader,
  AuthContainerHeaderImage,
  AuthContainerTitle,
  AuthScroll,
  AuthStatusBar,
  AuthSubtitle,
  AuthTitle,
  TextVersion,
} from '@styles/StylesLogin/StylesLogin';
import { useNavigation } from '@react-navigation/native';
import ModalApp from '@components/ModalApp/ModaApp';
import BottomSheetModal from '@components/BottomSheetModal/BottomSheetModal';

const ForgetPassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [showPass, setShowPass] = useState<boolean>(true);
  const [showConfirmPass, setShowConfirmPass] = useState<boolean>(true);
  const [showModal, setShowModal] = useState(true);
  const handleLogin = () => {};
  const goBack = () => {
    setShowModal(false);
    navigation.goBack();
  };
  return (
    <>
      <AuthContainer>
        <AuthStatusBar />
        <AuthScroll contentContainerStyle={{ flexGrow: 1 }}>
          <AuthContainerBody>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.select({ ios: 0, android: 0 })}
            >
              <AuthContainerHeader>
                <AuthContainerHeaderImage>
                  <TextVersion>Versión {VERSION}</TextVersion>
                  <AuthContainerTitle>
                    <Logo width={50} height={50} style={{ marginBottom: 18 }} />
                    <AuthTitle>Restablecer contraseña </AuthTitle>
                    <AuthSubtitle>
                      Por motivos de seguridad es hora de cambiar tu contraseña
                    </AuthSubtitle>
                  </AuthContainerTitle>
                </AuthContainerHeaderImage>
              </AuthContainerHeader>
              <InputForgetPassword
                password={password}
                confirmPassword={confirmPassword}
                setPassword={(text) => setPassword(text)}
                setConfirmPassword={(text) => setConfirmPassword(text)}
                handleLogin={handleLogin}
                showPass={showPass}
                setShowPass={() => setShowPass(!showPass)}
                setShowConfirmPass={() => setShowConfirmPass(!showConfirmPass)}
                showConfirmPass={showConfirmPass}
                goBack={goBack}
              />
            </KeyboardAvoidingView>
          </AuthContainerBody>
        </AuthScroll>
      </AuthContainer>
      <BottomSheetModal isVisible={showModal} setIsVisible={goBack}>
        <ModalApp
          title="Contraseña modificada con éxito"
          description="Vuelve a acceder a tu cuenta"
          icon={<Check />}
          onPress={goBack}
          textButton="Iniciar sesión"
        />
      </BottomSheetModal>
    </>
  );
};

export default ForgetPassword;
