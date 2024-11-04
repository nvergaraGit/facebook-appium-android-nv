import React from 'react';
import { AboutContainer, AboutTitle, ContainerVersion, TextLabel, TextValue } from './styles';
import { useNavigation } from '@react-navigation/native';
import IconLeftArrow from '@assets/icons/icon-left-arrow.svg';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import { VERSION } from '@env';

const About = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AboutContainer>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20 }}
          onPress={() => navigation.goBack()}
        >
          <IconLeftArrow />
          <AboutTitle>Acerca de la aplicación</AboutTitle>
        </TouchableOpacity>
        <View>
          <ContainerVersion>
            <TextLabel>Versión</TextLabel>
            <TextValue>{VERSION}</TextValue>
          </ContainerVersion>
          <ContainerVersion>
            <TextLabel>Soporte al {'\n'}ejecutivo</TextLabel>
            <TextValue>operacionesti@embonor.cl</TextValue>
          </ContainerVersion>
        </View>
      </AboutContainer>
    </>
  );
};

export default About;
