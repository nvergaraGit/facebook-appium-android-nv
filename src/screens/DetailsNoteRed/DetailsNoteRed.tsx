/* eslint-disable @typescript-eslint/no-floating-promises */
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { dateFormatter } from '@utils/formatDate';
import IconArrowGreen from '@assets/icons/arrow-green.svg';
import IconArrowRed from '@assets/icons/arrow-red.svg';
import React, { useEffect, useState } from 'react';
import { BackHandler, StatusBar, View } from 'react-native';
import {
  TIndicadores,
  TNoteRedBrand,
  TRedNoteBrandData,
  TRedNoteMonth,
  TRedNoteMonthData,
  TRedNoteBrandIndicators,
} from 'types/salesFloors';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { useLazyQuery } from '@apollo/client';
import WithApollo from '@components/hocs/WithApollo';
import getNotaRedMarcas from '@graphql/queries/getNoteRedMarca';
import { ContainerPage, ContainerResume, TextPercent } from './DetailsNoteRed.styles';
import NoteRedMarcas from '@components/NoteRedMarcas/NoteRedMarcas';
import DetailMarca from '@components/DetailMarca/DetailMarca';
import { TextDate, TextWeek } from '@components/DetailMarca/DetailMarca.styles';
import { ContainerMultiple, IconContainer } from '@screens/DetailsSalesFloor/styles';
import getRedNoteMonth from '@graphql/queries/getRedNoteMonth';
import getNotaRedBrandIndicator from '@graphql/queries/getNotaRedBrandIndicator';
import moment from 'moment';
import { useAppContext } from '@context/state';
import {
  ANALITICS_ACTION_SALES_FLOOR_RED_NOTE,
  ANALITICS_ACTION_SALES_FLOOR_RED_NOTE_AB_IN_BEV,
  ANALITICS_ACTION_SALES_FLOOR_RED_NOTE_EMBONOR,
  ANALITICS_ACTION_SALES_FLOOR_RED_NOTE_SANTA_RITA,
  ANALITICS_CATEGORY_SALES_FLOOR,
} from '@libraries/constants';
import FooterAbsolute from '@shared/FooterAbsolute/FooterAbsolute';
import { ScrollView } from 'react-native-gesture-handler';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'DetailsNoteRed'>;
const DetailsNoteRed = ({ route }: Props) => {
  const { salesFloor } = route.params;
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const [noteRedBrand, setNoteRedBrand] = useState<TNoteRedBrand[]>([]);
  const [itemMarca, setItemMarca] = useState<TNoteRedBrand>();
  const [indicadores, setIndicadores] = useState<TIndicadores[]>([]);
  const [showMarcas, setShowMarcas] = useState(false);
  const [noteRed, setNoteRed] = useState<TRedNoteMonth | null>(null);
  const [weekBrand, setWeekBrand] = useState<string>('');
  const [average, setAverage] = useState<string>('');
  const { auth } = useAppContext();

  const [getNoteRedBrandQuery, { loading }] = useLazyQuery(getNotaRedMarcas, {
    fetchPolicy: 'network-only',
    onCompleted: (data: TRedNoteBrandData) => {
      setNoteRedBrand(data.getNotaRedMarcas.notaRedMarcas);
    },
  });
  const [redNoteQuery, { loading: loadingNoteRedMonth }] = useLazyQuery(getRedNoteMonth, {
    onCompleted: (result: TRedNoteMonthData) => {
      setNoteRed(result.getRedNoteMonth.data);
    },
  });
  const [redNoteBrandQuery, { loading: loadingRedNoteMark }] = useLazyQuery(
    getNotaRedBrandIndicator,
    {
      onCompleted: (result: TRedNoteBrandIndicators) => {
        if (result.getNotaRedMarcaIndicador.data !== null) {
          navigation.navigate('DetailsNoteRedMark', {
            data: result.getNotaRedMarcaIndicador.data,
            week: weekBrand,
            average: average,
          });
        }
      },
    },
  );
  useEffect(() => {
    getNoteRedBrandQuery({
      variables: {
        getNotaRedMarcasInput: {
          codClient: salesFloor.codClient.toString(),
        },
      },
    });
    void redNoteQuery({
      variables: {
        date: moment().format('YYYY-MM-DD'),
        codClient: salesFloor.codClient.toString(),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const showDetails = (indicadores: TIndicadores[], itemMarca: TNoteRedBrand) => {
    setItemMarca(itemMarca);
    setShowMarcas(true);
    setIndicadores(indicadores);

    let redNoteSelectedBrand = '';
    if (itemMarca.id === 1) redNoteSelectedBrand = ANALITICS_ACTION_SALES_FLOOR_RED_NOTE_EMBONOR;
    if (itemMarca.id === 2) redNoteSelectedBrand = ANALITICS_ACTION_SALES_FLOOR_RED_NOTE_AB_IN_BEV;
    if (itemMarca.id === 3) redNoteSelectedBrand = ANALITICS_ACTION_SALES_FLOOR_RED_NOTE_SANTA_RITA;
    registerFirebaseAnaliticsEvent(
      ANALITICS_ACTION_SALES_FLOOR_RED_NOTE,
      redNoteSelectedBrand,
      auth,
    );
  };
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (showMarcas) {
          setShowMarcas(false);
        } else {
          navigation.goBack();
        }
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [showMarcas, navigation]),
  );
  const goToNoteRed = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_SALES_FLOOR_RED_NOTE,
      auth,
    );
    navigation.navigate('NoteRed', {
      salesFloor,
    });
  };

  const brandFormatted = (brand: string) => {
    switch (brand) {
      case 'EXHIBICIÓN ADICIONAL':
        return 'EXHIBICIONES';
      case 'NSS':
        return 'OSA NSS';
      case 'NSF':
        return 'OSA NSF';
      default:
        return brand;
    }
  };

  const getDetailMark = (brand: string, item: TIndicadores) => {
    setAverage(item.promedio);
    setWeekBrand(`${dateFormatter(item.fechaInicio)} - ${dateFormatter(item.fechaTermino)}`);
    const normalizedBrand =
      item.nombre === 'Catálogo'
        ? item.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        : item.nombre;
    const capitalizedBrand = normalizedBrand.toUpperCase();

    redNoteBrandQuery({
      variables: {
        getNotaRedMarcaIndicadorInput: {
          codClient: salesFloor.codClient.toString(),
          nombreMarca: brand.toUpperCase(),
          nombreIndicador: brandFormatted(capitalizedBrand),
        },
      },
    });
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderDetailScreenNavigation
        title="Detalle de NotaRED"
        goBack={showMarcas ? () => setShowMarcas(false) : () => navigation.goBack()}
      />
      {!loading && !loadingNoteRedMonth && !loadingRedNoteMark ? (
        <ContainerPage>
          <ScrollView>
            {!showMarcas && (
              <ContainerResume>
                <View>
                  <TextWeek>Semana actual </TextWeek>
                  <TextDate>{dateFormatter(noteRed?.semanaActual as string)}</TextDate>
                </View>
                <View>
                  <IconContainer>
                    <ContainerMultiple>
                      <TextWeek>Promedio</TextWeek>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextPercent>{noteRed?.porcentajeNotaRed}% </TextPercent>
                        {noteRed?.estadoActual === 'up' && <IconArrowGreen />}
                        {noteRed?.estadoActual === 'down' && <IconArrowRed />}
                      </View>
                    </ContainerMultiple>
                  </IconContainer>
                </View>
              </ContainerResume>
            )}
            {!showMarcas && (
              <NoteRedMarcas
                noteRedBrand={noteRedBrand}
                getIndicadores={(indicadores, itemMarca) => showDetails(indicadores, itemMarca)}
                goToNoteRed={goToNoteRed}
              />
            )}
            {showMarcas && (
              <DetailMarca
                detailMarca={itemMarca as TNoteRedBrand}
                indicadores={indicadores}
                getItemMarca={(brand, item) => getDetailMark(brand, item)}
              />
            )}
          </ScrollView>
        </ContainerPage>
      ) : (
        <FooterAbsolute loader={loading || loadingNoteRedMonth || loadingRedNoteMark} />
      )}
    </>
  );
};

export default WithApollo(DetailsNoteRed);
