import { TTheme } from 'types/theme';
import styled from 'styled-components/native';
import { theme } from '@styles/themes';
import { css } from 'styled-components';

interface ThemeProps {
  theme?: TTheme;
  category?: string;
}
export const ContainerCategory = styled.View<ThemeProps>`
  padding: 4px 20px;
  margin-bottom: 38px;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  ${(props) =>
    props.category === 'SSD' &&
    css`
      background: #fee5e6;
    `}
  ${(props) =>
    props.category === 'AGUAS' &&
    css`
      background: #ebfbff;
    `}
    ${(props) =>
    props.category === 'NCBS' &&
    css`
      background: #fefbe8;
    `}
`;
export const TitlePacking = styled.Text<ThemeProps>`
  font-family: ${theme.fonts.GothamMedium};
  font-size: 16px;
  line-height: 20px;
  color: #030f1c;
`;

export const TagPatron = styled.View<ThemeProps>`
  padding: 4px 8px;
  border-radius: 5px;
  margin: 8px;
  ${(props) =>
    props.category === 'SECUNDARIO' &&
    css`
      border: 1px solid #04a4c7;
      background: #e6f6f9;
    `}
  ${(props) =>
    props.category === 'PRIMARIO' &&
    css`
      border: 1px solid #1b4bc7;
      background: #e9edf8;
    `};
`;

export const TitlePatron = styled.Text<ThemeProps>`
  font-family: ${theme.fonts.GothamMedium};
  font-size: 12px;
  line-height: 16px;
  ${(props) =>
    props.category === 'SECUNDARIO' &&
    css`
      color: #04a4c7;
    `}
  ${(props) =>
    props.category === 'PRIMARIO' &&
    css`
      color: #1b4bc7;
    `};
`;

export const TitleMecanica = styled.Text<ThemeProps>`
  font-family: ${theme.fonts.mainFont};
  font-size: 14px;
  line-height: 18px;
  color: #030f1c;
  text-align: center;
`;
export const TitleCategory = styled.Text<ThemeProps>`
  font-family: ${theme.fonts.GothamMedium};
  font-size: 16px;
  line-height: 20px;
  padding-left: 10px;
  ${(props) =>
    props.category === 'SSD' &&
    css`
      color: #f44040;
    `};
  ${(props) =>
    props.category === 'AGUAS' &&
    css`
      color: #1b4bc7;
    `};
  ${(props) =>
    props.category === 'NCBS' &&
    css`
      color: #fa7800;
    `};
`;
