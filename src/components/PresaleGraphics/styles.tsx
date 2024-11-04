import styled from 'styled-components/native';
import { theme } from '@styles/themes';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  bold?: boolean;
  selected?: boolean;
  twoCards?: boolean;
}

export const PresaleGraphicsContainer = styled.View<ThemeProps>`
  margin-top: 15px;
  position: relative;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${theme.colors.borderTabReview};
`;

export const PresaleGraphicsContainerTwoCards = styled.View<ThemeProps>`
  width: 100%;
  margin-top: 10px;
  position: relative;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 30px;
  justify-content: space-between;
`;

export const PresaleGraphicsContainerDounutGraphic = styled.View<ThemeProps>`
  align-items: center;
`;

export const PresaleGraphicsContainerTextBar = styled.View<ThemeProps>`
  width: 50%;
  padding-horizontal: 10px;
`;

export const PresaleGraphicsText = styled.Text<ThemeProps>`
  top: 52%;
  font-size: 20px;
  position: absolute;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.GothamBold};
`;

export const PresaleGraphicsTextOnecard = styled.Text<ThemeProps>`
  top: 52%;
  left: 20%;
  font-size: 20px;
  position: absolute;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.GothamBold};
`;

export const PresaleGraphicsTextTwocard = styled.Text<ThemeProps>`
  top: 52%;
  font-size: 20px;
  position: absolute;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.GothamBold};
`;

export const PresaleGraphicsContainerHeaderTitle = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const PresaleGraphicsContainerHeader = styled.View<ThemeProps>`
  width: 100%;
  height: 31px;
  margin-bottom: 5px;
  justify-content: center;
  border-bottom-width: 1px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-color: ${theme.colors.borderTabReview};
  align-items: ${({ twoCards }) => (twoCards ? 'flex-start' : 'center')};
`;

export const PresaleGraphicsContainerHeaderTwoCards = styled.View<ThemeProps>`
  width: 100%;
  height: 31px;
  margin-bottom: 5px;
  padding-left: 16px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: space-between;
  border-bottom-color: ${theme.colors.borderTabReview};
`;

export const PresaleGraphicsHeaderText = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${theme.colors.subtitleOrder};
  font-family: ${theme.fonts.GothamMedium};
`;

export const PresaleGraphicsHeaderSubtitleTwoCards = styled.Text<ThemeProps>`
  font-size: 10px;
  margin-left: 5px;
  font-family: ${theme.fonts.GothamMedium};
  color: ${theme.colors.categoriesSubtitleCard};
`;

export const PresaleGraphicsHeaderShowTwoCategoriesContainer = styled.TouchableOpacity<ThemeProps>`
  margin-right: 20px;
`;

export const PresaleGraphicsHeaderShowTwoCategoriesText = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-left: 5px;
  color: ${theme.colors.primaryNav};
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
  height: 50px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  background-color: ${theme.colors.light};
`;

export const PresaleGraphicsBarContainerTwo = styled.View<ThemeProps>`
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding-vertical: 10px;
  background-color: ${theme.colors.light};
`;

export const PresaleGraphicsBarContainerText = styled.View<ThemeProps>`
  margin-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const PresaleGraphicsBarText = styled.Text<ThemeProps>`
  font-size: 12px;
  color: ${theme.colors.infoText};
  font-family: ${({ theme, bold }) => (bold ? theme.fonts.GothamBold : theme.fonts.mainFont)};
`;
