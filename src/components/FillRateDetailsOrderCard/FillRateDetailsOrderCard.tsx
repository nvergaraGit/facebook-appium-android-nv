import { View, TouchableWithoutFeedback, Image, ImageURISource } from 'react-native';
import React from 'react';
import { ProductDetail } from 'types/fillRate';

import {
  ButtonNavigation,
  ContainerCard,
  ContainerDataCard,
  ContainerDetailsCard,
  ContainerHeaderCard,
  ContainerTagCard,
  ContainerTitleOrdersCard,
  ContentContainerCard,
  TextTitleGothamMediumBlack14,
  TextTitleGothamRegularBlack12,
  TextTitleGothamRegularDark12,
} from '@styles/sharedStyles';
import IconWarning from '@assets/icons/icon-warning-red-small.svg';
import { OcCardContainerImageText, TitleTag } from './styles';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import { DELIVERED } from '@libraries/constants';
import DefaultImage from '@assets/empty-image.png';

interface Properties {
  params: {
    item: ProductDetail;
  };
  onNext: (item: ProductDetail) => void;
}
const DEFAULT_IMAGE: ImageURISource = DefaultImage as ImageURISource;
const FillRateDetailsOrderCard = (props: Properties) => {
  const {
    onNext,
    params: { item },
  } = props;

  return (
    <TouchableWithoutFeedback onPress={() => onNext(item)}>
      <ContainerCard>
        <ContainerTagCard tag={item.status}>
          <ContentContainerCard>
            {item.status !== DELIVERED ? (
              <>
                <View>
                  <IconWarning />
                </View>
                <View>
                  <TitleTag> {item.status}</TitleTag>
                </View>
              </>
            ) : (
              <View>
                <TitleTag tag={item.status}> {item.status}</TitleTag>
              </View>
            )}
          </ContentContainerCard>
        </ContainerTagCard>
        <ContainerHeaderCard>
          <ContainerTitleOrdersCard>
            <View style={{ flexDirection: 'row' }}>
              <OcCardContainerImageText>
                {item.image !== '' && !item.image.includes('undefined') ? (
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 42, height: 42, resizeMode: 'contain' }}
                  />
                ) : (
                  <Image
                    source={DEFAULT_IMAGE}
                    style={{ width: 42, height: 42, resizeMode: 'contain' }}
                  />
                )}
              </OcCardContainerImageText>
              <View>
                <TextTitleGothamRegularDark12>SKU: {item.sku}</TextTitleGothamRegularDark12>
                <TextTitleGothamMediumBlack14>{item.description}</TextTitleGothamMediumBlack14>
              </View>
            </View>
            <ButtonNavigation onPress={() => onNext(item)}>
              <IconRightArrow />
            </ButtonNavigation>
          </ContainerTitleOrdersCard>
        </ContainerHeaderCard>
        <ContainerDataCard>
          <ContainerDetailsCard>
            <TextTitleGothamRegularBlack12 style={{ marginBottom: 10 }}>
              C.Solicitadas
            </TextTitleGothamRegularBlack12>
            <TextTitleGothamMediumBlack14 style={{ marginBottom: 10 }}>
              {item.cjsRequested}
            </TextTitleGothamMediumBlack14>
          </ContainerDetailsCard>
          <ContainerDetailsCard>
            <TextTitleGothamRegularBlack12 style={{ marginBottom: 10 }}>
              C.Facturadas
            </TextTitleGothamRegularBlack12>
            <TextTitleGothamMediumBlack14 style={{ marginBottom: 10 }}>
              {item.cjsInvoiced}
            </TextTitleGothamMediumBlack14>
          </ContainerDetailsCard>
        </ContainerDataCard>
      </ContainerCard>
    </TouchableWithoutFeedback>
  );
};

export default FillRateDetailsOrderCard;
