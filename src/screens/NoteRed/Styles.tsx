import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
}

export const Container = styled.Text<ThemeProps>`
  flex: 1;
  background: white;
  padding: 5px 20px;
`;
