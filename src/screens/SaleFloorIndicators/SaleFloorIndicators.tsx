import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { ContainerPage } from '@screens/DetailsNoteRed/DetailsNoteRed.styles';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import IconCadem from '@assets/icons/cadem-icon.svg';
import IconArrowGreen from '@assets/icons/arrow-green.svg';
import IconNew from '@assets/icons/new-icon.svg';
import IconArrowRed from '@assets/icons/arrow-red.svg';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ContainerPageIndicator, ContainerWeek, TextTitleWeek, TextValueWeek } from './Styles';
import {
  Container,
  ContainerChild,
  ContainerDateText,
  ContainerDetailsNotaRed,
  ContainerMultiple,
  ContainerTitles,
  ContainerTotal,
  IconContainer,
  Percent,
  ProductsCardButton,
  TitleIconNew,
  TitleOrderDate,
  TitleOrders,
} from '@screens/DetailsSalesFloor/styles';
import IconFillRate from '@assets/icons/fill-rate-icon.svg';
import { useAppContext } from '@context/state';
import {
  ANALITICS_ACTION_SALES_FLOOR_FILLRATE,
  ANALITICS_ACTION_SALES_FLOOR_INDICATORS,
  ANALITICS_ACTION_SALES_FLOOR_RED_NOTE,
  ANALITICS_ACTION_SALES_FLOOR_SALES_MOBILE,
  ANALITICS_CATEGORY_SALES_FLOOR,
} from '@libraries/constants';
import moment from 'moment';
import { ArrowType } from '@utils/fillRateArrowType';
import {
  TDetailsSalesFloorCard,
  TNoteRed,
  TRedNoteData,
  TTItemsSalesFloorQuery,
} from 'types/salesFloors';
import { useLazyQuery } from '@apollo/client';
import getCustomerSummaryInfo from '@graphql/queries/getCustomerSummaryInfo';
import { dateFormatter } from '@utils/formatDate';
import getRedNote from '@graphql/queries/getRedNote';
import WithApollo from '@components/hocs/WithApollo';
import { SELECTOR_INDICADOR } from '@utils/Indicators';
import { monthName } from '@libraries/formatDate';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
type Props = StackScreenProps<SalesFloorsDetailsStack, 'Indicators'>;
const SaleFloorIndicators = ({ route }: Props) => {
  const { salesFloor } = route.params;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setModalInternetConnection, isInternet, auth } = useAppContext();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const [itemSalesFloor, setItemSalesFloor] = useState<TDetailsSalesFloorCard>();
  const [noteRed, setNoteRed] = useState<TNoteRed>();

  const [getCustomerInfoQuery, { loading: loadingCustomerInfo }] = useLazyQuery(
    getCustomerSummaryInfo,
    {
      fetchPolicy: 'network-only',
    },
  );
  const [getNoteRedQuery, { loading: loadingStartNotaRed }] = useLazyQuery(getRedNote, {
    fetchPolicy: 'network-only',
  });

  const goToFillRate = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_SALES_FLOOR_FILLRATE,
      auth,
    );
    navigation.navigate('FillRateWeekly', {
      salesFloor: salesFloor,
    });
  };
  const goToNoteRed = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_SALES_FLOOR_RED_NOTE,
      auth,
    );
    navigation.navigate('DetailsNoteRed', {
      salesFloor: salesFloor,
    });
  };
  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }

    void getCustomerInfoQuery({
      variables: {
        customerInput: {
          codClient: salesFloor.codClient.toString(),
          date: moment().format('YYYYMMDD'),
        },
      },
      onCompleted: (result: TTItemsSalesFloorQuery) => {
        setItemSalesFloor(result.getCustomerSummaryInfo);
      },
    });

    void getNoteRedQuery({
      variables: {
        date: moment().format('YYYY-MM-DD'),
        codClient: salesFloor.codClient.toString(),
      },
      onCompleted: (data: TRedNoteData) => {
        setNoteRed(data.getRedNote.data);
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshing]);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);
  const goToIdRoute = (id: number, title: string) => {
    if (id === 1) {
      registerFirebaseAnaliticsEvent(
        ANALITICS_ACTION_SALES_FLOOR_INDICATORS,
        ANALITICS_ACTION_SALES_FLOOR_SALES_MOBILE,
        auth,
      );
      navigation.navigate('SalesMobile', {
        SalesFloor: salesFloor,
      });
    } else {
      navigation.navigate('SalesFloorIndicatorsDetails', {
        title: title,
        codClient: salesFloor.codClient.toString(),
      });
    }
  };

  return (
    <ContainerPageIndicator>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderDetailScreenNavigation
        title="Indicadores de la sala"
        goBack={() => navigation.goBack()}
      />

      <ContainerPage>
        {loadingCustomerInfo || loadingStartNotaRed ? (
          <LoaderFullScreen />
        ) : (
          <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            {itemSalesFloor?.fillRateLastWeek !== null && (
              <>
                <ContainerWeek>
                  <View>
                    <TextTitleWeek>Semanal </TextTitleWeek>
                    <TextValueWeek>
                      {moment(itemSalesFloor?.fillRateLastWeek?.dateIni).format('DD/MM/YY')} -{' '}
                      {moment(itemSalesFloor?.fillRateLastWeek?.dateEnd).format('DD/MM/YY')}{' '}
                    </TextValueWeek>
                  </View>
                </ContainerWeek>

                <TouchableWithoutFeedback
                  onPress={goToFillRate}
                  disabled={itemSalesFloor?.fillRateLastWeek ? false : true}
                >
                  <Container>
                    <IconContainer>
                      <IconFillRate />
                      <ContainerMultiple>
                        <View
                          style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                          }}
                        >
                          <TitleOrders isImportant>Fill Rate</TitleOrders>
                        </View>
                      </ContainerMultiple>
                    </IconContainer>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                      {itemSalesFloor?.fillRateLastWeek && (
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                          <Percent>
                            {itemSalesFloor.fillRateLastWeek.percentage === '100'
                              ? '100'
                              : Number(itemSalesFloor.fillRateLastWeek.percentage)
                                  .toFixed(1)
                                  .replace(/\.0$/, '')}
                            %
                          </Percent>
                          {ArrowType[itemSalesFloor?.fillRateLastWeek.flag]}
                        </View>
                      )}
                      <ContainerTotal>
                        {itemSalesFloor?.fillRateLastWeek && (
                          <ProductsCardButton onPress={goToFillRate} isImportant={false}>
                            <IconRightArrow />
                          </ProductsCardButton>
                        )}
                      </ContainerTotal>
                    </View>
                  </Container>
                </TouchableWithoutFeedback>
              </>
            )}
            {noteRed && (
              <TouchableWithoutFeedback onPress={goToNoteRed}>
                <View>
                  <Container>
                    <IconContainer>
                      <IconCadem />
                      <ContainerMultiple>
                        <TitleOrderDate>
                          Actual: {dateFormatter(noteRed.semanaActual)}
                        </TitleOrderDate>
                        <TitleIconNew>
                          <TitleOrders isImportant>NotaRED</TitleOrders>
                          {noteRed.nuevo === 1 && <IconNew />}
                        </TitleIconNew>
                      </ContainerMultiple>
                    </IconContainer>
                    <ContainerTotal>
                      <Percent>{noteRed.porcentajeNotaRed}%</Percent>
                      {noteRed.estadoActual === 'down' && <IconArrowRed />}
                      {noteRed.estadoActual === 'up' && <IconArrowGreen />}
                      <ProductsCardButton onPress={goToNoteRed} isImportant={false}>
                        <IconRightArrow />
                      </ProductsCardButton>
                    </ContainerTotal>
                  </Container>
                  <FlatList
                    data={noteRed.rednote}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                      <ContainerChild>
                        <ContainerDetailsNotaRed>
                          <ContainerDateText>
                            Semana {item.semana} {dateFormatter(item.fecha)}{' '}
                          </ContainerDateText>
                          <ContainerTotal>
                            <Percent>{item.notaRed}%</Percent>
                            {item.estado === 'down' && <IconArrowRed />}
                            {item.estado === 'up' && <IconArrowGreen />}
                          </ContainerTotal>
                        </ContainerDetailsNotaRed>
                      </ContainerChild>
                    )}
                  />
                </View>
              </TouchableWithoutFeedback>
            )}

            <ContainerWeek style={{ marginTop: 16 }}>
              <View>
                <TextTitleWeek>Mes de actualización </TextTitleWeek>
                <TextValueWeek>{monthName(moment().format('YYYY-MM-DD'))}</TextValueWeek>
              </View>
            </ContainerWeek>

            {SELECTOR_INDICADOR.map((item) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => goToIdRoute(item.id, item.label)}
                  key={item.id}
                >
                  <Container>
                    <IconContainer>
                      {item.icon}
                      <ContainerTitles>
                        <TitleOrders isImportant>{item.label}</TitleOrders>
                      </ContainerTitles>
                    </IconContainer>
                    <ContainerTotal>
                      <ProductsCardButton onPress={() => goToIdRoute(item.id, item.label)}>
                        <IconRightArrow />
                      </ProductsCardButton>
                    </ContainerTotal>
                  </Container>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        )}
      </ContainerPage>
    </ContainerPageIndicator>
  );
};

export default WithApollo(SaleFloorIndicators);
