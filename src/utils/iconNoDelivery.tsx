import Rechazo from '@assets/icons/no-delivery-rechazo.svg';
import Retorno from '@assets/icons/no-delivery-retorno.svg';
import Eliminado from '@assets/icons/no-delivery-eliminado.svg';
import Costo from '@assets/icons/no-delivery-costo.svg';
import Maestra from '@assets/icons/no-delivery-maestra.svg';
import Credito from '@assets/icons/no-delivery-credito.svg';
import React from 'react';

export const IconsNoDeliery = (reason: string) => {
  switch (reason) {
    case 'Rechazo':
      return <Rechazo />;
    case 'Retorno':
      return <Retorno />;
    case 'Eliminado':
      return <Eliminado />;
    case 'Dif. costo':
      return <Costo />;
    case 'E. maestra':
      return <Maestra />;
    case 'Límite crédito':
      return <Credito />;
    default:
      return null;
  }
};
export const nColums = (reasonName: string) => {
  if (reasonName === 'Nota débito') {
    return false;
  }
  if (reasonName === 'Nota crédito') {
    return false;
  }
  if (reasonName === 'No identificada') {
    return false;
  }
  return true;
};
