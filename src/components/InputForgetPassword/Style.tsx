import { TTheme } from '../../types/theme';
import styled from 'styled-components/native';

interface AuthProps {
  theme?: TTheme;
  isImportant?: boolean;
}

export const ContainerInfo = styled.View<AuthProps>``;
export const TitleInfo = styled.Text<AuthProps>`
  font-family: ${(props) =>
    props.isImportant ? props.theme.fonts.GothamBold : props.theme.fonts.mainFont};
  font-size: 10px;
  line-height: 14px;
  color: black;
`;
export const ContainerBack = styled.View<AuthProps>`
  bottom: 0;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  flex-direction: row;
`;
export const TextBack = styled.Text<AuthProps>`
  font-family: ${(props) =>
    props.isImportant ? props.theme.fonts.GothamBold : props.theme.fonts.mainFont};
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => (props.isImportant ? props.theme.colors.primary : 'black')};
`;
