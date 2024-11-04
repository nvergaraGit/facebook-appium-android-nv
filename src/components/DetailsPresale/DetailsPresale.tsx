import { TPresalesDetail } from 'types/orderPresale';
import { formatDate } from '@utils/formatDate';
import React from 'react';
import {
  DetailsContainerData,
  DetailsContainerItem,
  DetailsContainerItemWrap,
  DetailsContainerSubtitle,
  DetailsContainerValue,
} from '@styles/sharedStyles';
import { currencyFormatter } from '@utils/currency';
import { View } from 'react-native';

interface Props {
  presalesDetail: TPresalesDetail | null;
}
const DetailsPresale = ({ presalesDetail }: Props) => {
  return (
    <>
      <DetailsContainerData>
        <DetailsContainerItem>
          <DetailsContainerSubtitle>Cliente</DetailsContainerSubtitle>
          <DetailsContainerValue>{presalesDetail?.clte}</DetailsContainerValue>
        </DetailsContainerItem>
        <DetailsContainerItem>
          <DetailsContainerSubtitle>Fecha emisión</DetailsContainerSubtitle>
          <DetailsContainerValue>
            {formatDate(presalesDetail?.fecha as string)}
          </DetailsContainerValue>
        </DetailsContainerItem>
        <DetailsContainerItem>
          <DetailsContainerSubtitle>N° O.C</DetailsContainerSubtitle>
          <DetailsContainerValue>{presalesDetail?.oc}</DetailsContainerValue>
        </DetailsContainerItem>
        <DetailsContainerItemWrap>
          <DetailsContainerSubtitle>N° Factura </DetailsContainerSubtitle>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {presalesDetail?.invoices.map((element, index, array) => (
              <View key={index}>
                <DetailsContainerValue>
                  {element.nroFactura + (index < array.length - 1 ? '-' : '')}
                </DetailsContainerValue>
              </View>
            ))}
          </View>
        </DetailsContainerItemWrap>
        <DetailsContainerItem>
          <DetailsContainerSubtitle>Cajas Físicas</DetailsContainerSubtitle>
          <DetailsContainerValue>{presalesDetail?.totalCajas}</DetailsContainerValue>
        </DetailsContainerItem>

        <DetailsContainerItem>
          <DetailsContainerSubtitle>Camión</DetailsContainerSubtitle>
          <DetailsContainerValue>{presalesDetail?.camion}</DetailsContainerValue>
        </DetailsContainerItem>
        <DetailsContainerItem>
          <DetailsContainerSubtitle>Viaje</DetailsContainerSubtitle>
          <DetailsContainerValue>{presalesDetail?.viaje}</DetailsContainerValue>
        </DetailsContainerItem>
        <DetailsContainerItem>
          <DetailsContainerSubtitle>Valor total</DetailsContainerSubtitle>
          <DetailsContainerValue>
            {currencyFormatter('CLP', presalesDetail?.total as number)}
          </DetailsContainerValue>
        </DetailsContainerItem>
      </DetailsContainerData>
    </>
  );
};

export default DetailsPresale;
