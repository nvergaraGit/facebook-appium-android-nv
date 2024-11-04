import { TTheme } from 'types/theme';
import styled from 'styled-components/native';
import { theme } from '@styles/themes';
import { css } from 'styled-components';

interface ThemeProps {
  theme?: TTheme;
  category?: string;
}
export const ContainerFlex = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 6px;
`;
export const TitleCatalogue = styled.Text<ThemeProps>`
  font-family: ${theme.fonts.GothamBold};
  font-size: 16px;
  line-height: 20px;
  color: #030f1c;
  max-width: 65%;
`;

// TODO delete
export const CategoryTag = styled.View<ThemeProps>`
  border-radius: 5px;
  overflow: hidden;
  width: 80px;
  padding: 4px 6px;
  align-items: center;
  ${(props) =>
    props.category === 'KOE' &&
    css`
      background: #fee5e6;
      border: 1px solid #f40009;
    `}
  ${(props) =>
    props.category === 'Santa Rita' &&
    css`
      background: #f0e5f1;
      border: 1px solid #6c006f;
    `}
    
    ${(props) =>
    props.category === 'ABI' &&
    css`
      background: #fff1e5;
      border: 1px solid #fa7800;
    `}
    ${(props) =>
    props.category === 'CAPEL' &&
    css`
      background: #ebfbff;
      border: 1px solid #04a4c7;
    `}
`;

//TODO delete
export const TitleCategory = styled.Text<ThemeProps>`
  font-family: ${theme.fonts.GothamBold};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  ${(props) =>
    props.category === 'KOE' &&
    css`
      color: #f40009;
    `}
  ${(props) =>
    props.category === 'Santa Rita' &&
    css`
      color: #6c006f;
    `}
    
    ${(props) =>
    props.category === 'ABI' &&
    css`
      color: #fa7800;
    `}
    ${(props) =>
    props.category === 'CAPEL' &&
    css`
      color: #04a4c7;
    `}
`;

export const TitleDate = styled.Text<ThemeProps>`
  font-family: ${theme.fonts.mainFont};
  font-size: 16px;
  line-height: 20px;
  color: #81878e;
`;
