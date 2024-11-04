import { View, ActivityIndicator } from 'react-native';
import React from 'react';

interface PropsFooter {
  loader: boolean;
}

const FooterList = ({ loader }: PropsFooter) => {
  if (!loader) return null;
  return (
    <View>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default FooterList;
