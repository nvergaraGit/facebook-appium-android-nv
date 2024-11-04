import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';
import { theme } from '@styles/themes';
import { DELIVERED } from '@libraries/constants';

interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
  tag?: string;
  showNSalesFloor?: boolean;
}

export const TitleTag = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: ${(props) =>
    props.tag === DELIVERED ? theme.colors.stateSuccess : theme.colors.primaryText};
`;

export const TitleOrders = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  color: black;
  font-family: ${(props) =>
    props.isImportant ? theme.fonts.GothamBold : theme.fonts.GothamMedium};
`;
