import * as React from 'react';
import Login from '../pages/Login/Login';
import LoginErro from '../pages/Login/LoginErro';
import Usuario from '../pages/Usuario/Usuario';
import Stack from './SharedStack';
import {Image, TouchableOpacity, View} from 'react-native';

const NavigationDrawerStructure = (props) => {
  //Structure for the navigation Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donut Button Image */}
        <Image
          source={require('../images/menu-icon.png')}
          style={{width: 24, height: 24, marginLeft: 16}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default function LoginStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#cfe9e5', //Set Header color
          },
          headerTintColor: '#434343', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="LoginErro"
        component={LoginErro}
        options={{
          title: 'Login', //Set Header Title
          headerStyle: {
            backgroundColor: '#cfe9e5', //Set Header color
          },
          headerTintColor: '#434343', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Usuario"
        component={Usuario}
        options={{
          title: 'Usuario', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#cfe9e5', //Set Header color
          },
          headerTintColor: '#434343', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
