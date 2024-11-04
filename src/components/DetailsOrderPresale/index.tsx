import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import React from 'react';
import {
  CardListPresale,
  CardPresale,
  CardPresaleBody,
  CardPresaleHeader,
  PresaleCardContent,
  PresaleCardContentItem,
  PresaleCardText,
  PresaleCardTitle,
  PresaleHeaderContainer,
  PresaleHeaderOrder,
  PresaleItemButton,
} from './styles';
import { IPresale } from 'types/orderPresale';
import { TouchableWithoutFeedback } from 'react-native';

interface Props {
  presale: IPresale;
  handleItem: (oc: string) => void;
}
const DetailsOrderPresale = ({ presale, handleItem }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleItem(presale.oc)}>
      <CardListPresale>
        <CardPresale>
          <CardPresaleHeader>
            <PresaleHeaderContainer>
              <PresaleHeaderOrder>Orden: {presale.oc}</PresaleHeaderOrder>
              <PresaleItemButton onPress={() => handleItem(presale.oc)}>
                <IconRightArrow />
              </PresaleItemButton>
            </PresaleHeaderContainer>
          </CardPresaleHeader>
          <CardPresaleBody>
            <PresaleCardContent>
              <PresaleCardContentItem>
                <PresaleCardTitle>Camión</PresaleCardTitle>
                <PresaleCardText>{presale.camion}</PresaleCardText>
              </PresaleCardContentItem>
              <PresaleCardContentItem>
                <PresaleCardTitle>Viaje</PresaleCardTitle>
                <PresaleCardText>{presale.viaje}</PresaleCardText>
              </PresaleCardContentItem>
              <PresaleCardContentItem>
                <PresaleCardTitle>Cajas</PresaleCardTitle>
                <PresaleCardText>{presale.totalCajas}</PresaleCardText>
              </PresaleCardContentItem>
              <PresaleCardContentItem>
                <PresaleCardTitle>Pallets</PresaleCardTitle>
                <PresaleCardText>{presale.totalPaletas}</PresaleCardText>
              </PresaleCardContentItem>
            </PresaleCardContent>
          </CardPresaleBody>
        </CardPresale>
      </CardListPresale>
    </TouchableWithoutFeedback>
  );
};

export default DetailsOrderPresale;
