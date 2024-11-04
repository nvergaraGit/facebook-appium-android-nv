import { styled } from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
}

export const TouchableContainer = styled.TouchableOpacity<ThemeProps>`
  flex-direction: column;
  padding: 10px 19px 10px 20px;
  justify-content: space-between;
`;

export const TextTitleWeek = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const TextTitlePercentage = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const PercentageDateContainer = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: space-between;
`;
export const WeekContainer = styled.View<ThemeProps>`
  flex-direction: row;
`;
