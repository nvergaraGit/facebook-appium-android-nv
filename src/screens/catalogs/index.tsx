/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect } from 'react';
import WithApollo from '@components/hocs/WithApollo';
import { CatalogsContainer } from './styles';
import Header from '@components/Header/Header';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppContext } from '@context/state';
import { Cadena, CatalogParamList, TBranchWithCataloguesQuery } from 'types/catalogs';
import { useLazyQuery } from '@apollo/client';
import BanderaCard from '@components/BanderaCard';
import getBranchWithCatalogues from '@graphql/queries/getBranchWithCatalogues';
import { ContainerLoader, Loader, LoaderView } from '@screens/orders/styles';

const Catalogs = () => {
  const [branchWithCatalogue, setBranchWithCatalogue] = useState<Cadena[]>([]);
  /* eslint-disable-next-line @typescript-eslint/unbound-method*/
  const { setModalInternetConnection, isInternet } = useAppContext();
  const navigation = useNavigation<StackNavigationProp<CatalogParamList>>();

  const customOrder = ['WALMART', 'CENCOSUD', 'SMU', 'TOTTUS'];
  const [getBranchWithCataloguesQuery, { loading: loadingBranch }] = useLazyQuery(
    getBranchWithCatalogues,
    {
      fetchPolicy: 'network-only',
      onCompleted: (result: TBranchWithCataloguesQuery) => {
        const sortedData = result.getBranchsWithCatalogues.cadenas.sort((a, b) => {
          return customOrder.indexOf(a.nombre) - customOrder.indexOf(b.nombre);
        });
        setBranchWithCatalogue(sortedData);
      },
    },
  );

  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }

    getBranchWithCataloguesQuery();
    /* eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, []);

  const handleDetails = (nombre: string) => {
    navigation.navigate('DetailsCatalogue', {
      catalogue: nombre,
    });
  };

  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }

    /* eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, []);

  return (
    <CatalogsContainer>
      <Header title="Catálogos disponibles" />
      {!loadingBranch && (
        <FlatList
          data={branchWithCatalogue}
          renderItem={({ item, index }) => (
            <BanderaCard key={index} catalogs={item} handleDetails={handleDetails} />
          )}
          style={{ marginHorizontal: 10, marginTop: 32 }}
        />
      )}
      {loadingBranch && (
        <ContainerLoader>
          <LoaderView>
            <Loader />
          </LoaderView>
        </ContainerLoader>
      )}
    </CatalogsContainer>
  );
};

export default WithApollo(Catalogs);
