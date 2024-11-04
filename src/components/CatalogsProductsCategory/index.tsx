/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useLazyQuery } from '@apollo/client';
import getCatalogDetails from '@graphql/queries/getCatalogsDetails';
import { CatalogDetailResponse, CatalogSalesStackParamList, Format } from 'types/catalogs';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import ListName from '@shared/ListNameDate';
import { ListContainer, MainContainer } from './syles';
import CatalogProductCategoryCard from '@components/CatalogProductCategoryCard';
import { dateFormatter } from '../../utils/formatDate';
import WithApollo from '@components/hocs/WithApollo';
import { CatalogDetailRoute } from '../../libraries/constants';
type Props = StackScreenProps<CatalogSalesStackParamList, 'ProductsCategory'>;

const ProductsCategory = ({ route }: Props) => {
  const { nameCategory, formats } = route.params.item;
  const formatArrayLevel = formats?.map((item: any) =>
    item.data.map((innerItem: any) => ({ ...innerItem, formato: item.formato })),
  );
  const formatArray = formatArrayLevel?.flatMap((item) => item);
  const { endDate, listName, startDate, id } = route.params.listItem;
  const navigation = useNavigation<StackNavigationProp<CatalogSalesStackParamList>>();
  const [getCatalogDetailsInfo, { loading: loadingDetails }] = useLazyQuery(getCatalogDetails, {
    fetchPolicy: 'no-cache',
  });

  const handled = () => {
    navigation.goBack();
  };
  const goFormatDetails = (item: Format) => {
    const itemSend = { ...item, id };
    getCatalogDetailsInfo({
      variables: {
        getCatalogueDetailsInput: {
          catalogueId: itemSend.id,
          mecanica: itemSend.mecanica,
          patron: itemSend.patron,
          formato: itemSend.formato,
        },
      },
      onCompleted: (data: CatalogDetailResponse) => {
        const { catalogueDetails, catalogueProducts } = data.getCatalogueDetails.data;
        const catalogNewDetails = {
          ...catalogueDetails,
          routeType: CatalogDetailRoute.SALES,
        };
        navigation.navigate('DetailsCatalog', {
          catalogDetailsInfo: {
            catalogueDetails: catalogNewDetails,
            catalogueProducts,
            categoryName: nameCategory,
          },
        });
      },
    });
  };

  return (
    <>
      <HeaderDetailScreenNavigation title={nameCategory} goBack={() => handled()} />
      <MainContainer>
        <ListName
          listName={listName}
          startDate={dateFormatter(startDate)}
          endDate={dateFormatter(endDate)}
        />
        <ListContainer>
          {loadingDetails && (
            <View
              style={{
                position: 'absolute',
                left: '45%',
                bottom: '30%',
                zIndex: 9,
                elevation: 9,
              }}
            >
              <ActivityIndicator size="large" color="red" />
            </View>
          )}
          <FlatList
            data={formatArray}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <CatalogProductCategoryCard catalogs={item} onNext={() => goFormatDetails(item)} />
            )}
          ></FlatList>
        </ListContainer>
      </MainContainer>
    </>
  );
};

export default WithApollo(ProductsCategory);
