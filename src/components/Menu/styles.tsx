import { styled } from 'styled-components/native';
import { TTheme } from 'types/theme';
import ArrowRight from '@assets/icons/icon-right-arrow.svg';

interface ThemeProps {
  theme?: TTheme;
}

export const MenuContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const MenuBody = styled.ScrollView<ThemeProps>`
  padding-top: 10px;
  padding-horizontal: 20px;
`;

export const MenuOption = styled.TouchableOpacity<ThemeProps>`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
  justify-content: space-between;
`;

export const MenuContainerIconText = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const MenuContainerIcon = styled.View<ThemeProps>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
`;

export const MenuArrowRight = styled(ArrowRight)<ThemeProps>`
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
`;

export const MenuOptionText = styled.Text<ThemeProps>`
  font-size: 16px;
  margin-left: 7px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.authText};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const MenuDivider = styled.View<ThemeProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.productsCardDivisorLine};
`;
