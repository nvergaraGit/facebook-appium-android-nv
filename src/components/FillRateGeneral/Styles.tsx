import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';

interface ThemeProps {
  theme?: TTheme;
  containerData?: boolean;
}
export const Title = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 8px;
`;
export const TitlePercent = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: black;
  margin-bottom: 7px;
`;
export const Percent = styled.Text<ThemeProps>`
  font-size: 20px;
  line-height: 28px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: black;
`;
export const TextDate = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.dark};
`;
export const ContainerResume = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: ${(props) => (props.containerData ? 'space-between' : 'flex-start')};
  align-items: center;
`;
export const ContainerText = styled.View<ThemeProps>`
  margin-right: 10px;
  margin-bottom: 8px;
`;
