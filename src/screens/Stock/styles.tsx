import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
  textImportant?: boolean;
}
export const FooterTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
export const Container = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 20px;
`;
export const ContainerList = styled.View<ThemeProps>`
  margin-top: 20px;
  flex: 1;
`;
export const TextNoResults = styled.Text<ThemeProps>`
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;

export const StockScroll = styled.ScrollView<ThemeProps>``;

export const ContainerNoResult = styled.View<ThemeProps>`
  margin-top: 14px;
`;
