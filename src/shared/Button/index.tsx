import React, { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  ButtonContainer,
  ButtonGrandiantColor,
  ButtonOutlineContent,
  ButtonVariantType,
  ButtonText,
  ButtonBorderType,
  ButtonLeftIconContainer,
} from './styles';

type ButtomProps = {
  border?: ButtonBorderType;
  variant?: ButtonVariantType;
  onPress?: TouchableOpacityProps['onPress'];
  leftIcon?: React.ReactNode;
};

const Button: React.FC<PropsWithChildren<ButtomProps>> = ({
  onPress,
  variant = 'solid',
  children,
  border = 'square',
  leftIcon,
}) => {
  if (variant === 'outline') {
    return (
      <ButtonContainer variant={variant} border={border} onPress={onPress}>
        <ButtonOutlineContent>
          {leftIcon ? <ButtonLeftIconContainer>{leftIcon}</ButtonLeftIconContainer> : null}
          <ButtonText border={border} variant={variant}>
            {children}
          </ButtonText>
        </ButtonOutlineContent>
      </ButtonContainer>
    );
  }

  return (
    <ButtonContainer variant={variant} border={border} onPress={onPress}>
      <ButtonGrandiantColor colors={['#AF0101', '#F00000']}>
        {leftIcon ? <ButtonLeftIconContainer>{leftIcon}</ButtonLeftIconContainer> : null}
        <ButtonText border={border} variant={variant}>
          {children}
        </ButtonText>
      </ButtonGrandiantColor>
    </ButtonContainer>
  );
};

export default Button;
