import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';

interface ThemeProps {
  theme?: TTheme;
  isValue?: boolean;
  chain?: string;
}
export const TextChain = styled.Text<ThemeProps>`
  font-family: ${(props) =>
    props.isValue ? props.theme.fonts.GothamMedium : props.theme.fonts.mainFont};
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.dark};
  margin-left: 8px;
  margin-right: 5px;
  text-transform: ${(props) => (props.chain === 'SMU' ? 'uppercase' : 'capitalize;')};
`;
export const Container = styled.View<ThemeProps>`
  margin-bottom: 14px;
  margin-top: 10px;
`;
