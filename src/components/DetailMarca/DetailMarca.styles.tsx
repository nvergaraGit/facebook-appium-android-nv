import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
}

export const ContainerResume = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerPromedio = styled.View<ThemeProps>`
  align-items: center;
  background: #f7f9fc;
  padding: 10px 0;
  border-radius: 5px;
  margin-top: 16px;
  border: 1px solid #e8ebf7;
`;
export const TextWeek = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: 14px;
  line-height: 19px;
  color: black;
`;
export const TextDate = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  font-size: 14px;
  line-height: 19px;
  color: black;
`;
export const TextMarca = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  font-size: 18px;
  line-height: 24px;
  color: #5f6f86;
`;
export const TextPercent = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  font-size: 20px;
  line-height: 28px;
  color: #5f6f86;
`;
export const TextPeso = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  font-size: 12px;
  line-height: 16px;
  color: #354455;
`;
