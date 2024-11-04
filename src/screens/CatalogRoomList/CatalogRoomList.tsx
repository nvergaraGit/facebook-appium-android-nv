import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { StackScreenProps } from '@react-navigation/stack';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
import {
  GetCataloguesDataPayload,
  useFinishTrackingMutation,
  useGetTrackingCataloguesLazyQuery,
  useGetCustomersLazyQuery,
  GetCustomersQuery,
} from '@graphql/types';
import {
  ANALITICS_ACTION_TRACKING,
  ANALITICS_ACTION_TRACKING_END_VISIT,
} from '@libraries/constants';
import { useAppContext } from '@context/state';
import CatalogueCatagory from '@components/CatalogueCatagory';
import CatalogsListHeader from '@components/CatalogListHeader';
import Button from '@shared/Button';
import Icon from '@assets/icons/download-tracking.svg';
import {
  CatalogRoomContent,
  CatalogRoomDescription,
  CatalogRoomListContainer,
  CatalogRoomBottonContainer,
  CatalogRoomFlatListContainer,
  CatalogButtonActionsContainer,
} from './styles';
import WithApollo from '@components/hocs/WithApollo';
import { TSalesFloor } from 'types/salesFloors';
import { useTrackingPDFDownload } from '@hooks/useTrackingPDFDownload';
import { LoaderWrapper } from '@shared/LoaderWrapper/LoaderWrapper';

type CatalogRoomListProps = StackScreenProps<SalesFloorsDetailsStack, 'CatalogRoomList'>;

const CatalogRoomList: React.FC<CatalogRoomListProps> = ({ navigation, route }) => {
  const { salesFloor: salesFloorParam } = route.params;
  const storage = new MMKVLoader().initialize();
  const trackingId = storage.getString('trackingId');
  const { auth } = useAppContext();
  const [salesFloor, setSalesFloor] = useState<GetCustomersQuery['customers']['customers'][0]>();
  const [isAllCategoriesCompleted, setCategoriesCompleted] = useState(false);
  const [isFetchingData, setFechinData] = useState(true);
  const [setFinishTrackingMutation] = useFinishTrackingMutation();
  const [getTrackingCatalogue, { data }] = useGetTrackingCataloguesLazyQuery({
    onCompleted: (response) => {
      const catalogList = response.getTrackingCatalogues.data?.cataloguesList;
      const isCompleted =
        Array.isArray(catalogList) && catalogList.every((item) => item.status === 'FINALIZADO');
      setCategoriesCompleted(isCompleted);
      setFechinData(false);
    },
    onError: () => {
      setFechinData(false);
    },
  });
  const [getSalesFloorInfo] = useGetCustomersLazyQuery({
    onCompleted: (res) => {
      //TODO we need fix params types the code client come like a number and not like a string
      const currentRoom = res.customers.customers.find(
        (item) => item.codClient === (salesFloorParam.codClient as unknown as number),
      );
      setSalesFloor(currentRoom);
    },
  });
  const { downloadTrackingPDFFile, loading: isDownloadingDocument } = useTrackingPDFDownload();
  const isReportAvailable = data?.getTrackingCatalogues.data?.reportAvailable;
  const isActionsAvailble = isReportAvailable || isAllCategoriesCompleted;

  useEffect(() => {
    void getSalesFloorInfo({
      variables: {
        pagination: {
          page: 1,
          size: 200,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (salesFloor) {
        void getTrackingCatalogue({
          fetchPolicy: 'network-only',
          variables: {
            getTrackingCataloguesInput: {
              clientId: salesFloor.codClient.toString(),
              bandera: salesFloor.dcadena,
            },
          },
        });
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [salesFloor]),
  );

  const downloadGeneralFile = () => {
    const trackingId = storage.getString('trackingId');
    if (trackingId && auth?.name) {
      downloadTrackingPDFFile({
        fileName: `informe-general-sala-${salesFloor?.codClient || ''}.pdf`,
        queries: {
          trackingId,
          executive: auth?.name,
        },
      });
    }
  };

  const finishVisitHandler = (): void => {
    if (trackingId && salesFloor) {
      registerFirebaseAnaliticsEvent(
        ANALITICS_ACTION_TRACKING,
        ANALITICS_ACTION_TRACKING_END_VISIT,
        auth,
      );
      void setFinishTrackingMutation({
        variables: {
          finishTrackingInput: {
            clientCode: salesFloor.codClient.toString(),
            trackingId: parseInt(trackingId),
          },
        },
        onCompleted: () => {
          storage.removeItem('visitState');
          navigation.navigate('Details', {
            salesFloor: salesFloor as unknown as TSalesFloor,
            finishTrackingState: true,
          });
        },
        onError: () => {
          console.log('Error finishVisitHandler');
        },
      });
    }
  };

  const onRedirectToReviewCatalogs = useCallback(
    (catalogs: GetCataloguesDataPayload) => {
      if (!catalogs.id || !salesFloor) {
        return;
      }
      navigation.navigate('SalesFloorReviewCatalogsExhibitions', {
        salesFloor: salesFloor as unknown as TSalesFloor,
        catalogsId: catalogs.id,
        associatedName: catalogs.categoria || '',
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [salesFloor],
  );

  return (
    <CatalogRoomListContainer>
      {(isFetchingData || isDownloadingDocument) && <LoaderWrapper />}
      <View style={{ height: '10%' }}>
        <HeaderDetailScreenNavigation title="Revisión" goBack={navigation.goBack} />
      </View>
      <CatalogRoomContent style={{ justifyContent: 'space-between' }}>
        <View style={{ ...(isActionsAvailble ? { height: '83%' } : {}) }}>
          <CatalogRoomDescription>
            Realiza la revisión de los catálogos y exhibiciones de acuerdo a las categorías de los
            catálogos mensuales.
          </CatalogRoomDescription>
          <CatalogRoomFlatListContainer style={{ marginTop: 12 }}>
            <CatalogsListHeader
              catalogo={salesFloor?.dcadena || ''}
              startDate={moment().format('MMMM YYYY')}
              count={data?.getTrackingCatalogues.data?.cataloguesList?.length || 0}
            />
            <FlatList
              contentContainerStyle={{ paddingBottom: 12 }}
              data={data?.getTrackingCatalogues.data?.cataloguesList}
              keyExtractor={(item) => `${item.catalogueInfo?.id as number}`}
              renderItem={({ item }) => (
                <CatalogueCatagory
                  handleDetails={onRedirectToReviewCatalogs}
                  status={item.status}
                  catalogs={item.catalogueInfo as unknown as GetCataloguesDataPayload}
                />
              )}
            />
          </CatalogRoomFlatListContainer>
        </View>
      </CatalogRoomContent>
      {isActionsAvailble && (
        <CatalogButtonActionsContainer>
          {isReportAvailable && isAllCategoriesCompleted ? (
            <CatalogRoomBottonContainer>
              <Button
                onPress={downloadGeneralFile}
                leftIcon={<Icon />}
                border="rounded"
                variant="outline"
              >
                Descargar informe General
              </Button>
            </CatalogRoomBottonContainer>
          ) : null}
          {isAllCategoriesCompleted ? (
            <CatalogRoomBottonContainer showTopDivider>
              <Button onPress={finishVisitHandler} border="square" variant="solid">
                Cerrar visita
              </Button>
            </CatalogRoomBottonContainer>
          ) : null}
        </CatalogButtonActionsContainer>
      )}
    </CatalogRoomListContainer>
  );
};

export default WithApollo(CatalogRoomList);
