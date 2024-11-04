/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import React from 'react';
import { View } from 'react-native';
import { TSalesFloorHomeItems } from 'types/salesFloors';
import { SalesFloorCardCodeOrderNum } from './styles';
import {
  ProductsCardButton,
  ProductsCardContainerImageText,
  ProductsCardContainerText,
  SaleFloorBoxText,
  SalesFloorCardBody,
  SalesFloorCardCode,
  SalesFloorCardCodeTitle,
  SalesFloorCardContainer,
  SalesFloorCardTextDescription,
} from './styles';
import { getImageForSalesFloor } from '@utils/imageSalesFloor';

interface Props {
  salesFloor: TSalesFloorHomeItems[];
  handleDetails: (item: TSalesFloorHomeItems) => void;
}

const SalesFloorCardHome = ({ salesFloor, handleDetails }: Props) => {
  return (
    <View>
      {salesFloor.map((item, i) => (
        <SalesFloorCardContainer key={`${item.codClient}_${i}`} onPress={() => handleDetails(item)}>
          <SalesFloorCardBody testID="sales-floor-card">
            <ProductsCardContainerImageText>
              {getImageForSalesFloor(item.ccadena)}
              <ProductsCardContainerText>
                <SalesFloorCardCode>
                  <SalesFloorCardCodeTitle>Código: </SalesFloorCardCodeTitle>
                  {item.codClient}
                </SalesFloorCardCode>
                <SalesFloorCardTextDescription numberOfLines={1} ellipsizeMode="tail">
                  {item.csalaSupermercado}
                </SalesFloorCardTextDescription>
                <SaleFloorBoxText>
                  <SalesFloorCardCodeTitle>Cantidad de órdenes:</SalesFloorCardCodeTitle>{' '}
                  <SalesFloorCardCodeOrderNum></SalesFloorCardCodeOrderNum>
                  {item.purchaseOrderQty}
                </SaleFloorBoxText>
              </ProductsCardContainerText>
            </ProductsCardContainerImageText>
            <ProductsCardButton onPress={() => handleDetails(item)}>
              <IconRightArrow />
            </ProductsCardButton>
          </SalesFloorCardBody>
        </SalesFloorCardContainer>
      ))}
    </View>
  );
};

export default SalesFloorCardHome;
