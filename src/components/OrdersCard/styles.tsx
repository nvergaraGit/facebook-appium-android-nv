/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';
import { theme } from '@styles/themes';

interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
  tag?: string;
  showNSalesFloor?: boolean;
  withAlert?: boolean;
}

export const Container = styled.TouchableOpacity<ThemeProps>`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  margin: 10px 0;
  overflow: hidden;
`;
export const ContainerHeader = styled.View<ThemeProps>`
  padding: 8px 0 0px 0;
`;
export const ContainerSalesFloor = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
  justify-content: ${({ showNSalesFloor }) => (showNSalesFloor ? 'space-between' : 'flex-end')};
`;
export const ContainerSalesFloorState = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid
    ${({ theme, withAlert }) => (withAlert ? theme.colors.withoutStock : theme.colors.withStock)};
  background-color: ${({ theme, withAlert }) =>
    withAlert
      ? theme.colors.cardNotifications
      : theme.stateColors.fillRateBackgroundOrderTagDelivered};
`;
export const ContainerSalesFloorStateText = styled.Text<ThemeProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: ${({ theme, withAlert }) =>
    withAlert ? theme.colors.withoutStock : theme.colors.withStock};
`;
export const ContainerTitleOrders = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${({ showNSalesFloor }) => (showNSalesFloor ? '1px' : '0')};
`;
export const ContainerData = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: center;
  padding: 10px 0;
`;
export const ContainerDetails = styled.View<ThemeProps>`
  align-items: center;
  margin-horizontal: 12px;
`;

export const TitleData = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  color: #81878e;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  margin-bottom: 10px;
`;
export const ValueData = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: black;
`;
export const TitleSales = styled.Text<ThemeProps>`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: ${({ theme }) => theme.colors.dark};
`;
export const TitleOrders = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 24px;
  color: black;
  color: #354455;
  font-family: ${(props) =>
    props.isImportant ? theme.fonts.GothamBold : theme.fonts.GothamMedium};
`;
export const ProductsCardButton = styled.TouchableOpacity<ThemeProps>`
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  background-color: white;
`;

export const RoomNameContainer = styled.View`
  width: 100%;
  padding: 12px 18px;
  background-color: ${({ theme }) => theme.colors.light};
  flex-direction: row;
  justify-content: space-between;
`;

export const RoomNameText = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: #354455;
`;
