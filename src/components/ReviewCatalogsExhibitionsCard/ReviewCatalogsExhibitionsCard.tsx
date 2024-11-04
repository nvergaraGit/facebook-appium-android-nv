import React from 'react';
import {
  Container,
  ContainerBody,
  ContainerCategory,
  ContainerImg,
  TextBody,
  TextCategory,
  Title,
  ContainerIcon,
  ContainerText,
  ContainerStates,
  ContainerTextNav,
  ContainerStatusGeneral,
  ContainerStatusGeneralText,
  ContainerFlex,
  ContainerFooter,
  FooterText,
} from './Styles';
import CheckIcon from '@assets/icons/ok.svg';
import CloseIcon from '@assets/icons/close.svg';
import ArrowIcon from '@assets/icons/arrow-right.svg';
import { getImageForCategory } from '@utils/categoriesImage';
import DownloadTrackingCategory from '@assets/icons/download-tracking-category.svg';
import { GetStatisticsByCategoriesQuery } from '@graphql/types';

type CategoriestList = NonNullable<
  GetStatisticsByCategoriesQuery['getStatisticsByCategories']['data']
>['categories'];
type CategoriestItem = NonNullable<CategoriestList>[0];

interface Props {
  exhibitions: CategoriestItem;
  handlePress: (item: string) => void;
  goToReview: (item: CategoriestItem) => void;
}
const ReviewCatalogsExhibitionsCard = ({ exhibitions, handlePress, goToReview }: Props) => {
  const qtyFormatsApproved = exhibitions.qtyFormatsApproved || 0;
  const qtyFormatsCommented = exhibitions.qtyFormatsCommented || 0;
  const qtyFormatsPending = exhibitions.qtyFormatsPending || 0;
  const statusCategoryLength = exhibitions.statusCategory?.length || 0;

  return (
    <Container onPress={() => goToReview(exhibitions)}>
      <ContainerCategory>
        <ContainerImg>{getImageForCategory(exhibitions.nameCategory || '')}</ContainerImg>
        <ContainerTextNav>
          <ContainerText>
            <Title>{exhibitions.nameCategory}</Title>
            <TextCategory>
              Catálogo: Lista {exhibitions.qtyFormats} | Exhibiciones: {exhibitions.qtyExhibitions}
            </TextCategory>
          </ContainerText>
          <ContainerIcon onPress={() => goToReview(exhibitions)}>
            <ArrowIcon />
          </ContainerIcon>
        </ContainerTextNav>
      </ContainerCategory>
      <ContainerBody>
        <ContainerStates>
          {qtyFormatsApproved > 0 && (
            <ContainerFlex>
              <CheckIcon />
              <TextBody isImportant>Aprobado: </TextBody>
              <TextBody>{exhibitions.qtyFormatsApproved} formatos</TextBody>
            </ContainerFlex>
          )}
          {qtyFormatsCommented > 0 && (
            <ContainerFlex>
              <CloseIcon />
              <TextBody isImportant>Con comentarios: </TextBody>
              <TextBody>{exhibitions.qtyFormatsCommented} formatos</TextBody>
            </ContainerFlex>
          )}
          {qtyFormatsPending > 0 && (
            <ContainerFlex>
              <CloseIcon />
              <TextBody isImportant>Pendientes: </TextBody>
              <TextBody>{exhibitions.qtyFormatsPending} formatos</TextBody>
            </ContainerFlex>
          )}
        </ContainerStates>

        {exhibitions.statusCategory && statusCategoryLength !== 0 && (
          <ContainerStatusGeneral
            state={exhibitions.statusCategory.toLocaleLowerCase() !== 'pendiente' ? true : false}
          >
            <ContainerStatusGeneralText>{exhibitions.statusCategory}</ContainerStatusGeneralText>
          </ContainerStatusGeneral>
        )}
      </ContainerBody>
      {statusCategoryLength !== 0 &&
        exhibitions.statusCategory?.toLowerCase() === 'finalizado' &&
        qtyFormatsCommented > 0 && (
          <ContainerFooter onPress={() => handlePress(exhibitions.nameCategory as string)}>
            <FooterText>
              <DownloadTrackingCategory /> Descargar informe - {exhibitions.nameCategory}
            </FooterText>
          </ContainerFooter>
        )}
    </Container>
  );
};

export default ReviewCatalogsExhibitionsCard;
