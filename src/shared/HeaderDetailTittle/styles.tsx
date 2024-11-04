import { css, styled } from 'styled-components/native';
import { TTheme } from 'types/theme';
import { TouchableType } from './headerTypes';

interface ThemeProps {
  theme?: TTheme;
  fontSize?: string;
  touchableType?: TouchableType;
}

export const DetailsContainer = styled.View`
  background: white;
  padding: 30px 24px 0 16px;
`;

export const DetailsContainerHeader = styled.TouchableOpacity<ThemeProps>`
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
  ${(props) => {
    return props?.touchableType !== TouchableType.DEFAULT
      ? css`
          justify-content: space-between;
        `
      : null;
  }}
`;

export const DetailsTitle = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.grayScale};
  line-height: 28px;
  padding-left: 10px;
  ${(props) =>
    css`
      font-size: ${props?.fontSize}px;
    `}
`;
