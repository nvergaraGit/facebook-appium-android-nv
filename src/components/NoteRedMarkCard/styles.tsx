import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  isIndicator?: boolean;
}

export const NoteRedMarkCardContainer = styled.ScrollView<ThemeProps>`
  margin-top: 10px;
  border-radius: 8px;
  margin-horizontal: 30px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
`;

export const NoteRedMarkCardHeaderContainer = styled.View<ThemeProps>`
  height: 35px;
  padding-left: 6px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
  padding-vertical: 5px;
  bordertopleftradius: 8px;
  bordertoprightradius: 8px;
  justify-content: space-between;
  background: ${(props) => (props.isIndicator ? '#E8EBF7' : props.theme.colors.light)};
`;

export const NoteRedMarkCardHeaderTitle = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${(props) => (props.isIndicator ? '#354455' : props.theme.colors.authText)};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const NoteRedMarkCardHeaderContainerSubTitle = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const NoteRedMarkCardHeaderSubTitle = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;
// export const getTextColor = (value: string) => (value.startsWith('-') ? '#F40009' : '#030F1C');
// color: ${ ({ children }) => getTextColor(children as string) };

export const NoteRedMarkCardHeaderSubTitlePercentage = styled.Text<ThemeProps>`
  font-size: 14px;
  color: #030f1c;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const NoteRedMarkCardContent = styled.View<ThemeProps>`
  background: ${({ theme }) => theme.colors.secondary};
`;

export const NoteRedMarkCardContentTitles = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.infoText};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const NoteRedMarkCardContainerText = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
`;
