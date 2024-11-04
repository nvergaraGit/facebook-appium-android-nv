import { TTheme } from 'types/theme';
import { styled } from 'styled-components/native';

interface ThemeProps {
  theme?: TTheme;
}

export const DownloadReportsContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
