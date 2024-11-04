import { styled } from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
  changeColor?: boolean;
  isMargin?: boolean;
}
export const Container = styled.View<ThemeProps>`
  flex: 1;
`;
export const ContainerFlex = styled.View<ThemeProps>`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (!props.changeColor ? 'space-between' : 'center')};
  margin-botom: ${(props) => (props.isMargin ? '15px' : '0')};
`;

export const ContainerNotePrincipal = styled.View<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.light};
  margin-bottom: 15px;
  padding-vertical: 10px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
`;

export const TextPercentPrincipal = styled.Text<ThemeProps>`
  color: ${(props) => (props.changeColor ? props.theme.colors.authText : 'black')};
  font-family: ${(props) =>
    props.changeColor ? props.theme.fonts.GothamMedium : props.theme.fonts.GothamBold};
  font-size: 20px;
  line-height: 28px;
`;
export const TextWeek = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.mainFont};
  font-size: 14px;
  line-height: 19px;
`;
export const TextResume = styled.Text<ThemeProps>`
  font-family: ${(props) => props.theme.fonts.GothamBold};
  font-size: 16px;
  line-height: 24px;
  color: black;
  text-transform: capitalize;
`;
export const TextDate = styled.Text<ThemeProps>`
  font-family: ${(props) =>
    props.changeColor ? props.theme.fonts.mainFont : props.theme.fonts.GothamMedium};
  font-size: ${(props) => (props.changeColor ? '12px' : '14px')};
  color: ${(props) => (props.changeColor ? props.theme.colors.dark : 'black')};
  margin-top: ${(props) => (props.changeColor ? '6px' : '3px')};
`;
