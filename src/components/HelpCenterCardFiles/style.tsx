import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  first?: boolean;
}

export const HelpCenterCardFilesContainer = styled.TouchableOpacity<ThemeProps>`
  width: 100%;
  height: 60px;
  padding-left: 12px;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  justify-content: space-between;
  margin-top: ${({ first }) => (first ? '10px' : '0px')};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom-color: ${({ theme }) => theme.colors.productsCardDivisorLine};
  border-top-color: ${({ theme, first }) =>
    first ? theme.colors.productsCardDivisorLine : 'transparent'};
`;

export const HelpCenterCardFilesTextIcon = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const HelpCenterCardText = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  margin-right: 5px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.productsCardTextDescription};
`;

export const HelpCenterQty = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const HelpCenterQtyText = styled(HelpCenterCardText)<ThemeProps>`
  margin-right: 7px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.catalogCardTitle};
`;