import { TreasonNoDelivery } from 'types/fillRate';
import React from 'react';
import { Container, ContainerData, ContainerFlex, NameReason, PercentageReason } from './Styles';

import { IconsNoDeliery, nColums } from '@utils/iconNoDelivery';

interface Props {
  reasonNoDelivery: TreasonNoDelivery;
}
const ReasonNoDelivery = ({ reasonNoDelivery }: Props) => {
  const insertLineBreak = (text: string) => {
    const specialCases = ['Nota débito', 'Nota crédito', 'No identificada'];
    if (specialCases.includes(text)) {
      const firstSpaceIndex = text.indexOf(' ');
      if (firstSpaceIndex !== -1) {
        return `${text.substring(0, firstSpaceIndex)}\n${text.substring(firstSpaceIndex + 1)}`;
      }
    }
    return text;
  };
  const formattedReasonName = insertLineBreak(reasonNoDelivery.reasonName);
  return (
    <Container isIcon={nColums(reasonNoDelivery.reasonName)}>
      <ContainerFlex>
        {IconsNoDeliery(reasonNoDelivery.reasonName)}
        <ContainerData>
          <NameReason>{formattedReasonName}</NameReason>
          <PercentageReason nameReason={reasonNoDelivery.reasonName}>
            {reasonNoDelivery.percentage === 0 ? '0' : reasonNoDelivery.percentage.toFixed(1)}%
          </PercentageReason>
        </ContainerData>
      </ContainerFlex>
    </Container>
  );
};

export default ReasonNoDelivery;
