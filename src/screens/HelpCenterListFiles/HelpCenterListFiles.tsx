/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import SearchInput from '@components/SearchInput/SearchInput';
import { MenuStackParamList } from 'types/menu';
import { HelpCenterData, Document, Video } from 'types/helpCenter';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { HelpCenterListFilesContainerSearch, TextNoResults } from './Style';
import NoResults from '@components/NoResults/NoResults';
import EmptyImageSadFace from '@assets/icons/empty-image-details-sales.svg';
import HelpCenterCardFiles from '@components/HelpCenterCardFiles/HelpCenterCardFiles';
import { fileDownloader } from '@utils/fileDownloader';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';

type Props = StackScreenProps<MenuStackParamList, 'HelpCenterListFiles'>;

const HelpCenterListFiles = ({ route }: Props) => {
  const [filter, setFilter] = useState<string>('');
  const { typeFile, data } = route.params;
  const [files, setFiles] = useState<HelpCenterData>({
    documents: data.documents,
    videos: data.videos,
  });
  const [loadingDownload, setLoadingDownload] = useState(false);
  const navigation = useNavigation<StackNavigationProp<MenuStackParamList>>();

  const filterListFiles = (text: string) => {
    setFilter(text);
    if (typeFile === 'videos') {
      const filteredFilesVideos: Video[] = data.videos.filter((item) => {
        return item.title.toLowerCase().includes(text.toLowerCase());
      });
      setFiles({ videos: filteredFilesVideos, documents: [] });
    } else {
      const filteredFilesDocuments: Document[] = data.documents.filter((item) => {
        return item.title.toLowerCase().includes(text.toLowerCase());
      });
      setFiles({ videos: [], documents: filteredFilesDocuments });
    }
  };

  const navigateTo = async (typeFile: string, url: string) => {
    if (typeFile === 'videos') {
      navigation.navigate('HelpCenterFiles', { url });
    } else {
      setLoadingDownload(true);
      await fileDownloader(url);
      setLoadingDownload(false);
    }
  };

  return (
    <>
      {loadingDownload ? (
        <LoaderFullScreen />
      ) : (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <HeaderDetailScreenNavigation
            title="Centro de ayuda"
            goBack={() => navigation.goBack()}
          />
          <HelpCenterListFilesContainerSearch>
            <SearchInput
              placeholder={typeFile === 'videos' ? 'Buscar video...' : 'Buscar documento...'}
              value={filter}
              onSearch={(text) => filterListFiles(text)}
            />
          </HelpCenterListFilesContainerSearch>
          {typeFile === 'videos' ? (
            <>
              {files.videos.length === 0 ? (
                <NoResults icon={<EmptyImageSadFace />}>
                  <TextNoResults textImportant>No se encontraron videos relacionados</TextNoResults>
                  <TextNoResults>Intente hacer otra búsqueda</TextNoResults>
                </NoResults>
              ) : (
                files.videos.map((item, index) => (
                  <HelpCenterCardFiles
                    title={item.title}
                    key={index}
                    typeFile={typeFile}
                    firstElement={index}
                    url={item.link}
                    time={item.duration}
                    selectFiles={(type, url) => navigateTo(type, url)}
                  />
                ))
              )}
            </>
          ) : (
            <>
              {files.documents.length === 0 ? (
                <NoResults icon={<EmptyImageSadFace />}>
                  <TextNoResults textImportant>
                    No se encontraron documentos relacionados
                  </TextNoResults>
                  <TextNoResults>Intente hacer otra búsqueda</TextNoResults>
                </NoResults>
              ) : (
                files.documents.map((item, index) => (
                  <HelpCenterCardFiles
                    title={item.title}
                    key={index}
                    typeFile={typeFile}
                    firstElement={index}
                    url={item.link}
                    selectFiles={(type, url) => navigateTo(type, url)}
                  />
                ))
              )}
            </>
          )}
        </View>
      )}
    </>
  );
};

export default HelpCenterListFiles;
