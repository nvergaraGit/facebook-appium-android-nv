import React from 'react';
import {
  Title,
  Container,
  ContainerInfo,
  ContainerType,
  ContainerBody,
  ContainerHeader,
  TextDescription,
  ContainerButtons,
  ContainerTypeText,
  TextName,
} from './Styles';

const CommentFormatTypeCard = () => {
  return (
    <Container>
      <ContainerBody>
        <ContainerHeader>
          <ContainerInfo>
            <ContainerType>
              <ContainerTypeText>Catálogo</ContainerTypeText>
            </ContainerType>
            <Title>11/05/23 - 08/06/23</Title>
          </ContainerInfo>
          <TextName>Lista 8</TextName>
        </ContainerHeader>
        <ContainerButtons>
          <Title>PET 1500</Title>
          <TextDescription>2 x $3,390 | Patrón: primario</TextDescription>
        </ContainerButtons>
      </ContainerBody>
    </Container>
  );
};

export default CommentFormatTypeCard;
