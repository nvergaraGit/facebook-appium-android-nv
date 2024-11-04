/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TTheme } from 'types/theme';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface ThemeProps {
  theme?: TTheme;
  selected?: boolean;
  isImportant?: boolean;
  textImportant?: boolean;
}
export const Container = styled.View<ThemeProps>`
  background: white;
  flex: 1;
`;

export const ContainerCategory = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContainerCategoryText = styled.Text<ThemeProps>`
  font-size: 16px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const ContainerImg = styled.View<ThemeProps>`
  padding: 4px 0px 4px 0px;
`;

export const ContainerList = styled.View<ThemeProps>`
  margin-top: 13px;
  padding: 12px 13px;
  flex: 1;
`;
export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.primary,
  size: 'large',
}))<ThemeProps>``;
export const ContainerLoader = styled.View<ThemeProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LoaderView = styled.View<ThemeProps>`
  position: absolute;
  elevation: 9;
  z-index: 9;
`;

export const Title = styled.Text<ThemeProps>`
  color: black;
  font-size: 16px;
  margin-top: 5px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const TitleName = styled.Text<ThemeProps>`
  font-size: 14px;
  margin-top: 10px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primaryNav};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const ContainerTabs = styled.View<ThemeProps>`
  flex-direction: row;
  border-bottom-width: 1px;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.borderTabReview};
`;

export const TabButton = styled.TouchableOpacity<ThemeProps>`
  width: 50%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-bottom-width: ${({ selected }) => (selected ? '5px' : '0px')};
  border-bottom-color: ${({ theme, selected }) =>
    selected ? theme.colors.primaryNav : theme.colors.secondary};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.backgroundSelected : theme.colors.secondary};
`;

export const TextTabButton = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme, selected }) => (selected ? theme.colors.primaryNav : theme.colors.black)};
`;

export const ContainerButton = styled.TouchableOpacity<ThemeProps>`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const Button = styled(LinearGradient).attrs({
  colors: ['#AF0101', '#F00000'],
})`
  width: 100%;
  height: 44px;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const TextNoResults = styled.Text<ThemeProps>`
  margin-top: 5px;
  text-align: center;
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;
