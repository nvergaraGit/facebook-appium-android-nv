/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  ContainerList,
  ContainerLoader,
  Loader,
  LoaderView,
  Title,
  TabButton,
  TitleName,
  ContainerImg,
  ContainerTabs,
  TextTabButton,
  TextNoResults,
  ContainerCategory,
  ContainerCategoryText,
} from './Styles';
import { BackHandler } from 'react-native';
import { CatalogDetailResponse } from 'types/catalogs';
import { GRAPHQL_BACKEND_URL } from '@env';
import { TProducts } from 'types/products';
import WithApollo from '@components/hocs/WithApollo';
import { MMKVLoader } from 'react-native-mmkv-storage';
import NoResults from '@components/NoResults/NoResults';
import { FlatList } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import { CatalogueDetailsResponse } from 'types/catalogs';
import { getImageForCategory } from '@utils/categoriesImage';
import EmptyImage from '@assets/icons/empty-image-sales.svg';
import getCatalogDetails from '@graphql/queries/getCatalogsDetails';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import EditModalVisit from '@components/EditModalVisit/EditModalVisit';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { useNavigation, CommonActions, useFocusEffect } from '@react-navigation/native';
import BottomSheetModal from '@components/BottomSheetModal/BottomSheetModal';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import getInfoTrackingByCategories from '@graphql/queries/getInfoTrackingByCategories';
import ReviewFormatEvaluateCard from '@components/ReviewFormatEvaluateCard/ReviewFormatEvaluateCard';
import ReviewFormatEvaluatedCard from '@components/ReviewFormatEvaluatedCard/ReviewFormatEvaluatedCard';
import { Catalogs, Exhibitions, InfoTrackingByCategoriesData } from 'types/visitTrackin';
import {
  ANALITICS_ACTION_TRACKING,
  ANALITICS_ACTION_TRACKING_CATALOG,
  ANALITICS_ACTION_TRACKING_EXHIBITION,
  ANALITICS_ACTION_TRACKING_CATALOG_COMMENT_FORMAT,
  ANALITICS_ACTION_TRACKING_EXHIBITION_COMMENT_FORMAT,
  ANALITICS_ACTION_TRACKING_CATALOG_UPDATE_COMMENT_FORMAT,
  ANALITICS_ACTION_TRACKING_EXHIBITION_UPDATE_COMMENT_FORMAT,
} from '@libraries/constants';
import { useAppContext } from '@context/state';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';

type Props = StackScreenProps<
  SalesFloorsDetailsStack,
  'SalesFloorReviewCatalogsExhibitionsEvaluate'
>;
const ReviewCatalogsExhibitionsEvaluate = ({ route }: Props) => {
  const storage = new MMKVLoader().initialize();
  const { categoryName, salesFloor, catalogsId } = route?.params ?? {};
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const [select, setSelect] = useState<number>(1);
  const [refreshReviews, setRefreshReviews] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [formatName, setFormatName] = useState<string>('');
  const [, setTrackingId] = useState<number>();
  const [reviewData, setReviewData] = useState<any>();
  const [catalogsProductsReview, setCatalogsProductsReview] = useState<any>({});
  const [catalogueProductsReview, setCatalogueProductsReview] = useState<TProducts[]>();
  const [catalogueDetailsReview, setCatalogueDetailsReview] = useState<CatalogueDetailsResponse>();
  const [infoReviews, setInfoReviews] = useState<InfoTrackingByCategoriesData>();
  let NavigateToDetails = false;
  const { auth } = useAppContext();

  const [getCatalogDetailsInfo, { loading: loadingDetails }] = useLazyQuery(getCatalogDetails, {
    fetchPolicy: 'no-cache',
  });

  const [fetchInfoTracking, { loading }] = useLazyQuery(getInfoTrackingByCategories, {
    fetchPolicy: 'network-only',
    onCompleted: (result) => {
      setRefreshReviews(false);
      setInfoReviews(result.getInfoTrackingByCategories.data);
    },
    onError: (error) => {
      console.log('Error', error);
      setRefreshReviews(false);
    },
  });

  useEffect(() => {
    if (typeof catalogsId === 'undefined') {
      setSelect(2);
    }
  }, [catalogsId]);

  // useEffect(() => {
  //   fetchInfoTracking({
  //     variables: {
  //       getInfoTrackingByCategoriesInput: {
  //         clientId: salesFloor?.codClient.toString(),
  //         catalogoId: catalogsId,
  //         categoria: categoryName,
  //       },
  //     },
  //   });
  // }, [salesFloor, catalogsId, categoryName]);

  useFocusEffect(
    useCallback(() => {
      fetchInfoTracking({
        variables: {
          getInfoTrackingByCategoriesInput: {
            clientId: salesFloor?.codClient.toString(),
            catalogoId: catalogsId,
            categoria: categoryName,
          },
        },
      });
    }, [salesFloor, catalogsId, categoryName]),
  );

  const selectOptions = (option: number) => {
    const selectedVisitCategory =
      option && option === 1
        ? ANALITICS_ACTION_TRACKING_CATALOG
        : ANALITICS_ACTION_TRACKING_EXHIBITION;
    registerFirebaseAnaliticsEvent(ANALITICS_ACTION_TRACKING, selectedVisitCategory, auth);
    setSelect(option);
  };

  const detailsFormat = (item: Catalogs | Exhibitions) => {
    const formatReview: any = {
      clientCode: salesFloor?.codClient.toString(),
      status: item.status,
      categoria: categoryName,
      catalogoId: item.catalogueId,
      comentario: {
        comentario: '',
        tipoComentarioId: 0,
        imagenes: [],
      },
    };

    if ('mecanica' in item) {
      const catalogItem = item;
      formatReview.marca = catalogItem.marca;
      formatReview.patron = catalogItem.patron;
      formatReview.mecanica = catalogItem.mecanica;
      formatReview.formato = catalogItem.formato;
      formatReview.tipoRevision = 'CATALOGO';
    } else {
      const exhibitionItem = item;
      formatReview.marca = exhibitionItem.marca;
      formatReview.tipoExhibicion = exhibitionItem.tipo;
      formatReview.exhibicionId = exhibitionItem.id;
      formatReview.tipoRevision = 'EXHIBICION';
      formatReview.producto = exhibitionItem.descripcion;
    }

    navigation.navigate('SalesFloorReviewComments', {
      saveArray: formatReview,
      salesFloor,
      catalogsId,
      categoryName,
      type: 'save',
    });
  };

  const saveReview = async (item: Catalogs | Exhibitions) => {
    const formatReview: any = {
      clientCode: salesFloor?.codClient.toString(),
      status: 'APROBADO',
      categoria: categoryName,
      // catalogoId: catalogsId,
      comentario: null,
    };

    let isCatalog = false;

    if ('mecanica' in item) {
      const catalogItem = item;
      formatReview.marca = catalogItem.marca;
      formatReview.patron = catalogItem.patron;
      formatReview.mecanica = catalogItem.mecanica;
      formatReview.formato = catalogItem.formato;
      formatReview.catalogoId = catalogItem.catalogueId;
      formatReview.tipoRevision = 'CATALOGO';
      isCatalog = true;
    } else {
      const exhibitionItem = item;
      formatReview.marca = exhibitionItem.marca;
      formatReview.tipoExhibicion = exhibitionItem.tipo;
      formatReview.exhibicionId = exhibitionItem.id;
      formatReview.tipoRevision = 'EXHIBICION';
      formatReview.producto = exhibitionItem.descripcion;
    }

    const trackingReviewType = isCatalog
      ? ANALITICS_ACTION_TRACKING_CATALOG_COMMENT_FORMAT
      : ANALITICS_ACTION_TRACKING_EXHIBITION_COMMENT_FORMAT;

    registerFirebaseAnaliticsEvent(ANALITICS_ACTION_TRACKING, trackingReviewType, auth);

    const operations = {
      query:
        'mutation($saveTrackingReviewInput: SaveTrackingReviewInput!){   saveTrackingReview(saveTrackingReviewInput: $saveTrackingReviewInput){ data { response { message statusCode } trackingId } error { details } } }',
      variables: {
        saveTrackingReviewInput: {
          catalogoId: formatReview.catalogoId,
          patron: formatReview.patron,
          mecanica: formatReview.mecanica,
          formato: formatReview.formato,
          status: formatReview.status,
          tipoRevision: formatReview.tipoRevision,
          marca: formatReview.marca,
          categoria: categoryName,
          clientCode: formatReview.clientCode,
          exhibicionId: formatReview.exhibicionId,
          tipoExhibicion: formatReview.tipoExhibicion,
          producto: formatReview.producto,
          imageFile: [],
        },
      },
    };

    const token = storage.getString('tokenStorage');
    const tokenFormat = JSON.parse(token);

    const formData = new FormData();
    formData.append('operations', JSON.stringify(operations));
    formData.append('map', '{}');

    const header = {
      Accept: 'application/json',
      Authorization: `Bearer ${tokenFormat.token}`,
      'Content-Type': 'multipart/form-data',
      'apollo-require-preflight': 'true',
    };

    try {
      const res = await fetch(GRAPHQL_BACKEND_URL, {
        method: 'POST',
        headers: header,
        body: formData,
      });
      const json = await res.json();
      setTrackingId(json.data.saveTrackingReview.data.trackingId);
      storage.setString('trackingId', json.data.saveTrackingReview.data.trackingId.toString());
      setRefreshReviews(true);
      fetchInfoTracking({
        variables: {
          getInfoTrackingByCategoriesInput: {
            clientId: salesFloor?.codClient.toString(),
            catalogoId: catalogsId,
            categoria: categoryName,
          },
        },
      });
    } catch (err: any) {
      console.log('Error al guardar', err);
    }
  };

  const handleDetails = (item: Catalogs) => {
    NavigateToDetails = true;
    const catalogsProducts: any = {
      catalogueId: item.catalogueId,
      mecanica: item.mecanica,
      patron: item.patron,
      formato: item.formato,
    };

    setCatalogsProductsReview(catalogsProducts);

    const arePropertiesEqual = Object.keys(catalogsProducts).every(
      (key) => catalogsProducts[key] === catalogsProductsReview[key],
    );

    if (arePropertiesEqual) {
      navigation.navigate('DetailsCatalog', {
        catalogDetailsInfo: {
          catalogueDetails: catalogueDetailsReview && catalogueDetailsReview,
          catalogueProducts: catalogueProductsReview && catalogueProductsReview,
        },
      });
    } else {
      getCatalogDetailsInfo({
        variables: {
          getCatalogueDetailsInput: catalogsProducts,
        },
        onCompleted: (data: CatalogDetailResponse) => {
          const { catalogueDetails, catalogueProducts } = data.getCatalogueDetails.data;
          setCatalogueDetailsReview(catalogueDetails);
          setCatalogueProductsReview(catalogueProducts);
          if (NavigateToDetails) {
            navigation.navigate('DetailsCatalog', {
              catalogDetailsInfo: {
                catalogueDetails,
                catalogueProducts,
              },
            });
          }
          NavigateToDetails = false;
        },
      });
    }
  };

  const EditReview = (item: Catalogs | Exhibitions) => {
    setEditVisible(true);
    setReviewData(item);
    let selectedVisitCategory = '';

    if ('mecanica' in item) {
      selectedVisitCategory = ANALITICS_ACTION_TRACKING_CATALOG_UPDATE_COMMENT_FORMAT;
      const catalogItem = item;
      setFormatName(catalogItem.formato);
    } else {
      selectedVisitCategory = ANALITICS_ACTION_TRACKING_EXHIBITION_UPDATE_COMMENT_FORMAT;
      const exhibitionItem = item;
      setFormatName(exhibitionItem.descripcion);
    }

    registerFirebaseAnaliticsEvent(ANALITICS_ACTION_TRACKING, selectedVisitCategory, auth);
  };

  const editStatus = (state: string, id: number) => {
    if (state === 'COMENTARIOS') {
      const editionComments = {
        trackingIdReview: id,
        status: 'CON COMENTARIO',
        comentario: reviewData.comentario,
      };
      // getCatalogDetailsInfo.reset();
      navigation.navigate('SalesFloorReviewComments', {
        salesFloor,
        catalogsId,
        categoryName,
        type: 'edition',
        editValues: editionComments,
      });
    } else {
      updaTrackingReview(id);
    }
  };

  const updaTrackingReview = async (id: number) => {
    const formDataEdition = new FormData();

    const requestBody = {
      query: `
          mutation UpdateTrackingReview($updateTrackingReviewInput: UpdateTrackingReviewInput!) {
            updateTrackingReview(updateTrackingReviewInput: $updateTrackingReviewInput) {
              data {
                trackingId
                response {
                  message
                  statusCode
                }
              }
            }
          }
        `,
      variables: {
        updateTrackingReviewInput: {
          trackingReviewId: Number(id),
          status: 'APROBADO',
          imageFile: [],
        },
      },
    };

    formDataEdition.append('operations', JSON.stringify(requestBody));
    formDataEdition.append('map', '{}');

    const token = storage.getString('tokenStorage');
    const tokenFormat = JSON.parse(token);

    try {
      await fetch(GRAPHQL_BACKEND_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${tokenFormat.token}`,
          'Content-Type': 'multipart/form-data',
          'apollo-require-preflight': 'true',
        },
        body: formDataEdition,
      });
      setRefreshReviews(true);
      fetchInfoTracking({
        variables: {
          getInfoTrackingByCategoriesInput: {
            clientId: salesFloor?.codClient.toString(),
            catalogoId: catalogsId,
            categoria: categoryName,
          },
        },
      });
    } catch (err: any) {
      console.log('Error editar', err);
    }
  };

  useEffect(() => {
    const handleBackPress = () => {
      const { dispatch } = navigation;
      const backAction = CommonActions.navigate({
        name: 'SalesFloorReviewCatalogsExhibitions',
        params: { salesFloor, catalogsId },
      });
      dispatch(backAction);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <Container>
      <BottomSheetModal isVisible={editVisible} setIsVisible={setEditVisible}>
        <EditModalVisit
          format={formatName}
          review={reviewData}
          edit={(state: string, id: number) => editStatus(state, id)}
          onPress={() => setEditVisible(false)}
        />
      </BottomSheetModal>
      {loading || loadingDetails || refreshReviews ? (
        <ContainerLoader>
          <LoaderView>
            <Loader />
          </LoaderView>
        </ContainerLoader>
      ) : (
        <>
          <HeaderDetailScreenNavigation
            title="Catálogo y Exhibición"
            goBack={() =>
              navigation.navigate('SalesFloorReviewCatalogsExhibitions', { salesFloor, catalogsId })
            }
          />
          <ContainerList>
            <ContainerCategory>
              <ContainerImg>{categoryName && getImageForCategory(categoryName)}</ContainerImg>
              <ContainerCategoryText>{categoryName && categoryName}</ContainerCategoryText>
            </ContainerCategory>
            <ContainerTabs>
              <TabButton selected={select === 1} onPress={() => selectOptions(1)}>
                <TextTabButton selected={select === 1}>Catálogo</TextTabButton>
              </TabButton>
              <TabButton selected={select === 2} onPress={() => selectOptions(2)}>
                <TextTabButton selected={select === 2}>Exhibiciones</TextTabButton>
              </TabButton>
            </ContainerTabs>
            {select === 1 ? (
              <>
                {Array.isArray(infoReviews?.formatosCatalogo) &&
                  infoReviews?.formatosCatalogo.length === 0 && (
                    <NoResults icon={<EmptyImage />}>
                      <TextNoResults textImportant>
                        Actualmente no cuentas con catálogos para la visita
                      </TextNoResults>
                    </NoResults>
                  )}
                {Array.isArray(infoReviews?.formatosCatalogo) &&
                  infoReviews?.formatosCatalogo.length > 0 &&
                  infoReviews?.formatosCatalogo.filter((item) => item.status === 'PENDIENTE')
                    .length > 0 && (
                    <>
                      <TitleName>{infoReviews?.nombreCatalogo}</TitleName>
                      <Title>Formatos por evaluar</Title>
                      <FlatList
                        style={{ minHeight: 130 }}
                        data={
                          infoReviews?.formatosCatalogo.filter(
                            (item) => item.status === 'PENDIENTE',
                          ) || []
                        }
                        renderItem={({ item, index }) => {
                          return (
                            <ReviewFormatEvaluateCard
                              detailsProducts={(item) => handleDetails(item)}
                              key={index}
                              onDetails={(item) => detailsFormat(item)}
                              saveReviewInfo={(item) => saveReview(item)}
                              info={item}
                            />
                          );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                      />
                    </>
                  )}
                {Array.isArray(infoReviews?.formatosCatalogo) &&
                  infoReviews?.formatosCatalogo.filter((item) => item.status !== 'PENDIENTE')
                    .length > 0 && (
                    <>
                      <Title>Formatos evaluados</Title>
                      <FlatList
                        style={{ minHeight: 130 }}
                        data={
                          infoReviews?.formatosCatalogo.filter(
                            (item) => item.status !== 'PENDIENTE',
                          ) || []
                        }
                        renderItem={({ item }) => {
                          return (
                            <ReviewFormatEvaluatedCard
                              detailsProducts={(item) => handleDetails(item)}
                              state={select}
                              info={item}
                              update={(item) => EditReview(item)}
                            />
                          );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                      />
                    </>
                  )}
              </>
            ) : (
              <>
                {Array.isArray(infoReviews?.exhibiciones) &&
                  infoReviews?.exhibiciones.length === 0 && (
                    <NoResults icon={<EmptyImage />}>
                      <TextNoResults textImportant>
                        Actualmente no cuentas con exhibiciones para la visita
                      </TextNoResults>
                    </NoResults>
                  )}
                {Array.isArray(infoReviews?.exhibiciones) &&
                  infoReviews?.exhibiciones.length > 0 &&
                  infoReviews?.exhibiciones.filter((item) => item.status === 'PENDIENTE').length >
                    0 && (
                    <>
                      <Title>Por evaluar</Title>
                      <FlatList
                        style={{ minHeight: 130 }}
                        data={
                          infoReviews?.exhibiciones.filter((item) => item.status === 'PENDIENTE') ||
                          []
                        }
                        renderItem={({ item, index }) => {
                          return (
                            <ReviewFormatEvaluateCard
                              detailsProducts={(item) => handleDetails(item)}
                              key={index}
                              onDetails={(item) => detailsFormat(item)}
                              saveReviewInfo={(item) => saveReview(item)}
                              exhibitions={item}
                            />
                          );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                      />
                    </>
                  )}
                {Array.isArray(infoReviews?.exhibiciones) &&
                  infoReviews?.exhibiciones.filter((item) => item.status !== 'PENDIENTE').length >
                    0 && (
                    <>
                      <Title>Evaluadas</Title>
                      <FlatList
                        style={{ minHeight: 130 }}
                        data={
                          infoReviews?.exhibiciones.filter((item) => item.status !== 'PENDIENTE') ||
                          []
                        }
                        renderItem={({ item }) => {
                          return (
                            <ReviewFormatEvaluatedCard
                              state={select}
                              exhibitions={item}
                              update={(item) => EditReview(item)}
                            />
                          );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                      />
                    </>
                  )}
              </>
            )}
          </ContainerList>
        </>
      )}
      {/* {!loading && (<ContainerButton onPress={() => console.log('validando informe!!!')}>
        <Button>
          <ButtonText>Compartir el informe</ButtonText>
        </Button>
      </ContainerButton>)} */}
    </Container>
  );
};

export default WithApollo(ReviewCatalogsExhibitionsEvaluate);
