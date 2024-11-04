import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
}
export const Container = styled.View<ThemeProps>`
  padding: 20px;
  padding-left: 39px;
  padding-right: 39px;
`;
export const ContainerIcon = styled.View<ThemeProps>`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;
export const TextTitle = styled.Text<ThemeProps>`
  color: black;
  font-size: 20px;
  margin-top: 10px;
  line-height: 24px;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const TextSubtitle = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts?.mainFont};
`;

export const TextDescription = styled.Text<ThemeProps>`
  color: black;
  font-size: 16px;
  line-height: 19px;
  flex-shrink: 1;
  text-align: center;
  font-family: ${(props) => props.theme.fonts?.mainFont};
`;

export const TextDescriptionShadow = styled(TextDescription)<ThemeProps>`
  color: ${(props) => props.theme.colors.infoText};
  font-family: ${(props) => props.theme.fonts?.GothamBold};
`;

export const FooterText = styled.Text<ThemeProps>`
  color: red;
  font-size: 14px;
  line-height: 19px;
  font-family: ${(props) => props.theme.fonts?.mainFont};
  text-align: center;
  margin-bottom: 10px;
`;

export const Label = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  color: black;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const ContainerOptions = styled.View<ThemeProps>`
  height: 40px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.dividerLine};
`;
