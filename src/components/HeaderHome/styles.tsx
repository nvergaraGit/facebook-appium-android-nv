import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { TTheme } from 'types/theme';
import { StatusBar } from 'react-native';
interface ThemeProps {
  theme?: TTheme;
  backgroundColor?: string;
}
export const HeaderHomeStatusBar = styled(StatusBar).attrs(({ backgroundColor, theme }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  backgroundColor: backgroundColor ? backgroundColor : theme.colors.primary,
}))``;

export const HeaderHomeContainer = styled(LinearGradient).attrs({
  colors: ['#AF0101', '#F00000'],
})`
  height: 16%;
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  justify-content: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const HeaderHomeContent = styled.View<ThemeProps>`
  display: flex;
  flex-direction: row;
  padding-right: 25px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const HeaderHomeTitles = styled.View<ThemeProps>``;

export const HeaderHomeIconBellContainer = styled.View<ThemeProps>`
  border-radius: 50px;
  padding: 7px 8px 7px 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HeaderHomeTitleContainer = styled.View<ThemeProps>`
  flex-direction: row;
`;

export const HeaderHomeTitle = styled.Text<ThemeProps>`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 5px;
  line-height: 28px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const HeaderHomeWelcomeText = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-left: 20px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const HeaderHomeNotificationsContainer = styled.TouchableOpacity<ThemeProps>`
  position: relative;
`;

export const HeaderHomeNotificationQty = styled.View<ThemeProps>`
  left: 20px;
  top: -10px;
  width: auto;
  z-index: 100;
  padding: 1px 3px 1px 3px;
  position: absolute;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.stateColors.downStockText};
`;

export const HeaderHomeNotificationQtyText = styled.Text<ThemeProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.authText};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;
