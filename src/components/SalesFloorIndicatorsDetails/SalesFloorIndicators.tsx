import React, { useState, useEffect } from 'react';
import {
  NoteRedMarkCardContent,
  NoteRedMarkCardContainer,
  NoteRedMarkCardHeaderTitle,
  NoteRedMarkCardContainerText,
  NoteRedMarkCardContentTitles,
  NoteRedMarkCardHeaderContainer,
  NoteRedMarkCardHeaderSubTitlePercentage,
} from '@components/NoteRedMarkCard/styles';
import moment from 'moment';
import { monthName } from '@libraries/formatDate';
import { useNavigation } from '@react-navigation/native';
import {
  TextMonth,
  TextSubtitle,
  Divider,
  SalesFloorIndicatorsSearchFilter,
  SalesFloorIndicatorsCardContainer,
  SalesFloorIndicatorsSearchFilterText,
  SalesFloorIndicatorsTextSubtitleDate,
} from './Styles';
import { useLazyQuery } from '@apollo/client';
import WithApollo from '@components/hocs/WithApollo';
import ArrowRight from '@assets/icons/arrow-right.svg';
import GetIndicators from '@graphql/queries/getIndicators';
import DetailsFilter from '@components/DetailsFilter/DetailsFilter';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import GetOptionsByIndicator from '@graphql/queries/getOptionsByIndicator';
import { ContainerPage } from '@screens/DetailsNoteRed/DetailsNoteRed.styles';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import {
  TIndicatorsData,
  TIndicatorAcumulado,
  TIndicatorCurrent,
  TFechasIndicadores,
  TDataOptionsByIndicator,
  OptionItemFilter,
} from 'types/indicators';
import { determineTextColor } from '@utils/colorValueNegative';
import {
  ANALITICS_ACTION_SALES_FLOOR_CU_FORMAT,
  ANALITICS_ACTION_SALES_FLOOR_CU_VOLUME,
  ANALITICS_ACTION_SALES_FLOOR_INDICATORS,
  ANALITICS_ACTION_SALES_FLOOR_STRATEGIC_FOCUS,
} from '@libraries/constants';
import { useAppContext } from '@context/state';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'SalesFloorIndicatorsDetails'>;
const SalesFloorIndicators = ({ route }: Props) => {
  const { auth } = useAppContext();
  const { title, codClient } = route.params;
  const [showOptions, setShowOptions] = useState(false);
  const [optionsFilter, setOptionsFilter] = useState<OptionItemFilter[]>([]);
  const [loadingIndicators, setLoadingIndicators] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const [selectedLabel, setSelectedLabels] = useState<{ [key: string]: string }>({});
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [dataIndicatorCurrent, setDataIndicatorCurrent] = useState<TIndicatorCurrent>();
  const [dataIndicatorDates, setDataIndicatorDates] = useState<TFechasIndicadores>();
  const [, setLabelMix] = useState<boolean>(false);
  const [dataIndicatorAccumulated, setDataIndicatorAccumulated] = useState<TIndicatorAcumulado>();

  const [GetIndicatorsQuery, { loading }] = useLazyQuery(GetIndicators, {
    fetchPolicy: 'network-only',
  });

  const [GetOptionsByIndicatorQuery, { loading: loadingOptions }] = useLazyQuery(
    GetOptionsByIndicator,
    {
      onCompleted: (result: TDataOptionsByIndicator) => {
        if (result.getOptionsByIndicator.data !== null) {
          const transformedData: OptionItemFilter[] = result.getOptionsByIndicator.data.map(
            (item) => {
              return {
                value: item.id.toString(),
                label: item.option,
              };
            },
          );

          setOptionsFilter(transformedData);
        }
        setLoadingIndicators(false);
      },
      onError: () => {
        setLoadingIndicators(false);
      },
      fetchPolicy: 'network-only',
    },
  );

  const titleFilter = `${title}`;

  const validaTeInitialOptions = (value: string) => {
    switch (value) {
      case 'Volumen CU':
        registerFirebaseAnaliticsEvent(
          ANALITICS_ACTION_SALES_FLOOR_INDICATORS,
          ANALITICS_ACTION_SALES_FLOOR_CU_VOLUME,
          auth,
        );
        setLabelMix(false);
        return 2;

      case 'Formato CU':
        registerFirebaseAnaliticsEvent(
          ANALITICS_ACTION_SALES_FLOOR_INDICATORS,
          ANALITICS_ACTION_SALES_FLOOR_CU_FORMAT,
          auth,
        );
        setLabelMix(true);
        return 3;

      default:
        registerFirebaseAnaliticsEvent(
          ANALITICS_ACTION_SALES_FLOOR_INDICATORS,
          ANALITICS_ACTION_SALES_FLOOR_STRATEGIC_FOCUS,
          auth,
        );
        setLabelMix(false);
        return 1;
    }
  };

  useEffect(() => {
    // if (!isInternet) {
    //   setModalInternetConnection(true);
    //   return;
    // }
    setLoadingIndicators(true);

    void GetIndicatorsQuery({
      variables: {
        getIndicatorsInput: {
          clientId: parseInt(codClient),
          optionIndicator: validaTeInitialOptions(title),
        },
      },
      onCompleted: (result: TIndicatorsData) => {
        if (result.getIndicators.data !== null) {
          setDataIndicatorCurrent(result.getIndicators.data.actual);
          setDataIndicatorDates(result.getIndicators.data.fechasIndicadores);
          setDataIndicatorAccumulated(result.getIndicators.data.acumulado);
        }
        setLoadingIndicators(false);
      },
      onError: () => {
        setLoadingIndicators(false);
      },
    });

    void GetOptionsByIndicatorQuery({
      variables: {
        getOptionsByIndicatorInput: {
          indicatorType: validaTeInitialOptions(title),
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedValues[titleFilter] !== undefined) {
      setLoadingIndicators(true);
      void GetIndicatorsQuery({
        variables: {
          getIndicatorsInput: {
            clientId: parseInt(codClient),
            optionIndicator: parseInt(selectedValues[titleFilter]),
          },
        },
        onCompleted: (result: TIndicatorsData) => {
          if (result.getIndicators.data !== null) {
            setDataIndicatorCurrent(result.getIndicators.data.actual);
            setDataIndicatorDates(result.getIndicators.data.fechasIndicadores);
            setDataIndicatorAccumulated(result.getIndicators.data.acumulado);
          }
          setLoadingIndicators(false);
        },
        onError: () => {
          setLoadingIndicators(false);
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValues]);

  const handleSelectChange = (selectId: string, newValue: string, newLabel: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [selectId]: newValue,
    }));
    setSelectedLabels((prevLabels) => ({
      ...prevLabels,
      [selectId]: newLabel,
    }));
  };

  return (
    <>
      {!showOptions ? (
        <>
          <HeaderDetailScreenNavigation title={title} goBack={() => navigation.goBack()} />
          <TextSubtitle>Cantidades expresadas en cajas unitarias</TextSubtitle>
          <ContainerPage>
            <TextMonth>
              Mes de actualización{' '}
              <TextMonth isImportant>{monthName(moment().format('YYYY-MM-DD'))}</TextMonth>
            </TextMonth>

            {loading && loadingOptions && loadingIndicators && <LoaderFullScreen />}

            {!loading && !loadingOptions && !loadingIndicators && (
              <>
                <SalesFloorIndicatorsSearchFilter onPress={() => setShowOptions(true)}>
                  <SalesFloorIndicatorsSearchFilterText>
                    {selectedLabel[titleFilter]
                      ? selectedLabel[titleFilter]
                      : optionsFilter?.length
                      ? optionsFilter[0].label
                      : ''}
                  </SalesFloorIndicatorsSearchFilterText>
                  <ArrowRight />
                </SalesFloorIndicatorsSearchFilter>

                <SalesFloorIndicatorsCardContainer style={{ marginHorizontal: 0 }}>
                  <NoteRedMarkCardHeaderContainer style={{ backgroundColor: '#E6ECF4' }}>
                    <NoteRedMarkCardHeaderTitle style={{ paddingLeft: 13 }}>
                      {selectedLabel[titleFilter]
                        ? selectedLabel[titleFilter]
                        : optionsFilter?.length
                        ? optionsFilter[0].label
                        : ''}
                    </NoteRedMarkCardHeaderTitle>
                  </NoteRedMarkCardHeaderContainer>
                  <>
                    <NoteRedMarkCardContent>
                      <>
                        <NoteRedMarkCardContainerText>
                          <NoteRedMarkCardContentTitles style={{ marginLeft: 20 }}>
                            Mes
                          </NoteRedMarkCardContentTitles>
                          <NoteRedMarkCardHeaderSubTitlePercentage
                            style={{
                              marginRight: 20,
                              color: determineTextColor(dataIndicatorCurrent?.mes),
                            }}
                          >
                            {dataIndicatorCurrent?.mes?.length === 0
                              ? '-'
                              : dataIndicatorCurrent?.mes}
                          </NoteRedMarkCardHeaderSubTitlePercentage>
                        </NoteRedMarkCardContainerText>
                        <SalesFloorIndicatorsTextSubtitleDate>
                          {dataIndicatorDates?.actualMesInicio} -{' '}
                          {dataIndicatorDates?.actualMesTermino}
                        </SalesFloorIndicatorsTextSubtitleDate>
                        <NoteRedMarkCardContainerText>
                          <NoteRedMarkCardContentTitles style={{ marginLeft: 20 }}>
                            Año anterior
                          </NoteRedMarkCardContentTitles>
                          <NoteRedMarkCardHeaderSubTitlePercentage
                            style={{
                              marginRight: 20,
                              color: determineTextColor(dataIndicatorCurrent?.mesAnterior),
                            }}
                          >
                            {dataIndicatorCurrent?.mesAnterior.length === 0
                              ? '-'
                              : dataIndicatorCurrent?.mesAnterior}
                          </NoteRedMarkCardHeaderSubTitlePercentage>
                        </NoteRedMarkCardContainerText>
                        <SalesFloorIndicatorsTextSubtitleDate>
                          {dataIndicatorDates?.actualAaInicio} -{' '}
                          {dataIndicatorDates?.actualAaTermino}
                        </SalesFloorIndicatorsTextSubtitleDate>
                        <NoteRedMarkCardContainerText>
                          <NoteRedMarkCardContentTitles style={{ marginLeft: 20 }}>
                            % de variación
                          </NoteRedMarkCardContentTitles>
                          <NoteRedMarkCardHeaderSubTitlePercentage
                            style={{
                              marginRight: 20,
                              color: determineTextColor(dataIndicatorCurrent?.porcentaje),
                            }}
                          >
                            {dataIndicatorCurrent?.porcentaje.length === 0
                              ? '-'
                              : dataIndicatorCurrent?.porcentaje}
                          </NoteRedMarkCardHeaderSubTitlePercentage>
                        </NoteRedMarkCardContainerText>
                        {/* <NoteRedMarkCardContainerText>
                         <NoteRedMarkCardContentTitles style={{ marginLeft: 20 }}>Cadena</NoteRedMarkCardContentTitles>
                      <NoteRedMarkCardHeaderSubTitlePercentage style={{ marginRight: 20 }}>
                        3
                      </NoteRedMarkCardHeaderSubTitlePercentage>
                    </NoteRedMarkCardContainerText> */}
                      </>

                      <Divider />

                      <>
                        <NoteRedMarkCardContainerText>
                          <NoteRedMarkCardContentTitles style={{ marginLeft: 20 }}>
                            Acum.
                          </NoteRedMarkCardContentTitles>
                          <NoteRedMarkCardHeaderSubTitlePercentage
                            style={{
                              marginRight: 20,
                              color: determineTextColor(dataIndicatorAccumulated?.acumuladoActual),
                            }}
                          >
                            {dataIndicatorAccumulated?.acumuladoActual.length === 0
                              ? '-'
                              : dataIndicatorAccumulated?.acumuladoActual}
                          </NoteRedMarkCardHeaderSubTitlePercentage>
                        </NoteRedMarkCardContainerText>
                        <SalesFloorIndicatorsTextSubtitleDate>
                          {dataIndicatorDates?.acumuladoActualInicio} -{' '}
                          {dataIndicatorDates?.acumuladoActualTermino}
                        </SalesFloorIndicatorsTextSubtitleDate>
                        <NoteRedMarkCardContainerText>
                          <NoteRedMarkCardContentTitles style={{ marginLeft: 20 }}>
                            Acum. Año Anterior
                          </NoteRedMarkCardContentTitles>
                          <NoteRedMarkCardHeaderSubTitlePercentage
                            style={{
                              marginRight: 20,
                              color: determineTextColor(
                                dataIndicatorAccumulated?.acumuladoAnterior,
                              ),
                            }}
                          >
                            {dataIndicatorAccumulated?.acumuladoAnterior.length === 0
                              ? '-'
                              : dataIndicatorAccumulated?.acumuladoAnterior}
                          </NoteRedMarkCardHeaderSubTitlePercentage>
                        </NoteRedMarkCardContainerText>
                        <SalesFloorIndicatorsTextSubtitleDate>
                          {dataIndicatorDates?.acumuladoAaInicio} -{' '}
                          {dataIndicatorDates?.acumuladoAaTermino}
                        </SalesFloorIndicatorsTextSubtitleDate>
                        <NoteRedMarkCardContainerText>
                          <NoteRedMarkCardContentTitles style={{ marginLeft: 20 }}>
                            % variación
                          </NoteRedMarkCardContentTitles>
                          <NoteRedMarkCardHeaderSubTitlePercentage
                            style={{
                              marginRight: 20,
                              color: determineTextColor(dataIndicatorAccumulated?.porcentaje),
                            }}
                          >
                            {dataIndicatorAccumulated?.porcentaje.length === 0
                              ? '-'
                              : dataIndicatorAccumulated?.porcentaje}
                          </NoteRedMarkCardHeaderSubTitlePercentage>
                        </NoteRedMarkCardContainerText>
                        {/* <NoteRedMarkCardContainerText>
                  <NoteRedMarkCardContentTitles style={{ marginLeft: 20 }}>Cadena</NoteRedMarkCardContentTitles>
                  <NoteRedMarkCardHeaderSubTitlePercentage style={{ marginRight: 20 }}>
                    3
                  </NoteRedMarkCardHeaderSubTitlePercentage>
                </NoteRedMarkCardContainerText> */}

                        <Divider />

                        {/* <NoteRedMarkCardContainerText>
                            <NoteRedMarkCardContentTitles style={{ marginLeft: 20 }}>
                              {labelMix ? 'Mix Core' : 'Mix Sala'}
                            </NoteRedMarkCardContentTitles>
                            <NoteRedMarkCardHeaderSubTitlePercentage style={{ marginRight: 20 }}>
                              
                            </NoteRedMarkCardHeaderSubTitlePercentage>
                          </NoteRedMarkCardContainerText> */}
                      </>
                    </NoteRedMarkCardContent>
                  </>
                </SalesFloorIndicatorsCardContainer>
              </>
            )}
          </ContainerPage>
        </>
      ) : (
        <DetailsFilter
          placeHolder={titleFilter}
          options={optionsFilter}
          goBack={() => setShowOptions(false)}
          selectedValue={
            selectedValues[titleFilter]
              ? selectedValues[titleFilter]
              : optionsFilter?.length
              ? optionsFilter[0].value
              : ''
          }
          onValueChange={(newValue, label) => handleSelectChange(titleFilter, newValue, label)}
        />
      )}
    </>
  );
};

export default WithApollo(SalesFloorIndicators);
