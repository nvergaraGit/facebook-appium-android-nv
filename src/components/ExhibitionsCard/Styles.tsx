import { TTheme } from 'types/theme';
import styled from 'styled-components/native';

interface ThemeProps {
  theme?: TTheme;
  isImportant?: boolean;
}
export const Container = styled.View<ThemeProps>`
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  margin-bottom: 8px;
  border-radius: 4px;
`;
export const ContainerCategory = styled.View<ThemeProps>`
  background: ${({ theme }) => theme.colors.light};
  flex-direction: row;
  align-items: center;
  padding: 6px 15px;
`;
export const ContainerImg = styled.View<ThemeProps>`
  padding: 8px 15px;
`;
export const Title = styled.Text<ThemeProps>`
  color: black;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  line-height: 24px;
  font-size: 16px;
`;
export const ContainerBody = styled.View<ThemeProps>`
  background: white;
  padding: 8px 11px 11px 11px;
`;
export const TextBody = styled.Text<ThemeProps>`
  color: ${(props) => (props.isImportant ? 'black' : props.theme.colors.dark)};
  font-family: ${(props) =>
    props.isImportant ? props.theme.fonts.GothamMedium : props.theme.fonts.mainFont};
  line-height: ${(props) => (props.isImportant ? '19px' : '16px')};
  font-size: ${(props) => (props.isImportant ? '14px' : '12px')};
`;

export const ContainerFooter = styled.View<ThemeProps>`
  padding: 0px 15px 10px 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerFooterText = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const TextFooter = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) =>
    props.isImportant ? props.theme.fonts.GothamBold : props.theme.fonts.mainFont};
  line-height: ${(props) => (props.isImportant ? '19px' : '16px')};
  font-size: ${(props) => (props.isImportant ? '14px' : '12px')};
`;
