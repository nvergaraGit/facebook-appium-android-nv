import React from 'react';
import { ContainerResume, ContainerText, Percent, TextDate, Title, TitlePercent } from './Styles';
import { percentageMonthly, percentageWeekly } from 'types/fillRate';
import IconArrowGreen from '@assets/icons/arrow-green.svg';
import IconArrowRed from '@assets/icons/arrow-red.svg';
import IconNew from '@assets/icons/new-icon.svg';
import { View } from 'react-native';
import { mesesAbreviados } from '@utils/FormatMonth';
import { dateFormatter } from '@utils/formatDate';

interface Props {
  fillRateWeekly: percentageWeekly | null;
  fillRateMonthly: percentageMonthly | null;
}
const FillRateGeneral = ({ fillRateWeekly, fillRateMonthly }: Props) => {
  type MesAbreviado = keyof typeof mesesAbreviados;
  return (
    <View style={{ marginHorizontal: 13 }}>
      <Title>Información de todas tus salas</Title>
      <ContainerResume containerData>
        <View>
          <TitlePercent>Semana actual</TitlePercent>
          <ContainerResume>
            <ContainerText>
              <Percent>
                {fillRateWeekly?.percentage === 100 ? '100' : fillRateWeekly?.percentage.toFixed(1)}
                %
              </Percent>
            </ContainerText>
            <ContainerText>
              {fillRateWeekly?.estado === 'UP' && <IconArrowGreen />}
              {fillRateWeekly?.estado === 'DOWN' && <IconArrowRed />}
            </ContainerText>
            <ContainerText>{fillRateWeekly?.nuevo && <IconNew />}</ContainerText>
          </ContainerResume>
          <TextDate>{`${dateFormatter(fillRateWeekly?.dateIni as string)} - ${dateFormatter(
            fillRateWeekly?.dateEnd as string,
          )}`}</TextDate>
        </View>
        <View>
          <TitlePercent>
            Mes {''}
            {fillRateMonthly && mesesAbreviados[fillRateMonthly.month as MesAbreviado]
              ? mesesAbreviados[fillRateMonthly.month as MesAbreviado]
              : fillRateMonthly?.month}
          </TitlePercent>
          <ContainerResume>
            <ContainerText>
              <Percent>
                {fillRateMonthly?.percentage === 100
                  ? '100'
                  : fillRateMonthly?.percentage.toFixed(1)}
                %
              </Percent>
            </ContainerText>
            <ContainerText>
              {fillRateMonthly?.estado === 'UP' && <IconArrowGreen />}
              {fillRateMonthly?.estado === 'DOWN' && <IconArrowRed />}
            </ContainerText>
          </ContainerResume>
          <TextDate>Acumulado mensual</TextDate>
        </View>
      </ContainerResume>
    </View>
  );
};

export default FillRateGeneral;
