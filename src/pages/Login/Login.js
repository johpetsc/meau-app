// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextBox from '../../components/TextBoxComponents/TextBox';
import Icon from 'react-native-vector-icons/Entypo';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.inputContainer}>
        <TextBox
          campo={'Nome de usuário'}
          icone={''}
        />
        <TextBox
          campo={'Senha'}
          icone={''}
          seguro={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginErro')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.facebookbutton}>
          <Icon name={'facebook'} size={20} color={'#f7f7f7'}/>
          <Text style={styles.buttonTextWhite}>    ENTRAR COM FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googlebutton}>
          <Icon name={'google-'} size={20} color={'#f7f7f7'}/>
          <Text style={styles.buttonTextWhite}>    ENTRAR COM GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#88c9bf',
    width: 232,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  inputContainer:{
    marginTop: 64,
    marginBottom: 58
  },
  socialContainer:{
    marginTop: 72,
    marginBottom: 8
  },
  googlebutton:{
    backgroundColor: '#f15f5c',
    marginTop: 8,
    width: 232,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    flexDirection: 'row'
  },
  facebookbutton:{
    backgroundColor: '#194f7c',
    width: 232,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    flexDirection: 'row'
  },
  buttonText:{
    color: '#434343',
    fontFamily: 'roboto',
    fontSize: 12
  },
  buttonTextWhite:{
    color: '#f7f7f7',
    fontFamily: 'roboto',
    fontSize: 12
  },
});

export default Login;
