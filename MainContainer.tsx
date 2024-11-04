/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import AuthScreen from '@screens/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from '@navigation/Tabs';
import NetInfo from '@react-native-community/netinfo';
import BottomSheetModal from '@components/BottomSheetModal/BottomSheetModal';
import Error from '@components/ModalApp/ModaApp';
import IconNoConnection from '@assets/icons/icon-warning.svg';
import { useAppContext } from '@context/state';
import ForgetPassword from '@screens/ForgetPassword/ForgetPassword';
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

const MainContainer = () => {
  const { modalInternetConnection, setModalInternetConnection, isInternet, setIsInternet } =
    useAppContext();
    setModalInternetConnection(false);

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      if (!state.isInternetReachable) {
        setIsInternet(!isInternet);
        setModalInternetConnection(!modalInternetConnection);
      } else {
        setIsInternet(isInternet);
        setModalInternetConnection(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NetInfo]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <BottomSheetModal
        isVisible={modalInternetConnection as boolean}
        setIsVisible={() => setModalInternetConnection(false)}
      >
        <Error
          icon={<IconNoConnection />}
          title="No hay conexión a internet"
          description="Por favor revisa tu conexión a internet e intenta nuevamente"
          textButton="Cerrar"
          onPress={() => setModalInternetConnection(false)}
        />
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default MainContainer;
