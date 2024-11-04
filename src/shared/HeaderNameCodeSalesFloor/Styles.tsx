import { styled } from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
  textImportant?: boolean;
}
export const Container = styled.View`
  display: flex;
  flex-direction: row;
`;
export const TextCode = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 24px;
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.authBorderInput};
`;
export const TextName = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
  margin-bottom: 20px;
`;
