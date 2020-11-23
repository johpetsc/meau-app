import * as React from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import LoginStack from './LoginStack';
import CadastroPessoalStack from './CadastroPessoalStack';
import CadastroAnimalStack from './CadastroAnimalStack';
import AdotarStack from './AdotarStack';
import UsuarioStack from './UsuarioStack';
import DrawerContent from '../components/NavigationDrawerStructure/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerRouter() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}>
      <Drawer.Screen
        name="Login"
        options={{drawerLabel: 'Login'}}
        component={LoginStack}
        initialParams={{logged: false}}
      />
      <Drawer.Screen
        name="CadastroPessoal"
        options={{drawerLabel: 'Cadastro Pessoal'}}
        component={CadastroPessoalStack}
        initialParams={{logged: false}}
      />
      <Drawer.Screen
        name="CadastroAnimal"
        options={{drawerLabel: 'Cadastro Animal'}}
        component={CadastroAnimalStack}
        initialParams={{logged: true}}
      />
      <Drawer.Screen
        name="Usuario"
        options={{drawerLabel: 'Usuario'}}
        component={UsuarioStack}
        initialParams={{logged: true}}
      />
      <Drawer.Screen
        name="AdotarStack"
        options={{drawerLabel: 'Adotar'}}
        component={AdotarStack}
        initialParams={{logged: true}}
      />
    </Drawer.Navigator>
  );
}
