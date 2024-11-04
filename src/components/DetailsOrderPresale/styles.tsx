import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  width?: string;
  textImportant?: boolean;
}

export const CardListPresale = styled.View`
  margin-bottom: 10px;
`;

export const CardPresale = styled.View<ThemeProps>`
  width: 100%;
  border: solid 1px ${({ theme }) => theme.colors.productsCardDivisorLine};
  min-height: 132px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const CardPresaleHeader = styled.View<ThemeProps>`
  background: ${({ theme }) => theme.colors.light};
  padding: 10px 5px;
`;

export const PresaleHeaderContainer = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: space-between;
`;

export const PresaleHeaderOrder = styled.Text<ThemeProps>`
  color: #000;
  line-height: 24px;
  font-size: 16px;
  font-family: ${(props) =>
    props.textImportant ? props.theme.fonts.GothamBold : props.theme.fonts.GothamMedium};
`;

export const PresaleHeaderTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const CardPresaleBody = styled.View<ThemeProps>`
  padding: 9px 15px;
`;

export const PresaleItemButton = styled.TouchableOpacity<ThemeProps>`
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => theme.colors.productsCardDivisorLine};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const PresaleCardContent = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: space-between;
`;

export const PresaleCardContentItem = styled.View<ThemeProps>``;

export const PresaleCardTitle = styled.Text<ThemeProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: #000;
  line-height: 16px;
`;

export const PresaleCardText = styled.Text<ThemeProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: #000;
  line-height: 19px;
  padding: 10px 0 12px 0;
`;

export const TextNoResults = styled.Text<ThemeProps>`
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;
