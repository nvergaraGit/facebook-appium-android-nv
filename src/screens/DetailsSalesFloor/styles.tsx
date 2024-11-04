import { TTheme } from 'types/theme';
import { theme } from '@styles/themes';
import { styled } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface ThemeProps {
  theme?: TTheme;
  textImportant?: boolean;
  isImportant?: boolean;
  isChild?: boolean;
}
const getTextColor = (value: string) => (value === '100%' ? '#12C269' : '#000');

export const DetailsSalesFloorContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const DetailsSalesFloorHeader = styled.View`
  display: flex;
  padding-top: 20px;
  padding-left: 18px;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
  justify-content: space-between;
`;

export const DetailsSalesFloorButtonBack = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const DetailsSalesFloorHeaderTitle = styled.Text<ThemeProps>`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grayScale};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const DetailsSalesFloorBody = styled.View`
  flex: 1;
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const DetailsSalesFloorSerialText = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 24px;
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.authBorderInput};
`;

export const DetailsSalesFloorProductTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
  margin-bottom: 20px;
`;

export const DetailsSalesFloorContainerBackButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DetailsSalesFloorViewContainer = styled.TouchableOpacity<ThemeProps>`
  width: 28px;
  height: 28px;
  display: flex;
  border-width: 1px;
  flex-direction: row;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.productsCardDivisorLine};
`;

export const TextNoResults = styled.Text<ThemeProps>`
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  font-weight: ${({ textImportant }) => (textImportant ? '350' : '325')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;
export const Container = styled.View<ThemeProps>`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  margin: 8px 0 0 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 10px;
  align-items: center;
  background: white;
`;
export const ContainerChild = styled.View<ThemeProps>`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: -5px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  padding: 14px 10px 9px;
  background: ${({ theme }) => theme.colors.light};
`;

export const ContainerTotal = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleOrders = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  color: black;
  font-family: ${(props) => (props.isImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont)};
`;
export const TitleOrderDate = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${() => theme.fonts.mainFont};
`;

export const ProductsCardButton = styled.TouchableOpacity<ThemeProps>`
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.isImportant ? 'none' : theme.colors.productsCardDivisorLine)};
  background-color: ${(props) => (props.isImportant ? 'transparent' : theme.colors.secondary)};
  margin-left: 11px;
`;

export const OrdersByDay = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 29px auto 10px auto;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`;

export const OrdersByDayCard = styled.TouchableOpacity<ThemeProps>`
  width: 159px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  position: relative;
  border: solid 1px #e8ebf7;
  min-height: 110px;
  border-radius: 6px;
`;

export const OrdersByDayImage = styled.View<ThemeProps>`
  width: 44px;
  height: 44px;
  position: absolute;
  top: -27px;
`;

export const OrdersByDayTitle = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000;
`;

export const OrdersByDayText = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #000;
`;

export const IconContainer = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;
export const Percent = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: ${({ children }) => getTextColor(children as string)};
  margin-right: 4px;
`;

export const ContainerMultiple = styled.View<ThemeProps>`
  justify-content: center;
`;
export const TitleIconNew = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const ContainerDetailsNotaRed = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContainerDateText = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-weight: regular;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ContainerTitles = styled.View<ThemeProps>`
  display: flex;
  flex-direction: column;
`;

export const SubtitleOrder = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.subtitleOrder};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const DetailsSalesFloorContainerVisitButton = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const DetailsSalesFloorVisitButton = styled(LinearGradient).attrs({
  colors: ['#AF0101', '#F00000'],
})`
  width: 100%;
  height: 44px;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
`;

export const DetailsSalesFloorVisitButtonFinish = styled.View<ThemeProps>`
  width: 100%;
  height: 44px;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.disabled};
`;

export const DetailsSalesFloorVisitButtonText = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const DetailsSalesFloorNoticeVisitStartedContainer = styled.View<ThemeProps>`
  width: 100%;
  height: 77px;
  margin-top: 20px;
  padding-vertical: 10px;
  padding-horizontal: 18px;
  background-color: ${({ theme }) => theme.colors.celeste};
`;

export const DetailsSalesFloorNoticeVisitStartedHeader = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const DetailsSalesFloorNoticeVisitStartedTitle = styled.Text<ThemeProps>`
  font-size: 14px;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.authText};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const DetailsSalesFloorNoticeVisitStartedText = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-top: 5px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.textDownloadReportsList};
`;
