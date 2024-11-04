import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
}
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const B2BCard = styled(TouchableWithoutFeedback)``;

export const B2BCardContainer = styled.View<ThemeProps>`
  margin: 8px 0 0 0;
  padding: 11px 10px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #f7f9fc;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
`;

export const B2BCardIconContainer = styled.View<ThemeProps>`
  gap: 7px;
  flex-direction: row;
  align-items: center;
`;

export const B2BCardContainerMultiple = styled.View<ThemeProps>`
  justify-content: center;
`;

export const B2BCardTitle = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.productsCardTextDescription};
  font-family: ${(props) =>
    props.isImportant ? props.theme.fonts.GothamMedium : props.theme.fonts.mainFont};
`;

export const B2BCardContainerStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const B2BCardPercent = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  margin-right: 4px;
  font-family: ${(props) => props.theme.fonts.mainFont};
  color: ${(props) => props.theme.colors.categoriesSubtitle};
`;

export const B2BCardArrowButton = styled.TouchableOpacity<ThemeProps>`
  width: 25px;
  height: 25px;
  display: flex;
  margin-left: 11px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.isImportant ? 'none' : props.theme.colors.productsCardDivisorLine)};
  background-color: ${(props) =>
    props.isImportant ? 'transparent' : props.theme.colors.secondary};
`;
