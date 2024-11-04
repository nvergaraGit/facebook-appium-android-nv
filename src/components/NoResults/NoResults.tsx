import React from 'react';
import { IconContainer, NoResultsContainer } from './styles';

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}
const NoResults = ({ icon, children }: Props) => {
  return (
    <NoResultsContainer>
      <IconContainer>{icon}</IconContainer>
      {children}
    </NoResultsContainer>
  );
};

export default NoResults;
