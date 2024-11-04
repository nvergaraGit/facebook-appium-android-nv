import React from 'react';
import {
  Title,
  TextBody,
  Container,
  ContainerInfo,
  ButtonDivider,
  ContainerIcon,
  ContainerBody,
  ButtonsOptions,
  ContainerHeader,
  ContainerButtons,
  ContainerCategory,
  ButtonsOptionsText,
} from './Styles';
import { View } from 'react-native';
import CheckIcon from '@assets/icons/ok.svg';
import CommentIcon from '@assets/icons/coment.svg';
import ArrowIcon from '@assets/icons/arrow-right.svg';
import { Catalogs, Exhibitions } from 'types/visitTrackin';

interface Props {
  onDetails: (item: Catalogs | Exhibitions) => void;
  saveReviewInfo: (item: Catalogs | Exhibitions) => void;
  detailsProducts?: (item: Catalogs) => void;
  info?: Catalogs;
  exhibitions?: Exhibitions;
}
const ReviewFormatEvaluateCard = ({
  onDetails,
  saveReviewInfo,
  detailsProducts,
  info,
  exhibitions,
}: Props) => {
  return (
    <Container>
      <ContainerCategory></ContainerCategory>
      {info ? (
        <>
          <ContainerBody>
            <ContainerHeader>
              <ContainerInfo>
                <Title>{info.formato}</Title>
                <TextBody>
                  {info.mecanica} | patrón: {info.patron.toLowerCase()}
                </TextBody>
              </ContainerInfo>
              <ContainerIcon onPress={() => detailsProducts && detailsProducts(info)}>
                <ArrowIcon />
              </ContainerIcon>
            </ContainerHeader>
            <ContainerButtons>
              <ButtonsOptions onPress={() => onDetails(info)} option="comment">
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CommentIcon />
                  <ButtonsOptionsText>Comentar</ButtonsOptionsText>
                </View>
              </ButtonsOptions>
              <ButtonDivider />
              <ButtonsOptions onPress={() => saveReviewInfo(info)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckIcon />
                  <ButtonsOptionsText option="check">Aprobar</ButtonsOptionsText>
                </View>
              </ButtonsOptions>
            </ContainerButtons>
          </ContainerBody>
        </>
      ) : (
        <>
          {exhibitions && (
            <ContainerBody>
              <ContainerHeader>
                <ContainerInfo>
                  <Title>{exhibitions.descripcion}</Title>
                  <TextBody>{exhibitions.tipo}</TextBody>
                </ContainerInfo>
              </ContainerHeader>
              <ContainerButtons>
                <ButtonsOptions onPress={() => onDetails(exhibitions)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CommentIcon />
                    <ButtonsOptionsText option="comment">Comentar</ButtonsOptionsText>
                  </View>
                </ButtonsOptions>
                <ButtonDivider />
                <ButtonsOptions onPress={() => saveReviewInfo(exhibitions)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckIcon />
                    <ButtonsOptionsText option="check">Aprobar</ButtonsOptionsText>
                  </View>
                </ButtonsOptions>
              </ContainerButtons>
            </ContainerBody>
          )}
        </>
      )}
    </Container>
  );
};

export default ReviewFormatEvaluateCard;
