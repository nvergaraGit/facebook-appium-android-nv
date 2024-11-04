import { styled } from 'styled-components/native';
import { TTheme } from '../../types/theme';
import { Dimensions } from 'react-native';

interface ThemeProps {
  theme?: TTheme;
}
const screenDms = Dimensions.get('window').width;
export const SalesFloorCardContainer = styled.TouchableOpacity<ThemeProps>`
  width: ${screenDms - 90}px;
  margin-right: 16px;
`;

export const SalesFloorCardBody = styled.View<ThemeProps>`
  display: flex;
  padding-top: 10px;
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const ProductsCardContainerImageText = styled.View<ThemeProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ProductsCardImage = styled.Image<ThemeProps>`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ProductsCardContainerText = styled.View<ThemeProps>`
  width: 66%;
  margin-left: 20px;
`;

export const SalesFloorCardCode = styled.Text<ThemeProps>`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.productsCardSkuText};
`;

export const SalesFloorCardCodeTitle = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  font-weight: 400;
`;
export const SalesFloorCardCodeOrderNum = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const SalesFloorCardImage = styled.Image<ThemeProps>`
  width: 57px;
  height: 57px;
  border-radius: 5px;
`;

export const SalesFloorCardAddress = styled.Text<ThemeProps>`
  width: 70%;
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: #5f6f86;
`;

export const SalesFloorCardTextDescription = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
`;

export const SaleFloorBoxText = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const SalesFloorCardFooter = styled.View<ThemeProps>`
  display: flex;
  margin-bottom: 5px;
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
`;

export const ProductsCardTextQuantity = styled.Text<ThemeProps>`
  font-size: 14px;
  font-weight: 300;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
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
