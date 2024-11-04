import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  width?: string;
  textImportant?: boolean;
}

export const OrdersPresaleTitleList = styled.Text<ThemeProps>`
  font-weight: 300;
  line-height: 24px;
  font-size: 16px;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  margin-bottom: 10px;
`;
