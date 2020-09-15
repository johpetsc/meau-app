import * as React from 'react';
import NavigationDrawerStructure from '../components/NavigationDrawerStructure/NavigationDrawerStructure';
import CadastroPessoal from '../pages/CadastroPessoal/CadastroPessoal';
import Stack from './SharedStack';

export default function CadastroPessoalStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="CadastroPessoal">
      <Stack.Screen
        name="CadastroPessoal"
        component={CadastroPessoal}
        options={{
          title: 'Cadastro Pessoal', //Set Header Title
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
