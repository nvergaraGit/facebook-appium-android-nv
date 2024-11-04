import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  first?: boolean;
}

export const HelpCenterContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HelpCenterCardContainer = styled.View<ThemeProps>`
  margin-top: 20px;
  padding-horizontal: 18px;
`;
