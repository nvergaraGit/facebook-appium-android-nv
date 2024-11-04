import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
}

export const TextName = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  font-size: 14px;
  line-height: 18px;
  color: #030f1c;
`;
