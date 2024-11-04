import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { TTheme } from '../../types/theme';
import IconFilter from '@assets/icons/icon-filter.svg';
import IconSearch from '@assets/icons/icon-search.svg';
import LinearGradient from 'react-native-linear-gradient';

interface ThemeProps {
  theme?: TTheme;
  textImportant?: boolean;
}

export const ProductsContainer = styled.View<ThemeProps>`
  background-color: #fff;
  flex: 1;
`;

export const TextTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  margin-bottom: 10px;
  color: black;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
export const TextNoResults = styled.Text<ThemeProps>`
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;

export const ProductsStatusBar = styled(StatusBar).attrs(({ theme }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  backgroundColor: theme.colors.primary,
}))``;

export const ProductHeader = styled(LinearGradient).attrs({
  colors: ['#AF0101', '#F00000'],
})`
  height: 18.3%;
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  justify-content: flex-end;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const ProductsFinderContainer = styled.View<ThemeProps>`
  padding-left: 20px;
  padding-right: 20px;
`;

export const ProductsFinder = styled.View<ThemeProps>`
  width: 100%;
  height: 48px;
  display: flex;
  margin-top: 20px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.productsFinder};
`;
export const ConteinerResult = styled.View<ThemeProps>`
  margin-horizontal: 20px;
  flex: 1;
  position: relative;
`;
export const ProductsFinderButton = styled.TouchableOpacity<ThemeProps>``;

export const ProductsIconFilter = styled(IconFilter)`
  width: 27px;
  height: 27px;
`;

export const ProductsIconSearch = styled(IconSearch)`
  width: 27px;
  height: 27px;
`;

export const ProductsInput = styled.TextInput<ThemeProps>`
  width: 80%;
  height: 100%;
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: 16px;
  line-height: 24px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#5E6368S',
})<ThemeProps>`
  width: 80%;
  height: 100%;
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: 16px;
  line-height: 24px;
`;

export const ProductsScroll = styled.ScrollView<ThemeProps>``;
