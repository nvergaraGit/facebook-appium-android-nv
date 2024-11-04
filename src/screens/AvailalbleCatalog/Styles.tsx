import { TTheme } from 'types/theme';
import styled from 'styled-components/native';
import { theme } from '@styles/themes';

interface ThemeProps {
  theme?: TTheme;
  category?: string;
}
export const ContainerFlex = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const TitleCadena = styled.Text<ThemeProps>`
  font-family: ${theme.fonts.mainFont};
  font-size: 14px;
  line-height: 18px;
  color: #354455;
  text-transform: capitalize;
`;
