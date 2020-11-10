import * as React from 'react';
import NavigationDrawerStructure from '../components/NavigationDrawerStructure/NavigationDrawerStructure';
import Adotar from '../pages/Adotar/Adotar';
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
    </Stack.Navigator>
  );
}
