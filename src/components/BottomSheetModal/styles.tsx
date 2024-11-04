import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface MenuProps {
  theme?: TTheme;
}
export const DragHandlerArea = styled.View<MenuProps>`
  width: 50px;
  height: 32px;
  align-items: center;
  align-self: center;
  justify-content: center;
`;
export const DragHandler = styled.View<MenuProps>`
  width: 100%;
  height: 6px;
  background-color: ${(props) => props.theme.colors.dark};
  border-radius: 100px;
`;
