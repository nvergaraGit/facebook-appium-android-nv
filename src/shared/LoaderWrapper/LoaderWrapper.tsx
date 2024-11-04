import React from 'react';
import { ActivityIndicator } from 'react-native';
import { LoaderWrapperContainer } from './styles';
import { theme } from '@styles/themes';

export const LoaderWrapper: React.FC = () => (
  <LoaderWrapperContainer>
    <ActivityIndicator color={theme.colors.primary} size="large" />
  </LoaderWrapperContainer>
);
