import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
}

export const B2BProductsListContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const B2BProductListSubtitle = styled.Text<ThemeProps>`
  font-size: 16px;
  margin-top: 20px;
  margin-left: 18px;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
`;
