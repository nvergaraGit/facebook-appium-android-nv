import { TTheme } from 'types/theme';
import { styled } from 'styled-components/native';
interface Props {
  theme?: TTheme;
}
export const AboutContainer = styled.View<Props>`
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
`;

export const AboutTitle = styled.Text<Props>`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.grayScale};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  margin-left: 10px;
`;

export const Label = styled.Text<Props>`
  font-size: 16px;
  line-height: 24px;
  color: black;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
