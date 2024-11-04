import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { TTheme } from 'types/theme';
import { StatusBar } from 'react-native';
interface ThemeProps {
  theme?: TTheme;
  backgroundColor?: string;
}
export const ProductsStatusBar = styled(StatusBar).attrs(({ backgroundColor, theme }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  backgroundColor: backgroundColor ? backgroundColor : theme.colors.primary,
}))``;

export const ProductHeader = styled(LinearGradient).attrs({
  colors: ['#AF0101', '#F00000'],
})`
  height: 16%;
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  justify-content: flex-end;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
export const ProducstTitle = styled.Text<ThemeProps>`
  font-size: 20px;
  line-height: 28px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;
