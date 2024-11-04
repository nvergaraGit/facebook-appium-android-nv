/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { css, styled } from 'styled-components/native';
import { TTheme } from '../../types/theme';
import { DOWN_STOCK, WITHOUT_STOCK, WITH_STOCK } from '@libraries/constants';

interface ThemeProps {
  theme?: TTheme;
  regular?: boolean;
  tag?: string;
  border?: number;
  isLast?: boolean;
  withAlert?: boolean;
  hasEssentialProduct?: boolean;
}
export const Container = styled.TouchableOpacity<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.light};
  position: relative;
  border-top-right-radius: ${({ border }) => (border === 0 ? '10px' : '0')};
  border-top-left-radius: ${({ border }) => (border === 0 ? '10px' : '0')};
  margin-bottom: ${({ isLast }) => (isLast ? '20px' : '0')};
`;

export const ProductsCardContainer = styled.View<ThemeProps>`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  padding-horizontal: 20px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.light};
  border-top-right-radius: ${({ border }) => (border === 0 ? '10px' : '0')};
  border-top-left-radius: ${({ border }) => (border === 0 ? '10px' : '0')};
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
  margin-left: 11.5px;
`;

export const ProductsCardTextSku = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 14px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.productsCardSkuText};
  padding-top: ${(props) => (!props.hasEssentialProduct ? '8px' : '0')};
`;
export const EssentialProduct = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  font-size: 10px;
  line-height: 14px;
  color: white;
  padding-left: 6px;
`;

export const ProductsCardTextDescription = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
`;

export const ProductsCardTextQuantity = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  font-family: ${(props) =>
    props.regular ? props.theme.fonts.mainFont : props.theme.fonts.GothamMedium};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
  margin-top: 2px;
  padding-left: ${(props) => (props.regular ? '5px' : '0')};
`;

export const ProductsCardDivisorLine = styled.View<ThemeProps>`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.productsCardDivisorLine};
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
export const ContainerTag = styled.View<ThemeProps>`
  width: 80px;
  margin-top: 7px;
  padding: 1px 2px;
  border-radius: 5px;
  justify-content: center;
  flex-direction: row;
  ${(props) =>
    props.tag === WITHOUT_STOCK &&
    css`
      background-color: ${({ theme }) => theme.stateColors.detainedBackground};
      border: 1px solid ${({ theme }) => theme.stateColors.detainedText};
    `}
  ${(props) =>
    props.tag === WITH_STOCK &&
    css`
      background-color: ${({ theme }) => theme.stateColors.receivedBackground};
      border: 1px solid ${({ theme }) => theme.stateColors.receivedText};
    `}
    ${(props) =>
    props.tag === DOWN_STOCK &&
    css`
      background-color: ${({ theme }) => theme.stateColors.downStockBackground};
      border: 1px solid ${({ theme }) => theme.stateColors.downStockText};
    `}
`;
export const TitleTag = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  ${(props) =>
    props.tag === WITHOUT_STOCK &&
    css`
      color: ${({ theme }) => theme.stateColors.detainedText};
    `}
  ${(props) =>
    props.tag === WITH_STOCK &&
    css`
      color: ${({ theme }) => theme.stateColors.receivedText};
    `}
    ${(props) =>
    props.tag === DOWN_STOCK &&
    css`
      color: ${({ theme }) => theme.stateColors.downStockText};
    `}
`;

export const ProductsCardContainerState = styled.View<ThemeProps>`
  margin-top: 5px;
  border-radius: 5px;
  align-self: flex-start;
  padding: 4px 6px 4px 6px;
  border: 1px solid #5e7083;
  background-color: #e6ecf4;
`;

export const ProductsCardContainerStateText = styled.Text<ThemeProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: #5e7083;
`;
