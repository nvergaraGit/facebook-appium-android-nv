import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';

interface ThemeProps {
  theme?: TTheme;
  textImportant?: boolean;
}

export const CatalogsContainer = styled.View<ThemeProps>`
  background-color: #fff;
  flex: 1;
`;

export const CatalogsResultContainer = styled.View<ThemeProps>`
  margin-horizontal: 17px;
  flex: 1;
`;
// position: relative;

export const CatalogsTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors?.black};
  font-family: ${(props) => props.theme.fonts?.GothamBold};
`;

export const TextNoResults = styled.Text<ThemeProps>`
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;

export const TextTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  margin-top: 15px;
  margin-bottom: 10px;
  color: black;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
