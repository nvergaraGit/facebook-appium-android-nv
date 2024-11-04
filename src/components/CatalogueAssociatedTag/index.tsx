import React from 'react';
import Tag from '@shared/Tag';
import { Maybe } from '@graphql/types';

//TODO we need improve this i think that should come from the backend
const COLOR_SETTINGS: { [key: string]: { bgColor: string; borderColor: string; color: string } } = {
  KOE: {
    bgColor: '#fee5e6',
    borderColor: '#f40009',
    color: '#f40009',
  },
  'Santa Rita': {
    bgColor: '#f0e5f1',
    borderColor: '#6c006f',
    color: '#6c006f',
  },
  ABI: {
    bgColor: '#fff1e5',
    borderColor: '#fa7800',
    color: '#fa7800',
  },
  CAPEL: {
    bgColor: '#ebfbff',
    borderColor: '#04a4c7',
    color: '#04a4c7',
  },
};

type CatalogueAssociatedTagProps = {
  value: Maybe<string>;
};

export const CatalogueAssociatedTag: React.FC<CatalogueAssociatedTagProps> = ({ value }) => {
  if (!value) {
    return null;
  }
  return (
    <Tag
      value={value}
      bgColor={COLOR_SETTINGS[value].bgColor}
      borderColor={COLOR_SETTINGS[value].borderColor}
      color={COLOR_SETTINGS[value].color}
    />
  );
};
