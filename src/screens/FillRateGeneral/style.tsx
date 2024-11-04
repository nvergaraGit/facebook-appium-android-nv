import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';

interface ThemeProps {
  theme?: TTheme;
  isChain?: boolean;
}
export const ContainerBody = styled.View<ThemeProps>`
  padding: 10px 12px;
  flex: 1;
`;
export const TextNoDelivery = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  font-size: 16px;
  line-height: 24px;
  text-align: ${(props) => (props.isChain ? ' left' : 'center')};
  color: #030f1c;
  margin-top: ${(props) => (props.isChain ? ' 16px' : '0')};
`;
export const ContainerNoDelivery = styled.View<ThemeProps>`
  background: #e6f6f9;
  padding: 5px;
  border-radius: 4px;
  margin-top: 15px;
`;
export const ContainerList = styled.View<ThemeProps>``;
export const ContainerWrap = styled.View<ThemeProps>`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
