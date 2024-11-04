/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { useNavigation } from '@react-navigation/native';
import {
  NoteRedMarkCardSoviList,
  NoteRedMardkCardRestContent,
  NoteRedDetailsMarkContainer,
  NoteRedDetailsMarkHeaderTitle,
  NoteRedMardkCardRestContainer,
  NoteRedDetailsMarkHeaderContent,
  NoteRedDetailsMarkHeaderTextDate,
  NoteRedDetailsMarkHeaderSubtitle,
  NoteRedMardkCardRestContentCodes,
  NoteRedMardkCardRestContentTitles,
  NoteRedDetailsMarkHeaderContainer,
  NoteRedMardkCardRestContainerHeader,
  NoteRedDetailsMarkHeaderTextPercentage,
  NoteRedMardkCardRestContentCodesTitles,
  NoteRedMardkCardContainerRestHeaderTitle,
} from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { TRedNoteBrandIndicator, TRedNoteBrandIndicatorDetails } from 'types/salesFloors';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import NoteRedMarkCard from '@components/NoteRedMarkCard/NoteRedMarkCard';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'DetailsNoteRedMark'>;

const NoteRedDetailsMark = ({ route }: Props) => {
  const { data, week, average } = route.params;
  const navigation = useNavigation();
  const title = `Detalle de ${data.nombreIndicadorMarca}`;

  const brandSelect = (data: TRedNoteBrandIndicator) => {
    switch (data.nombreIndicadorMarca) {
      case 'SOVI':
        return (
          <>
            <NoteRedMarkCardSoviList
              data={data.tipoSovi}
              renderItem={({ item }) => (
                <NoteRedMarkCard brand={item as TRedNoteBrandIndicatorDetails} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        );

      case 'EXHIBICIONES':
        return (
          <>
            <NoteRedMardkCardRestContainer>
              <NoteRedMardkCardRestContainerHeader>
                <NoteRedMardkCardContainerRestHeaderTitle>
                  Productos faltantes
                </NoteRedMardkCardContainerRestHeaderTitle>
              </NoteRedMardkCardRestContainerHeader>
              <NoteRedMardkCardRestContent>
                {data.tipoExhibicion.map((item, index) => (
                  <NoteRedMardkCardRestContentCodesTitles key={index}>
                    <NoteRedMardkCardRestContentCodes>{item.id}</NoteRedMardkCardRestContentCodes>
                    <NoteRedMardkCardRestContentTitles numberOfLines={1}>
                      {item.descripcionExhibicion}
                    </NoteRedMardkCardRestContentTitles>
                  </NoteRedMardkCardRestContentCodesTitles>
                ))}
              </NoteRedMardkCardRestContent>
            </NoteRedMardkCardRestContainer>
          </>
        );

      default:
        return (
          <NoteRedMardkCardRestContainer>
            <NoteRedMardkCardRestContainerHeader>
              <NoteRedMardkCardContainerRestHeaderTitle>
                Productos faltantes
              </NoteRedMardkCardContainerRestHeaderTitle>
            </NoteRedMardkCardRestContainerHeader>
            <NoteRedMardkCardRestContent>
              {data.tipoProductos.map((item, index) => (
                <NoteRedMardkCardRestContentCodesTitles key={index}>
                  <NoteRedMardkCardRestContentCodes>{item.id}</NoteRedMardkCardRestContentCodes>
                  <NoteRedMardkCardRestContentTitles numberOfLines={2}>
                    {item.descripcionProducto}
                  </NoteRedMardkCardRestContentTitles>
                </NoteRedMardkCardRestContentCodesTitles>
              ))}
            </NoteRedMardkCardRestContent>
          </NoteRedMardkCardRestContainer>
        );
    }
  };

  return (
    <NoteRedDetailsMarkContainer>
      <HeaderDetailScreenNavigation title={title} goBack={() => navigation.goBack()} />
      <NoteRedDetailsMarkHeaderContainer>
        <NoteRedDetailsMarkHeaderContent>
          <NoteRedDetailsMarkHeaderTitle>
            Promedio {data.nombreIndicadorMarca}
          </NoteRedDetailsMarkHeaderTitle>
          <NoteRedDetailsMarkHeaderTextPercentage>{average}</NoteRedDetailsMarkHeaderTextPercentage>
        </NoteRedDetailsMarkHeaderContent>
        <NoteRedDetailsMarkHeaderContent>
          <NoteRedDetailsMarkHeaderSubtitle>Semana actual</NoteRedDetailsMarkHeaderSubtitle>
          <NoteRedDetailsMarkHeaderTextDate>{week}</NoteRedDetailsMarkHeaderTextDate>
        </NoteRedDetailsMarkHeaderContent>
      </NoteRedDetailsMarkHeaderContainer>

      {brandSelect(data)}
    </NoteRedDetailsMarkContainer>
  );
};

export default NoteRedDetailsMark;
