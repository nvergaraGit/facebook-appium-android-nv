/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TTheme } from 'types/theme';
import styled from 'styled-components/native';

interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
}
export const Container = styled.View<ThemeProps>`
  background: white;
  flex: 1;
`;
export const ContainerList = styled.View<ThemeProps>`
  flex: 1;
  margin-top: 13px;
  padding: 12px 13px;
`;
export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.primary,
  size: 'large',
}))<ThemeProps>``;

export const ContainerButtonDownload = styled.TouchableOpacity<ThemeProps>`
  width: 100%;
  height: 48px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 32px;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.primaryNav};
`;

export const ButtonTextDownload = styled.Text<ThemeProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryNav};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

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

export const TextInfo = styled.Text<ThemeProps>`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const ContainerButtonCloseVisit = styled.View<ThemeProps>`
  padding-bottom: 12px;
  padding-horizontal: 13px;
`;

export const TextButtonCloseVisit = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;
