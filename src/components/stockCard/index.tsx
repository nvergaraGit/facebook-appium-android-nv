/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { TStockItem } from 'types/stock';
import {
  ProductsCardButton,
  ProductsCardContainerImageText,
  ProductsCardContainerText,
  SalesFloorCardBody,
  StockBackgroundContainer,
  StockCardContainer,
  StockCardTextState,
  StockContainer,
  StockContainerCarousel,
  StockContainerInfo,
  StockContainerTitleBranch,
  StockContainerTitlePlant,
  StockNumberStateText,
  StockTitleBranch,
  StockTitleBranchName,
  StockTitlePlant,
  StockTitlePlantName,
} from './styles';

type Props = {
  stockData: TStockItem;
  stockItems: boolean;

  handleDetails: (id: string, labelStock: number, branchCode: string) => void;
};

const StockCard = ({ stockData, stockItems, handleDetails }: Props) => {
  return (
    <StockContainerCarousel>
      <StockContainer>
        <StockContainerTitlePlant>
          <StockTitlePlant>Planta:</StockTitlePlant>
          <StockTitlePlantName>{stockData.plant}</StockTitlePlantName>
        </StockContainerTitlePlant>
        <StockBackgroundContainer>
          <StockContainerTitleBranch>
            <StockTitleBranch>Sucursal:</StockTitleBranch>
            <StockTitleBranchName>{stockData.branch}</StockTitleBranchName>
          </StockContainerTitleBranch>
          <StockCardContainer stockItems={stockItems}>
            <SalesFloorCardBody testID="sales-floor-card">
              <StockContainerInfo
                onPress={() => handleDetails(stockData.branch, 1, stockData.branchCode)}
              >
                <ProductsCardContainerImageText>
                  <ProductsCardContainerText>
                    <StockCardTextState state={'1'}>Sin Stock</StockCardTextState>
                  </ProductsCardContainerText>
                </ProductsCardContainerImageText>
                <ProductsCardButton state={'1'}>
                  <StockNumberStateText state={'1'}>{stockData.withoutStock}</StockNumberStateText>
                </ProductsCardButton>
              </StockContainerInfo>
              <StockContainerInfo
                onPress={() => handleDetails(stockData.branch, 2, stockData.branchCode)}
              >
                <ProductsCardContainerImageText>
                  <ProductsCardContainerText>
                    <StockCardTextState state={'2'}>Bajo Stock</StockCardTextState>
                  </ProductsCardContainerText>
                </ProductsCardContainerImageText>
                <ProductsCardButton state={'2'}>
                  <StockNumberStateText state={'2'}>{stockData.lowStock}</StockNumberStateText>
                </ProductsCardButton>
              </StockContainerInfo>
              <StockContainerInfo
                state={'3'}
                onPress={() => handleDetails(stockData.branch, 3, stockData.branchCode)}
              >
                <ProductsCardContainerImageText>
                  <ProductsCardContainerText>
                    <StockCardTextState state={'3'}>Con Stock</StockCardTextState>
                  </ProductsCardContainerText>
                </ProductsCardContainerImageText>
                <ProductsCardButton state={'3'}>
                  <StockNumberStateText numberOfLines={1} state={'3'}>
                    {stockData.withStock}
                  </StockNumberStateText>
                </ProductsCardButton>
              </StockContainerInfo>
            </SalesFloorCardBody>
          </StockCardContainer>
        </StockBackgroundContainer>
      </StockContainer>
    </StockContainerCarousel>
  );
};

export default StockCard;
