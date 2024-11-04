import { styled } from 'styled-components/native';
import { ThemeProps } from 'types/theme';

export const TextTitleCode = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const MainContainer = styled.View<ThemeProps>`
  background-color: white;
  flex: 1;
  padding-horizontal: 18px;
`;
