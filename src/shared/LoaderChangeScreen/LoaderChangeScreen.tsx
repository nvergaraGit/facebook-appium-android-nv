import { View, ActivityIndicator } from 'react-native';
import React from 'react';

type properties = {
  left?: number;
  bottom?: number;
};

const LoaderChangeScreen = (props: properties) => {
  const { bottom = 90, left = 45 } = props;
  return (
    <View
      style={{
        position: 'absolute',
        left: `${left}%`,
        bottom: `${bottom}%`,
        zIndex: 9,
        elevation: 9,
      }}
    >
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default LoaderChangeScreen;
