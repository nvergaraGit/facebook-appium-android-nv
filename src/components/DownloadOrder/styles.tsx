import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface MenuProps {
  theme?: TTheme;
}
export const TextRegular = styled.Text<MenuProps>`
  font-family: ${(props) => props.theme.fonts?.GothamBold};
  font-size: 16px;
  color: black;
  line-height: 24px;
  margin-bottom: 10px;
`;
export const ContainerVersion = styled.View<MenuProps>`
  padding: 5px 20px 25px 20px;
`;
export const ContainerData = styled.View<MenuProps>`
  margin-top: 10px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;
export const TextLabel = styled.Text<MenuProps>`
  font-family: ${(props) => props.theme.fonts?.mainFont};
  font-size: 14px;
  color: black;
  line-height: 19px;
  flex: 1;
`;
export const TextValue = styled.Text<MenuProps>`
  font-family: ${(props) => props.theme.fonts?.GothamMedium};
  font-size: 14px;
  color: black;
  line-height: 19px;
  align-self: flex-end;
`;
