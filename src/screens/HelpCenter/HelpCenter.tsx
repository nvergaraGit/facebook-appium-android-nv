/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/unbound-method */
import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useAppContext } from '@context/state';
import { MenuStackParamList } from 'types/menu';
import WithApollo from '@components/hocs/WithApollo';
import { useNavigation } from '@react-navigation/native';
import { HelpCenterCategories } from '@utils/HelpCenter';
import getHelpFiles from '@graphql/queries/getHelpFiles';
import { StackNavigationProp } from '@react-navigation/stack';
import { HelpCenterResponse, HelpCenterData } from 'types/helpCenter';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import HelpCenterCard from '@components/HelpCenterCard/HelpCenterCard';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import { HelpCenterContainer, HelpCenterCardContainer } from './style';
import { StatusBar } from 'react-native';

const HelpCenter = () => {
  const [dataInfo, setDataInfo] = useState<HelpCenterData>({ documents: [], videos: [] });
  const navigation = useNavigation<StackNavigationProp<MenuStackParamList>>();
  const { setModalInternetConnection, isInternet } = useAppContext();

  const [getHelpFilesInfo, { loading }] = useLazyQuery(getHelpFiles, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }

    getHelpFilesInfo({
      onCompleted: (data: HelpCenterResponse) => {
        const dataVideos = data.getHelpDocuments.data.videos;
        const dataDocuments = data.getHelpDocuments.data.documents;

        HelpCenterCategories[0].qty = dataVideos.length;
        HelpCenterCategories[1].qty = dataDocuments.length;
        setDataInfo(data.getHelpDocuments.data);
      },
    });
    /*eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  const navigateTo = (typeFile: string) => {
    navigation.navigate('HelpCenterListFiles', { typeFile, data: dataInfo });
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HelpCenterContainer>
        <HeaderDetailScreenNavigation title="Centro de ayuda" goBack={() => navigation.goBack()} />

        {loading && isInternet ? <LoaderFullScreen /> : null}

        {!loading && (
          <HelpCenterCardContainer style={{ paddingHorizontal: 18, marginTop: 20 }}>
            {HelpCenterCategories.map((item, index) => (
              <HelpCenterCard
                image={item.image}
                key={index}
                selectCategory={(type) => navigateTo(type)}
                title={item.title}
                typeFile={item.typeFile}
                qty={item.qty}
              />
            ))}
          </HelpCenterCardContainer>
        )}
      </HelpCenterContainer>
    </>
  );
};

export default WithApollo(HelpCenter);
