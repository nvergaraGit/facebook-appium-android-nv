import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';
interface ThemeProps {
  theme?: TTheme;
  textBold?: boolean;
}

export const CatalogsCardContainer = styled.TouchableOpacity<ThemeProps>`
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  overflow: hidden;
`;

export const CatalogCardBody = styled.View<ThemeProps>`
  display: flex;
  padding-top: 10px;
  flex-direction: row;
  margin-bottom: 10px;
  padding-horizontal: 14px;
  align-items: center;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.headerCards};
`;

export const CatalogsCardContainerImageText = styled.View<ThemeProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CatalogsCardImage = styled.Image<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export const CatalogsCardContainerText = styled.View<ThemeProps>`
  padding-left: 10px;
`;

export const CatalogsCardCodeLabel = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  margin-right: 7px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.catalogCardTitle};
`;

export const CatalogsCardCode = styled.Text<ThemeProps>`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  font-family: ${(props) =>
    props.textBold ? ({ theme }) => theme.fonts.GothamMedium : ({ theme }) => theme.fonts.mainFont};

  color: ${({ theme }) => theme.colors.productsCardSkuText};
`;

export const CatalogsCardTextDescription = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
`;

export const CatalogsCardButton = styled.TouchableOpacity<ThemeProps>`
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  background-color: white;
`;

export const CatalogCardFooter = styled.View<ThemeProps>`
  display: flex;
  margin-bottom: 5px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 14px;
`;

export const CatalogCardAddress = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: #5f6f86;
`;

export const LabelRow = styled.Text<ThemeProps>``;
export const CatalogDescriptionContainer = styled.View<ThemeProps>`
  flex: 2;
  flex-direction: row;
`;
export const CatalogFormatContainer = styled.View<ThemeProps>``;
export const CatalogMechanicContainer = styled.View<ThemeProps>`
  margin-left: 24px;
`;

export const StatusLabel = styled.Text<ThemeProps>`
  line-height: 16px;
  font-size: 12px;
`;

export const StatusLabelContainer = styled.View<ThemeProps>`
  border-radius: 5px;
  width: 99px;
  align-items: center;
`;

export const TextCardDescLabel = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: #000000;
`;
export const TextCardDescData = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: #000000;
`;
