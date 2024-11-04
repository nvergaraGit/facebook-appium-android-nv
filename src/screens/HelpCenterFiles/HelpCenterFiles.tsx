import React, { useState } from 'react';
import Video from 'react-native-video';
import { View } from 'react-native';
import { MenuStackParamList } from 'types/menu';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<MenuStackParamList, 'HelpCenterFiles'>;

const HelpCenterFiles = ({ route }: Props) => {
  const [loadingDownload, setLoadingDownload] = useState(true);
  const { url } = route.params;

  const handleOnLoad = () => {
    setLoadingDownload(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {loadingDownload && <LoaderFullScreen />}
      <Video
        style={{ flex: 1 }}
        resizeMode="cover"
        controls
        onLoad={handleOnLoad}
        source={{ uri: url }}
      />
    </View>
  );
};

export default HelpCenterFiles;
