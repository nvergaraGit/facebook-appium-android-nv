import React from 'react';
import { Container, ContainerIcon, TextDescription, FooterText } from './Styles';
import ButtonSession from '@components/ButtonSession/ButtonSession';
import { TextTitle } from '@screens/orders/styles';
interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  textButton: string;
  onPress: () => void;
  footerText?: string;
}
function ModalApp({ footerText, icon, title, description, textButton, onPress }: Props) {
  return (
    <Container>
      <ContainerIcon>{icon}</ContainerIcon>
      <ContainerIcon>
        <TextTitle>{title}</TextTitle>
      </ContainerIcon>
      <ContainerIcon>
        <TextDescription> {description}</TextDescription>
      </ContainerIcon>
      {footerText && (
        <ContainerIcon>
          <FooterText> {footerText}</FooterText>
        </ContainerIcon>
      )}
      <ButtonSession title={textButton} onPress={onPress} isShowMsg isIcon={true} />
    </Container>
  );
}

export default ModalApp;
