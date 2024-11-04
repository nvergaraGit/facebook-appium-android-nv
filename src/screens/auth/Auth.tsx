/* eslint-disable @typescript-eslint/no-floating-promises */

import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Linking, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Logo from '../../../assets/logo.svg';
import WithApollo from '../../components/hocs/WithApollo';
import LOGIN from '../../graphql/mutations/login';
// import RegisterDevice from '../../graphql/mutations/registerDevice';
import { useMutation } from '@apollo/client';
import Loader from '../../components/Loader/Loader';
import { useAppContext } from '../../context/state';
import { getDataUser } from '../../utils/Auth';
import InputLogin from '../../components/InputLogin/InputLogin';
import { TTokens } from 'types/auth';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { VERSION } from '@env';
import {
  ANALITICS_ACTION_LOGIN_FAIL,
  ANALITICS_ACTION_LOGIN_SUCCESS,
  ANALITICS_CATEGORY_LOGIN,
} from '@libraries/constants';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
import { useNavigation } from '@react-navigation/native';
import { AuthStatusBar } from '@styles/StylesLogin/StylesLogin';
import messaging from '@react-native-firebase/messaging';
import {
  AuthKeyboardAvoidingView,
  AuthContainer,
  AuthContainerHeaderImage,
  AuthTextVersion,
  AuthContainerTitle,
  AuthTitle,
  AuthSubtitle,
} from './styles';

export type RootStackParamList = {
  Tabs: undefined;
  Login: undefined;
  ForgetPassword: undefined;
};
type Result = {
  login: {
    token: string;
    refreshToken: string;
    error: {
      details: string;
    };
  };
};

const Auth = () => {
  const storage = new MMKVLoader().initialize();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'ForgetPassword'>>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setTokens, setAuth, isInternet, setModalInternetConnection, auth } = useAppContext();
  const [showPass, setShowPass] = useState<boolean>(true);

  // const [RegisterDeviceMutation, { loading: loadingRegisterDevice }] = useMutation(RegisterDevice, {
  //   onCompleted: (result) => {
  //     console.log('registro token del dispositivo graphql', result);
  //   },
  // });

  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }
    const getData = () => {
      try {
        const data = storage.getString('tokenStorage');
        if (data !== null) {
          const parsedData = JSON.parse(data) as TTokens;
          if (parsedData.token !== undefined) {
            setTokens(parsedData);
            getDataUser(parsedData.token, setAuth);
            navigation.push('Tabs');
          }
        }
      } catch (error) {
        console.log('Error al recuperar el valor de la variable:', error);
      }
    };
    // navigation.push('Tabs');

    void getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setTokens, setAuth]);

  const setData = (token: TTokens) => {
    try {
      storage.setString('tokenStorage', JSON.stringify(token));
    } catch (error) {
      // Error saving data
    }
  };

  const getTokenAndSubscribe = () => {
    messaging()
      .getToken()
      .then((token) => {
        console.log('Token del dispositivo:', token);
        // RegisterDeviceMutation({
        //   variables: {
        //     registerDeviceInput: {
        //       appId: 'com.embonorapp',
        //       token: token,
        //     },
        //   },
        // });
      })
      .catch((error) => {
        console.log('Error al obtener el token del dispositivo:', error);
      });

    const unsubscribe = messaging().onMessage((remoteMessage) => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  };

  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted: (result: Result) => {
      if (result.login.error !== null) {
        setInvalidCredentials(true);
        setError(true);
      }
      if (result.login.token.length > 0) {
        const saveTokens = (newToken: TTokens): void => {
          void setData(newToken);
          setTokens({
            ...newToken,
          });
        };
        saveTokens(result.login);
        getDataUser(result.login.token, setAuth);
        setUsername('');
        setPassword('');
        setShowPass(true);

        if (auth?.needPasswordUpdate) {
          navigation.navigate('ForgetPassword');
        } else {
          navigation.push('Tabs');
          // Registering Analitics Event
          getTokenAndSubscribe();
          registerFirebaseAnaliticsEvent(ANALITICS_CATEGORY_LOGIN, ANALITICS_ACTION_LOGIN_SUCCESS, {
            username,
            id: '',
            name: '',
            needPasswordUpdate: false,
            roles: '',
            ACL: [],
          });
        }
      }
    },
    onError: (error) => {
      console.error(error);
      // Registering Analitics Event
      registerFirebaseAnaliticsEvent(ANALITICS_CATEGORY_LOGIN, ANALITICS_ACTION_LOGIN_FAIL, {
        username,
        id: '',
        name: '',
        needPasswordUpdate: false,
        roles: '',
        ACL: [],
      });
    },
  });
  const openEmail = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Linking.openURL('mailto: operacionesti@embonor.cl');
  };
  const handleLogin = async () => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }

    if (username !== '' && password !== '') {
      setError(false);
      await login({ variables: { username: username, password: password } });
    } else {
      setInvalidCredentials(false);
      setError(true);
    }
  };

  return (
    <>
      <AuthStatusBar />
      {!loading && (
        <AuthKeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.select({ ios: -100, android: -200 })}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <AuthContainer>
              <AuthContainerHeaderImage>
                <AuthTextVersion>Versión {VERSION}</AuthTextVersion>
                <AuthContainerTitle>
                  <Logo width={50} height={50} style={{ marginBottom: 18 }} />
                  <AuthTitle>Te damos la bienvenida a </AuthTitle>
                  <AuthTitle>Canal Moderno de Embonor</AuthTitle>
                  <AuthSubtitle>Inicia sesión para acceder a tu cuenta</AuthSubtitle>
                </AuthContainerTitle>
              </AuthContainerHeaderImage>
              <InputLogin
                username={username}
                password={password}
                setUsername={(text) => setUsername(text)}
                setPassword={(text) => setPassword(text)}
                handleLogin={handleLogin}
                openEmail={openEmail}
                error={error}
                showPass={showPass}
                setShowPass={() => setShowPass(!showPass)}
                invalidCredentials={invalidCredentials}
                setInvalidCredential={() => setInvalidCredentials(false)}
                setError={() => setError(false)}
              />
            </AuthContainer>
          </TouchableWithoutFeedback>
        </AuthKeyboardAvoidingView>
      )}
      {loading && isInternet ? <Loader loading={loading} /> : null}
    </>
  );
};
export default WithApollo(Auth);
