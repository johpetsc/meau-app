import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import ExpandableList from './ExpandableList'

export default function CustomDrawerContent(props){
    return(
      <DrawerContentScrollView {...props}>
        <View>
            <Avatar size='large' rounded title='JS' />
            <ExpandableList categoria = {'Nome usuario'}lista = {<DrawerItemList {...props} />}/>
            <ExpandableList categoria = {'Atalhos'}lista = {<DrawerItemList {...props} />}/>
        </View>
      </DrawerContentScrollView>
    )
}