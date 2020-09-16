import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.message}>Ops!</Text>
      <View>
        <Text style={styles.text}>Você não pode realizar esta ação sem possuir um cadastro.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondPage')}>
            <Text style={styles.buttonText}>FAZER CADASTRO</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>Já possui cadastro?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>FAZER LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#88c9bf',
    marginTop: 16,
    marginBottom: 44,
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
  text:{
    color: '#757575',
    fontSize: 14,
    fontFamily: 'roboto',
    textAlign: 'center'

  },
  message:{
    color: '#88c9bf',
    margin: 52,
    alignSelf: 'center',
    fontFamily: 'roboto',
    fontSize: 53
  },
});

export default Login;
