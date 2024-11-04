import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
}

export const TextSubtitle = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 18px;
  color: #354455;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  padding-left: 45px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const TextMonth = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 18px;
  color: #354455;
  font-family: ${(props) =>
    props.isImportant ? props.theme.fonts.GothamBold : props.theme.fonts.GothamMedium};

  padding-top: 32px;
`;

export const Divider = styled.View<ThemeProps>`
  width: auto;
  height: 1px;
  margin-bottom: 16px;
  margin-horizontal: 26px;
  background-color: ${(props) => props.theme.colors.dividerLine};
`;

export const SalesFloorIndicatorsSearchFilter = styled.TouchableOpacity<ThemeProps>`
  width: 100%;
  height: 48px;
  margin-top: 16px;
  border-radius: 5px;
  padding-left: 18px;
  padding-right: 15px;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  justify-content: space-between;
`;

export const SalesFloorIndicatorsSearchFilterText = styled.Text<ThemeProps>`
  font-size: 16px;
  color: ${(props) => props.theme.colors.productsFinder};
`;

export const SalesFloorIndicatorsTextSubtitleDate = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-left: 40px;
  font-family: ${(props) => props.theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.categoriesSubtitle};
`;

export const SalesFloorIndicatorsCardContainer = styled.View<ThemeProps>`
  margin-top: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-horizontal: 30px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
`;
