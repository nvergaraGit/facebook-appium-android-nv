import styled, { css } from 'styled-components/native';
import { TTheme } from '../../types/theme';
import {
  CREDITO,
  DIF_COSTO,
  ELIMINADO,
  MAESTRA,
  NOTA_CREDITO,
  NOTA_DEBITO,
  NO_IDENTIFICADA,
  RECHAZO,
  RETORNO,
} from '@libraries/constants';
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
interface ThemeProps {
  theme?: TTheme;
  isIcon?: boolean;
  nameReason?: string;
}
export const Container = styled.View<ThemeProps>`
  background: white;
  shadow-color: #5f6f86;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.38;
  shadow-radius: 8px;
  elevation: 4;
  padding: 7px 14px;
  width: ${(props) => (props.isIcon ? '48.4%' : '31.8%')};
  margin: 10px 2px;
`;
export const ContainerFlex = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;
export const ContainerData = styled.View<ThemeProps>`
  margin-left: 3px;
  flex-direction: column;
  justify-content: space-between;
`;
export const NameReason = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: 12px;
  line-height: 16px;
  color: black;
  margin-bottom: 2px;
`;
export const PercentageReason = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  font-size: 14px;
  line-height: 19px;
  ${(props) =>
    props.nameReason === RECHAZO &&
    css`
      color: #1890ff;
    `}
  ${(props) =>
    props.nameReason === RETORNO &&
    css`
      color: #1b4bc7;
    `}
    ${(props) =>
    props.nameReason === ELIMINADO &&
    css`
      color: #5f67e4;
    `}
    ${(props) =>
    props.nameReason === DIF_COSTO &&
    css`
      color: #04a4c7;
    `}
    ${(props) =>
    props.nameReason === MAESTRA &&
    css`
      color: #36cbcb;
    `}
    ${(props) =>
    props.nameReason === CREDITO &&
    css`
      color: #03d1fe;
    `}
    ${(props) =>
    props.nameReason === NO_IDENTIFICADA &&
    css`
      color: #6c006f;
    `}
    ${(props) =>
    props.nameReason === NOTA_DEBITO &&
    css`
      color: #db029e;
    `}
    ${(props) =>
    props.nameReason === NOTA_CREDITO &&
    css`
      color: #ce5dd0;
    `}
`;
