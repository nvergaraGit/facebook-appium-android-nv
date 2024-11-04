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

export const ContainerIconText = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  margin-right: 11px;
`;

export const ContainerIcon = styled.View<ThemeProps>`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-left: 11px;
`;
