// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Login
          </Text>
          <Button onPress={() => {}} title="Botao" />
          <Button onPress={() => {}} title="Botao" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
