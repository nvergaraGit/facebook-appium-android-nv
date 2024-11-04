import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
import IconFilter from '@assets/icons/icon-filter.svg';
import IconSearch from '@assets/icons/icon-search.svg';
interface ThemeProps {
  theme?: TTheme;
  isFilter?: boolean;
}

export const ProductsFinderContainer = styled.View<ThemeProps>``;
export const ProductsFinder = styled.View<ThemeProps>`
  display: flex;
  margin-top: 10px;
  border-radius: 5px;
  padding-left: 13px;
  padding-right: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.productsFinder};
`;
export const ProductsContainerSearchAndPlaceHolder = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
export const ProductsFinderButton = styled.TouchableOpacity<ThemeProps>``;
export const ProductsInput = styled.TextInput.attrs(({ theme }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  placeholderTextColor: theme.colors.productsFinder,
}))<ThemeProps>`
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: 14px;
  line-height: 24px;
  width: 100%;
`;
export const SearchInputText = styled(ProductsInput)<ThemeProps>`
  height: 48px;
  padding: 0px 0px 8px 5px;
`;
export const ProductsIconFilter = styled(IconFilter)`
  width: 24px;
  height: 24px;
`;
export const ProductsIconSearch = styled(IconSearch)`
  padding-right: 11px;
`;

export const SearchInputTextError = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-top: 5px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;
