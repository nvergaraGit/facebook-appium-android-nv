import { TTheme } from 'types/theme';
import styled from 'styled-components/native';

interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
  state?: boolean;
}
export const Container = styled.TouchableOpacity<ThemeProps>`
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  margin-bottom: 8px;
  border-radius: 4px;
`;
export const ContainerCategory = styled.View<ThemeProps>`
  padding: 8px 11px 11px 11px;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};
`;
export const ContainerImg = styled.View<ThemeProps>`
  padding: 4px 15px;
`;
export const ContainerText = styled.View`
  flex-direction: column;
`;
export const Title = styled.Text<ThemeProps>`
  color: black;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  line-height: 24px;
  font-size: 16px;
`;
export const ContainerBody = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
`;
export const TextCategory = styled.Text<ThemeProps>`
  color: ${(props) => (props.isImportant ? 'black' : props.theme.colors.dark)};
  font-family: ${(props) =>
    props.isImportant ? props.theme.fonts.GothamMedium : props.theme.fonts.mainFont};
  line-height: ${(props) => (props.isImportant ? '19px' : '16px')};
  font-size: ${(props) => (props.isImportant ? '14px' : '12px')};
`;

export const TextBody = styled.Text<ThemeProps>`
  color: ${(props) => (props.isImportant ? 'black' : props.theme.colors.dark)};
  font-family: ${(props) =>
    props.isImportant ? props.theme.fonts.GothamMedium : props.theme.fonts.mainFont};
  line-height: ${(props) => (props.isImportant ? '19px' : '16px')};
  font-size: ${(props) => (props.isImportant ? '14px' : '12px')};
  padding-left: ${(props) => (props.isImportant ? '4px' : '0')};
`;

export const ContainerFlex = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  padding-vertical: 4px;
`;

export const ContainerStates = styled.View<ThemeProps>`
  width: auto;
`;

export const ContainerFooter = styled.TouchableOpacity<ThemeProps>`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.downloadBackground};
`;

export const FooterText = styled.Text<ThemeProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.stateTypeCatalogs};
`;

export const ContainerStatusGeneral = styled.View<ThemeProps>`
  width: auto;
  height: auto;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 5px 5px 5px 5px;
  background-color: ${({ theme, state }) =>
    state ? theme.colors.stateDone : theme.colors.statePending};
`;

export const ContainerStatusGeneralText = styled.Text<ThemeProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const ContainerIcon = styled.TouchableOpacity<ThemeProps>`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.dividerLine};
`;

export const ContainerTextNav = styled.View<ThemeProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
