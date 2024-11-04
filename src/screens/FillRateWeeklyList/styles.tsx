import { styled } from 'styled-components/native';
import { ThemeProps } from 'types/theme';

export const CurrentAverageContainer = styled.View<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.light};
`;

export const TextAverageContainer = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: space-between;
  padding: 17px 38px 17px 20px;
`;
