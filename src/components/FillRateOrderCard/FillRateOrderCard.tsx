import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { TitleOrders, TitleTag } from './styles';
import IconWarning from '@assets/icons/icon-warning-red-small.svg';
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
} from '@styles/sharedStyles';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import { OcListFillRate } from 'types/fillRate';
import { dateFormatter } from '@utils/formatDate';
import { DELIVERED } from '@libraries/constants';
interface Properties {
  params: {
    item: OcListFillRate;
  };
  onNext: (item: OcListFillRate) => void;
}

const FillRateOrderCard = (props: Properties) => {
  const {
    onNext,
    params: { item },
  } = props;

  return (
    <TouchableWithoutFeedback onPress={() => onNext(item)}>
      <ContainerCard>
        <>
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
              <View style={{ flexDirection: 'row', width: '70%' }}>
                <TitleOrders isImportant>Orden: </TitleOrders>
                <TitleOrders numberOfLines={1} ellipsizeMode="tail" style={{ width: '90%' }}>
                  {item.oc}
                </TitleOrders>
              </View>
              <ButtonNavigation onPress={() => onNext(item)}>
                <IconRightArrow />
              </ButtonNavigation>
            </ContainerTitleOrdersCard>
          </ContainerHeaderCard>
          <ContainerDataCard>
            <ContainerDetailsCard>
              <TextTitleGothamRegularBlack12 style={{ marginBottom: 10 }}>
                Solicitados
              </TextTitleGothamRegularBlack12>
              <TextTitleGothamMediumBlack14 style={{ marginBottom: 10 }}>
                {item.requested}
              </TextTitleGothamMediumBlack14>
            </ContainerDetailsCard>
            <ContainerDetailsCard>
              <TextTitleGothamRegularBlack12 style={{ marginBottom: 10 }}>
                Facturados
              </TextTitleGothamRegularBlack12>
              <TextTitleGothamMediumBlack14 style={{ marginBottom: 10 }}>
                {item.invoiced}
              </TextTitleGothamMediumBlack14>
            </ContainerDetailsCard>
            <ContainerDetailsCard>
              <TextTitleGothamRegularBlack12 style={{ marginBottom: 10 }}>
                Emisión
              </TextTitleGothamRegularBlack12>
              <TextTitleGothamMediumBlack14 style={{ marginBottom: 10 }}>
                {dateFormatter(item.emission)}
              </TextTitleGothamMediumBlack14>
            </ContainerDetailsCard>
            <ContainerDetailsCard>
              <TextTitleGothamRegularBlack12 style={{ marginBottom: 10 }}>
                Vencimiento
              </TextTitleGothamRegularBlack12>
              <TextTitleGothamMediumBlack14 style={{ marginBottom: 10 }}>
                {dateFormatter(item.vcto)}
              </TextTitleGothamMediumBlack14>
            </ContainerDetailsCard>
          </ContainerDataCard>
        </>
      </ContainerCard>
    </TouchableWithoutFeedback>
  );
};

export default FillRateOrderCard;
