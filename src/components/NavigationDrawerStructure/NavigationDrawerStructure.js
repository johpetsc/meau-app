import {Image, TouchableOpacity, View} from 'react-native';
import * as React from 'react';

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
          source={require('../../images/menu-icon.png')}
          style={{width: 24, height: 24, marginLeft: 16}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationDrawerStructure;
