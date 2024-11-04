/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
interface ThemeProps {
  theme?: TTheme;
  textImportant?: boolean;
}

export const Container = styled.View<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
`;
export const ContainerOrders = styled.View<ThemeProps>`
  padding: 20px;
  flex: 1;
`;
export const TextTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  color: black;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  margin-bottom: 8px;
`;
export const TextNoResults = styled.Text<ThemeProps>`
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;
export const ContainerLoadingFooter = styled.View<ThemeProps>``;
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

export const OrdersScroll = styled.ScrollView<ThemeProps>``;
