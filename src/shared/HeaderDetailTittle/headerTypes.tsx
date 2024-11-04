import React from 'react';
import IconEyeInfo from '@assets/icons/eyes-info.svg';

export enum IconDefined {
  IconEye = 'iconEye',
}

export const iconsTypeList = {
  iconEye: () => {
    return <IconEyeInfo />;
  },
  undefined: () => null,
};

export type IconsType = {
  iconName: string;
  icon?: JSX.Element;
};

export interface Properties {
  title: string;
  fontSize?: string;
  goBack: () => void;
  touchableFunction?: () => void;
  touchableType?: TouchableType;
  touchableItemIcon?: TouchableItemIcon;
  touchableItemText?: TouchableItemText;
}

export enum TouchableType {
  ICON = 'ICON',
  TEXT = 'TEXT',
  DEFAULT = 'DEFAULT',
}

export interface TouchableItemIcon {
  iconName: IconDefined;
}
export interface TouchableItemText {
  text: string;
}

export interface PropertiesRenderComponent {
  touchableType: TouchableType;
  touchableItemIcon?: TouchableItemIcon;
  touchableItemText?: TouchableItemText;
}
