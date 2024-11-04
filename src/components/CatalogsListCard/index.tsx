import { View } from 'react-native';
import React from 'react';
import { ListDivider, TextTitleGothamMediumDark } from '@styles/sharedStyles';
import { BtnArrowRight, ContainerIconText, BtnOption } from './styles';
import { DateText } from '../../styles/sharedStyles';
import { dateFormatter } from '@utils/formatDate';
import { ProductsCardButton } from '@screens/DetailsSalesFloor/styles';

interface Properties {
  nameList: string;
  inicio: string;
  termino: string;
  idList: number;
  onPress: () => void;
}

const CatalogListCard = (props: Properties) => {
  const { nameList, inicio, termino, onPress } = props;
  return (
    <View
      style={{
        marginHorizontal: 10,
        backgroundColor: '#F7F9FC',
        borderColor: '#E8EBF7',
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 15,
      }}
    >
      <ListDivider />
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <BtnOption onPress={onPress}>
          <View>
            <ContainerIconText style={{ marginBottom: 11 }}>
              <TextTitleGothamMediumDark style={{ color: '#000000' }}>
                {nameList}
              </TextTitleGothamMediumDark>
            </ContainerIconText>
            <ContainerIconText>
              <DateText style={{ color: '#81878E' }}>
                {dateFormatter(inicio)} - {dateFormatter(termino)}
              </DateText>
            </ContainerIconText>
          </View>

          <ProductsCardButton onPress={onPress}>
            <BtnArrowRight />
          </ProductsCardButton>
        </BtnOption>
      </View>
      <ListDivider />
    </View>
  );
};

export default CatalogListCard;
