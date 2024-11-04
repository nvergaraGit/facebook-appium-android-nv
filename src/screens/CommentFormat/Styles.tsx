/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TTheme } from 'types/theme';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface ThemeProps {
  theme?: TTheme;
  selected?: boolean;
  isImportant?: boolean;
  resizeCard?: boolean;
  marginInitial?: boolean;
  state?: boolean;
  validate?: boolean;
}

const screenDms = Dimensions.get('window').width;

export const Container = styled.View<ThemeProps>`
  background: white;
  flex: 1;
`;
export const ContainerList = styled.ScrollView<ThemeProps>`
  margin-top: 13px;
  padding: 12px 13px;
  flex: 1;
`;
export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.primary,
  size: 'large',
}))<ThemeProps>``;
export const ContainerLoader = styled.View<ThemeProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LoaderView = styled.View<ThemeProps>`
  position: absolute;
  elevation: 9;
  z-index: 9;
`;

export const Title = styled.Text<ThemeProps>`
  color: black;
  font-size: 16px;
  margin-top: 5px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const TitleName = styled.Text<ThemeProps>`
  font-size: 14px;
  margin-top: 10px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primaryNav};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const ContainerTabs = styled.View<ThemeProps>`
  flex-direction: row;
  border-bottom-width: 1px;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.borderTabReview};
`;

export const TabButton = styled.TouchableOpacity<ThemeProps>`
  width: 50%;
  height: 50px;
  alignitems: center;
  justifycontent: center;
  border-bottom-width: ${({ selected }) => (selected ? '5px' : '0px')};
  border-bottom-color: ${({ theme, selected }) =>
    selected ? theme.colors.primaryNav : theme.colors.secondary};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.backgroundSelected : theme.colors.secondary};
`;

export const TextTabButton = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme, selected }) => (selected ? theme.colors.primaryNav : theme.colors.black)};
`;

export const Label = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  color: black;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const CommentSelectText = styled.TextInput<ThemeProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const ContainerCommentInputLabel = styled.View<ThemeProps>`
  position: relative;
`;

export const ContainerCommentLabel = styled.Text<ThemeProps>`
  top: 35px;
  left: 12px;
  z-index: 100;
  font-size: 10px;
  position: absolute;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 10px;
`;

export const ContainerCommentText = styled.TextInput<ThemeProps>``;

export const CommentText = styled.TextInput<ThemeProps>`
  height: 48px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  margin-top: 40px;
  margin-bottom: 5px;
  color: #030f1c;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  padding-left: 16px;
  font-size: 14px;
`;

export const CommentTakeCapture = styled.TouchableOpacity<ThemeProps>`
  width: 100%;
  height: 48px;
  margin-top: 13px;
  align-items: center;
  flex-direction: row;
  border-radius: 32px;
  justify-content: center;
  border: 1px solid
    ${({ theme, state }) => (state ? theme.colors.disabledButton : theme.colors.primaryNav)};
`;

export const CommentTakeCaptureText = styled.Text<ThemeProps>`
  font-size: 16px;
  margin-left: 5px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme, state }) => (state ? theme.colors.disabledButton : theme.colors.primaryNav)};
`;

export const CommentImageIconContainer = styled.View<ThemeProps>`
  position: relative;
`;

export const CommentIconContainer = styled.TouchableOpacity<ThemeProps>`
  top: 30px;
  width: 20px;
  right: 20px;
  height: 20px;
  z-index: 100;
  position: absolute;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const CommentImageContainer = styled.Image<ThemeProps>`
  height: 254px;
  margin-top: 10px;
  border-radius: 10px;
  width: ${({ resizeCard }) => (resizeCard ? screenDms - 50 : screenDms - 27)}px;
`;

export const ContainerImageRemove = styled.View<ThemeProps>`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ContainerInfoTextInput = styled.Text<ThemeProps>`
  font-size: 12px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondaryFont};
  margin-top: ${({ validate }) => (!validate ? '0px' : '5px')};
  color: ${({ theme, validate }) =>
    !validate ? theme.colors.productsFinder : theme.colors.primaryText};
`;

export const ContainerInfoTextInputTakePicture = styled.Text<ThemeProps>`
  font-size: 12px;
  margin-top: 13px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  margin-bottom: ${({ marginInitial }) => (marginInitial ? '0px;' : '35px')};
`;

export const ContainerButtonSave = styled.TouchableOpacity``;

export const ContainerButtonSaveComments = styled(LinearGradient).attrs({
  colors: ['#AF0101', '#F00000'],
})`
  width: auto;
  height: 44px;
  border-radius: 9px;
  align-items: center;
  margin-bottom: 13px;
  margin-horizontal: 12px;
  justify-content: center;
`;

export const ContainerButtonSaveCommentsText = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const CommentFormatCarousel = styled.FlatList<ThemeProps>`
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: 20px;
`;
