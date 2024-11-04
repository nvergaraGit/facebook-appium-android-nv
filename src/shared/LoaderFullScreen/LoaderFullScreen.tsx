import { View, ActivityIndicator } from 'react-native';
import React from 'react';
type properties = {
  left?: number;
  bottom?: number;
};

const LoaderFullScreen = (props: properties) => {
  const { bottom = 50, left = 45 } = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          left: `${left}%`,
          bottom: `${bottom}%`,
          position: 'absolute',
          zIndex: 9,
          elevation: 9,
        }}
      >
        <ActivityIndicator size="large" color="red" />
      </View>
    </View>
  );
};

export default LoaderFullScreen;
