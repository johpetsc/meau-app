import * as React from 'react';
import Usuario from '../pages/Usuario/Usuario';
import Animais from '../pages/Usuario/Animais';
import Processo from '../pages/Usuario/Processo';
import Pet from '../pages/Usuario/Pet';
import Oba from '../pages/Usuario/Oba';
import Interessados from '../pages/Usuario/Interessados';
import Stack from './SharedStack';
import {Image, TouchableOpacity, View} from 'react-native';
import {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const UserStack = createStackNavigator();

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

export default function UsuarioStack({navigation}) {
  return (
    <UserStack.Navigator initialRouteName="Usuario">
      <UserStack.Screen
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
      <UserStack.Screen
        name="Animais"
        component={Animais}
        options={{
          title: 'Meus Pets', //Set Header Title
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
      <UserStack.Screen
        name="Pet"
        component={Pet}
        options={{
          title: 'Pet', //Set Header Title
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
      <UserStack.Screen
        name="Interessados"
        component={Interessados}
        options={{
          title: 'Interessados', //Set Header Title
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
    </UserStack.Navigator>
  );
}
