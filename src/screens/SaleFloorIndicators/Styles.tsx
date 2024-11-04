import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  width?: string;
  textImportant?: boolean;
}
export const ContainerPageIndicator = styled.View<ThemeProps>`
  flex: 1;
`;
export const ContainerWeek = styled.View<ThemeProps>`
  background: #f7f9fc;
  border: 1px solid #e8ebf7;
  padding: 8px 19px;
  border-radius: 6px;
`;
export const TextTitleWeek = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  font-size: 16px;
  line-height: 20px;
  color: #81878e;
`;
export const TextValueWeek = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  font-size: 16px;
  line-height: 20px;
  color: #354455;
  padding-top: 10px;
`;
