/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
import { TExhibitions, TExhibitionsQuery } from 'types/exhibitions';
import React, { useEffect, useState } from 'react';
import ExhibitionsCard from '@components/ExhibitionsCard/ExhibitionsCard';
import { FlatList, RefreshControl } from 'react-native';
import { Container, ContainerList, ContainerLoader, Loader, LoaderView } from './Styles';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { useLazyQuery } from '@apollo/client';
import getExhibitionsByClient from '@graphql/queries/getExhibitionsByClient';
import WithApollo from '@components/hocs/WithApollo';
type Props = StackScreenProps<SalesFloorsDetailsStack, 'Exhibitions'>;
const AnnualExhibitions = ({ route }: Props) => {
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const { salesFloor } = route?.params ?? {};
  const [exhibitions, setExhibitions] = useState<TExhibitions[]>([]);

  const [getExhibitions, { loading, refetch }] = useLazyQuery(getExhibitionsByClient, {
    onCompleted: (result: TExhibitionsQuery) => {
      setExhibitions(result.getExhibitionsByClient.exhibitions);
    },
  });
  useEffect(() => {
    getExhibitions({
      variables: {
        codClient: salesFloor.codClient,
      },
    });
  }, []);
  const onRefresh = React.useCallback(() => {
    refetch();
  }, []);
  return (
    <Container>
      <HeaderDetailScreenNavigation title="Exhibiciones" goBack={() => navigation.goBack()} />
      {loading ? (
        <ContainerLoader>
          <LoaderView>
            <Loader />
          </LoaderView>
        </ContainerLoader>
      ) : (
        <ContainerList>
          <FlatList
            data={exhibitions}
            renderItem={({ item }) => <ExhibitionsCard exhibitions={item} />}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
          />
        </ContainerList>
      )}
    </Container>
  );
};

export default WithApollo(AnnualExhibitions);
