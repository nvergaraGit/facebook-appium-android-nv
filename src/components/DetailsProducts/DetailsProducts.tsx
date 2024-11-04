/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import IconLeftArrow from '@assets/icons/icon-left-arrow.svg';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { ProductStackParamList } from 'types/products';
import {
  AuthContainerHeaderImage,
  DetailsProductsContainer,
  DetailsProductsContainerData,
  DetailsProductsContainerDataStock,
  DetailsProductsContainerHeader,
  DetailsProductsContainerImg,
  DetailsProductsContainerItem,
  DetailsProductsSubtitle,
  DetailsProductsTitle,
  DetailsProductsValue,
  DetailesProductsCategory,
  Container,
  TitleBarra,
  DetailsProductsModalContent,
  DetailsProductsModalBackdrop,
} from './styles';
import IconBarra from '@assets/icons/codigo_barra.svg';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import { ProductsCardButton } from '@screens/DetailsSalesFloor/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Barcode from '@kichiyaki/react-native-barcode-generator';

type Props = StackScreenProps<ProductStackParamList, 'DetailsProducts'>;

const DetailsProducts = ({ route }: Props) => {
  const { product, stock, showStock = false } = route.params;
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [imageSource, setImageSource] = useState({ uri: '' });

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (!product.imagen) {
          setImageSource({ uri: '' });
          return;
        }
        const response = await fetch(product?.imagen);
        if (response.status !== 403) {
          setImageSource({ uri: product?.imagen });
        }
      } catch (error) {
        console.log('[ERROR LOAD IMAGE]');
      }
    };

    if (typeof product?.imagen === 'string') {
      fetchImage().catch((error) => console.error(error));
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, [product?.imagen]);
  const handleDialog = () => {
    setVisible(true);
  };
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <DetailsProductsContainer>
        <DetailsProductsContainerHeader onPress={() => navigation.goBack()}>
          <IconLeftArrow />
          <DetailsProductsTitle>Detalle del producto</DetailsProductsTitle>
        </DetailsProductsContainerHeader>
        <ScrollView>
          <DetailsProductsContainerImg>
            {imageSource.uri !== '' ? (
              <AuthContainerHeaderImage
                source={imageSource}
                style={{ width: 250, height: 300, resizeMode: 'contain' }}
              />
            ) : null}
          </DetailsProductsContainerImg>
          <View style={{ width: 210, alignSelf: 'flex-end' }}>
            <TouchableOpacity onPress={handleDialog}>
              <Container style={{ borderRadius: 6 }}>
                <IconBarra />
                <TitleBarra>Ver código de barra</TitleBarra>
                <ProductsCardButton onPress={handleDialog} style={{ marginLeft: 4 }}>
                  <IconRightArrow />
                </ProductsCardButton>
              </Container>
            </TouchableOpacity>
          </View>
          <DetailsProductsContainerData>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>SKU:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.codigoBasis}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Nombre:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.nombLargo}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Unidades por caja:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.botellasPorCaja}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Unidades de medida:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.descripcionUniMedidaSuu}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Cajas por pallets:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.cjsXPall}</DetailsProductsValue>
            </DetailsProductsContainerItem>
          </DetailsProductsContainerData>

          {showStock && (
            <>
              <DetailsProductsValue>Stock Embonor</DetailsProductsValue>

              {stock?.map((item, index) => (
                <DetailsProductsContainerDataStock stock={item.boxesAvailable} key={index}>
                  <DetailsProductsContainerItem>
                    <DetailsProductsSubtitle>Sucursal:</DetailsProductsSubtitle>
                    <DetailsProductsValue>{item.branch}</DetailsProductsValue>
                  </DetailsProductsContainerItem>
                  <DetailsProductsContainerItem>
                    <DetailsProductsSubtitle>Cajas disponibles:</DetailsProductsSubtitle>
                    <DetailsProductsValue>{item.boxesAvailable}</DetailsProductsValue>
                  </DetailsProductsContainerItem>
                </DetailsProductsContainerDataStock>
              ))}
            </>
          )}
          <DetailesProductsCategory style={showStock ? { marginTop: 12 } : { marginTop: 0 }}>
            Marketing
          </DetailesProductsCategory>
          <DetailsProductsContainerData>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Marca:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.descripcionMarcaMkt}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Formato:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.descripcionFormatomkt}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Categoría:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.descripcionCategoriamkt}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Familia:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.descripcionFamliamkt}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Empaque:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.descripcionEmpaqueMkt}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Retornabilidad:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.descripcionRetornaMkt}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Material:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.descripcionMaterial}</DetailsProductsValue>
            </DetailsProductsContainerItem>
          </DetailsProductsContainerData>
          <DetailesProductsCategory>Código</DetailesProductsCategory>
          <DetailsProductsContainerData>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Código de barra:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.codiBarra}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Código EAN:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.ean}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>Código DUN:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.dun}</DetailsProductsValue>
            </DetailsProductsContainerItem>
          </DetailsProductsContainerData>
          <DetailesProductsCategory>Impuestos</DetailesProductsCategory>
          <DetailsProductsContainerData>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>ILA:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.descripcionIla}</DetailsProductsValue>
            </DetailsProductsContainerItem>
            <DetailsProductsContainerItem>
              <DetailsProductsSubtitle>IABA:</DetailsProductsSubtitle>
              <DetailsProductsValue>{product?.descripcionCategoriaIaba}</DetailsProductsValue>
            </DetailsProductsContainerItem>
          </DetailsProductsContainerData>
        </ScrollView>
      </DetailsProductsContainer>
      <Modal visible={visible} transparent={true}>
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <DetailsProductsModalBackdrop>
            <TouchableWithoutFeedback>
              <DetailsProductsModalContent>
                <Barcode format="CODE128B" value={product.codiBarra} />
                <TitleBarra
                  style={{ textAlign: 'center', color: 'black', fontSize: 18, paddingTop: 4 }}
                >
                  {product.codiBarra}
                </TitleBarra>
              </DetailsProductsModalContent>
            </TouchableWithoutFeedback>
          </DetailsProductsModalBackdrop>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};
export default DetailsProducts;
