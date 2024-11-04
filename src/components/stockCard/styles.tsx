import { Dimensions } from 'react-native';
import { styled } from 'styled-components/native';
import { TTheme } from '../../types/theme';

interface ThemeProps {
  theme?: TTheme;
  state?: string;
  stockItems?: boolean;
}
const screenDms = Dimensions.get('window').width;

export const StockContainerCarousel = styled.View<ThemeProps>`
  margin-bottom: 19px;
`;

export const StockBackgroundContainer = styled.View<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.light};
  padding-top: 10px;
`;

export const StockContainer = styled.View<ThemeProps>`
  margin: 0;
  margin-right: 8px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
`;

export const StockCardContainer = styled.View<ThemeProps>`
  width: ${({ stockItems }) => (stockItems ? screenDms - 70 : screenDms - 42)}px;
`;

export const StockContainerInfo = styled.TouchableOpacity<ThemeProps>`
  width: 100%;
  margin-top: 8px;
  padding: 0 10px 5px 10px;
  flex-direction: row;
  border-bottom-width: 1px;
  justify-content: space-between;
  border-bottom-color: ${({ theme, state }) =>
    state ? 'transparent' : theme.colors.productsCardDivisorLine};
`;

export const SalesFloorCardBody = styled.View<ThemeProps>`
  display: flex;
  padding-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: column;
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

export const ProductsCardContainerText = styled.View<ThemeProps>``;

export const StockCardTextState = styled.Text<ThemeProps>`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme, state }) =>
    state === '1'
      ? theme.colors.withoutStock
      : state === '2'
      ? theme.colors.lowStock
      : theme.colors.withStock};
`;

export const StockContainerTitleBranch = styled.View<ThemeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StockContainerTitlePlant = styled(StockContainerTitleBranch)<ThemeProps>`
  margin: 10px 0;
`;

export const StockTitlePlant = styled.Text<ThemeProps>`
  font-size: 16px;
  margin-right: 7px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const StockTitlePlantName = styled.Text<ThemeProps>`
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const StockTitleBranch = styled.Text<ThemeProps>`
  font-size: 16px;
  margin-right: 7px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const StockTitleBranchName = styled.Text<ThemeProps>`
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const SalesFloorCardImage = styled.Image<ThemeProps>`
  width: 40px;
  height: 40px;
`;

export const StockCardTextStateDescription = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
`;

export const StockCardTextLowStateDescription = styled.Text<ThemeProps>`
  font-size: 10px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const ProductsCardTextQuantity = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
`;

export const ProductsCardButton = styled.View<ThemeProps>`
  width: auto;
  height: 39px;
  display: flex;
  border-radius: 5px;
  padding-horizontal: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ theme, state }) =>
      state === '1'
        ? theme.colors.withoutStock
        : state === '2'
        ? theme.colors.lowStock
        : theme.colors.withStock};
  background: white;
`;

export const StockNumberStateText = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: ${({ theme, state }) =>
    state === '1'
      ? theme.colors.withoutStock
      : state === '2'
      ? theme.colors.lowStock
      : theme.colors.withStock};
`;
