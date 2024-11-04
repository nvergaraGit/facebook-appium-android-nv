import React from 'react';
import {
  SalesFloorCardBody,
  ProductsCardButton,
  SalesFloorCardCode,
  SalesFloorCardFooter,
  SalesFloorCardAddress,
  SalesFloorCardContainer,
  ProductsCardContainerText,
  SalesFloorCardTextDescription,
  ProductsCardContainerImageText,
  SalesFloorCardCodeLabel,
} from './styles';
import IconAdress from '@assets/icons/address-icon.svg';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import { TSalesFloor } from 'types/salesFloors';
import { View } from 'react-native';

import { getImageForSalesFloor } from '@utils/imageSalesFloor';

type Props = {
  salesFloor: TSalesFloor;
  handleDetails: (id: string) => void;
};

const SalesFloorCard = ({ salesFloor, handleDetails }: Props) => {
  return (
    <SalesFloorCardContainer onPress={() => handleDetails(salesFloor.codClient)}>
      <SalesFloorCardBody testID="sales-floor-card">
        <ProductsCardContainerImageText>
          <View style={{ flexDirection: 'row', width: '75%', marginRight: 10 }}>
            {getImageForSalesFloor(salesFloor.ccadena as string)}
            <ProductsCardContainerText>
              <View style={{ flexDirection: 'row' }}>
                <SalesFloorCardCodeLabel>
                  Código: <SalesFloorCardCode>{salesFloor.codClient}</SalesFloorCardCode>
                </SalesFloorCardCodeLabel>
              </View>
              <SalesFloorCardTextDescription numberOfLines={1} ellipsizeMode="tail">
                {salesFloor.csalaSupermercado}
              </SalesFloorCardTextDescription>
            </ProductsCardContainerText>
          </View>
          <ProductsCardButton onPress={() => handleDetails(salesFloor.codClient)}>
            <IconRightArrow />
          </ProductsCardButton>
        </ProductsCardContainerImageText>
      </SalesFloorCardBody>
      <SalesFloorCardFooter>
        <IconAdress />
        <SalesFloorCardAddress numberOfLines={1} ellipsizeMode="tail">
          {salesFloor.calle.trim()} {salesFloor.numero}, {salesFloor.dcomuna}
        </SalesFloorCardAddress>
      </SalesFloorCardFooter>
    </SalesFloorCardContainer>
  );
};

export default SalesFloorCard;
