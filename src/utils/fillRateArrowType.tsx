import React from 'react';
import IconArrowGreen from '@assets/icons/arrow-green.svg';
import IconArrowRed from '@assets/icons/arrow-red.svg';

export const ArrowType = {
  up: <IconArrowGreen />,
  down: <IconArrowRed />,
  none: null,
};

export enum TypeArrowFillRate {
  UP = 'up',
  DOWN = 'down',
  NONE = 'none',
}
