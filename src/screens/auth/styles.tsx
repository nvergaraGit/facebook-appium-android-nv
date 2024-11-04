import { Dimensions } from 'react-native';
import { TTheme } from 'types/theme';
import { styled } from 'styled-components/native';

interface Props {
  theme?: TTheme;
}

const { height } = Dimensions.get('screen');

export const AuthKeyboardAvoidingView = styled.KeyboardAvoidingView<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const AuthContainer = styled.View<Props>`
  flex-grow: 1;
`;

export const AuthContainerHeaderImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  source: require('../../../assets/login-header.png'),
})`
  height: ${height * 0.4}px;
  justify-content: center;
  background-color: transparent;
`;

export const AuthTextVersion = styled.Text<Props>`
  font-size: 14px;
  line-height: 19px;
  font-style: normal;
  color: ${({ theme }) => theme.colors?.secondary};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  margin-left: 10px;
`;

export const AuthContainerTitle = styled.View`
  padding-left: 18px;
  margin-top: 20px;
`;

export const AuthTitle = styled.Text<Props>`
  font-size: 20px;
  line-height: 28px;
  font-style: normal;
  color: ${(props) => props.theme.colors?.secondary};
  font-family: ${(props) => props.theme.fonts?.GothamBold};
`;

export const AuthSubtitle = styled.Text<Props>`
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors?.secondary};
  font-family: ${(props) => props.theme.fonts?.mainFont};
  margin-top: 5px;
`;
