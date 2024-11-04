import React from 'react';
import { Container, ContainerIcon, TextDescription } from './styles';
import ButtonSession from '@components/ButtonSession/ButtonSession';
import VisitIcon from '@assets/icons/visit-icon.svg';
import { TextTitle } from '@screens/orders/styles';
interface Props {
  onPress: () => void;
}
function StartModalVisit({ onPress }: Props) {
  return (
    <Container>
      <ContainerIcon>
        <VisitIcon />
        <TextTitle>Aviso Importante</TextTitle>
      </ContainerIcon>
      <ContainerIcon>
        <TextDescription>Para completar la visita debes</TextDescription>
        <TextDescription>aprobar o comentar todos los</TextDescription>
        <TextDescription>formatos y exhibiciones disponibles</TextDescription>
        <TextDescription>dentro del día.</TextDescription>
      </ContainerIcon>
      <ContainerIcon>
        <TextDescription>No puedes realizar visitas en dos</TextDescription>
        <TextDescription>salas de forma paralela.</TextDescription>
      </ContainerIcon>
      <ContainerIcon>
        <TextDescription>Si no completas una visita durante el</TextDescription>
        <TextDescription>día, esta se cerrará</TextDescription>
        <TextDescription>automáticamente a las 17 hrs.</TextDescription>
      </ContainerIcon>

      <ButtonSession title="Ok, entiendo" onPress={onPress} isShowMsg isIcon={true} />
    </Container>
  );
}

export default StartModalVisit;
