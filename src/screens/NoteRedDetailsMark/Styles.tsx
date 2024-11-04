import styled from 'styled-components/native';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
}

export const NoteRedDetailsMarkContainer = styled.View<ThemeProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const NoteRedDetailsMarkHeaderContainer = styled.View<ThemeProps>`
  height: 59px;
  display: flex;
  margin-left: 17px;
  margin-right: 18px;
  border-radius: 6px;
  flex-direction: row;
  padding-vertical: 5px;
  padding-horizontal: 25px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.light};
`;

export const NoteRedDetailsMarkHeaderContent = styled.View<ThemeProps>`
  flex-direction: column;
  align-items: flex-start;
`;

export const NoteRedDetailsMarkHeaderTitle = styled.Text<ThemeProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.infoText};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const NoteRedDetailsMarkHeaderTextPercentage = styled.Text<ThemeProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const NoteRedDetailsMarkHeaderTextDate = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const NoteRedDetailsMarkHeaderSubtitle = styled.Text<ThemeProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const NoteRedMardkCardRestContainer = styled.ScrollView<ThemeProps>`
  border-radius: 8px;
  margin-horizontal: 25px;
`;

export const NoteRedMardkCardRestContainerHeader = styled.View<ThemeProps>`
  height: 40px;
  margin-top: 10px;
  padding-left: 6px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
  bordertopleftradius: 8px;
  bordertoprightradius: 8px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.headerTitle};
`;

export const NoteRedMardkCardContainerRestHeaderTitle = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.infoText};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const NoteRedMardkCardRestContent = styled.View<ThemeProps>`
  padding-bottom: 14px;
  padding-horizontal: 14px;
  background: ${({ theme }) => theme.colors.light};
`;

export const NoteRedMardkCardRestContentCodesTitles = styled.View<ThemeProps>`
  height: 39px;
  width: 100%;
  display: flex;
  margin-top: 10px;
  padding-left: 5px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const NoteRedMardkCardRestContentCodes = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.infoText};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const NoteRedMardkCardRestContentTitles = styled.Text<ThemeProps>`
  font-size: 12px;
  flex-shrink: 1;
  color: ${({ theme }) => theme.colors.infoText};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const NoteRedMarkCardSoviList = styled.FlatList``;
