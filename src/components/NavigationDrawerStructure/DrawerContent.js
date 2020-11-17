import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Dimensions, Image} from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import ExpandableList from './ExpandableList'
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

export default function CustomDrawerContent(props){
  const onButtonPress = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
    return(
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: '#88c9bf'}}>
          <View style={{paddingTop: 30, paddingLeft: 10, paddingBottom: 20}}>
            <Image
              source={require('../../images/Meau_Icone.png')}
              style={styles.imagem}
            />
          </View>
            <ExpandableList color = {styles.headerUser}categoria = {'Nome usuario'}lista = {<DrawerItemList {...props} />}/>
            <ExpandableList color = {styles.headerAtalhos}categoria = {'Atalhos'}lista = {<DrawerItemList {...props} />}/>
            <TouchableOpacity onPress={() => onButtonPress()}>
              <Text style={styles.textomenor}>Sair</Text>
            </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    )
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
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "black"
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