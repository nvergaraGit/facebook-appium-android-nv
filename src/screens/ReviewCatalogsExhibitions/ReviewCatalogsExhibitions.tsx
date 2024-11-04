/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/unbound-method */

import React, { useCallback, useEffect, useState } from 'react';
import WithApollo from '@components/hocs/WithApollo';
import { FlatList, RefreshControl } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import {
  Loader,
  TextInfo,
  Container,
  LoaderView,
  ContainerList,
  ContainerLoader,
  ButtonTextDownload,
  ContainerButtonDownload,
  ContainerButtonCloseVisit,
} from './Styles';
import { useAppContext } from '@context/state';
import { GRAPHQL_BACKEND_URL } from '@env';
import { MMKVLoader } from 'react-native-mmkv-storage';
import DownloadTracking from '@assets/icons/download-tracking.svg';
import ReviewCatalogsExhibitionsCard from '@components/ReviewCatalogsExhibitionsCard/ReviewCatalogsExhibitionsCard';
import { fileDownloader } from '@utils/fileDownloader';
import {
  ANALITICS_ACTION_TRACKING,
  ANALITICS_ACTION_TRACKING_END_VISIT,
  ANALITICS_ACTION_TRACKING_REPORT_CATEGORY,
  ANALITICS_ACTION_TRACKING_REPORT_GENERAL,
} from '@libraries/constants';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
import {
  useFinishTrackingMutation,
  useGetStatisticsByCategoriesLazyQuery,
  GetStatisticsByCategoriesQuery,
} from '@graphql/types';
import Button from '@shared/Button';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'SalesFloorReviewCatalogsExhibitions'>;
type CategoriestList = NonNullable<
  GetStatisticsByCategoriesQuery['getStatisticsByCategories']['data']
>['categories'];
type CategoriestItem = NonNullable<CategoriestList>[0];

const ReviewCatalogsExhibitions = ({ route }: Props) => {
  const { auth } = useAppContext();
  const storage = new MMKVLoader().initialize();
  const { salesFloor, catalogsId, associatedName } = route?.params ?? {};
  const [finished, setFinished] = useState<boolean>(false);
  const [categories, setCategories] = useState<CategoriestList>([]);
  const [loadingDownload, setLoadingDownload] = useState<boolean>(false);
  const [finishedAproved, setFinishedfinishedAproved] = useState<boolean>(false);
  const [associatedNameValue, setAssociatedNameValue] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const trackingId = storage.getString('trackingId');
  const [setFinishTrackingMutation] = useFinishTrackingMutation({
    fetchPolicy: 'network-only',
  });
  const [getStatisticsByCategoriesQuery, { loading, refetch }] =
    useGetStatisticsByCategoriesLazyQuery({
      fetchPolicy: 'network-only',
      onCompleted: (result) => {
        if (!result.getStatisticsByCategories?.data?.categories) {
          return;
        }
        setCategories(result.getStatisticsByCategories.data.categories);
        const dataArray = result.getStatisticsByCategories.data.categories;
        const allFinalizedAproved =
          Array.isArray(dataArray) &&
          dataArray.every((item) => item.statusCategory === 'FINALIZADO');
        setFinishedfinishedAproved(allFinalizedAproved);
        const allFinalized =
          Array.isArray(dataArray) &&
          dataArray.every((item) => item.statusCategory === 'FINALIZADO') &&
          dataArray.some((item) => (item.qtyFormatsCommented || 0) > 0);
        setFinished(allFinalized);
      },
    });

  useFocusEffect(
    useCallback(() => {
      getStatisticsByCategoriesQuery({
        variables: {
          getStatisticsByCategoriesInput: {
            clientId: salesFloor.codClient.toString(),
            catalogoId: catalogsId,
          },
        },
      });
    }, []),
  );

  useEffect(() => {
    if (associatedName) {
      setAssociatedNameValue(associatedName);
    }
  }, [associatedName]);

  const navigateToReview = (item: CategoriestItem): void => {
    if (item.nameCategory) {
      navigation.navigate('SalesFloorReviewCatalogsExhibitionsEvaluate', {
        categoryName: item.nameCategory,
        salesFloor,
        catalogsId,
      });
    }
  };

  const downloadFile = async (nameCategory: string) => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_ACTION_TRACKING,
      ANALITICS_ACTION_TRACKING_REPORT_CATEGORY,
      auth,
    );
    const urlBackend = GRAPHQL_BACKEND_URL;
    const urlDomain = urlBackend?.split('/graphql')[0];
    const urlDownload = `${urlDomain}/product/tracking-report?trackingId=${trackingId}&category=${nameCategory}&executive=${
      auth?.name as string
    }&catalogueId=${catalogsId || 'null'}`;
    setLoadingDownload(true);
    await fileDownloader(urlDownload, `Tracking ${nameCategory}.pdf`);
    setLoadingDownload(false);
  };

  const downloadGeneralFile = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_ACTION_TRACKING,
      ANALITICS_ACTION_TRACKING_REPORT_GENERAL,
      auth,
    );
    const urlBackend = GRAPHQL_BACKEND_URL;
    const urlDomain = urlBackend?.split('/graphql')[0];
    const urlDownload = `${urlDomain}/product/tracking-report?trackingId=${trackingId}&executive=${
      auth?.name as string
    }&catalogueId=${catalogsId || 'null'}`;
    setLoadingDownload(true);
    fileDownloader(urlDownload, 'Tracking General.pdf').then(() => {
      setLoadingDownload(false);
    });
  };

  const onRefresh = React.useCallback(() => {
    refetch();
  }, []);

  const finishVisit = () => {
    if (!trackingId) {
      return;
    }
    registerFirebaseAnaliticsEvent(
      ANALITICS_ACTION_TRACKING,
      ANALITICS_ACTION_TRACKING_END_VISIT,
      auth,
    );
    setFinishTrackingMutation({
      variables: {
        finishTrackingInput: {
          clientCode: salesFloor.codClient.toString(),
          trackingId: parseInt(trackingId),
        },
      },
      onCompleted: () => {
        storage.removeItem('visitState');
        navigation.navigate('Details', { salesFloor, finishTrackingState: true });
      },
      onError: (error) => {
        console.log('Error', error);
      },
    });
  };

  return (
    <Container>
      <HeaderDetailScreenNavigation
        title={`Revisión ${associatedNameValue}`}
        goBack={() => navigation.goBack()}
      />
      {loading || loadingDownload ? (
        <ContainerLoader>
          <LoaderView>
            <Loader />
          </LoaderView>
        </ContainerLoader>
      ) : (
        <ContainerList>
          <TextInfo>Realiza la revisión de los catálogos y exhibiciones de esta sala.</TextInfo>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <ReviewCatalogsExhibitionsCard
                handlePress={(item) => downloadFile(item)}
                goToReview={(item) => navigateToReview(item)}
                exhibitions={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
          />
          {finished && (
            <ContainerButtonDownload onPress={() => downloadGeneralFile()}>
              <ButtonTextDownload>
                <DownloadTracking /> Descargar informe {associatedNameValue}
              </ButtonTextDownload>
            </ContainerButtonDownload>
          )}
        </ContainerList>
      )}
      {finishedAproved && !catalogsId && (
        <ContainerButtonCloseVisit>
          <Button onPress={finishVisit} border="square" variant="solid">
            Cerrar visita
          </Button>
        </ContainerButtonCloseVisit>
      )}
    </Container>
  );
};

export default WithApollo(ReviewCatalogsExhibitions);
