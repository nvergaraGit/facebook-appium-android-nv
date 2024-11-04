import React from 'react';
import { ContainerData, ContainerVersion, TextLabel, TextRegular, TextValue } from './styles';
import ButtonSession from '@components/ButtonSession';
import IconDownload from '@assets/icons/icon-download.svg';
import { TOrders } from 'types/orders';
import { getHourWithoutSeconds } from '@utils/formatHour';
import { formatDate } from '@utils/formatDate';
interface Props {
  handlePress: () => void;
  orders: TOrders | null;
}
function DownloadOrder({ handlePress, orders }: Props) {
  return (
    <ContainerVersion>
      {orders === null ? (
        <TextRegular>
          Descarga la orden de compra en
          {'\n'}PDF directamente a tu dispositivo.
        </TextRegular>
      ) : (
        <>
          <TextRegular style={{ textAlign: 'center' }}>Detalles de la orden de compra</TextRegular>
          <ContainerData>
            <TextLabel style={{ width: '50%' }}>Número de la órden</TextLabel>
            <TextValue
              style={{ width: '50%', paddingLeft: 7, textAlign: 'right' }}
              numberOfLines={1}
            >
              {orders.oc}
            </TextValue>
          </ContainerData>
          <ContainerData>
            <TextLabel>Código de sala</TextLabel>
            <TextValue>{orders.clte}</TextValue>
          </ContainerData>
          <ContainerData>
            <TextLabel>Nombre de la sala</TextLabel>
            <TextValue numberOfLines={1}>{orders.clteNombre}</TextValue>
          </ContainerData>
          <ContainerData>
            <TextLabel>Emisión</TextLabel>
            <TextValue>{orders.fecAct ? formatDate(orders.fecAct) : '-'}</TextValue>
          </ContainerData>
          <ContainerData>
            <TextLabel>Despacho</TextLabel>
            <TextValue>
              {orders.fecDespacho !== '-' ? formatDate(orders.fecDespacho) : orders.fecDespacho}
            </TextValue>
          </ContainerData>
          <ContainerData>
            <TextLabel>Hora</TextLabel>
            <TextValue>{orders.hsAct ? getHourWithoutSeconds(orders.hsAct) : '-'}</TextValue>
          </ContainerData>
          <ContainerData>
            <TextLabel>Cajas fisicas</TextLabel>
            <TextValue>{orders.totalCajas}</TextValue>
          </ContainerData>
        </>
      )}
      <ButtonSession
        isDisabled={false}
        onPress={handlePress}
        title="Descargar PDF"
        isIcon={true}
        icon={<IconDownload />}
      />
    </ContainerVersion>
  );
}
export default DownloadOrder;
