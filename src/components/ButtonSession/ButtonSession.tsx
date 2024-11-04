import React from 'react';
import { AuthButton, AuthContainerButton, AuthTextButton } from './styles';
import { View } from 'react-native';

interface Props {
  isDisabled?: boolean;
  handlePress?: () => Promise<void>;
  title: string | JSX.Element;
  isShowMsg?: boolean;
  width?: string;
  icon?: JSX.Element;
  isIcon?: boolean;
  onPress?: () => void;
}

const ButtonSession = ({
  isDisabled = false,
  handlePress,
  title,
  isShowMsg,
  width,
  isIcon,
  icon,
  onPress,
}: Props) => {
  const onPressHandler = isIcon ? onPress : () => handlePress && handlePress();
  return (
    <AuthContainerButton
      disabled={isDisabled}
      onPress={onPressHandler}
      width={width}
      testID="idButton"
    >
      <AuthButton showMsg={isShowMsg} testID="auth-button">
        <AuthTextButton>{title}</AuthTextButton>
        {isIcon && <View style={{ marginLeft: 5, marginTop: 1 }}>{icon}</View>}
      </AuthButton>
    </AuthContainerButton>
  );
};

export default ButtonSession;
