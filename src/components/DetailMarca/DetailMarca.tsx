import {
  Container,
  ContainerMultiple,
  ContainerTotal,
  IconContainer,
  Percent,
  ProductsCardButton,
} from '@screens/DetailsSalesFloor/styles';
import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { TIndicadores, TNoteRedBrand } from 'types/salesFloors';
import IconEmbonor from '@assets/icons/embonor-note-red.svg';
import IconIB from '@assets/icons/abicon.svg';
import IconSantaRita from '@assets/icons/santa-rita.svg';
import IconArrowGreen from '@assets/icons/arrow-green.svg';
import IconArrowRed from '@assets/icons/arrow-red.svg';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import {
  ContainerPromedio,
  ContainerResume,
  TextDate,
  TextMarca,
  TextPercent,
  TextPeso,
  TextWeek,
} from './DetailMarca.styles';
import { dateFormatter } from '@utils/formatDate';
import { TextName } from '@components/NoteRedMarcas/NoteRedMarcas.styles';

interface Props {
  detailMarca: TNoteRedBrand;
  indicadores: TIndicadores[];
  getItemMarca: (brand: string, item: TIndicadores) => void;
}
function DetailMarca({ detailMarca, indicadores, getItemMarca }: Props) {
  return (
    <>
      <ContainerResume>
        <View>
          <IconContainer>
            {detailMarca.id === 1 && <IconEmbonor />}
            {detailMarca.id === 2 && <IconIB />}
            {detailMarca.id === 3 && <IconSantaRita />}
            <ContainerMultiple>
              <TextMarca>{detailMarca.nombre}</TextMarca>
            </ContainerMultiple>
          </IconContainer>
        </View>
        <View>
          <TextWeek>Semana actual </TextWeek>
          <TextDate>
            {dateFormatter(detailMarca.fechaInicio)} - {dateFormatter(detailMarca.fechaTermino)}
          </TextDate>
        </View>
      </ContainerResume>

      <ContainerPromedio>
        <TextWeek>Promedio</TextWeek>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextPercent>{detailMarca.promedio} </TextPercent>
          {detailMarca?.estado === 'up' && <IconArrowGreen />}
          {detailMarca?.estado === 'down' && <IconArrowRed />}
        </View>
      </ContainerPromedio>
      {indicadores.map((item) => {
        return (
          <TouchableWithoutFeedback
            onPress={() => getItemMarca(detailMarca.nombre, item)}
            key={item.id}
            disabled={item.promedio === '100%' || item.nombre === 'Estrategia de Exhibición'}
          >
            <Container>
              <IconContainer>
                <ContainerMultiple>
                  <TextName>{item.nombre}</TextName>
                  <TextPeso>Peso: {item.peso}</TextPeso>
                </ContainerMultiple>
              </IconContainer>
              <ContainerTotal>
                <Percent>{item.promedio}</Percent>
                {item.estado === 'down' && <IconArrowRed />}
                {item.estado === 'up' && item.promedio !== '100%' && <IconArrowGreen />}
                <ProductsCardButton
                  onPress={() => getItemMarca(detailMarca.nombre, item)}
                  isImportant={
                    item.promedio === '100%' || item.nombre === 'Estrategia de Exhibición'
                  }
                  disabled={item.promedio === '100%' || item.nombre === 'Estrategia de Exhibición'}
                >
                  {item.promedio !== '100%' ||
                    (item.nombre === 'Estrategia de Exhibición' && <IconRightArrow />)}
                </ProductsCardButton>
              </ContainerTotal>
            </Container>
          </TouchableWithoutFeedback>
        );
      })}
    </>
  );
}

export default DetailMarca;
