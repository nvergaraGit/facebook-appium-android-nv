import React from 'react';
import {
  CatalogListHeaderContainer,
  CatalogListHeaderLogoContainer,
  CatalogListHeaderLogoContent,
  CatalogListHeaderDate,
  CatalogListHeaderTitle,
  CatalogListHeaderSubTitle,
} from './styles';
import { getImageForSalesFloor } from '@utils/imageSalesFloor';

type CatalogsListHeaderProps = {
  catalogo: string;
  startDate: string;
  count: number;
};

const CatalogListHeader: React.FC<CatalogsListHeaderProps> = ({ catalogo, startDate, count }) => (
  <CatalogListHeaderContainer>
    <CatalogListHeaderLogoContainer>
      {getImageForSalesFloor(catalogo)}
    </CatalogListHeaderLogoContainer>
    <CatalogListHeaderLogoContent>
      <CatalogListHeaderTitle>{catalogo || ''}</CatalogListHeaderTitle>
      <CatalogListHeaderDate>{startDate}</CatalogListHeaderDate>
    </CatalogListHeaderLogoContent>
    <CatalogListHeaderSubTitle>{count} - Catálogos</CatalogListHeaderSubTitle>
  </CatalogListHeaderContainer>
);

export default CatalogListHeader;
