import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
}

export const HelpCenterCardContainer = styled.TouchableOpacity<ThemeProps>`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  padding-right: 10px;
  margin-bottom: 11px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
`;

export const HelpCenterCardTextIcon = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const HelpCenterCardText = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  margin-left: 14px;
  margin-right: 17px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
`;

export const HelpCenterQty = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const HelpCenterQtyTextTotal = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  margin-right: 17px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
`;

export const HelpCenterQtyText = styled(HelpCenterCardText)<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  margin-right: 5px;
`;

export const HelpCenterCardContainerIcon = styled.View<ThemeProps>`
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
`;
