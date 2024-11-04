/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StatusBar, View, RefreshControl } from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useLazyQuery, useMutation } from '@apollo/client';
import getCademB2B from '@graphql/queries/getCademB2B';
import initTracking from '@graphql/mutations/initTracking';
import getCustomerSummaryInfo from '@graphql/queries/getCustomerSummaryInfo';
import getTrackingActive from '@graphql/queries/getTrackingActive';
import IconBackArrow from '@assets/icons/back-arrow.svg';
import IconCatalog from '@assets/icons/catalog-icon.svg';
import IconCF from '@assets/icons/cf-icon.svg';
import IconExhibition from '@assets/icons/exhibitions-icon.svg';
import IconIndicadores from '@assets/icons/Indicadores.svg';
import DownloadReports from '@assets/icons/DownloadReports.svg';
import IconB2B from '@assets/icons/b2b-icon.svg';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import IconView from '@assets/icons/icon-view-sales.svg';
import IconOC from '@assets/icons/oc-icon.svg';
import WarningVisit from '@assets/icons/warning-visit-initiate.svg';
import { MMKVLoader } from 'react-native-mmkv-storage';
import FinishModal from '@components/FinishModalVisit/FinishModalVisit';
import BottomSheetModal from '@components/BottomSheetModal/BottomSheetModal';
import ViewSalesFloor from '@components/ViewSalesFloor/ViewSalesFloor';
import StartModalVisit from '@components/StartModalVisit/StartModalVisit';
import VisitInitiateModal from '@components/visitInitiateModal/visitInitiateModal';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { CademB2BData, CademB2BResponse } from 'types/b2b';
import GetTrackingReports from '@graphql/queries/getTrackingReports';
import { TrackingResponse, TrackingItem } from 'types/visitTrackin';
import {
  Container,
  ContainerTotal,
  DetailsSalesFloorBody,
  DetailsSalesFloorButtonBack,
  DetailsSalesFloorContainer,
  DetailsSalesFloorContainerBackButton,
  DetailsSalesFloorHeader,
  DetailsSalesFloorHeaderTitle,
  DetailsSalesFloorProductTitle,
  DetailsSalesFloorSerialText,
  DetailsSalesFloorViewContainer,
  DetailsSalesFloorVisitButton,
  DetailsSalesFloorVisitButtonText,
  DetailsSalesFloorContainerVisitButton,
  IconContainer,
  OrdersByDay,
  OrdersByDayCard,
  OrdersByDayImage,
  OrdersByDayText,
  OrdersByDayTitle,
  ProductsCardButton,
  TitleOrders,
  SubtitleOrder,
  ContainerTitles,
  DetailsSalesFloorVisitButtonFinish,
  DetailsSalesFloorNoticeVisitStartedText,
  DetailsSalesFloorNoticeVisitStartedTitle,
  DetailsSalesFloorNoticeVisitStartedHeader,
  DetailsSalesFloorNoticeVisitStartedContainer,
} from './styles';
import moment from 'moment';
import {
  TDetailsSalesFloorCard,
  TSalesFloor,
  TTItemsSalesFloorQuery,
  TSalesFloorCode,
} from 'types/salesFloors';
import WithApollo from '@components/hocs/WithApollo';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import { useAppContext } from '@context/state';
import {
  ANALITICS_ACTION_HOME_SF_WITH_OC,
  ANALITICS_ACTION_SALES_FLOOR_CATALOGS,
  ANALITICS_ACTION_SALES_FLOOR_EXHIBITIONS,
  ANALITICS_ACTION_SALES_FLOOR_INVOICED_OC,
  ANALITICS_CATEGORY_SALES_FLOOR,
  ANALITICS_ACTION_SALES_FLOOR_B2B,
  ANALITICS_ACTION_SALES_FLOOR_INDICATORS,
  ANALITICS_ACTION_TRACKING,
  ANALITICS_ACTION_TRACKING_REPORT_VISITS_SECTION,
  ANALITICS_ACTION_TRACKING_START_VISIT,
} from '@libraries/constants';
import dayjs from 'dayjs';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
import { useGeolocation } from '@hooks/userGeolocation';
import Error from '@components/ModalApp/ModaApp';
import { GeolocationResponse } from '@react-native-community/geolocation';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'Details'>;

const DetailsSalesFloor = ({ route }: Props) => {
  const storage = new MMKVLoader().initialize();
  const { salesFloor } = route.params;
  const [isVisible, setIsVisible] = useState(false);
  const [activeVisit, setActiveVisit] = useState(false);
  const [isVisitVisible, setIsVisitVisible] = useState(false);
  const [isVisitInitiate, setIsVisitInitiate] = useState(false);
  const [finishVisitModal, setFinishVisitModal] = useState(false);
  const [isRequiredLocationPermissions, setRequiredLocationPermissions] = useState(false);
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [b2BData, setB2BData] = useState<CademB2BData | undefined>(undefined);
  const { setModalInternetConnection, isInternet, auth } = useAppContext();
  const [codSalesFloor, setCodeSalesFloor] = useState<string>('');
  const [codeVisitInit, setCodeVisitInit] = useState<string>('');
  const [nameVisitInit, setNameVisitInit] = useState<string>('');
  const today = dayjs();
  const monday = today.startOf('week').add(1, 'day').format('YYYY-MM-DD');
  const [salesFloorVisitInit, setSalesFloorVisitInit] = useState<TSalesFloorCode>();
  const [itemSalesFloor, setItemSalesFloor] = useState<TDetailsSalesFloorCard>();
  const [reportsData, setReportsData] = useState<TrackingItem[]>([]);
  const [finishVisit, setFinishVisit] = useState<boolean>();
  const { getCurrentLocation } = useGeolocation();

  const handleBack = () => {
    navigation.goBack();
  };
  const [getCademB2BInfoQuery, { loading: loadingB2BInfo }] = useLazyQuery(getCademB2B, {
    fetchPolicy: 'network-only',
  });

  const [getCustomerInfoQuery, { loading: loadingCustomerInfo }] = useLazyQuery(
    getCustomerSummaryInfo,
    {
      fetchPolicy: 'network-only',
    },
  );

  const [getTrackingInfo] = useLazyQuery(getTrackingActive, {
    fetchPolicy: 'network-only',
  });

  const [setInitTrackingMutation] = useMutation(initTracking, {
    fetchPolicy: 'network-only',
  });

  const [GetTrackingReportsQuery] = useLazyQuery(GetTrackingReports, {
    fetchPolicy: 'network-only',
  });

  const goRouteOrderSalesFloor = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_HOME_SF_WITH_OC,
      auth,
    );
    navigation.navigate('OrdersSalesFloor', {
      salesFloor: salesFloor as TSalesFloor,
    });
  };
  const goRouteCatalogs = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_SALES_FLOOR_CATALOGS,
      auth,
    );
    navigation.navigate('DetailsCatalogue', {
      catalogue: salesFloor.dcadena,
    });
  };
  const goRouteExhibitions = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_SALES_FLOOR_EXHIBITIONS,
      auth,
    );
    navigation.navigate('Exhibitions', {
      salesFloor: salesFloor as TSalesFloor,
    });
  };
  const goRouteB2B = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_SALES_FLOOR_B2B,
      auth,
    );
    navigation.navigate('B2B', {
      b2bInfo: b2BData as CademB2BData,
    });
  };
  const goToOrderPresale = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_SALES_FLOOR_INVOICED_OC,
      auth,
    );
    navigation.navigate('OrderPresale', {
      salesFloor: salesFloor as TSalesFloor,
    });
  };

  const goToIndicator = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_SALES_FLOOR_INDICATORS,
      auth,
    );
    navigation.navigate('Indicators', {
      salesFloor: salesFloor as TSalesFloor,
    });
  };

  const goToDownloadReports = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_ACTION_TRACKING,
      ANALITICS_ACTION_TRACKING_REPORT_VISITS_SECTION,
      auth,
    );
    navigation.navigate('DownloadReports', {
      reportsData: reportsData,
    });
  };

  const goToSalesFloorVisit = (): void => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_SALES_FLOOR_INDICATORS,
      auth,
    );
    navigation.navigate('SalesFloorVisit', {
      salesFloor: salesFloor as TSalesFloor,
    });
  };

  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }

    getCademB2BInfoQuery({
      variables: {
        getCademB2BInput: {
          filters: {
            sCodEmbonor: codeVisitInit === '' ? salesFloor.codClient.toString() : codeVisitInit,
            termino: today.format('YYYY-MM-DD'),
            inicio: monday,
          },
        },
      },
      onCompleted: (data: CademB2BResponse) => {
        setB2BData(data.getCademB2B.data);
      },
    });

    getCustomerInfoQuery({
      variables: {
        customerInput: {
          codClient: codeVisitInit === '' ? salesFloor.codClient.toString() : codeVisitInit,
          date: moment().format('YYYYMMDD'),
        },
      },
      onCompleted: (result: TTItemsSalesFloorQuery) => {
        setItemSalesFloor(result.getCustomerSummaryInfo);
      },
    });

    getTrackingInfo({
      variables: {
        getTrackingActiveInput: {
          clientId: codeVisitInit === '' ? salesFloor.codClient.toString() : codeVisitInit,
        },
      },
      onCompleted: (result: TrackingResponse) => {
        setActiveVisit(result.getTrackingActive.data.status.id === 1 ? true : false);
        setFinishVisit(result.getTrackingActive.data.status.id === 2 ? true : false);
        if (result.getTrackingActive.data.trackingId) {
          if (result.getTrackingActive.data.reviews[0].catalogoId)
            storage.setString('trackingId', result.getTrackingActive.data.trackingId.toString());
        }
      },
    });

    GetTrackingReportsQuery({
      variables: {
        getTrackingReportsInput: {
          clientCode: salesFloor.codClient.toString(),
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onCompleted: (result: any) => {
        setReportsData(result.getTrackingReports.data);
      },
    }).catch((err) => console.log(err));
  }, [refreshing, codeVisitInit]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

  const GoToVisitModal = async (): Promise<void> => {
    setIsVisitVisible(!isVisitVisible);
    let coordinates: GeolocationResponse['coords'];
    try {
      coordinates = await getCurrentLocation();
    } catch (error) {
      console.log('errror', error);
      setRequiredLocationPermissions(true);
      return;
    }
    setInitTrackingMutation({
      variables: {
        initTrackingInput: {
          clientCode: codeVisitInit === '' ? salesFloor.codClient.toString() : codeVisitInit,
          email: auth?.username,
          geolocationLat: `${coordinates.latitude}`,
          geolocationLon: `${coordinates.longitude}`,
        },
      },
      onCompleted: (result) => {
        if (result.initTracking.response.statusCode === 1) {
          const message = result.initTracking.response.message;
          const regex = /sala (\d+)/;
          const match = message.match(regex);

          if (match && match[1]) {
            const salesFloorNumber = match[1];
            setSalesFloorVisitInit({ codClient: salesFloorNumber });
            setCodeSalesFloor(salesFloorNumber);
            setIsVisitInitiate(true);
          } else {
            console.log('No se encontró el número de sala en el mensaje');
          }
        } else {
          storage.setString('nameSalesFloor', salesFloor.csalaSupermercado);
          registerFirebaseAnaliticsEvent(
            ANALITICS_ACTION_TRACKING,
            ANALITICS_ACTION_TRACKING_START_VISIT,
            auth,
          );
          goToSalesFloorVisit();
        }
      },
    });
  };

  useEffect(() => {
    const { finishTrackingState } = route.params;

    if (finishTrackingState) {
      setFinishVisitModal(true);
    }
  }, [route.params]);

  const handlerRequiredPermisaionsModal = (): void => {
    setRequiredLocationPermissions((state) => !state);
  };

  const validateSalesFloorVisitInit = (code: string) => {
    setIsVisitInitiate(false);
    setSalesFloorVisitInit({ codClient: code.toString() });
    setCodeVisitInit(code.toString());
    setNameVisitInit(storage.getString('nameSalesFloor'));
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {isRequiredLocationPermissions && (
        <BottomSheetModal isVisible={isRequiredLocationPermissions} setIsVisible={setIsVisible}>
          <Error
            icon={<WarningVisit />}
            title="Permisos Requerido"
            description="Se requieren permisos de localizacion para inicar la visita."
            textButton="Cerrar"
            onPress={handlerRequiredPermisaionsModal}
          />
        </BottomSheetModal>
      )}
      {isVisible && (
        <BottomSheetModal isVisible={isVisible} setIsVisible={setIsVisible}>
          <ViewSalesFloor salesFloor={salesFloor as TSalesFloor} />
        </BottomSheetModal>
      )}
      {isVisitVisible && (
        <BottomSheetModal isVisible={isVisitVisible} setIsVisible={setIsVisitVisible}>
          <StartModalVisit onPress={GoToVisitModal} />
        </BottomSheetModal>
      )}
      {isVisitInitiate && (
        <BottomSheetModal isVisible={isVisitInitiate} setIsVisible={setIsVisitInitiate}>
          <VisitInitiateModal
            code={codSalesFloor}
            name={storage.getString('nameSalesFloor')}
            refreshSalesFloor={(code: string) => validateSalesFloorVisitInit(code)}
            onPress={() => setIsVisitInitiate(false)}
          />
        </BottomSheetModal>
      )}
      <DetailsSalesFloorContainer>
        {(loadingCustomerInfo || refreshing || loadingB2BInfo) && isInternet ? (
          <LoaderFullScreen />
        ) : (
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            <DetailsSalesFloorHeader>
              <DetailsSalesFloorContainerBackButton>
                <DetailsSalesFloorButtonBack onPress={handleBack}>
                  <IconBackArrow />
                </DetailsSalesFloorButtonBack>
                <DetailsSalesFloorHeaderTitle>Detalle de la sala</DetailsSalesFloorHeaderTitle>
              </DetailsSalesFloorContainerBackButton>
              <DetailsSalesFloorViewContainer onPress={() => setIsVisible(true)}>
                <IconView />
              </DetailsSalesFloorViewContainer>
            </DetailsSalesFloorHeader>
            {finishVisit && (
              <DetailsSalesFloorNoticeVisitStartedContainer>
                <DetailsSalesFloorNoticeVisitStartedHeader>
                  <WarningVisit />
                  <DetailsSalesFloorNoticeVisitStartedTitle>
                    ¡Ya tienes una visita completada!
                  </DetailsSalesFloorNoticeVisitStartedTitle>
                </DetailsSalesFloorNoticeVisitStartedHeader>
                <DetailsSalesFloorNoticeVisitStartedText>
                  Para completar otra visita a la sala deberás esperar al día de mañana.
                </DetailsSalesFloorNoticeVisitStartedText>
              </DetailsSalesFloorNoticeVisitStartedContainer>
            )}
            <DetailsSalesFloorBody>
              <DetailsSalesFloorContainerBackButton>
                <DetailsSalesFloorSerialText textImportant>Código:</DetailsSalesFloorSerialText>
                <DetailsSalesFloorSerialText>
                  {codeVisitInit === '' ? salesFloor.codClient : codeVisitInit}
                </DetailsSalesFloorSerialText>
              </DetailsSalesFloorContainerBackButton>
              <DetailsSalesFloorProductTitle>
                {nameVisitInit === '' ? salesFloor.csalaSupermercado : nameVisitInit}
              </DetailsSalesFloorProductTitle>
              <>
                <OrdersByDay>
                  <OrdersByDayCard
                    disabled={itemSalesFloor?.totalOrders === 0}
                    onPress={goRouteOrderSalesFloor}
                  >
                    <OrdersByDayImage>
                      <IconCF />
                    </OrdersByDayImage>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                      <OrdersByDayTitle>{itemSalesFloor?.totalOrders} OCs</OrdersByDayTitle>
                      <OrdersByDayText>OCs del día</OrdersByDayText>
                    </View>
                  </OrdersByDayCard>

                  <OrdersByDayCard
                    onPress={goToOrderPresale}
                    disabled={itemSalesFloor?.totalInvoices === 0}
                  >
                    <OrdersByDayImage>
                      <IconOC />
                    </OrdersByDayImage>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                      <OrdersByDayTitle>{itemSalesFloor?.totalInvoices} CF</OrdersByDayTitle>
                      <OrdersByDayText>OCs Facturadas</OrdersByDayText>
                    </View>
                  </OrdersByDayCard>
                </OrdersByDay>

                <TouchableWithoutFeedback
                  onPress={goRouteCatalogs}
                  disabled={itemSalesFloor?.totalCatalogs === 0}
                >
                  <Container>
                    <IconContainer>
                      <IconCatalog />
                      <TitleOrders isImportant>Catálogos</TitleOrders>
                    </IconContainer>
                    <ContainerTotal>
                      <TitleOrders>
                        Total:{' '}
                        <TitleOrders isImportant>{itemSalesFloor?.totalCatalogs}</TitleOrders>
                      </TitleOrders>
                      <ProductsCardButton
                        disabled={itemSalesFloor?.totalCatalogs === 0}
                        onPress={goRouteCatalogs}
                        isImportant={itemSalesFloor?.totalCatalogs === 0}
                      >
                        {itemSalesFloor?.totalCatalogs !== 0 && <IconRightArrow />}
                      </ProductsCardButton>
                    </ContainerTotal>
                  </Container>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={goRouteExhibitions}
                  disabled={itemSalesFloor?.totalExhibitions === 0}
                >
                  <Container>
                    <IconContainer>
                      <IconExhibition />
                      <TitleOrders isImportant>Exhibiciones</TitleOrders>
                    </IconContainer>
                    <ContainerTotal>
                      <TitleOrders>
                        Total:{' '}
                        <TitleOrders isImportant>{itemSalesFloor?.totalExhibitions}</TitleOrders>
                      </TitleOrders>
                      <ProductsCardButton
                        disabled={itemSalesFloor?.totalExhibitions === 0}
                        onPress={goRouteExhibitions}
                        isImportant={itemSalesFloor?.totalExhibitions === 0}
                      >
                        {itemSalesFloor?.totalExhibitions !== 0 && <IconRightArrow />}
                      </ProductsCardButton>
                    </ContainerTotal>
                  </Container>
                </TouchableWithoutFeedback>
                {b2BData && (b2BData.stockFantasma.length > 0 || b2BData.ventaCero.length > 0) && (
                  <TouchableWithoutFeedback onPress={goRouteB2B}>
                    <Container>
                      <IconContainer>
                        <IconB2B />
                        <ContainerTitles>
                          <TitleOrders isImportant>Información B2B</TitleOrders>
                          <SubtitleOrder>Actualizado: {dayjs().format('DD/MM/YY')}</SubtitleOrder>
                        </ContainerTitles>
                      </IconContainer>
                      <ContainerTotal>
                        <ProductsCardButton onPress={goRouteB2B}>
                          <IconRightArrow />
                        </ProductsCardButton>
                      </ContainerTotal>
                    </Container>
                  </TouchableWithoutFeedback>
                )}
                <TouchableWithoutFeedback onPress={goToIndicator}>
                  <Container>
                    <IconContainer>
                      <IconIndicadores />
                      <ContainerTitles>
                        <TitleOrders isImportant>Indicadores de la sala</TitleOrders>
                        <SubtitleOrder>Actualizado: {dayjs().format('DD/MM/YY')}</SubtitleOrder>
                      </ContainerTitles>
                    </IconContainer>
                    <ContainerTotal>
                      <ProductsCardButton onPress={goToIndicator}>
                        <IconRightArrow />
                      </ProductsCardButton>
                    </ContainerTotal>
                  </Container>
                </TouchableWithoutFeedback>
                {reportsData && reportsData.length > 0 && (
                  <TouchableWithoutFeedback onPress={goToDownloadReports}>
                    <Container>
                      <IconContainer>
                        <DownloadReports />
                        <ContainerTitles>
                          <TitleOrders isImportant>Informes de visita</TitleOrders>
                        </ContainerTitles>
                      </IconContainer>
                      <ContainerTotal>
                        <ProductsCardButton onPress={goToDownloadReports}>
                          <IconRightArrow />
                        </ProductsCardButton>
                      </ContainerTotal>
                    </Container>
                  </TouchableWithoutFeedback>
                )}
              </>
            </DetailsSalesFloorBody>
            {!finishVisit && (
              <>
                {!activeVisit ? (
                  <>
                    {(itemSalesFloor?.totalCatalogs !== 0 ||
                      itemSalesFloor?.totalExhibitions !== 0) && (
                      <DetailsSalesFloorContainerVisitButton
                        onPress={() => setIsVisitVisible(!isVisitVisible)}
                      >
                        <DetailsSalesFloorVisitButton>
                          <DetailsSalesFloorVisitButtonText>
                            Iniciar visita a la sala
                          </DetailsSalesFloorVisitButtonText>
                        </DetailsSalesFloorVisitButton>
                      </DetailsSalesFloorContainerVisitButton>
                    )}
                  </>
                ) : (
                  <DetailsSalesFloorContainerVisitButton
                    onPress={() =>
                      navigation.navigate('SalesFloorVisit', {
                        salesFloor: salesFloorVisitInit
                          ? salesFloorVisitInit
                          : (salesFloor as TSalesFloor),
                      })
                    }
                  >
                    <DetailsSalesFloorVisitButton>
                      <DetailsSalesFloorVisitButtonText>
                        Continuar visita a la sala
                      </DetailsSalesFloorVisitButtonText>
                    </DetailsSalesFloorVisitButton>
                  </DetailsSalesFloorContainerVisitButton>
                )}
              </>
            )}
            {finishVisit && (
              <DetailsSalesFloorContainerVisitButton disabled>
                <DetailsSalesFloorVisitButtonFinish>
                  <DetailsSalesFloorVisitButtonText>
                    No puedes iniciar una visita ahora
                  </DetailsSalesFloorVisitButtonText>
                </DetailsSalesFloorVisitButtonFinish>
              </DetailsSalesFloorContainerVisitButton>
            )}
            <BottomSheetModal isVisible={finishVisitModal} setIsVisible={setFinishVisitModal}>
              <FinishModal onPress={() => setFinishVisitModal(false)} />
            </BottomSheetModal>
          </ScrollView>
        )}
      </DetailsSalesFloorContainer>
    </>
  );
};

export default WithApollo(DetailsSalesFloor);
