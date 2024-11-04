import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
}

export const SalesMobileMarkCardContainer = styled.View<ThemeProps>`
  margin-top: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-horizontal: 30px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
`;

export const TextSubtitle = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 18px;
  color: #354455;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  padding-left: 45px;
  background: white;
`;
export const TextMonth = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 18px;
  color: #354455;
  font-family: ${(props) =>
    props.isImportant ? props.theme.fonts.GothamBold : props.theme.fonts.GothamMedium};

  padding-top: 32px;
`;

export const TextSubtitleDate = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-left: 20px;
  font-family: ${(props) => props.theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.categoriesSubtitle};
`;
