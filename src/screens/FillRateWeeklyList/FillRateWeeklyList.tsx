/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { FlatList, RefreshControl, View } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import getFillRateWeekly from '@graphql/queries/getFillRateWeekly';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import {
  FIllRateOcResponse,
  FIllRateWeeklyResponse,
  FillRateStackParamList,
  WeeklyInfo,
} from 'types/fillRate';
import { ListDivider, MainContainer, TextTitleGothamMediumDark } from '@styles/sharedStyles';
import FillRateWeeklyListCard from '@components/FillRateWeeklyListCard/FillRateWeeklyListCard';
import { CurrentAverageContainer, TextAverageContainer } from './styles';
import { useAppContext } from '@context/state';
import WithApollo from '@components/hocs/WithApollo';
import getOcFillRate from '@graphql/queries/getFillRateOC';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import LoaderChangeScreen from '@shared/LoaderChangeScreen/LoaderChangeScreen';

type Props = StackScreenProps<FillRateStackParamList, 'FillRateWeeklyListContainer'>;

export const FillRateWeeklyList = ({ route }: Props) => {
  const { salesFloor } = route.params;
  const navigation = useNavigation<StackNavigationProp<FillRateStackParamList>>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [fillRateList, setFillRateList] = useState<WeeklyInfo[]>([]);
  const [average, setAverage] = useState<number>(0);
  /* eslint-disable-next-line @typescript-eslint/unbound-method*/
  const { setModalInternetConnection, isInternet } = useAppContext();

  const [getFillRate, { loading: loadingStart }] = useLazyQuery(getFillRateWeekly, {
    fetchPolicy: 'network-only',
  });
  const [getOcFillRateDetail, { loading: loadingOcFillRate }] = useLazyQuery(getOcFillRate, {
    fetchPolicy: 'network-only',
  });

  const handled = () => {
    navigation.goBack();
  };

  const goFillRateDetail = (item: WeeklyInfo) => {
    /**
     * It has taken item.dateEnd as dateEmission, because it's the real emissionDate in back develop
     */
    const dateEmission = item.dateEnd.replace(/-/g, '');

    getOcFillRateDetail({
      variables: {
        getOcFullRateWeekInput: {
          clientId: `${salesFloor.codClient}`,
          dateEmission: dateEmission,
        },
      },
      onCompleted: (data: FIllRateOcResponse) => {
        navigation.navigate('FillRateDetailsList', {
          ocFillRateList: data.getOCFillrateWeek.data,
          salesFloor: salesFloor,
        });
      },
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }

    getFillRate({
      variables: {
        getFullRateWeeklyInput: {
          clientId: `${salesFloor.codClient}`,
        },
      },
      onCompleted: (data: FIllRateWeeklyResponse) => {
        setFillRateList(data?.getFillrateWeekly?.data?.weeklyInfo ?? []);
        accumulatedAverage(data?.getFillrateWeekly?.data?.weeklyInfo ?? []);
      },
    });
    /*eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [refreshing]);

  const accumulatedAverage = (list: WeeklyInfo[]) => {
    const average = Math.round(
      list.reduce((a, b) => {
        return a + Number(b.percentage);
      }, 0) / list.length,
    );
    setAverage(average);
  };
  return (
    <>
      <HeaderDetailScreenNavigation title="Fill Rate semanal" goBack={() => handled()} />
      <MainContainer>
        {loadingOcFillRate && <LoaderChangeScreen />}
        {loadingStart ? (
          <LoaderFullScreen />
        ) : (
          <View style={{ flex: 1 }}>
            <FlatList
              data={fillRateList}
              renderItem={({ item, index }) => {
                return (
                  <FillRateWeeklyListCard
                    params={{ item: item }}
                    onNext={() => goFillRateDetail(item)}
                    itemData={fillRateList}
                    itemQty={index}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
            <CurrentAverageContainer>
              <ListDivider />
              <TextAverageContainer>
                <TextTitleGothamMediumDark>Promedio Acumulado</TextTitleGothamMediumDark>
                <TextTitleGothamMediumDark>{average}%</TextTitleGothamMediumDark>
              </TextAverageContainer>
              <ListDivider />
            </CurrentAverageContainer>
          </View>
        )}
      </MainContainer>
    </>
  );
};

export default WithApollo(FillRateWeeklyList);
