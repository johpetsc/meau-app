import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import ExpandableList from './ExpandableList';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {useContext, useEffect, useState} from 'react';
import UserData from '../../contexts/UserData';

export default function CustomDrawerContent(props) {
  const [itemList, setItemList] = useState(props.state);
  const [itemListAtalho, setItemListAtalho] = useState(props.state);
  const [rest, setRest] = useState(props);
  const [userData] = useContext(UserData);

  useEffect(() => {
    const {state, ...others} = props;
    const newState = {...state};
    const newStateAtalho = {...state};
    if (userData.id) {
      newState.routes = newState.routes.filter(
        (item) => item.params.logged && !item.params.atalho,
      );
      newStateAtalho.routes = newStateAtalho.routes.filter(
        (item) => item.params.logged && item.params.atalho,
      );
    } else {
      newState.routes = newState.routes.filter(
        (item) => !item.params.logged && !item.params.atalho,
      );
      newStateAtalho.routes = newStateAtalho.routes.filter(
        (item) => !item.params.logged && item.params.atalho,
      );
    }
    setItemList({...newState});
    setItemListAtalho({...newStateAtalho});
    setRest(others);
  }, [props, userData]);

  const onButtonPress = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        props.navigation.navigate('Login');
      });
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#88c9bf'}}>
        <View style={{paddingTop: 30, paddingLeft: 10, paddingBottom: 20}}>
          <Image
            source={
              {uri: userData.imageRef} || require('../../images/Meau_Icone.png')
            }
            style={styles.imagem}
          />
        </View>
        <ExpandableList
          color={styles.headerUser}
          categoria={userData.nome || 'Bem-Vindo!'}
          lista={<DrawerItemList state={itemList} {...rest} />}
        />
        <ExpandableList
          color={styles.headerAtalhos}
          categoria={'Atalhos'}
          lista={<DrawerItemList state={itemListAtalho} {...rest} />}
        />
        <TouchableOpacity onPress={() => onButtonPress()}>
          <Text style={styles.textomenor}>Sair</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  textomenor: {
    paddingTop: 100,
    fontSize: 17,
    height: 600,
    fontFamily: 'Roboto',
    color: 'black',
    alignSelf: 'center',
  },
  imagem: {
    padding: 1,
    width: 60,
    height: 60,
    alignSelf: 'flex-start',
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  headerUser: {
    backgroundColor: '#88c9bf',
    paddingTop: 20,
    paddingBottom: 20,
    padding: 16,
  },
  headerAtalhos: {
    backgroundColor: '#ffd35880',
    paddingTop: 20,
    paddingBottom: 20,
    padding: 16,
  },
});
