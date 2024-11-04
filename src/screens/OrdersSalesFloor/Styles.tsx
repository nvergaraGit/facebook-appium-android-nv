/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { styled } from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  textImportant?: boolean;
}

export const Container = styled.View`
  background: white;
  flex: 1;
`;

export const DetailsSalesFloorButtonBack = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const DetailsSalesFloorHeaderTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayScale};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const DetailsSalesFloorContainerBackButton = styled.View`
  flex-direction: row;
  padding: 25px 16px 0 16px;
`;
export const ContainerList = styled.View`
  margin: 9px 17px 50px 17px;
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
