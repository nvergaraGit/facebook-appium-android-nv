/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import {
  HomeScroll,
  HomeContainer,
  HomeStockTitle,
  HomeStockCarousel,
  HomeStockContainer,
  HomeSalesFloorText,
  HomeSalesFloorTitle,
  HomeSearchContainer,
  HomeSalesFloorkCarousel,
  HomeSalesFloorSearchText,
  HomeSalesFloorkContainer,
  HomeSalesFloorTextLasttUpdate,
  StockTextUpdate,
  TextNoResults,
  HomeStockSubtitle,
} from './styles';
import moment from 'moment';
import { useLazyQuery } from '@apollo/client';
import StockCard from '@components/stockCard';
import WithApollo from '@components/hocs/WithApollo';
import Header from '@components/HeaderHome/HeaderHome';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import getStockHome from '@graphql/queries/getStockHome';
import SearchInput from '@components/SearchInput/SearchInput';
import { StackNavigationProp } from '@react-navigation/stack';
import SalesFloorCardTest from '@components/salesFloorCardHome';
import { View, Dimensions, BackHandler, RefreshControl } from 'react-native';
import getSalesFloorHome from '@graphql/queries/getSalesFloorHome';
import { TStockTotalData, TStockItem } from 'types/stock';
import { TSalesFloorHome, TSalesFloorHomeItems } from 'types/salesFloors';
import { useAppContext } from '@context/state';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
import {
  ANALITICS_ACTION_HOME_PROD_LOW_STOCK,
  ANALITICS_ACTION_HOME_PROD_NO_STOCK,
  ANALITICS_ACTION_HOME_PROD_WITH_STOCK,
  ANALITICS_ACTION_HOME_SF,
  ANALITICS_CATEGORY_HOMEPAGE,
} from '@libraries/constants';
import EmptyImageSadFace from '@assets/icons/empty-image-details-sales.svg';
import NoResults from '@components/NoResults/NoResults';
import { HomeStack } from '@navigation/homeNavigator';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import dayjs from 'dayjs';

const Home = () => {
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [stockData, setStockData] = useState<TStockItem[]>([]);
  const [searchSalesFloor, setSearchSalesFloor] = useState<string>('');
  const [totalPurchaseOrders, setTotalPurchaseOrders] = useState<number>(0);
  const [salesFloorData, setSalesFloorData] = useState<TSalesFloorHomeItems[][]>([]);
  const [hourStock, setHourStock] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {
    setPlant,
    setStock,
    auth,
    setPrincipalPlant,
    setResetPlant,
    setResetPrincipalPlant,
    setModalInternetConnection,
    isInternet,
  } = useAppContext();

  const [getSalesFloorHomeData, { loading: loadSalesFloor }] = useLazyQuery(getSalesFloorHome, {
    fetchPolicy: 'network-only',
  });

  const [getStockHomeData, { loading: loadStock }] = useLazyQuery(getStockHome, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }

    const currentDate = moment().format('YYYYMMDD');
    getSalesFloorHomeData({
      variables: {
        date: currentDate,
      },
      onCompleted: (data: TSalesFloorHome) => {
        const inputDate = new Date(data.getCustomersOrdersTotals.lastUpdate);
        setLastUpdate(dayjs(inputDate).format('h:mm A'));
        setTotalPurchaseOrders(data.getCustomersOrdersTotals.totalPurchaseOrders);
        const dataSalesFloor = formatArray(data.getCustomersOrdersTotals.customersOrdersTotal);
        setSalesFloorData(dataSalesFloor);
      },
    });
    getStockHomeData({
      variables: {
        getTotalStockInput: {
          email: auth?.username,
        },
      },
      onCompleted: (data: TStockTotalData) => {
        const branchCode = data.getTotalStock.data[0]?.branchs[0].branchCode;
        const branchs = data.getTotalStock.data[0]?.branchs ?? [];
        setStockData(branchs);
        setPlant(branchCode);
        setPrincipalPlant(branchs[0]?.branch);
        setResetPlant(branchCode);
        setResetPrincipalPlant(branchs[0]?.branch);

        branchs?.filter((item) => {
          const timeString = item.updatedHour;
          let timeWithoutAMPM = '';
          if (timeString.includes('AM')) {
            timeWithoutAMPM = timeString.replace('AM', '');
          } else {
            timeWithoutAMPM = timeString.replace('PM', '');
          }
          const time = dayjs()
            .set('hour', parseInt(timeWithoutAMPM.split(':')[0]))
            .set('minute', parseInt(timeWithoutAMPM.split(':')[1]));
          setHourStock(dayjs(time).format('h:mm A'));
        });
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshing]);

  const formatArray = (arr: TSalesFloorHomeItems[]) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i += 3) {
      const auxArray = arr.slice(i, i + 3);
      newArray.push(auxArray);
    }
    return newArray;
  };

  const navigation = useNavigation<StackNavigationProp<HomeStack>>();
  // eslint-disable-next-line @typescript-eslint/unbound-method

  const alertHandle = (item: string, stock: number, branchCode: string) => {
    setPlant(branchCode);
    setPrincipalPlant(item);
    let analiticsAction = '';
    if (stock === 1) {
      setStock('WITHOUT_STOCK');
      analiticsAction = ANALITICS_ACTION_HOME_PROD_NO_STOCK;
    } else if (stock === 2) {
      setStock('LOW_STOCK');
      analiticsAction = ANALITICS_ACTION_HOME_PROD_LOW_STOCK;
    } else {
      setStock('WITH_STOCK');
      analiticsAction = ANALITICS_ACTION_HOME_PROD_WITH_STOCK;
    }
    // Registering Analitics Event
    registerFirebaseAnaliticsEvent(ANALITICS_CATEGORY_HOMEPAGE, analiticsAction, auth);

    // alert(item);
    navigation.navigate('Stock');
  };

  const handleChange = (text: string) => {
    setSearchSalesFloor(text);
  };

  const filterSalesFloor = () => {
    if (searchSalesFloor.length > 60) {
      return;
    }

    // Registering Analitics Event
    registerFirebaseAnaliticsEvent(ANALITICS_CATEGORY_HOMEPAGE, ANALITICS_ACTION_HOME_SF, auth);

    navigation.navigate('SalesFloor', { salesFloor: searchSalesFloor });
  };

  const handleDetails = (item: TSalesFloorHomeItems) => {
    navigation.navigate('Details', {
      salesFloor: item,
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

  return (
    <HomeContainer>
      <Header title={auth && auth?.name.slice(0, auth?.name.indexOf(' ') + 2)} />
      <View style={{ justifyContent: 'center', flex: 1 }}>
        {(loadStock || loadSalesFloor) && isInternet ? (
          <LoaderFullScreen />
        ) : (
          <HomeScroll
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            <HomeSalesFloorkContainer>
              <HomeSearchContainer>
                <HomeSalesFloorSearchText>¿Qué sala visitarás hoy?</HomeSalesFloorSearchText>
                <SearchInput
                  placeholder="Ingresa el nombre o código"
                  value={searchSalesFloor}
                  onSearch={(text) => handleChange(text)}
                  showFilter={false}
                  onSearchFilter={() => filterSalesFloor()}
                />
              </HomeSearchContainer>

              <HomeSalesFloorTitle>Salas con órdenes de compra del día</HomeSalesFloorTitle>
              <HomeSalesFloorText>Total O.C de hoy: {totalPurchaseOrders}</HomeSalesFloorText>

              <HomeSalesFloorTextLasttUpdate>
                Última actualización: {lastUpdate}
              </HomeSalesFloorTextLasttUpdate>

              {salesFloorData.length > 0 ? (
                <HomeSalesFloorkCarousel
                  contentContainerStyle={{
                    paddingRight: 10,
                  }}
                  data={salesFloorData}
                  horizontal={true}
                  ItemSeparatorComponent={() => {
                    return (
                      <View
                        style={{
                          width: 5,
                        }}
                      />
                    );
                  }}
                  renderItem={({ item, index }) => (
                    <SalesFloorCardTest
                      key={index}
                      salesFloor={item as TSalesFloorHomeItems[]}
                      handleDetails={(item) => handleDetails(item)}
                    />
                  )}
                />
              ) : (
                <View style={{ marginRight: 18 }}>
                  <NoResults icon={<EmptyImageSadFace />}>
                    <TextNoResults textImportant>Hoy no tienes ordenes de compras</TextNoResults>
                    <TextNoResults>Espera la próxima actualización.</TextNoResults>
                  </NoResults>
                </View>
              )}
            </HomeSalesFloorkContainer>
            <HomeStockContainer>
              <HomeStockTitle>Stock Embonor</HomeStockTitle>
              <HomeStockSubtitle>Medido por cantidad de SKU</HomeStockSubtitle>
              {stockData && (
                <StockTextUpdate>Última actualización: {hourStock.toLowerCase()}</StockTextUpdate>
              )}
              <HomeStockCarousel
                data={stockData}
                horizontal={true}
                ItemSeparatorComponent={() => {
                  return (
                    <View
                      style={{
                        width: 0,
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
                renderItem={({ item, index }) => (
                  <StockCard
                    key={index}
                    stockData={item as TStockItem}
                    stockItems={stockData.length > 1}
                    handleDetails={(code, stock, branchCode) =>
                      alertHandle(code, stock, branchCode)
                    }
                  />
                )}
              />
            </HomeStockContainer>
          </HomeScroll>
        )}
      </View>
    </HomeContainer>
  );
};
export default WithApollo(Home);
