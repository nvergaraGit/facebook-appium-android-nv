/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {
  CatalogCardAddress,
  CatalogCardBody,
  CatalogCardFooter,
  CatalogsCardButton,
  CatalogsCardCode,
  CatalogsCardCodeLabel,
  CatalogsCardContainer,
  CatalogsCardContainerImageText,
  CatalogsCardContainerText,
  CatalogsCardImage,
  StatusLabel,
  StatusLabelContainer,
  TextCardDescData,
  TextCardDescLabel,
} from './styles';
import { View } from 'react-native';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import { Catalog } from 'types/catalogs';
import { dateFormatter } from '@utils/formatDate';
import { PATTERN_BTN_COLOR } from '../../types/theme';
import { PATTERN_TYPE } from '@libraries/constants';

type Props = {
  catalogDetails: Catalog;
  handleDetails: (id: number) => void;
};

const CatalogCard = React.memo(({ catalogDetails, handleDetails }: Props) => {
  const patterColor = (pattern: string) => {
    return PATTERN_BTN_COLOR[pattern as PATTERN_TYPE]();
  };
  return (
    <CatalogsCardContainer onPress={() => handleDetails(catalogDetails.id)}>
      <CatalogCardBody testID="catalog-card">
        <CatalogsCardContainerImageText>
          <CatalogsCardImage source={require('@assets/logo-sales-floor.png')} />
          <View style={{ flexDirection: 'row', width: '75%', marginRight: 10 }}>
            <CatalogsCardContainerText>
              <View style={{ flexDirection: 'row' }}>
                <CatalogsCardCodeLabel>Catálogo:</CatalogsCardCodeLabel>
                <CatalogsCardCode>{catalogDetails.catalogo}</CatalogsCardCode>
              </View>
              <View style={{ flexDirection: 'row', flex: 2 }}>
                <View>
                  <TextCardDescLabel>Formato</TextCardDescLabel>
                  {/* <TextCardDescData>{catalogDetails.empaque}</TextCardDescData> */}
                  <TextCardDescData>
                    {catalogDetails.empaque.substring(0, 9)}
                    {catalogDetails.empaque.length > 9 ? '...' : null}
                  </TextCardDescData>
                </View>

                <View style={{ marginLeft: 24 }}>
                  <TextCardDescLabel>Mecánica</TextCardDescLabel>
                  <TextCardDescData>
                    {catalogDetails.mecanica.substring(0, 9)}
                    {catalogDetails.mecanica.length > 9 ? '...' : null}
                  </TextCardDescData>
                </View>
              </View>
            </CatalogsCardContainerText>
          </View>
          <CatalogsCardButton onPress={() => handleDetails(catalogDetails?.id)}>
            <IconRightArrow />
          </CatalogsCardButton>
        </CatalogsCardContainerImageText>
      </CatalogCardBody>
      <CatalogCardFooter>
        <CatalogCardAddress>
          {`${dateFormatter(catalogDetails.inicio)} - ${dateFormatter(catalogDetails.termino)}`}
        </CatalogCardAddress>
        {catalogDetails.patron && (
          <StatusLabelContainer
            style={{
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: patterColor(catalogDetails.patron).borderColor,
              backgroundColor: patterColor(catalogDetails.patron).backGroundColor,
            }}
          >
            <StatusLabel style={{ color: patterColor(catalogDetails.patron).textColor }}>
              {catalogDetails.patron}
            </StatusLabel>
          </StatusLabelContainer>
        )}
      </CatalogCardFooter>
    </CatalogsCardContainer>
  );
});

export default CatalogCard;
