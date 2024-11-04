/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TTheme } from 'types/theme';
import styled from 'styled-components/native';

interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
}
export const Container = styled.View<ThemeProps>`
  background: white;
  padding: 12px 13px;
  flex: 1;
`;
export const ContainerList = styled.View<ThemeProps>`
  margin-top: 13px;
  flex: 1;
`;
export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.primary,
  size: 'large',
}))<ThemeProps>``;
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
