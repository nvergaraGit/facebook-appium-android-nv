import React from 'react';
import {
  Container,
  ContainerIcon,
  TextDescription,
  ContainerLinkDescription,
  TextSalesFloorLink,
} from './styles';
import ButtonSession from '@components/ButtonSession/ButtonSession';
import AlertVisitIcon from '@assets/icons/alert-visit.svg';
import { TextTitle } from '@screens/orders/styles';
interface Props {
  onPress: () => void;
  refreshSalesFloor: (code: string) => void;
  name: string;
  code: string;
}
function visitInitiateModal({ onPress, refreshSalesFloor, code, name }: Props) {
  return (
    <Container>
      <ContainerIcon>
        <AlertVisitIcon />
        <TextTitle>Error al iniciar la visita</TextTitle>
      </ContainerIcon>
      <ContainerIcon>
        <TextDescription>Actualmente tienes una visita abierta</TextDescription>
        <ContainerLinkDescription onPress={() => refreshSalesFloor(code)}>
          <TextDescription>
            en la sala{' '}
            <TextSalesFloorLink>
              {code} {name}
            </TextSalesFloorLink>
          </TextDescription>
        </ContainerLinkDescription>
        <TextDescription>No puedes realizar visitas en dos</TextDescription>
        <TextDescription>salas de forma paralela.</TextDescription>
      </ContainerIcon>
      <ButtonSession title="Cerrar" onPress={onPress} isShowMsg isIcon={true} />
    </Container>
  );
}

export default visitInitiateModal;
