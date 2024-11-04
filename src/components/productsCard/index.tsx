/* eslint-disable @typescript-eslint/no-unsafe-argument */
import DefaultImage from '@assets/empty-image.png';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import IconEssential from '@assets/icons/product-essential.svg';
import { ORDENES, PRODUCTOS, SALAS, STOCK } from '@libraries/constants';
import React, { useEffect, useState } from 'react';
import { Image, ImageURISource, TouchableOpacity, View } from 'react-native';
import { TProducts } from '../../types/products';
import {
  Container,
  ContainerTag,
  ProductsCardButton,
  ProductsCardContainer,
  ProductsCardContainerImageText,
  ProductsCardContainerText,
  ProductsCardTextDescription,
  ProductsCardTextQuantity,
  ProductsCardTextSku,
  TitleTag,
  ProductsCardContainerState,
  ProductsCardContainerStateText,
  EssentialProduct,
} from './styles';
type Props = {
  products: TProducts;
  handleDetails: (id: number) => void;
  viewType?: string;
  border?: number;
  isLast?: boolean;
  showEssentialProduct?: boolean;
};

const DEFAULT_IMAGE: ImageURISource = DefaultImage as ImageURISource;

const ProductsCard = ({
  products,
  handleDetails,
  viewType,
  border,
  isLast,
  showEssentialProduct,
}: Props) => {
  const [imageSource, setImageSource] = useState({ uri: '' });

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(products?.imagen as string);
        if (response.status === 403) {
          setImageSource(DefaultImage);
        } else {
          setImageSource({ uri: products?.imagen as string });
        }
      } catch (error) {
        setImageSource(DefaultImage);
      }
    };

    fetchImage().catch((error) => console.error(error));
  }, [products?.imagen]);
  return (
    <Container isLast={isLast} border={border}>
      {showEssentialProduct && (
        <View
          style={{
            backgroundColor: '#354455',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 3,
            paddingHorizontal: 7,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            alignSelf: 'flex-end',
          }}
        >
          <IconEssential />
          <EssentialProduct>Imprescindible</EssentialProduct>
        </View>
      )}
      <TouchableOpacity
        disabled={products.codigoBasis == 9999}
        onPress={() => handleDetails(products.codigoBasis)}
      >
        <>
          <ProductsCardContainer testID="products-card" border={border}>
            <ProductsCardContainerImageText>
              {imageSource.uri !== '' ? (
                <Image
                  source={imageSource}
                  style={{ width: 42, height: 42, resizeMode: 'contain' }}
                />
              ) : (
                <Image
                  source={DEFAULT_IMAGE}
                  style={{ width: 42, height: 42, resizeMode: 'contain' }}
                />
              )}

              <ProductsCardContainerText>
                <ProductsCardTextSku hasEssentialProduct={products.isEssential}>
                  SKU: {products.codigoBasis}
                </ProductsCardTextSku>

                <ProductsCardTextDescription>
                  {viewType === STOCK ? products.largeName : products.nombLargo}
                </ProductsCardTextDescription>
                <View style={{ flexDirection: 'row' }}>
                  <ProductsCardTextQuantity>
                    {viewType === PRODUCTOS && 'Unidades por caja:'}
                    {viewType === (ORDENES || SALAS) && 'Total Cajas:'}
                    {viewType === STOCK && 'Cajas disponibles:'}
                  </ProductsCardTextQuantity>
                  <ProductsCardTextQuantity regular>
                    {viewType === PRODUCTOS && products.botellasPorCaja}
                    {viewType === (ORDENES || SALAS) && products.cjFis}
                    {viewType === STOCK && parseInt(products.boxesAvailable as string) < 0
                      ? '0'
                      : products.boxesAvailable}
                  </ProductsCardTextQuantity>
                </View>
                {viewType === STOCK && (
                  <ContainerTag tag={products.stock}>
                    <TitleTag tag={products.stock}>{products.stock}</TitleTag>
                  </ContainerTag>
                )}
                {products.edoArciculo && (
                  <ProductsCardContainerState>
                    <ProductsCardContainerStateText>
                      {products.edoArciculo}
                    </ProductsCardContainerStateText>
                  </ProductsCardContainerState>
                )}
              </ProductsCardContainerText>
            </ProductsCardContainerImageText>
            {products.codigoBasis != 9999 && (
              <ProductsCardButton onPress={() => handleDetails(products.codigoBasis)}>
                <IconRightArrow />
              </ProductsCardButton>
            )}
          </ProductsCardContainer>
        </>
      </TouchableOpacity>
    </Container>
  );
};

export default ProductsCard;
