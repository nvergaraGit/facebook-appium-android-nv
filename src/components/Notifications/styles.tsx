import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
  open?: boolean;
}

export const NotificationsContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const NotificationsContent = styled.View<ThemeProps>``;

export const NotificationsContainerSearch = styled.View<ThemeProps>`
  padding-left: 16px;
  padding-right: 18px;
  margin-bottom: 10px;
`;

export const NotificationsCard = styled.TouchableOpacity<ThemeProps>`
  padding: 10px 10px 20px 18px;
  background-color: ${(props) =>
    props.open ? props.theme.colors.secondary : props.theme.colors.cardNotifications};
`;

export const NotificationDivider = styled.View<ThemeProps>`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.dividerCard};
`;

export const NotificationsHeaderContainer = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NotificationsBody = styled.View<ThemeProps>``;

export const NotificationBulletPoint = styled.View<ThemeProps>`
  width: 7px;
  height: 7px;
  margin-top: 14px;
  border-radius: 50px;
  display: ${(props) => (props.open ? 'none' : 'flex')};
  background-color: ${(props) => props.theme.colors.authBorderInput};
`;

export const NotificationsTitle = styled.Text<ThemeProps>`
  width: 75%;
  font-size: 14px;
  margin-top: 11px;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.GothamMedium};
`;

export const NotificationsTime = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-top: 14px;
  color: ${(props) => props.theme.colors.subtitleOrder};
  font-family: ${(props) => props.theme.fonts.mainFont};
`;

export const NotificationsDescription = styled.Text<ThemeProps>`
  font-size: 14px;
  margin-top: 5px;
  color: ${(props) => props.theme.colors.subtitleOrder};
  font-family: ${(props) => props.theme.fonts.mainFont};
`;
