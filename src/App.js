import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import DrawerRouter from './routes/DrawerRouter';
import UserData from './contexts/UserData';

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return (
    <UserData.Provider value={[state, setState]}>
      <NavigationContainer>
        <DrawerRouter />
      </NavigationContainer>
    </UserData.Provider>
  );
}

export default App;
