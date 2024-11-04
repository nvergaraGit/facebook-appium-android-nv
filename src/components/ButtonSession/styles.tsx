import { TTheme } from '../../types/theme';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
interface AuthProps {
  theme?: TTheme;
  showMsg?: boolean;
  width?: string;
}
export const AuthContainerButton = styled.TouchableOpacity<AuthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
`;
export const AuthButton = styled(LinearGradient).attrs({
  colors: ['#AF0101', '#F00000'],
})<AuthProps>`
  height: 45px;
  display: flex;
  border-radius: 12px;
  align-items: center;
  margin-top: ${(props) => (props.showMsg ? '0px' : '32px')};
  justify-content: center;
  flex-direction: row;
`;
export const AuthTextButton = styled.Text<AuthProps>`
  font-size: 14px;
  line-height: 19px;
  font-style: normal;
  color: ${(props) => props.theme.colors?.secondary};
  font-family: ${(props) => props.theme.fonts.GothamBold};
`;
