/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/unbound-method */
import { GRAPHQL_BACKEND_URL } from '@env';
import { useAppContext } from '@context/state';
import { DownloadReportsContainer } from './styles';
import WithApollo from '@components/hocs/WithApollo';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import DownloadReportsCardFiles from '@components/DownloadReportsCardFiles/DownloadReportsCardFiles';
import { fileDownloader } from '@utils/fileDownloader';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'DownloadReports'>;

const DownloadReports = ({ route }: Props) => {
  const { auth } = useAppContext();
  const { reportsData } = route.params;
  const [loadingDownload, setLoadingDownload] = useState<boolean>();
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();

  const downloadFile = async (trackingId: number) => {
    const urlBackend = GRAPHQL_BACKEND_URL;
    const urlDomain = urlBackend?.split('/graphql')[0];
    const urlDownload = `${urlDomain}/product/tracking-report?trackingId=${trackingId}&executive=${
      auth?.name as string
    }`;
    setLoadingDownload(true);
    await fileDownloader(urlDownload, 'Tracking General.pdf');
    setLoadingDownload(false);
  };

  return (
    <DownloadReportsContainer>
      {loadingDownload ? (
        <LoaderFullScreen />
      ) : (
        <>
          <HeaderDetailScreenNavigation
            title="Informes de visita"
            goBack={() => navigation.goBack()}
          />
          <FlatList
            data={reportsData}
            renderItem={({ item }) => {
              return (
                <DownloadReportsCardFiles
                  title={item.trackingDate}
                  id={item.trackingId}
                  selectFiles={(id: number) => downloadFile(id)}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}
    </DownloadReportsContainer>
  );
};

export default WithApollo(DownloadReports);
