/* eslint-disable @typescript-eslint/no-floating-promises */
import { FlatList, RefreshControl } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { useLazyQuery } from '@apollo/client';
import getDetailsProducts from '@graphql/queries/getDetailsProducts';
import { FillRateStackParamList, ProductDetail } from 'types/fillRate';
import {
  ContainerResult,
  DetailsContainerData,
  DetailsContainerItem,
  DetailsContainerSubtitle,
  DetailsContainerValue,
  MainContainerStatic,
  TextNoResults,
} from '@styles/sharedStyles';
import { TouchableType } from '@shared/HeaderDetailTittle/headerTypes';
import SearchInput from '@components/SearchInput/SearchInput';
import FillRateDetailsOrderCard from '@components/FillRateDetailsOrderCard/FillRateDetailsOrderCard';
import { formatDateCompileString } from '@utils/formatDate';

import WithApollo from '@components/hocs/WithApollo';
import LoaderChangeScreen from '@shared/LoaderChangeScreen/LoaderChangeScreen';
import NoResults from '@components/NoResults/NoResults';
import EmptyImageSadFace from '@assets/icons/empty-image-details-sales.svg';
import { TProductsDetailsData } from 'types/products';

type Props = StackScreenProps<FillRateStackParamList, 'FillRateDetail'>;

const FillRateDetail = ({ route }: Props) => {
  const { data, salesFloor } = route.params;
  console.log('valor de salesFloor!!!', salesFloor);
  const [getDetailsProductsInfo, { loading: loadingProductDetail }] = useLazyQuery(
    getDetailsProducts,
    {
      fetchPolicy: 'no-cache',
    },
  );
  const navigation = useNavigation<StackNavigationProp<FillRateStackParamList>>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [noResult, setNoResult] = useState<boolean>(false);
  const [filRateSearchCharacters, setFilRateSearchCharacters] = useState<string>('');
  const [filRateOcList, setFilRateOcList] = useState<ProductDetail[]>(data.productDetails);
  const handled = () => {
    navigation.goBack();
  };

  const handleChangeSearchInput = (text: string) => {
    if (text.length > 3) {
      setFilRateSearchCharacters(text);
      const list = data.productDetails.filter((item) =>
        item.description.includes(text.toUpperCase()),
      );
      setFilRateOcList(list);
      setNoResult(list.length > 0 ? false : true);
    } else {
      setFilRateSearchCharacters(text);
      setNoResult(false);
      setFilRateOcList(data.productDetails);
    }
  };
  const showFilter = () => {};

  const download = () => {};

  const goProducts = (item: ProductDetail) => {
    getDetailsProductsInfo({
      variables: {
        codigoBasis: Number(item.sku),
      },
      onCompleted: (data: TProductsDetailsData) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
        navigation.navigate('DetailsProducts', {
          product: data.getProductDetail.product,
        });
      },
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

  return (
    <>
      <HeaderDetailScreenNavigation
        title="Detalle Fill Rate"
        goBack={() => handled()}
        fontSize="16"
        touchableFunction={() => download()}
        touchableType={TouchableType.TEXT}
        touchableItemText={{ text: 'Descargar' }}
        // touchableType={TouchableType.ICON}
        // touchableItemIcon={{iconName:IconDefined.IconEye}}
      />
      <MainContainerStatic>
        <DetailsContainerData>
          <DetailsContainerItem>
            <DetailsContainerSubtitle>Fecha Emisión</DetailsContainerSubtitle>
            <DetailsContainerValue>{formatDateCompileString(data.emission)}</DetailsContainerValue>
          </DetailsContainerItem>
          <DetailsContainerItem>
            <DetailsContainerSubtitle>Fecha Vencimiento</DetailsContainerSubtitle>
            <DetailsContainerValue>{formatDateCompileString(data.vcto)}</DetailsContainerValue>
          </DetailsContainerItem>
          <DetailsContainerItem>
            <DetailsContainerSubtitle>N° OC</DetailsContainerSubtitle>
            <DetailsContainerValue>{data.oc}</DetailsContainerValue>
          </DetailsContainerItem>
          <DetailsContainerItem>
            <DetailsContainerSubtitle>Cliente</DetailsContainerSubtitle>
            <DetailsContainerValue>
              {salesFloor.csalaSupermercado.trimStart().trimEnd()}
            </DetailsContainerValue>
          </DetailsContainerItem>
          <DetailsContainerItem>
            <DetailsContainerSubtitle>Motivos de no entrega</DetailsContainerSubtitle>
            <DetailsContainerValue>{data.qtyReasonForNonDelivery}</DetailsContainerValue>
          </DetailsContainerItem>
        </DetailsContainerData>
        <SearchInput
          placeholder="Búsqueda de productos..."
          value={filRateSearchCharacters}
          onSearch={(text) => handleChangeSearchInput(text)}
          showFilter
          onFilter={showFilter}
        />
        {noResult ? (
          <NoResults icon={<EmptyImageSadFace />}>
            <TextNoResults textImportant>Búsqueda sin coincidencias</TextNoResults>
            <TextNoResults> Inténtalo nuevamente</TextNoResults>
          </NoResults>
        ) : (
          <ContainerResult style={{ marginTop: 20 }}>
            {loadingProductDetail && <LoaderChangeScreen bottom={50} />}
            <FlatList
              data={filRateOcList}
              renderItem={({ item }) => {
                return (
                  <FillRateDetailsOrderCard
                    params={{ item: item }}
                    onNext={() => goProducts(item)}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
          </ContainerResult>
        )}
      </MainContainerStatic>
    </>
  );
};

export default WithApollo(FillRateDetail);
