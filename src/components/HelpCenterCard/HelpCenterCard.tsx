import React from 'react';
import IconArrow from '@assets/icons/arrow-right.svg';
import {
  HelpCenterCardContainer,
  HelpCenterCardTextIcon,
  HelpCenterCardText,
  HelpCenterQty,
  HelpCenterQtyText,
  HelpCenterCardContainerIcon,
  HelpCenterQtyTextTotal,
} from './style';
import { View } from 'react-native';

interface Props {
  image: JSX.Element;
  title: string;
  typeFile: string;
  qty: number;
  selectCategory: ((type: string) => void | undefined) | undefined;
}

const HelpCenterCard = ({ image, title, typeFile, qty = 0, selectCategory }: Props) => {
  return (
    <HelpCenterCardContainer onPress={() => selectCategory && selectCategory(typeFile)}>
      <HelpCenterCardTextIcon>
        <View>{image}</View>
        <HelpCenterCardText>{title}</HelpCenterCardText>
      </HelpCenterCardTextIcon>
      <HelpCenterQty>
        <HelpCenterQtyText>Total:</HelpCenterQtyText>
        <HelpCenterQtyTextTotal>{qty}</HelpCenterQtyTextTotal>
        <HelpCenterCardContainerIcon>
          <IconArrow />
        </HelpCenterCardContainerIcon>
      </HelpCenterQty>
    </HelpCenterCardContainer>
  );
};

export default HelpCenterCard;
