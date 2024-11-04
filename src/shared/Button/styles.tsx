import { styled } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { TTheme } from '../../types/theme';
import { theme } from '@styles/themes';

type ThemeProps = { theme: TTheme };
export type ButtonBorderType = 'square' | 'rounded';
export type ButtonVariantType = 'outline' | 'solid';
export type ButtonContainerProps = ThemeProps & {
  border: ButtonBorderType;
  variant: ButtonVariantType;
};

const BORDER_RADIUS = {
  square: 9,
  rounded: 32,
};

const COLOR_TEXT = {
  outline: theme.colors.authBorderInput,
  solid: '#fff',
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  border-color: ${({ theme }) => theme.colors.authBorderInput};
  border-width: ${({ variant }) => (variant === 'outline' ? 1 : 0)}px;
  border-styled: solid;
  border-radius: ${({ border }) => BORDER_RADIUS[border]}px;
  overflow: hidden;
`;

export const ButtonGrandiantColor = styled(LinearGradient)`
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonOutlineContent = styled.View<ThemeProps>`
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #ffff;
`;

export const ButtonText = styled.Text<ButtonContainerProps>`
  font-size: 14px;
  color: ${({ variant }) => COLOR_TEXT[variant]};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const ButtonLeftIconContainer = styled.View`
  padding-right: 12px;
`;
