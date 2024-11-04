import React from 'react';
import { DetailsContainer, DetailsContainerHeader, DetailsTitle } from './styles';
import IconLeftArrow from '@assets/icons/icon-left-arrow.svg';
import { Properties, TouchableType, iconsTypeList } from './headerTypes';
import { Text, TouchableOpacity } from 'react-native';
import { TextGoMeDark1416 } from '@styles/sharedStyles';

const HeaderDetailScreenNavigation = (props: Properties) => {
  const {
    title,
    goBack,
    fontSize = '20',
    touchableType = TouchableType.DEFAULT,
    touchableItemIcon,
    touchableItemText,
    touchableFunction,
  } = props;

  return (
    <DetailsContainer>
      <DetailsContainerHeader touchableType={touchableType} onPress={() => goBack()}>
        <IconLeftArrow />
        <DetailsTitle fontSize={fontSize}>{title}</DetailsTitle>
        <TouchableOpacity onPress={() => touchableFunction?.()}>
          {touchableType === TouchableType.DEFAULT && null}
          {touchableType === TouchableType.TEXT && (
            <TextGoMeDark1416>{touchableItemText?.text}</TextGoMeDark1416>
          )}
          {touchableType === TouchableType.ICON && (
            <Text>{iconsTypeList[`${touchableItemIcon?.iconName ?? 'undefined'}`]()}</Text>
          )}
        </TouchableOpacity>
      </DetailsContainerHeader>
    </DetailsContainer>
  );
};

export default HeaderDetailScreenNavigation;
