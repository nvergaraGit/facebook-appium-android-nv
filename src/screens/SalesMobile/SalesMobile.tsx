import {
  NoteRedMarkCardContainer,
  NoteRedMarkCardContainerText,
  NoteRedMarkCardContent,
  NoteRedMarkCardContentTitles,
  NoteRedMarkCardHeaderContainer,
  NoteRedMarkCardHeaderSubTitlePercentage,
  NoteRedMarkCardHeaderTitle,
} from '@components/NoteRedMarkCard/styles';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { ContainerPage } from '@screens/DetailsNoteRed/DetailsNoteRed.styles';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import React, { useEffect, useState } from 'react';
import { TextMonth, TextSubtitle, TextSubtitleDate, SalesMobileMarkCardContainer } from './Styles';
import { monthName } from '@libraries/formatDate';
import moment from 'moment';
import { useLazyQuery } from '@apollo/client';
import GET_SALES_MOBILE from '@graphql/queries/getSalesMobile';
import { TDataIndicator, TSalesMobile } from 'types/indicators';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import WithApollo from '@components/hocs/WithApollo';
import { determineTextColor } from '@utils/colorValueNegative';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'SalesMobile'>;
const SalesMobile = ({ route }: Props) => {
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const { SalesFloor } = route.params;
  const [saleMobile, setSaleMobile] = useState<TSalesMobile>();
  const [getSalesMobile, { loading: loadingMobile }] = useLazyQuery(GET_SALES_MOBILE, {
    fetchPolicy: 'network-only',
  });
  useEffect(() => {
    void getSalesMobile({
      variables: {
        getSalesMobileInput: {
          clienteId: SalesFloor.codClient.toString(),
        },
      },
      onCompleted: (data: TDataIndicator) => {
        setSaleMobile(data.getSalesMobile.data);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderDetailScreenNavigation title="Móvil de ventas" goBack={() => navigation.goBack()} />
      <TextSubtitle>Cantidades expresadas en cajas unitarias</TextSubtitle>
      {loadingMobile ? (
        <LoaderFullScreen />
      ) : (
        <ContainerPage style={{ display: 'flex', paddingBottom: 150 }}>
          <TextMonth>
            Mes de actualización{' '}
            <TextMonth isImportant>{monthName(moment().format('YYYY-MM-DD'))}</TextMonth>
          </TextMonth>
          <SalesMobileMarkCardContainer style={{ marginHorizontal: 0 }}>
            <NoteRedMarkCardHeaderContainer style={{ backgroundColor: '#E6ECF4' }}>
              <NoteRedMarkCardHeaderTitle style={{ paddingLeft: 13 }}>
                Móvil
              </NoteRedMarkCardHeaderTitle>
            </NoteRedMarkCardHeaderContainer>
            <>
              <NoteRedMarkCardContent>
                <NoteRedMarkCardContainerText>
                  <NoteRedMarkCardContentTitles>Actual</NoteRedMarkCardContentTitles>
                  <NoteRedMarkCardHeaderSubTitlePercentage
                    style={{ color: determineTextColor(saleMobile?.movil.actual) }}
                  >
                    {saleMobile?.movil.actual || '-'}
                  </NoteRedMarkCardHeaderSubTitlePercentage>
                </NoteRedMarkCardContainerText>
                <TextSubtitleDate>
                  {saleMobile?.fechasMovilVentas.movilActualInicio} -{' '}
                  {saleMobile?.fechasMovilVentas.movilActualTermino}
                </TextSubtitleDate>
                <NoteRedMarkCardContainerText>
                  <NoteRedMarkCardContentTitles>Año anterior</NoteRedMarkCardContentTitles>
                  <NoteRedMarkCardHeaderSubTitlePercentage
                    style={{ color: determineTextColor(saleMobile?.movil.aa) }}
                  >
                    {saleMobile?.movil.aa || '-'}
                  </NoteRedMarkCardHeaderSubTitlePercentage>
                </NoteRedMarkCardContainerText>
                <TextSubtitleDate>
                  {saleMobile?.fechasMovilVentas.movilAaInicio} -{' '}
                  {saleMobile?.fechasMovilVentas.movilAaTermino}
                </TextSubtitleDate>
                <NoteRedMarkCardContainerText>
                  <NoteRedMarkCardContentTitles>% de variación</NoteRedMarkCardContentTitles>
                  <NoteRedMarkCardHeaderSubTitlePercentage
                    style={{ color: determineTextColor(saleMobile?.movil.porcentaje) }}
                  >
                    {saleMobile?.movil.porcentaje || '-'}
                  </NoteRedMarkCardHeaderSubTitlePercentage>
                </NoteRedMarkCardContainerText>
              </NoteRedMarkCardContent>
            </>
          </SalesMobileMarkCardContainer>
          <SalesMobileMarkCardContainer style={{ marginHorizontal: 0 }}>
            <NoteRedMarkCardHeaderContainer style={{ backgroundColor: '#E6ECF4' }}>
              <NoteRedMarkCardHeaderTitle style={{ paddingLeft: 13 }}>
                Acumulado
              </NoteRedMarkCardHeaderTitle>
            </NoteRedMarkCardHeaderContainer>
            <>
              <NoteRedMarkCardContent>
                <NoteRedMarkCardContainerText>
                  <NoteRedMarkCardContentTitles>Actual</NoteRedMarkCardContentTitles>
                  <NoteRedMarkCardHeaderSubTitlePercentage
                    style={{ color: determineTextColor(saleMobile?.acumulado.actual) }}
                  >
                    {saleMobile?.acumulado.actual || '-'}
                  </NoteRedMarkCardHeaderSubTitlePercentage>
                </NoteRedMarkCardContainerText>
                <TextSubtitleDate>
                  {saleMobile?.fechasMovilVentas.acumuladoActualInicio} -{' '}
                  {saleMobile?.fechasMovilVentas.acumuladoActualTermino}
                </TextSubtitleDate>
                <NoteRedMarkCardContainerText>
                  <NoteRedMarkCardContentTitles>Año anterior</NoteRedMarkCardContentTitles>
                  <NoteRedMarkCardHeaderSubTitlePercentage
                    style={{ color: determineTextColor(saleMobile?.acumulado.aa) }}
                  >
                    {saleMobile?.acumulado.aa || '-'}
                  </NoteRedMarkCardHeaderSubTitlePercentage>
                </NoteRedMarkCardContainerText>
                <TextSubtitleDate>
                  {saleMobile?.fechasMovilVentas.acumuladoAaInicio} -{' '}
                  {saleMobile?.fechasMovilVentas.acumuladoAaTermino}
                </TextSubtitleDate>
                <NoteRedMarkCardContainerText>
                  <NoteRedMarkCardContentTitles>% de variación</NoteRedMarkCardContentTitles>
                  <NoteRedMarkCardHeaderSubTitlePercentage
                    style={{ color: determineTextColor(saleMobile?.acumulado.porcentaje) }}
                  >
                    {saleMobile?.acumulado.porcentaje || '-'}
                  </NoteRedMarkCardHeaderSubTitlePercentage>
                </NoteRedMarkCardContainerText>
              </NoteRedMarkCardContent>
            </>
          </SalesMobileMarkCardContainer>
          <NoteRedMarkCardHeaderContainer style={{ marginTop: 10, backgroundColor: '#E6ECF4' }}>
            <NoteRedMarkCardHeaderTitle style={{ paddingLeft: 13 }}>
              Móvil /12
            </NoteRedMarkCardHeaderTitle>
            <NoteRedMarkCardHeaderSubTitlePercentage
              style={{ color: determineTextColor(saleMobile?.movilPromedio) }}
            >
              {saleMobile?.movilPromedio || '-'}
            </NoteRedMarkCardHeaderSubTitlePercentage>
          </NoteRedMarkCardHeaderContainer>
        </ContainerPage>
      )}
    </>
  );
};

export default WithApollo(SalesMobile);
