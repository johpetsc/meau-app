import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextBox from '../../components/TextBoxComponents/TextBox';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

const Login = ({navigation}) => {
  const [dados, setDados] = useState({
    'e-mail': '',
    password: '',
  });

  const onButtonPress = () => {
    auth()
      .signInWithEmailAndPassword(dados['e-mail'], dados.password)
      .then(() => {
        const user = auth().currentUser;
        messaging()
          .subscribeToTopic('user_' + user.uid)
          .then(() => console.log('Subscribed to the topic!'));
        navigation.navigate('Usuario');
        console.log('User signed in!');
      })
      .catch((error) => {
        navigation.navigate('LoginErro');
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const handleChange = (value, nome) =>
    setDados((prevState) => ({...prevState, [nome]: value}));

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.inputContainer}>
        <TextBox
          campo={'Nome de usuário'}
          dado={dados['e-mail']}
          handleChange={handleChange}
          icone={''}
          nome={'e-mail'}
        />
        <TextBox
          campo={'Senha'}
          dado={dados.password}
          handleChange={handleChange}
          icone={''}
          nome={'password'}
          seguro={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress()}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.facebookbutton}>
          <Icon name={'facebook'} size={20} color={'#f7f7f7'} />
          <Text style={styles.buttonTextWhite}> ENTRAR COM FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googlebutton}>
          <Icon name={'google-'} size={20} color={'#f7f7f7'} />
          <Text style={styles.buttonTextWhite}> ENTRAR COM GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#88c9bf',
    width: 232,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  inputContainer: {
    marginTop: 64,
    marginBottom: 58,
  },
  socialContainer: {
    marginTop: 72,
    marginBottom: 8,
  },
  googlebutton: {
    backgroundColor: '#f15f5c',
    marginTop: 8,
    width: 232,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    flexDirection: 'row',
  },
  facebookbutton: {
    backgroundColor: '#194f7c',
    width: 232,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    flexDirection: 'row',
  },
  buttonText: {
    color: '#434343',
    fontFamily: 'roboto',
    fontSize: 12,
  },
  buttonTextWhite: {
    color: '#f7f7f7',
    fontFamily: 'roboto',
    fontSize: 12,
  },
});

export default Login;
