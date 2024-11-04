import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GetCataloguesDataPayload } from '@graphql/types';
import { ContainerFlex, TitleCatalogue, TitleDate } from './Styles';
import { dateFormatter } from '@utils/formatDate';
import { CatalogueAssociatedTag } from '@components/CatalogueAssociatedTag';
import { CatalogueStatusTag } from '@components/CatalogueStatusTag';
interface Props {
  status?: string | null;
  catalogs: GetCataloguesDataPayload;
  handleDetails: (catalog: GetCataloguesDataPayload) => void;
}

const CatalogueCategory = ({ catalogs, handleDetails, status }: Props) => (
  <TouchableOpacity onPress={() => handleDetails(catalogs)} style={styles.container}>
    <ContainerFlex>
      <TitleCatalogue numberOfLines={1}>{catalogs.catalogo}</TitleCatalogue>
      <CatalogueAssociatedTag value={catalogs.categoria} />
    </ContainerFlex>
    <ContainerFlex>
      {catalogs.inicio && catalogs.termino ? (
        <TitleDate>
          {dateFormatter(catalogs.inicio)} - {dateFormatter(catalogs.termino)}
        </TitleDate>
      ) : null}
      {status ? <CatalogueStatusTag value={status.toLowerCase()} /> : null}
    </ContainerFlex>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 7.5,
    borderRadius: 6,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 20,
    shadowColor: '#5F6F86',
    shadowOpacity: Platform.OS === 'android' ? 0.45 : 0.15,
    elevation: 4,
    shadowOffset: {
      width: -1,
      height: 2,
    },
  },
});

export default CatalogueCategory;
