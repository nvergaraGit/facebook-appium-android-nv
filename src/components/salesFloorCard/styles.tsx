import { styled } from 'styled-components/native';
import { TTheme } from '../../types/theme';

interface ThemeProps {
  theme?: TTheme;
  textBold?: boolean;
}

export const SalesFloorCardContainer = styled.TouchableOpacity<ThemeProps>`
  border-radius: 10px;
  margin-bottom: 10px;
  margin-horizontal: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
`;

export const SalesFloorCardBody = styled.View<ThemeProps>`
  display: flex;
  padding-top: 10px;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  padding-bottom: 10px;
  padding-horizontal: 20px;
  background-color: ${({ theme }) => theme.colors.headerCards};
`;

export const ProductsCardContainerImageText = styled.View<ThemeProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductsCardImage = styled.Image<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ProductsCardContainerText = styled.View<ThemeProps>`
  padding-left: 10px;
  padding-right: 20px;
`;

export const SalesFloorCardCodeLabel = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  margin-right: 7px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.productsCardSkuText};
`;

export const SalesFloorCardCode = styled.Text<ThemeProps>`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  font-family: ${(props) =>
    props.textBold ? ({ theme }) => theme.fonts.GothamMedium : ({ theme }) => theme.fonts.mainFont};

  color: ${({ theme }) => theme.colors.productsCardSkuText};
`;

export const SalesFloorCardImage = styled.Image<ThemeProps>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export const SalesFloorCardAddress = styled.Text<ThemeProps>`
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: #5f6f86;
`;

export const SalesFloorCardTextDescription = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
`;

export const SalesFloorCardFooter = styled.View<ThemeProps>`
  display: flex;
  margin-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
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
