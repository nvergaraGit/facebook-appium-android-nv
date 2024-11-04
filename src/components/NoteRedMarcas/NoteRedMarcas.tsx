// import IconArrowGreen from '@assets/icons/arrow-green.svg';
// import IconArrowRed from '@assets/icons/arrow-red.svg';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  ContainerMultiple,
  ContainerTotal,
  IconContainer,
  // Percent,
  ProductsCardButton,
} from '@screens/DetailsSalesFloor/styles';
// import IconEmbonor from '@assets/icons/embonor-note-red.svg';
// import IconIB from '@assets/icons/abicon.svg';
// import IconSantaRita from '@assets/icons/santa-rita.svg';
import { TIndicadores, TNoteRedBrand } from 'types/salesFloors';
import { TextName } from './NoteRedMarcas.styles';

interface Props {
  noteRedBrand: TNoteRedBrand[] | null;
  getIndicadores: (indicadores: TIndicadores[], itemMarca: TNoteRedBrand) => void;
  goToNoteRed: () => void;
}
const NoteRedMarcas = ({
  // noteRedBrand,
  // getIndicadores,
  goToNoteRed,
}: Props) => {
  return (
    <>
      {/* {noteRedBrand
        ? noteRedBrand?.map((item) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => getIndicadores(item.indicadores, item)}
                key={item.id}
                disabled={item.promedio === '100%'}
              >
                <Container>
                  <IconContainer>
                    {item.id === 1 && <IconEmbonor />}
                    {item.id === 2 && <IconIB />}
                    {item.id === 3 && <IconSantaRita />}
                    <ContainerMultiple>
                      <TextName>{item.nombre}</TextName>
                    </ContainerMultiple>
                  </IconContainer>
                  <ContainerTotal>
                    <Percent>{item.promedio}</Percent>
                    {item.estado === 'down' && <IconArrowRed />}
                    {item.estado === 'up' && item.promedio !== '100%' && <IconArrowGreen />}

                    <ProductsCardButton
                      onPress={() => getIndicadores(item.indicadores, item)}
                      isImportant={item.promedio === '100%'}
                      disabled={item.promedio === '100%'}
                    >
                      {item.promedio !== '100%' && <IconRightArrow />}
                    </ProductsCardButton>
                  </ContainerTotal>
                </Container>
              </TouchableWithoutFeedback>
            );
          })
        : null} */}
      <TouchableWithoutFeedback onPress={goToNoteRed}>
        <Container style={{ backgroundColor: '#F7F9FC' }}>
          <IconContainer>
            <ContainerMultiple>
              <TextName>Historial últimos 6 meses</TextName>
            </ContainerMultiple>
          </IconContainer>
          <ContainerTotal>
            <ProductsCardButton onPress={goToNoteRed} isImportant={false}>
              <IconRightArrow />
            </ProductsCardButton>
          </ContainerTotal>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default NoteRedMarcas;
