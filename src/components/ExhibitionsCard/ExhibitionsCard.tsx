import React from 'react';
import {
  Container,
  ContainerBody,
  ContainerCategory,
  TextBody,
  Title,
  ContainerFooter,
  TextFooter,
  ContainerFooterText,
} from './Styles';
import dayjs from 'dayjs';
import { TExhibitions } from 'types/exhibitions';
import { getImageForCategory } from '@utils/categoriesImage';

interface Props {
  exhibitions: TExhibitions;
}
const ExhibitionsCard = ({ exhibitions }: Props) => {
  return (
    <Container>
      <ContainerCategory>
        {getImageForCategory(exhibitions.categoria)}
        <Title style={{ marginLeft: 12 }}>{exhibitions.categoria}</Title>
      </ContainerCategory>
      <ContainerBody>
        <TextBody>Tipo exhibición: {exhibitions.tipo}</TextBody>
        <TextBody isImportant style={{ marginTop: 4 }}>
          {exhibitions.descripcion}
        </TextBody>
      </ContainerBody>
      <ContainerFooter>
        <ContainerFooterText>
          <TextFooter>Inicio: </TextFooter>
          {dayjs(exhibitions.inicio).isAfter(exhibitions.termino) ? (
            <TextFooter isImportant>{dayjs(exhibitions.termino).format('DD/MM/YY')}</TextFooter>
          ) : (
            <TextFooter isImportant>{dayjs(exhibitions.inicio).format('DD/MM/YY')}</TextFooter>
          )}
        </ContainerFooterText>
        <ContainerFooterText>
          <TextFooter>Término: </TextFooter>
          {dayjs(exhibitions.inicio).isAfter(exhibitions.termino) ? (
            <TextFooter isImportant>{dayjs(exhibitions.inicio).format('DD/MM/YY')}</TextFooter>
          ) : (
            <TextFooter isImportant>{dayjs(exhibitions.termino).format('DD/MM/YY')}</TextFooter>
          )}
        </ContainerFooterText>
      </ContainerFooter>
    </Container>
  );
};

export default ExhibitionsCard;
