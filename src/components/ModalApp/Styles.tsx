import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
}
export const Container = styled.View<ThemeProps>`
  padding: 20px;
`;
export const ContainerIcon = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;
`;
export const TextTitle = styled.Text<ThemeProps>`
  color: black;
  font-size: 16px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts?.GothamBold};
`;
export const TextDescription = styled.Text<ThemeProps>`
  color: black;
  font-size: 14px;
  line-height: 19px;
  font-family: ${(props) => props.theme.fonts?.mainFont};
  text-align: center;
  margin-bottom: 20px;
`;

export const FooterText = styled.Text<ThemeProps>`
  color: red;
  font-size: 14px;
  line-height: 19px;
  font-family: ${(props) => props.theme.fonts?.mainFont};
  text-align: center;
  margin-bottom: 10px;
`;
