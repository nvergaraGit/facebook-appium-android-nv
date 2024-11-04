import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
}

export const NoResultsContainer = styled.View<ThemeProps>`
  padding: 15px 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  margin-top: 5px;
`;
export const IconContainer = styled.View<ThemeProps>`
  justify-content: center;
`;
