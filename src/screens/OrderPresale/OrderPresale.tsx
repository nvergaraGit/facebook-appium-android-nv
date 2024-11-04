/* eslint-disable @typescript-eslint/no-floating-promises */
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import HeaderNameCodeSalesFloor from '@shared/HeaderNameCodeSalesFloor/HeaderNameCodeSalesFloor';
import React, { useEffect, useState } from 'react';
import { OrdersPresaleTitleList } from './Styles';
import { ContainerScreen, TextNoResults } from '@styles/sharedStyles';
import { IPresale, IResponsePresale } from 'types/orderPresale';
import EmptyImage from '@assets/icons/empty-image-sales.svg';
import NoResults from '@components/NoResults/NoResults';
import { useLazyQuery } from '@apollo/client';
import getPresales from '@graphql/queries/getPresales';
import WithApollo from '@components/hocs/WithApollo';
import moment from 'moment';

import DetailsOrderPresale from '@components/DetailsOrderPresale';
import FooterAbsolute from '@shared/FooterAbsolute/FooterAbsolute';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'OrderPresale'>;
const OrderPresale = ({ route }: Props) => {
  const { salesFloor } = route.params;
  console.log('valor de salesFloor ORDERS', salesFloor);
  const [data, setData] = useState<Array<IPresale>>([]);
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/unbound-method

  const [getPresalesInfo, { loading, refetch }] = useLazyQuery(getPresales, {
    onCompleted: (data: IResponsePresale) => {
      setData(data.getPresales.presales);
      setRefreshing(false);
    },
  });
  const handleItem = (item: IPresale) => {
    navigation.navigate('ProductsPresale', { oc: item.oc, salesFloor: salesFloor });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 200);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void getPresalesInfo({
      variables: {
        getPresalesInput: {
          date: moment().format('YYYYMMDD'),
          codClient: String(salesFloor.codClient),
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderDetailScreenNavigation title="OCs Facturadas" goBack={() => navigation.goBack()} />
      <ContainerScreen>
        <HeaderNameCodeSalesFloor name={salesFloor.csalaSupermercado} code={salesFloor.codClient} />
        <OrdersPresaleTitleList>OCs Facturadas de hoy</OrdersPresaleTitleList>
        {data.length === 0 && !loading && (
          <NoResults icon={<EmptyImage />}>
            <TextNoResults textImportant>Búsqueda sin coincidencias</TextNoResults>
            <TextNoResults> Inténtalo nuevamente</TextNoResults>
          </NoResults>
        )}
        {loading && <FooterAbsolute loader={loading} />}
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <DetailsOrderPresale presale={item} handleItem={() => handleItem(item)} />
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      </ContainerScreen>
    </>
  );
};

export default WithApollo(OrderPresale);
