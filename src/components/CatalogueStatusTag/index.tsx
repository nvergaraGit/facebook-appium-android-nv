import React from 'react';
import Tag from '@shared/Tag';
import { Maybe } from '@graphql/types';
import { theme } from '@styles/themes';

// state ? theme.colors.stateDone : theme.colors.statePending};

//TODO we need improve this i think that should come from the backend
const COLOR_SETTINGS: { [key: string]: { bgColor: string; color: string } } = {
  pendiente: {
    bgColor: theme.colors.statePending,
    color: theme.colors.secondary,
  },
  finalizado: {
    bgColor: theme.colors.stateDone,
    color: theme.colors.secondary,
  },
};

const TEXT_TRANSFORM: { [key: string]: string } = {
  pendiente: 'Pendiente',
  finalizado: 'Finalizado',
};

type CatalogueStatusTagProps = {
  value: Maybe<string>;
};

export const CatalogueStatusTag: React.FC<CatalogueStatusTagProps> = ({ value }) => {
  if (!value) {
    return null;
  }
  return (
    <Tag
      value={TEXT_TRANSFORM[value]}
      bgColor={COLOR_SETTINGS[value]?.bgColor || theme.colors.light}
      color={COLOR_SETTINGS[value]?.color || theme.colors.black}
    />
  );
};
