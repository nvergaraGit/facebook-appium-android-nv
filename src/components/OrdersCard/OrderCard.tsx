import React from 'react';
import {
  Container,
  ContainerData,
  ContainerDetails,
  ContainerHeader,
  ContainerTitleOrders,
  TitleData,
  TitleOrders,
  ValueData,
  RoomNameContainer,
  RoomNameText,
} from './styles';
import { TOrders } from 'types/orders';
import { ContainerImg } from '@components/ExhibitionsCard/Styles';
import { getImageForCategoryOC } from '@utils/getCategoriesOc';

interface Props {
  orders: TOrders;
  getItemPurshaseOrder: (orders: TOrders) => void;
  showNSalesFloor?: boolean;
}

const OrderCard: React.FC<Props> = ({ orders, getItemPurshaseOrder, showNSalesFloor = true }) => {
  return (
    <Container style={{ overflow: 'hidden' }} onPress={() => getItemPurshaseOrder(orders)}>
      <ContainerHeader>
        <ContainerImg style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {getImageForCategoryOC(orders.categories as string[])}
        </ContainerImg>
        {showNSalesFloor ? (
          <RoomNameContainer>
            <RoomNameText>{orders.clteNombre}</RoomNameText>
            <RoomNameText>{orders.clte}</RoomNameText>
          </RoomNameContainer>
        ) : null}
        <ContainerTitleOrders showNSalesFloor={showNSalesFloor} style={{ marginTop: 6 }}>
          <TitleOrders>{orders.oc}</TitleOrders>
        </ContainerTitleOrders>
      </ContainerHeader>
      <ContainerData>
        <ContainerDetails>
          <TitleData>Cajas F.</TitleData>
          <ValueData>{orders.totalCajas}</ValueData>
        </ContainerDetails>
        <ContainerDetails>
          <TitleData>Pallets</TitleData>
          <ValueData>{orders.totalPaletas}</ValueData>
        </ContainerDetails>
      </ContainerData>
    </Container>
  );
};

export default OrderCard;
