import 'react-native-gesture-handler';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerRouter from './routes/DrawerRouter';

function App() {
  return (
    <NavigationContainer>
      <DrawerRouter />
    </NavigationContainer>
  );
}

export default App;
