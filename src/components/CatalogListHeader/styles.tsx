import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';

interface ThemeProps {
  theme?: TTheme;
}

export const CatalogListHeaderContainer = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 21px;
  padding-left: 12px;
`;

export const CatalogListHeaderLogoContainer = styled.View<ThemeProps>`
  padding-right: 12px;
`;

export const CatalogListHeaderLogoContent = styled.View<ThemeProps>`
  flex: 2;
`;

export const CatalogListHeaderTitle = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: 14px;
  line-height: 18px;
  color: #354455;
  text-transform: capitalize;
  margin-bottom: 6px;
`;

export const CatalogListHeaderDate = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  font-size: 16px;
  line-height: 20px;
  color: #354455;
  text-transform: capitalize;
`;

export const CatalogListHeaderSubTitle = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.categoriesSubtitle};
`;
