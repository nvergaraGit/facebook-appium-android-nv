/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';
interface ThemeProps {
  theme?: TTheme;
  first?: boolean;
  textImportant?: boolean;
}
export const OrdersProductContainerHeader = styled.View<ThemeProps>`
  border-radius: 10px;
  padding: 10px 0px 10px 0px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid #e6ecf4;
`;
export const OrdersProductContainerFlatList = styled.View`
  margin-top: 20px;
`;
export const OrdersProductContainer = styled.View<ThemeProps>`
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
`;
export const OrdersProductTitle = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.grayScale};
  font-size: 20px;
  line-height: 29px;
`;
export const OrdersProductDownloadOc = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 19px;
`;
export const OrdersProductTitleSalesFloor = styled.Text<ThemeProps>`
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 19px;
  padding-horizontal: 15px;
  padding-vertical: 4px;
`;
export const ContainerLoader = styled.View<ThemeProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LoaderView = styled.View<ThemeProps>`
  position: absolute;
  elevation: 9;
  z-index: 9;
`;
export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.primary,
  size: 'large',
}))<ThemeProps>``;

export const TextNoResults = styled.Text<ThemeProps>`
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;

export const OrdersProductDivider = styled.View<ThemeProps>`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.dividerLine};
`;

export const OrdersProductText = styled.Text<ThemeProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const OrderProductContainerText = styled.TouchableOpacity<ThemeProps>`
  height: 55px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  padding: 17px 15px 17px 20px;
  justify-content: space-between;
  margin-top: ${({ first }) => (first ? '10px' : '0px')};
  border-color: ${({ theme }) => theme.colors.dividerLine};
  border-top-width: ${({ first }) => (first ? '1px' : '0px')};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const OrderProductsContainerIconArrow = styled.View<ThemeProps>`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.dividerLine};
`;
