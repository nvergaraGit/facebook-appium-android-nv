import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
  open?: boolean;
}

export const NotificationsDetailsContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const NotificationsDetailsContent = styled.View<ThemeProps>`
  padding: 20px 19px 0px 18px;
`;

export const NotificationsDetailsTitle = styled.Text<ThemeProps>`
  width: 80%;
  font-size: 16px;
  margin-top: 11px;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.GothamBold};
`;

export const NotificationsDetailsDescription = styled.Text<ThemeProps>`
  font-size: 14px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.authText};
  font-family: ${(props) => props.theme.fonts.mainFont};
`;

export const NotificationsDetailsImage = styled.Image<ThemeProps>`
  width: 100%;
  height: 224px;
  margin-top: 18px;
`;
