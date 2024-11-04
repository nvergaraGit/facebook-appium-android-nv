import React from 'react';
import {
  NoteRedMarkCardContent,
  NoteRedMarkCardContainer,
  NoteRedMarkCardHeaderTitle,
  NoteRedMarkCardContentTitles,
  NoteRedMarkCardContainerText,
  NoteRedMarkCardHeaderSubTitle,
  NoteRedMarkCardHeaderContainer,
  NoteRedMarkCardHeaderContainerSubTitle,
  NoteRedMarkCardHeaderSubTitlePercentage,
} from './styles';
import { TRedNoteBrandIndicatorDetails } from 'types/salesFloors';

interface Props {
  brand: TRedNoteBrandIndicatorDetails;
}

const NoteRedMarkCard = ({ brand }: Props) => {
  const brandMeta = (category: string) => {
    switch (category) {
      case 'AGUAS':
        return '45,2';
      case 'JUGOS':
        return '26,5';
      case 'ISOTONICOS':
        return '45,0';
      case 'ENERGETICAS':
        return '40,0';
      default:
        return '60,7';
    }
  };

  return (
    <NoteRedMarkCardContainer>
      <NoteRedMarkCardHeaderContainer>
        <NoteRedMarkCardHeaderTitle>{brand.nombre}</NoteRedMarkCardHeaderTitle>
        <NoteRedMarkCardHeaderContainerSubTitle>
          <NoteRedMarkCardHeaderSubTitle>
            Meta: {brandMeta(brand.nombre)}%
          </NoteRedMarkCardHeaderSubTitle>
          <NoteRedMarkCardHeaderSubTitlePercentage>
            {brand.promedioAnterior}
          </NoteRedMarkCardHeaderSubTitlePercentage>
        </NoteRedMarkCardHeaderContainerSubTitle>
      </NoteRedMarkCardHeaderContainer>

      <>
        {brand.detalleCategoriaSovi.map((item, index) => (
          <NoteRedMarkCardContent key={index}>
            <NoteRedMarkCardContainerText>
              <NoteRedMarkCardContentTitles>{item.nombre}</NoteRedMarkCardContentTitles>
              <NoteRedMarkCardHeaderSubTitlePercentage>
                {item.promedioActual}
              </NoteRedMarkCardHeaderSubTitlePercentage>
            </NoteRedMarkCardContainerText>
          </NoteRedMarkCardContent>
        ))}
      </>
    </NoteRedMarkCardContainer>
  );
};

export default NoteRedMarkCard;
