import * as React from 'react';
import NavigationDrawerStructure from '../components/NavigationDrawerStructure/NavigationDrawerStructure';
import CadastroAnimal from '../pages/CadastroAnimal/CadastroAnimal';
import Stack from './SharedStack';

export default function CadastroAnimalStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="CadastroAnimal">
      <Stack.Screen
        name="CadastroAnimal"
        component={CadastroAnimal}
        options={{
          title: 'Cadastro do Animal', //Set Header Title
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
