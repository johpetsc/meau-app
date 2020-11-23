import * as React from 'react';
import NavigationDrawerStructure from '../components/NavigationDrawerStructure/NavigationDrawerStructure';
import Adotar from '../pages/Adotar/Adotar';
import Animal from '../pages/Adotar/Animal'
import Stack from './SharedStack';

export default function AdotarStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Adotar">
      <Stack.Screen
        name="Adotar"
        component={Adotar}
        options={{
          title: 'Adotar', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#ffd358', //Set Header color
          },
          headerTintColor: '#434343', //Set Header text color
          headerTitleStyle: {
            fontWeight: '500', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Animal"
        component={Animal}
        options={{
          title: 'Animal', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#ffd358', //Set Header color
          },
          headerTintColor: '#434343', //Set Header text color
          headerTitleStyle: {
            fontWeight: '500', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
