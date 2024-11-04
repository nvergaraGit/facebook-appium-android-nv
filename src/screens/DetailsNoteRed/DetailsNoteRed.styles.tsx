import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
}

export const ContainerPage = styled.View<ThemeProps>`
  flex: 1;
  background: white;
  padding: 17px;
`;
export const ContainerResume = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: space-around;
`;
export const TextPercent = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  font-size: 20px;
  line-height: 28px;
  color: black;
`;
