import React from 'react';
import { View } from 'react-native';
import Themes from '@styles/themes';
import MainContainer from './MainContainer';
import { ContextWrapper } from './src/context/state';

function App(): JSX.Element {  
  return (
    <View style={{ flex: 1 }}>
      <Themes>
        <ContextWrapper>
          <MainContainer />
        </ContextWrapper>
      </Themes>
    </View>
  );
}

export default App;
