/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { TTokens } from 'types/auth';
import { MenuOptions } from '@utils/Menu';
import Header from '@components/Header/Header';
import { useAppContext } from '@context/state';
import { useNavigation } from '@react-navigation/native';
import {
  MenuBody,
  MenuOption,
  MenuDivider,
  MenuContainer,
  MenuOptionText,
  MenuArrowRight,
  MenuContainerIcon,
  MenuContainerIconText,
} from './styles';
import { MenuStackParamKeys, MenuStackParamList } from 'types/menu';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
import { ANALITICS_CATEGORY_MENU } from '@libraries/constants';
import { MMKVLoader } from 'react-native-mmkv-storage';

const Menu = () => {
  const storage = new MMKVLoader().initialize();
  const navigation = useNavigation<StackNavigationProp<MenuStackParamList>>();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setTokens, auth } = useAppContext();

  const logout = () => {
    try {
      storage.clearStore();
      setTokens({} as TTokens);
      navigation.navigate('Auth');
    } catch (error) {
      console.error(error);
    }
  };

  const onPressHandler = (title: string, analiticsAction: string, path?: MenuStackParamKeys) => {
    try {
      // Registering Analitics Event
      registerFirebaseAnaliticsEvent(ANALITICS_CATEGORY_MENU, analiticsAction, auth);

      title !== 'Cerrar sesión' ? navigation.navigate(path) : logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MenuContainer>
      <Header title="Menú" />
      <MenuBody>
        {MenuOptions.map((item, index) => (
          <View key={index}>
            <MenuOption
              onPress={() => onPressHandler(item.title, item.analiticsAction, item.path)}
              key={item.path}
            >
              <MenuContainerIconText>
                <MenuContainerIcon>{item.image}</MenuContainerIcon>
                <MenuOptionText>{item.title}</MenuOptionText>
              </MenuContainerIconText>
              <MenuArrowRight disabled={item.title === 'Cerrar sesión'} />
            </MenuOption>
            <MenuDivider />
          </View>
        ))}
      </MenuBody>
    </MenuContainer>
  );
};

export default Menu;
