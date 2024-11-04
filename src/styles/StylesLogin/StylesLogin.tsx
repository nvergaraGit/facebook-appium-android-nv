import { TTheme } from '../../types/theme';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
interface AuthProps {
  theme?: TTheme;
  validateField?: boolean;
  pass?: boolean;
  show?: boolean;
  showMsg?: boolean;
  isImportant?: boolean;
}
export const AuthContainer = styled.SafeAreaView<AuthProps>`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
`;
export const AuthStatusBar = styled(StatusBar).attrs(({ theme }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  backgroundColor: theme.colors.primary,
}))``;
export const AuthScroll = styled.ScrollView``;
export const AuthContainerBody = styled.View`
  flex: 1;
`;
export const AuthContainerHeader = styled.View`
  height: 40%;
  width: 100%;
`;
export const AuthContainerHeaderImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  source: require('../../../assets/login-header.png'),
})`
  height: 90%;
  width: 100%;
  justify-content: center;
`;
export const TextVersion = styled.Text<AuthProps>`
  font-size: 14px;
  line-height: 19px;
  font-style: normal;
  color: ${(props) => props.theme.colors?.secondary};
  font-family: ${(props) => props.theme.fonts.GothamMedium};
  margin-left: 10px;
`;
export const AuthContainerTitle = styled.View`
  padding-left: 18px;
  margin-top: 20px;
`;
export const AuthTitle = styled.Text<AuthProps>`
  font-size: 20px;
  line-height: 28px;
  font-style: normal;
  color: ${(props) => props.theme.colors?.secondary};
  font-family: ${(props) => props.theme.fonts?.GothamBold};
`;
export const AuthSubtitle = styled.Text<AuthProps>`
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors?.secondary};
  font-family: ${(props) => props.theme.fonts?.mainFont};
  margin-top: 5px;
`;

export const AuthContainerInputSession = styled.View<AuthProps>`
  bottom: 0;
  width: 100%;
  height: 60%;
  padding-top: 42px;
  position: absolute;
  padding-left: 18px;
  padding-right: 18px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${(props) => props.theme.colors.secondary};
`;
export const AuthContainerInputPass = styled.View<AuthProps>`
  height: 48px;
  border-radius: 4px;
  flex-direction: row;
  margin-bottom: ${(props) => (props.isImportant ? '10px' : '20px')};
  margin-top: ${(props) => (props.isImportant ? '0' : '15px')};
  background-color: ${(props) => props.theme.colors?.secondary};
  border: 1px solid
    ${(props) => (props.validateField ? props.theme.colors?.authBorderInput : '#6B737A')};
`;
export const AuthTextContainer = styled.View<AuthProps>`
  top: -8px;
  left: 18px;
  width: auto;
  z-index: 100;
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors?.secondary};
`;
export const AuthText = styled.Text<AuthProps>`
  font-size: 10px;
  line-height: 14px;
  padding-right: 5px;
  font-style: normal;
  color: ${(props) => props.theme.colors.authText};
  font-family: ${(props) => props.theme.fonts?.mainFont};
  background-color: ${(props) => props.theme.colors?.secondary};
`;
export const AuthInputSession = styled.TextInput<AuthProps>`
  height: ${(props) => (props.pass ? '46px' : '48px')};
  width: ${(props) => (props.pass ? '90%' : '100%')};
  border-radius: 4px;
  padding-left: 18px;
  margin-bottom: 27px;
  background-color: ${(props) => props.theme.colors?.secondary};
  color: black;
  border: ${(props) =>
    props.pass
      ? 'none'
      : props.validateField
      ? `1px solid ${props.theme.colors?.authBorderInput}`
      : '1px solid #6B737A'};
`;
export const AuthShowPassContainer = styled.TouchableOpacity`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AuthContainerErrorMessage = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`;
export const AuthErrorMessage = styled.Text<AuthProps>`
  font-size: 12px;
  margin-left: 7px;
  line-height: 16px;
  font-style: normal;
  color: ${(props) => props.theme.colors.authError};
  font-family: ${(props) => props.theme.fonts?.mainFont};
`;
export const AuthTextValidate = styled.Text<AuthProps>`
  color: ${(props) => props.theme.colors.authValidate};
  font-family: ${(props) => props.theme.fonts?.mainFont};
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;
