import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import DrawerRouter from './routes/DrawerRouter';
import UserData from './contexts/UserData';
import auth from '@react-native-firebase/auth';
import fetchUser from './pages/Login/fetchUser';

function App() {
  const [state, setState] = useState({});

  async function onAuthStateChanged(user) {
    if (user) {
      fetchUser(user.uid).then((res) => {
        setState({...res, username: user.email});
      });
    } else {
      setState({});
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

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
