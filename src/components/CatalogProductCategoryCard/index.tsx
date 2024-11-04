import { View } from 'react-native';
import React from 'react';
import { CategoryContainer, ContainerColumnText, ContainerColumnTextNormal } from './styles';
import {
  ButtonNavigation,
  TextTitleGothamMediumBlack,
  TextTitleMainFont,
} from '@styles/sharedStyles';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import { Format } from 'types/catalogs';

type Props = {
  catalogs: Format;
  onNext: (item: Format) => void;
};

const CatalogProductCategoryCard = ({ catalogs, onNext }: Props) => {
  return (
    <CategoryContainer onPress={() => onNext(catalogs)}>
      <View>
        <ContainerColumnText>
          <TextTitleGothamMediumBlack style={{ marginLeft: 16 }}>
            {catalogs.formato}
          </TextTitleGothamMediumBlack>
          <TextTitleGothamMediumBlack style={{ marginLeft: 16 }}>
            {catalogs.marca}
          </TextTitleGothamMediumBlack>

          <TextTitleMainFont style={{ marginLeft: 16, color: '#DF8080' }}>
            {catalogs.mecanica} Patrón: {catalogs.patron}
          </TextTitleMainFont>
        </ContainerColumnText>
      </View>
      <ContainerColumnTextNormal style={{ alignSelf: 'center' }}>
        <ButtonNavigation onPress={() => onNext(catalogs)}>
          <IconRightArrow />
        </ButtonNavigation>
      </ContainerColumnTextNormal>
    </CategoryContainer>
  );
};

export default CatalogProductCategoryCard;
