import { useLazyQuery } from '@apollo/client';

import WithApollo from '@components/hocs/WithApollo';
import getFormatByCategories from '@graphql/queries/getFormatByCatagories';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { TitleCadena } from '@screens/AvailalbleCatalog/Styles';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { dateFormatter } from '@utils/formatDate';
import { getImageForSalesFloor } from '@utils/imageSalesFloor';
import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import {
  CatalogParamList,
  Format,
  GetFormatByCategoriesData,
  GetFormatsByCategoriesData,
  TFormato,
} from 'types/catalogs';
import { TitleNombreCatalogo } from './Styles';
import { ContainerScreen } from '@styles/sharedStyles';
import { FlatList } from 'react-native-gesture-handler';
import { CardPacking } from '@components/CardPacking/CardPacking';
import { ContainerLoader, Loader, LoaderView } from '@screens/orders/styles';
type Props = StackScreenProps<CatalogParamList, 'DetailsPacking'>;

const DetailsPacking = ({ route }: Props) => {
  const navigation = useNavigation<StackNavigationProp<CatalogParamList>>();
  const { idCatalogue, bandera, categoria } = route?.params ?? {};
  const [catalogue, setCatalogue] = useState<GetFormatsByCategoriesData>();

  const [getCatalogsByCategories, { loading: loading }] = useLazyQuery(getFormatByCategories, {
    fetchPolicy: 'network-only',
    onCompleted: (result: GetFormatByCategoriesData) => {
      setCatalogue(result.getFormatsByCategories.data);
    },
  });
  const handleDetails = (packing: Format, format: TFormato, category: string) => {
    navigation.navigate('ProductsList', {
      packing,
      idCatalogue,
      formato: format.formato,
      category,
    });
  };
  useEffect(() => {
    void getCatalogsByCategories({
      variables: {
        getFormatsByCategoriesInput: {
          idCatalogo: idCatalogue,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderDetailScreenNavigation
        title={`Catálogo ${categoria}`}
        goBack={() => navigation.goBack()}
      />
      {!loading && (
        <ContainerScreen style={{ paddingLeft: 0, paddingRight: 0 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F7F9FC',
              paddingVertical: 8,
              paddingHorizontal: 18,
            }}
          >
            {getImageForSalesFloor(bandera)}
            <View style={{ paddingLeft: 11 }}>
              <TitleCadena>{bandera}</TitleCadena>
              <TitleNombreCatalogo style={{ paddingTop: 6 }}>
                {catalogue?.nombreCatalogo}
              </TitleNombreCatalogo>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TitleNombreCatalogo>
                  {dateFormatter(catalogue?.fechaInicio as string)} -{' '}
                </TitleNombreCatalogo>
                <TitleNombreCatalogo>
                  {dateFormatter(catalogue?.fechaFin as string)}
                </TitleNombreCatalogo>
              </View>
            </View>
          </View>
          <FlatList
            data={catalogue?.categorias}
            renderItem={({ item }) => {
              return (
                <CardPacking
                  packing={item}
                  handleDetails={(item, format, category) => handleDetails(item, format, category)}
                />
              );
            }}
          />
        </ContainerScreen>
      )}
      {loading && (
        <ContainerLoader>
          <LoaderView>
            <Loader />
          </LoaderView>
        </ContainerLoader>
      )}
    </>
  );
};
export default WithApollo(DetailsPacking);
