import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native-paper';
import { TTheme } from '../../types/theme';
interface AuthProps {
  theme?: TTheme;
}
export const LoaderContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000;
  justify-content: center;
`;

export const Loading = styled(ActivityIndicator)``;

export const LoaderText = styled.Text<AuthProps>`
  font-size: 14px;
  margin-top: 40px;
  line-height: 19px;
  font-style: normal;
  color: ${(props) => props.theme.colors?.secondary};
  font-family: ${(props) => props.theme.fonts?.mainFont};
`;
