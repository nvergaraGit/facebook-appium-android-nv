import styled from 'styled-components/native';
import { theme } from '@styles/themes';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  bold?: boolean;
}

export const PresaleGraphicsContainer = styled.View<ThemeProps>`
  width: 48%;
  position: relative;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${theme.colors.borderTabReview};
`;

export const PresaleGraphicsText = styled.Text<ThemeProps>`
  top: 52%;
  font-size: 20px;
  position: absolute;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.GothamBold};
`;

export const PresaleGraphicsContainerHeader = styled.View<ThemeProps>`
  width: 100%;
  height: 31px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-color: ${theme.colors.borderTabReview};
`;

export const PresaleGraphicsHeaderText = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${theme.colors.subtitleOrder};
  font-family: ${theme.fonts.GothamMedium};
`;
export const PresaleGraphicsTitleText = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-bottom: 5px;
  font-family: ${theme.fonts.mainFont};
  color: ${theme.colors.categoriesSubtitle};
`;

export const PresaleGraphicsBarContainer = styled.View<ThemeProps>`
  width: 100%;
  height: 70px;
  padding-vertical: 10px;
  padding-horizontal: 10px;
  background-color: ${theme.colors.light};
`;

export const PresaleGraphicsContainerDounutGraphic = styled.View<ThemeProps>`
  align-items: center;
`;

export const PresaleGraphicsBarContainerText = styled.View<ThemeProps>`
  margin-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const PresaleGraphicsBarAdvancedGoals = styled.View<ThemeProps>`
  margin-bottom: 5px;
  flex-direction: column;
`;

export const PresaleGraphicsBarText = styled.Text<ThemeProps>`
  font-size: 12px;
  color: ${theme.colors.infoText};
  font-family: ${({ theme, bold }) => (bold ? theme.fonts.GothamBold : theme.fonts.mainFont)};
`;
export const PresaleGraphicsBarTextGoals = styled(PresaleGraphicsBarText)<ThemeProps>`
  text-align: right;
`;
