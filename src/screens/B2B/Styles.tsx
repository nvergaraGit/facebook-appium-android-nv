import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
}
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const B2BContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const B2BContent = styled.View<ThemeProps>`
  margin-top: 15px;
  padding-horizontal: 17px;
`;

export const B2BCard = styled(TouchableWithoutFeedback)``;
