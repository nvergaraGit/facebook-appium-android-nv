import { TTheme } from 'types/theme';
import styled from 'styled-components/native';

interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
  option?: string;
}
export const Container = styled.View<ThemeProps>`
  margin-top: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderCardReview};
`;
export const ContainerCategory = styled.View<ThemeProps>`
  background: ${({ theme }) => theme.colors.light};
  flex-direction: row;
  align-items: center;
`;
export const ContainerImg = styled.View<ThemeProps>`
  padding: 4px 15px;
`;
export const Title = styled.Text<ThemeProps>`
  color: black;
  font-size: 16px;
  margin-top: 10px;
  line-height: 24px;
  margin-left: 15px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
export const ContainerBody = styled.View<ThemeProps>`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light};
`;
export const TextBody = styled.Text<ThemeProps>`
  margin-left: 15px;
  color: ${(props) => (props.isImportant ? 'black' : props.theme.colors.dark)};
  font-family: ${(props) =>
    props.isImportant ? props.theme.fonts.GothamMedium : props.theme.fonts.mainFont};
  line-height: ${(props) => (props.isImportant ? '19px' : '16px')};
  font-size: ${(props) => (props.isImportant ? '14px' : '12px')};
`;

export const ContainerButtons = styled.View<ThemeProps>`
  flex-direction: row;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonsOptions = styled.TouchableOpacity<ThemeProps>`
  width: 50%;
  height: 38px;
  align-items: center;
  justify-content: center;
`;

export const ButtonDivider = styled.View<ThemeProps>`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.borderCardReview};
`;

export const ButtonsOptionsText = styled.Text<ThemeProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme, option }) =>
    option === 'check' ? theme.colors.stateSuccess : theme.colors.commentButton};
`;

export const ContainerHeader = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  padding-right: 17px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const ContainerInfo = styled.View<ThemeProps>`
  flex-direction: column;
`;

export const ContainerIcon = styled.TouchableOpacity<ThemeProps>`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
