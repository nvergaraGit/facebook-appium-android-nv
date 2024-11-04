import React from 'react';
import { LoaderContainer, Loading, LoaderText } from './styles';

interface Props {
  loading: boolean;
}
function Loader({ loading }: Props) {
  return (
    <LoaderContainer testID="loader">
      {loading && (
        <Loading size="large" animating={true} color="red" testID="loader-activity-indicator" />
      )}
      <LoaderText>Cargando la información del sistema</LoaderText>
    </LoaderContainer>
  );
}

export default Loader;
