/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { TTheme } from '../../types/theme';

interface ThemeProps {
  theme?: TTheme;
  textImportant?: boolean;
}

export const SalesFloorContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: #fff;
`;

export const TextTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-left: 20px;
  margin-bottom: 10px;
  color: black;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
export const TextNoResults = styled.Text<ThemeProps>`
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;

export const SalesFloorStatusBar = styled(StatusBar).attrs(({ theme }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  backgroundColor: theme.colors.primary,
}))``;

export const ContainerLoader = styled.View<ThemeProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LoaderView = styled.View<ThemeProps>`
  position: absolute;
  elevation: 9;
  z-index: 9;
`;

export const SalesResultContainer = styled.View<ThemeProps>`
  flex: 1;
`;
export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.primary,
  size: 'large',
}))<ThemeProps>``;
