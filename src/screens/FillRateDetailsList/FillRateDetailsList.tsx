/* eslint-disable @typescript-eslint/no-floating-promises */
import { FlatList, RefreshControl } from 'react-native';
import React, { useState } from 'react';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import getFillRateOcDetails from '@graphql/queries/getFillRateOcDetails';
import { useLazyQuery } from '@apollo/client';
import {
  ContainerResult,
  MainContainerStatic,
  TextNoResults,
  TextTitleGothamBoldBlack,
  TextTitleGothamMediumBlack,
} from '@styles/sharedStyles';
import SearchInput from '@components/SearchInput/SearchInput';
import { TextTitleCode } from './styles';
import FillRateOrderCard from '@components/FillRateOrderCard/FillRateOrderCard';
import NoResults from '@components/NoResults/NoResults';
import EmptyImageSadFace from '@assets/icons/empty-image-details-sales.svg';
import WithApollo from '@components/hocs/WithApollo';
import LoaderChangeScreen from '@shared/LoaderChangeScreen/LoaderChangeScreen';
import { FIllRateOcDetails, FillRateStackParamList, OcListFillRate } from 'types/fillRate';

type Props = StackScreenProps<FillRateStackParamList, 'FillRateDetailsList'>;

const FillRateDetailsList = ({ route }: Props) => {
  const { ocFillRateList, salesFloor } = route.params;
  const [getFillRateOcData, { loading: loadingOcData }] = useLazyQuery(getFillRateOcDetails, {
    fetchPolicy: 'network-only',
  });

  const updatedData = ocFillRateList.map((obj) => {
    if (
      obj.status.includes('Motivo de no entrega') ||
      obj.status.includes('Motivos de no entrega')
    ) {
      obj.status = obj.status.replace(/^\d+\s/, ''); // Remueve el número y el espacio al inicio del texto
    }
    return obj;
  });

  const compareStatus = (a: { status: string }, b: { status: string }): number => {
    const statusOrder: { [key: string]: number } = {
      'Motivo de no entrega': 0,
      'Motivos de no entrega': 1,
      'No Entregado': 2,
      Rechazo: 3,
      Entregado: 4,
    };

    return statusOrder[a.status] - statusOrder[b.status];
  };

  const sortedData = updatedData.sort(compareStatus);

  const navigation = useNavigation<StackNavigationProp<FillRateStackParamList>>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [noResult, setNoResult] = useState<boolean>(false);
  const [filRateSearchCharacters, setFilRateSearchCharacters] = useState<string>('');
  const [filRateOcList, setFilRateOcList] = useState<OcListFillRate[]>(sortedData);
  const handled = () => {
    navigation.goBack();
  };

  const handleChangeSearchInput = (text: string) => {
    if (text.length > 3) {
      setFilRateSearchCharacters(text);
      const list = ocFillRateList.filter((item) => item.oc.includes(text));
      setFilRateOcList(list);
      setNoResult(list.length > 0 ? false : true);
    } else {
      setFilRateSearchCharacters(text);
      setNoResult(false);
      setFilRateOcList(ocFillRateList);
    }
  };

  const showFilter = () => {
    console.log('showFilter');
  };

  const goOcFillRateDetail = (item: OcListFillRate) => {
    getFillRateOcData({
      variables: {
        getFullRateDetailsInput: {
          orderId: item.oc,
        },
      },
      onCompleted: (data: FIllRateOcDetails) => {
        navigation.navigate('FillRateDetail', {
          data: data.getFillrateDetails.data,
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

  return (
    <>
      <HeaderDetailScreenNavigation title="Fill Rate" goBack={() => handled()} />
      <MainContainerStatic>
        <TextTitleCode style={{ marginTop: 10 }}>Código: {salesFloor.codClient}</TextTitleCode>
        <TextTitleGothamBoldBlack style={{ marginTop: 3 }}>
          {salesFloor.csalaSupermercado}
        </TextTitleGothamBoldBlack>
        <TextTitleGothamMediumBlack style={{ marginTop: 10 }}>
          Fill Rate semanal
        </TextTitleGothamMediumBlack>
        <SearchInput
          placeholder="Búsqueda de ordenes"
          value={filRateSearchCharacters}
          onSearch={(text) => handleChangeSearchInput(text)}
          showFilter
          onFilter={showFilter}
        />
        {noResult ? (
          <NoResults icon={<EmptyImageSadFace />}>
            <TextNoResults textImportant>Búsqueda sin coincidencias</TextNoResults>
            <TextNoResults> Inténtalo nuevamente</TextNoResults>
          </NoResults>
        ) : (
          <ContainerResult>
            {loadingOcData && <LoaderChangeScreen bottom={50} />}
            <FlatList
              data={filRateOcList}
              renderItem={({ item }) => {
                return (
                  <FillRateOrderCard
                    params={{ item: item }}
                    onNext={() => goOcFillRateDetail(item)}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
          </ContainerResult>
        )}
      </MainContainerStatic>
    </>
  );
};

export default WithApollo(FillRateDetailsList);
