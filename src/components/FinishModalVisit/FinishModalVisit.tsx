import React from 'react';
import { Container, ContainerIcon, TextTitle } from './styles';
import ButtonSession from '@components/ButtonSession/ButtonSession';
import CloseVisitIcon from '@assets/icons/check-close-visit.svg';
import dayjs from 'dayjs';
interface Props {
  onPress: () => void;
}
function FinishModalVisit({ onPress }: Props) {
  return (
    <Container>
      <ContainerIcon>
        <CloseVisitIcon />
        <TextTitle>
          Su visita del {dayjs().format('DD/MM/YYYY')} fue completada exitosamente
        </TextTitle>
      </ContainerIcon>
      <ButtonSession title="Cerrar" onPress={onPress} isShowMsg isIcon={true} />
    </Container>
  );
}

export default FinishModalVisit;
