import { styled } from 'styled-components/native';
import { ThemeProps } from 'types/theme';

export const CategoryContainer = styled.TouchableOpacity<ThemeProps>`
  justify-content: space-between;
  flex-direction: row;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  padding-vertical: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const ContainerColumnText = styled.View<ThemeProps>`
  flex-direction: column;
  margin-right: 11px;
`;
export const ContainerColumnTextNormal = styled.View<ThemeProps>`
  flex-direction: column;
  margin-right: 11px;
`;
