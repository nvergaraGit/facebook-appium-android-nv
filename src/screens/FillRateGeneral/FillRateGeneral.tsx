/* eslint-disable @typescript-eslint/no-floating-promises */
import FillRateGeneral from '@components/FillRateGeneral/FillRateGeneral';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import {
  TFillRateChain,
  TQueryFillrateGeneral,
  TreasonNoDelivery,
  percentageMonthly,
  percentageWeekly,
} from 'types/fillRate';
import React, { useEffect, useState } from 'react';
import { MainContainer, TextNoResults } from '@styles/sharedStyles';
import {
  ContainerBody,
  ContainerList,
  ContainerNoDelivery,
  ContainerWrap,
  TextNoDelivery,
} from './style';
import { BackHandler, StatusBar } from 'react-native';
import ReasonNoDelivery from '@components/ReasonNoDelivery/ReasonNoDelivery';
import { nColums } from '@utils/iconNoDelivery';
import FillRateChain from '@components/FillRateChain/FillRateChain';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { useLazyQuery } from '@apollo/client';
import getFillrateGeneral from '@graphql/queries/getFillrateGeneral';
import WithApollo from '@components/hocs/WithApollo';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import NoResults from '@components/NoResults/NoResults';
import Trending from '@assets/icons/icon-fill-rate-menu.svg';

const FillRateGeneralScreen = () => {
  const navigation = useNavigation();

  const [titleFillRate, setTitleFillRate] = useState('General');
  const [dataWeek, setDataWeek] = useState<percentageWeekly | null>(null);
  const [dataMoth, setDataMonth] = useState<percentageMonthly | null>(null);
  const [reasonNoDelivery, setReasonNoDelivery] = useState<TreasonNoDelivery[]>([]);
  const [fillrateByChain, setFillrateByChain] = useState<TFillRateChain[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [showCadena, setShowCadena] = useState(true);
  const [msgError, setMsgError] = useState('');
  const [fillrateGeneralQuery, { loading, refetch }] = useLazyQuery(getFillrateGeneral, {
    onCompleted: (data: TQueryFillrateGeneral) => {
      if (data.getFillrateGeneral.data) {
        setDataWeek(data.getFillrateGeneral.data.percentageWeekly);
        setDataMonth(data.getFillrateGeneral.data.percentageMonthly);
        setReasonNoDelivery(data.getFillrateGeneral.data.reasonNoDelivery);
        setFillrateByChain(data.getFillrateGeneral.data.fillrateByChain);
        setRefresh(false);
      }
      if (data.getFillrateGeneral.error) setMsgError(data.getFillrateGeneral.error.details);
    },
  });

  useEffect(() => {
    void fillrateGeneralQuery({
      variables: {
        getFillRateGeneralInput: {
          cadena: null,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    refetch();
    setTimeout(() => {
      setRefresh(false);
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleItem = (reasonName: string) => {
    setTitleFillRate(reasonName);
    setShowCadena(false);
    void fillrateGeneralQuery({
      variables: {
        getFillRateGeneralInput: {
          cadena: reasonName,
        },
      },
    });
  };
  const displayCadena = () => {
    setShowCadena(true);
    setTitleFillRate('General');
    void fillrateGeneralQuery({
      variables: {
        getFillRateGeneralInput: {
          cadena: null,
        },
      },
    });
  };
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (!showCadena) {
          setShowCadena(true);
          setTitleFillRate('General');
          void fillrateGeneralQuery({
            variables: {
              getFillRateGeneralInput: {
                cadena: null,
              },
            },
          });
        } else {
          navigation.goBack();
        }
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showCadena, navigation]),
  );

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <MainContainer>
        <HeaderDetailScreenNavigation
          title={`Fill Rate ${titleFillRate}`}
          goBack={titleFillRate === 'General' ? () => navigation.goBack() : displayCadena}
        />

        {loading ? (
          <LoaderFullScreen />
        ) : dataWeek && dataMoth && reasonNoDelivery !== null ? (
          <ScrollView
            refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
          >
            <ContainerBody>
              <FillRateGeneral fillRateWeekly={dataWeek} fillRateMonthly={dataMoth} />
              <ContainerNoDelivery>
                <TextNoDelivery>Motivos de no entrega </TextNoDelivery>
              </ContainerNoDelivery>
              <ContainerWrap>
                {reasonNoDelivery
                  .slice()
                  .map((element) => ({
                    element,
                    columnIndex: nColums(element.reasonName) ? 0 : 1,
                  }))
                  .sort((a, b) => a.columnIndex - b.columnIndex)
                  .map(({ element }) => (
                    <ReasonNoDelivery reasonNoDelivery={element} key={element.reasonName} />
                  ))}
              </ContainerWrap>
              {showCadena && (
                <ContainerList>
                  <TextNoDelivery isChain style={{ paddingBottom: 14 }}>
                    Fill Rate por cadena
                  </TextNoDelivery>
                  <FillRateChain
                    fillrateChain={fillrateByChain}
                    handleItem={(id) => handleItem(id)}
                  />
                </ContainerList>
              )}
            </ContainerBody>
          </ScrollView>
        ) : (
          <ContainerBody>
            <NoResults icon={<Trending />}>
              <TextNoResults>{msgError.replace('Error gRPC Response', '').trim()} </TextNoResults>
            </NoResults>
          </ContainerBody>
        )}
      </MainContainer>
    </>
  );
};

export default WithApollo(FillRateGeneralScreen);
