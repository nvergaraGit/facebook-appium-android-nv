/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Dimensions, PermissionsAndroid, Platform } from 'react-native';
import {
  Container,
  ContainerList,
  ContainerLoader,
  Loader,
  LoaderView,
  Label,
  CommentText,
  CommentSelectText,
  CommentTakeCapture,
  ContainerButtonSave,
  CommentIconContainer,
  CommentFormatCarousel,
  CommentImageContainer,
  ContainerCommentLabel,
  CommentTakeCaptureText,
  ContainerInfoTextInput,
  CommentImageIconContainer,
  ContainerCommentInputLabel,
  ContainerButtonSaveComments,
  ContainerButtonSaveCommentsText,
  ContainerInfoTextInputTakePicture,
} from './Styles';
import RNFS from 'react-native-fs';
import { TOption } from 'types/select';
import { GRAPHQL_BACKEND_URL } from '@env';
import { useAppContext } from '@context/state';
import TrashIcon from '@assets/icons/trash.svg';
import { RadioButton } from 'react-native-paper';
import CameraIcon from '@assets/icons/camera.svg';
import WithApollo from '@components/hocs/WithApollo';
import ImageResizer from 'react-native-image-resizer';
import { TOptionsProblems } from 'types/visitTrackin';
import { TouchableOpacity, View } from 'react-native';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { useNavigation } from '@react-navigation/native';
import { useLazyQuery } from '@apollo/client';
import CameraDisabledIcon from '@assets/icons/camera-disable.svg';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import getProblemOptionsReview from '@graphql/queries/getProblemOptionsReview';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import CommentFormatTypeCard from '@components/CommentFormatTypeCard/CommentFormatTypeCard';
import { launchCamera, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'SalesFloorReviewComments'>;

const CommentFormat = ({ route }: Props) => {
  const storage = new MMKVLoader().initialize();
  const [loadingSave, setLoadingSave] = useState(false);
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const { saveArray, salesFloor, catalogsId, categoryName, type, editValues } = route?.params ?? {};
  const [selectedValue, setSelectedValue] = useState<number>(1);
  const [selectedLabel, setSelectedLabel] = useState<string>('Layout incorrecto');
  const [imageTaked, setImageTaked] = useState<any[]>([]);
  const [imageBinary, setImageBinary] = useState<any[]>([]);
  const [optionsProblems, setOptionsProblems] = useState<TOption[]>([]);
  const [commentDescription, setCommentDescription] = useState<string>('');

  const onValueChange = (value: string, label: string) => {
    console.log('valor de seleccion', value);
    setSelectedValue(value);
    setSelectedLabel(label);
  };

  const customCallback = (response: any) => {
    if (response && response.assets && response.assets.length > 0) {
      resizeImage(response.assets[0].uri)
        .then((image) => {
          const firstAsset = {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
          };
          const firstAssetBinary = {
            uri: image.uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
          };

          setImageBinary([...imageBinary, firstAssetBinary]);
          if (firstAsset) {
            setImageTaked([...imageTaked, firstAsset]);
          }
        })
        .catch((error) => {
          console.log('Error resizing image:', error);
        });
    }
  };

  const openImagePicker = async () => {
    const options: CameraOptions = {
      saveToPhotos: true,
      mediaType: 'photo',
      // includeBase64: true,
      includeExtra: true,
    };

    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera(options, customCallback);
      } else {
        console.log('Permiso para tomar fotografías no fue aceptado por el usuario');
      }
    } else {
      launchCamera(options, customCallback);
    }
  };

  const removeCapture = (name: string) => {
    const removeImage = imageTaked.filter((obj: any) => obj.name !== name);
    setImageTaked(removeImage);
  };

  const [getProblemOptionsReviewQuery, { loading, refetch }] = useLazyQuery(
    getProblemOptionsReview,
    {
      onCompleted: (result: TOptionsProblems) => {
        const optionsMap: TOption[] = result.getProblemOptionsReview.data.map((item) => {
          return {
            value: item.id,
            label: item.option.toString(),
          };
        });

        setOptionsProblems(optionsMap);
      },
    },
  );

  const resizeImage = (uri: string): Promise<any> => {
    const maxWidth = 250; // Ancho máximo deseado
    const maxHeight = 250;
    const quality = 80; // Calidad de la imagen redimensionada (0 - 100)
    const rotation = 0; // Rotación de la imagen (0, 90, 180, 270)

    return new Promise((resolve, reject) => {
      ImageResizer.createResizedImage(uri, maxWidth, maxHeight, 'JPEG', quality, rotation)
        .then((resizedImageUri: any) => {
          resolve(resizedImageUri);
        })
        .catch((error: any) => reject(error));
    });
  };

  useEffect(() => {
    getProblemOptionsReviewQuery();
  }, []);
  const onRefresh = React.useCallback(() => {
    refetch();
  }, []);

  useEffect(() => {
    getProblemOptionsReviewQuery();
    const fetchImageObjects = async () => {
      if (editValues?.comentario) {
        setSelectedValue(editValues.comentario.tipoComentario.id);
      }
    };

    fetchImageObjects();
  }, [editValues]);

  const saveComments = async () => {
    setLoadingSave(true);
    if (saveArray && saveArray.comentario) {
      saveArray.comentario.comentario = commentDescription;
      saveArray.comentario.tipoComentarioId = selectedValue;
    }

    if (type === 'save') {
      const formData = new FormData();
      const operations = {
        query:
          'mutation($saveTrackingReviewInput: SaveTrackingReviewInput!){  saveTrackingReview(saveTrackingReviewInput: $saveTrackingReviewInput){ data { response { message statusCode } trackingId } error { details }  } }',
        variables: {
          saveTrackingReviewInput: {
            catalogoId: saveArray?.catalogoId,
            patron: saveArray?.patron,
            mecanica: saveArray?.mecanica,
            formato: saveArray?.formato,
            status: 'CON COMENTARIO',
            tipoRevision: saveArray?.tipoRevision,
            marca: saveArray?.marca,
            categoria: categoryName,
            comentario: {
              tipoComentarioId: selectedValue ? selectedValue : optionsProblems[0].value,
              comentario: commentDescription.length > 0 ? commentDescription : selectedLabel,
            },
            clientCode: salesFloor?.codClient.toString(),
            exhibicionId: saveArray?.exhibicionId,
            tipoExhibicion: saveArray?.tipoExhibicion,
            producto: saveArray?.producto,
            imageFile: [],
          },
        },
      };

      formData.append('operations', JSON.stringify(operations));

      if (imageTaked.length === 0) {
        formData.append('map', `{}`);
      } else {
        const mapImages = imageTaked.reduce((acc, _, index) => {
          acc[index] = [`variables.saveTrackingReviewInput.imageFile.${index}`];
          return acc;
        }, {});

        formData.append('map', JSON.stringify(mapImages));
        imageTaked.forEach((image: File, index: number) => {
          formData.append(`${index}`, image);
        });
      }

      const token = storage.getString('tokenStorage');
      const tokenFormat = JSON.parse(token);

      try {
        let res = await fetch(GRAPHQL_BACKEND_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${tokenFormat.token}`,
            'Content-Type': 'multipart/form-data',
            'apollo-require-preflight': 'true',
          },
          body: formData,
        });
        let json = await res.json();
        storage.setString('trackingId', json.data.saveTrackingReview.data.trackingId.toString());
        setLoadingSave(false);
        // salesFloor && catalogsId && navigation.navigate('SalesFloorReviewCatalogsExhibitions', { salesFloor, catalogsId });
        navigation.navigate('SalesFloorReviewCatalogsExhibitionsEvaluate', {
          categoryName,
          salesFloor,
          catalogsId,
        });
      } catch (err: any) {
        setLoadingSave(false);
        console.log('Error al guardar', err);
      }
    } else {
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
            trackingReviewId: parseInt(editValues.trackingIdReview),
            status: editValues.status,
            imageFile: [],
            comentario: {
              tipoComentarioId: selectedValue ? selectedValue : optionsProblems[0].value,
              comentario: commentDescription.length > 0 ? commentDescription : selectedLabel,
            },
          },
        },
      };

      formDataEdition.append('operations', JSON.stringify(requestBody));

      if (imageTaked.length === 0) {
        formDataEdition.append('map', `{}`);
      } else {
        const mapImages = imageTaked.reduce((acc, _, index) => {
          acc[index] = [`variables.updateTrackingReviewInput.imageFile.${index}`];
          return acc;
        }, {});

        formDataEdition.append('map', JSON.stringify(mapImages));
        imageTaked.forEach((image: File, index: number) => {
          formDataEdition.append(`${index}`, image);
        });
      }

      const token = storage.getString('tokenStorage');
      const tokenFormat = JSON.parse(token);

      try {
        let res = await fetch(GRAPHQL_BACKEND_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${tokenFormat.token}`,
            'Content-Type': 'multipart/form-data',
            'apollo-require-preflight': 'true',
          },
          body: formDataEdition,
        });
        let json = await res.json();
        setLoadingSave(false);
        navigation.navigate('SalesFloorReviewCatalogsExhibitionsEvaluate', {
          categoryName,
          salesFloor,
          catalogsId,
        });
      } catch (err: any) {
        console.log('Error al actualizar', err);
      }
    }
  };

  return (
    <Container>
      {loading || loadingSave ? (
        <ContainerLoader>
          <LoaderView>
            <Loader />
          </LoaderView>
        </ContainerLoader>
      ) : (
        <>
          <HeaderDetailScreenNavigation
            title="Comentar un formato"
            goBack={() =>
              navigation.navigate('SalesFloorReviewCatalogsExhibitionsEvaluate', {
                categoryName,
                salesFloor,
                catalogsId,
              })
            }
          />
          <ContainerList>
            <CommentFormatTypeCard />
            <CommentSelectText>Selecciona un problema:</CommentSelectText>
            {optionsProblems.map((option) => (
              <RadioButton.Group
                onValueChange={(newValue) => onValueChange(newValue, option.label)}
                value={selectedValue}
                key={option.value}
              >
                <TouchableOpacity onPress={() => onValueChange(option.value, option.label)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value={option.value} color="#F40009" />
                    <Label>{option.label}</Label>
                  </View>
                </TouchableOpacity>
              </RadioButton.Group>
            ))}

            <ContainerCommentInputLabel>
              <ContainerCommentLabel>Explica el problema</ContainerCommentLabel>
              <CommentText
                onChangeText={(value) => setCommentDescription(value)}
                value={commentDescription}
              />
            </ContainerCommentInputLabel>

            <ContainerInfoTextInput>
              Redacta el comentario de ejecución para la agencia
            </ContainerInfoTextInput>
            {selectedValue === 7 && commentDescription.length === 0 && (
              <ContainerInfoTextInput validate>
                El Campo explica el problema es obligatorio cuando se selecciona "Otro"
              </ContainerInfoTextInput>
            )}

            <CommentTakeCapture
              onPress={() => openImagePicker()}
              state={imageTaked.length === 3}
              disabled={imageTaked.length === 3}
            >
              {imageTaked.length === 3 ? <CameraDisabledIcon /> : <CameraIcon />}
              <CommentTakeCaptureText state={imageTaked.length === 3}>
                Tomar fotografía
              </CommentTakeCaptureText>
            </CommentTakeCapture>

            <ContainerInfoTextInputTakePicture marginInitial={imageTaked.length > 0}>
              Podrás subir hasta 3 fotografías por comentario
            </ContainerInfoTextInputTakePicture>

            <>
              {imageTaked.length > 0 && (
                // <CommentImageContainer source={{ uri: response.assets[0].uri}} />

                <CommentFormatCarousel
                  data={imageTaked}
                  horizontal={true}
                  ItemSeparatorComponent={() => {
                    return (
                      <View
                        style={{
                          width: 15,
                        }}
                      />
                    );
                  }}
                  style={{
                    width: Dimensions.get('window').width,
                  }}
                  contentContainerStyle={{
                    paddingRight: 30,
                  }}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <CommentImageIconContainer>
                      <CommentIconContainer onPress={() => removeCapture(item.name)}>
                        <TrashIcon />
                      </CommentIconContainer>
                      <CommentImageContainer
                        resizeCard={imageTaked.length > 1}
                        source={{ uri: item.uri }}
                      />
                    </CommentImageIconContainer>
                  )}
                />
              )}
            </>
          </ContainerList>
        </>
      )}
      {!loading && !loadingSave && (
        <ContainerButtonSave
          onPress={() => saveComments()}
          disabled={selectedValue === 7 && commentDescription.length === 0}
        >
          <ContainerButtonSaveComments>
            <ContainerButtonSaveCommentsText>Guardar</ContainerButtonSaveCommentsText>
          </ContainerButtonSaveComments>
        </ContainerButtonSave>
      )}
    </Container>
  );
};

export default WithApollo(CommentFormat);
