import { TTheme } from 'types/theme';
import { styled } from 'styled-components/native';
interface Props {
  theme?: TTheme;
}
export const AboutContainer = styled.View<Props>`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
`;

export const AboutTitle = styled.Text<Props>`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.grayScale};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const ContainerVersion = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const TextLabel = styled.Text<Props>`
  font-size: 14px;
  line-height: 19px;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;
export const TextValue = styled.Text<Props>`
  width: 60%;
  color: #000;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
