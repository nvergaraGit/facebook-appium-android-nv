import { TTheme } from 'types/theme';
import { styled } from 'styled-components/native';

interface ThemeProps {
  theme?: TTheme;
  stock?: string;
}

export const TextTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
  color: black;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const DetailsCatalogContainer = styled.View`
  background: white;
  padding: 30px 24px 5px 16px;
`;
export const DetailsCatalogMain = styled.View`
  background: white;
  flex: 1;
`;

export const DetailsCatalogContainerHeader = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const DetailsCatalogTitle = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.grayScale};
  font-size: 20px;
  line-height: 28px;
  padding-left: 10px;
`;

export const ProductTitleList = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors?.black};
  font-family: ${(props) => props.theme.fonts?.GothamBold};
`;
