import { TRedNoteMonth } from 'types/salesFloors';
import React from 'react';
import { FlatList, View } from 'react-native';
import IconArrowGreen from '@assets/icons/arrow-green.svg';
import IconArrowRed from '@assets/icons/arrow-red.svg';
import {
  ContainerFlex,
  ContainerNotePrincipal,
  TextDate,
  TextPercentPrincipal,
  TextResume,
  TextWeek,
} from './Styles';
import { dateFormatter } from '@utils/formatDate';
interface Props {
  noteRedMonth: TRedNoteMonth | null;
}
const DetailsNoteRed = ({ noteRedMonth }: Props) => {
  return (
    <>
      <ContainerNotePrincipal>
        <ContainerFlex changeColor>
          <TextPercentPrincipal>{noteRedMonth?.porcentajeNotaRed}% </TextPercentPrincipal>

          {noteRedMonth?.estadoActual === 'up' && <IconArrowGreen />}
          {noteRedMonth?.estadoActual === 'down' && <IconArrowRed />}
        </ContainerFlex>
        <ContainerFlex changeColor>
          <TextWeek>Semana actual: {dateFormatter(noteRedMonth?.semanaActual as string)}</TextWeek>
        </ContainerFlex>
      </ContainerNotePrincipal>
      <TextPercentPrincipal changeColor>Últimos 6 meses</TextPercentPrincipal>
      <FlatList
        data={noteRedMonth?.rednoteMonth}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 24 }}>
            <ContainerFlex>
              <TextResume>{item.mes}</TextResume>
              <TextResume>{item.porcentajeNotaRed}%</TextResume>
            </ContainerFlex>
            <FlatList
              data={item.redNote}
              renderItem={({ item: redNoteItem }) => (
                <ContainerFlex isMargin>
                  <View>
                    <TextDate changeColor>Semana {redNoteItem.semana}</TextDate>
                    <TextDate style={{ color: '#5F6F86' }}>
                      {dateFormatter(redNoteItem.fecha)}
                    </TextDate>
                  </View>
                  <View>
                    <ContainerFlex>
                      <TextDate>{redNoteItem.notaRed}% </TextDate>
                      {redNoteItem.estado === 'up' && <IconArrowGreen />}
                      {redNoteItem.estado === 'down' && <IconArrowRed />}
                    </ContainerFlex>
                  </View>
                </ContainerFlex>
              )}
            />
          </View>
        )}
      />
    </>
  );
};

export default DetailsNoteRed;
