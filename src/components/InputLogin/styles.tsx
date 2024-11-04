import { TTheme } from '../../types/theme';
import styled from 'styled-components/native';

interface AuthProps {
  theme?: TTheme;
}

export const AuthContainerInput = styled.View``;

export const AuthForgotContainer = styled.View`
  bottom: 0;
  display: flex;
  padding-top: 50px;
  flex-direction: row;
  margin-bottom: 64px;
`;

export const AuthForgotContainerText = styled.View`
  display: flex;
  margin-left: 8px;
  flex-direction: column;
`;

export const AuthForgotText = styled.Text<AuthProps>`
  font-size: 12px;
  line-height: 16px;
  font-style: normal;
  color: ${(props) => props.theme.colors.authForgot};
  font-family: ${(props) => props.theme.fonts?.mainFont};
`;

export const AuthForgotEmail = styled.Text<AuthProps>`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts?.GothamBold};
  line-height: 16px;
  color: ${(props) => props.theme.colors?.authForgotEmail};
`;

export const LoginContainerInputSession = styled.View<AuthProps>`
  height: 100%;
  padding-top: 42px;
  padding-left: 18px;
  padding-right: 18px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${(props) => props.theme.colors.secondary};
`;
