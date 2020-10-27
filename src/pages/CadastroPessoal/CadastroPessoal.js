import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextBox from '../../components/TextBoxComponents/TextBox';
import Icon from 'react-native-vector-icons/EvilIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const CadastroPessoal = ({navigation}) => {
  const [dados, setDados] = useState({
    nome: '',
    idade: '',
    cidade: '',
    endereco: '',
    estado: '',
    telefone: '',
    'e-mail': '',
  });

  const [credenciais, setCredenciais] = useState({
    username: '',
    password: '',
    confirm: '',
  });

  const onButtonPress = () => {
    auth().createUserWithEmailAndPassword(credenciais.username, credenciais.password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
    firestore()
      .collection('usuarios')
      .add({
        dados,
      })
      .then(() => {
        console.log('User added!');
      });
  };
  const handleChange = (value, nome) =>
    setDados((prevState) => ({...prevState, [nome]: value}));

  const handleSignUp = (value, nome) =>
    setCredenciais((prevState) => ({...prevState, [nome]: value}));

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>
            As informações preenchidas serão divulgadas apenas para a pessoa com
            a qual você realizar o processo de adoção e/ou apadrinhamento, após
            a formalização de processo.
          </Text>
        </View>
        <View>
          <Text style={styles.text}>INFORMAÇÕES PESSOAIS</Text>
        </View>
        <View>
          <TextBox
            campo={'Nome completo'}
            dado={dados.nome}
            handleChange={handleChange}
            icone={''}
            nome={'nome'}
          />
        </View>
        <View>
          <TextBox
            campo={'Idade'}
            dado={dados.idade}
            handleChange={handleChange}
            icone={''}
            nome={'idade'}
          />
        </View>
        <View>
          <TextBox
            campo={'E-mail'}
            dado={dados.email}
            handleChange={handleChange}
            icone={''}
            nome={'email'}
          />
        </View>
        <View>
          <TextBox
            campo={'Estado'}
            dado={dados.estado}
            handleChange={handleChange}
            icone={''}
            nome={'estado'}
          />
        </View>
        <View>
          <TextBox
            campo={'Cidade'}
            dado={dados.cidade}
            handleChange={handleChange}
            icone={''}
            nome={'cidade'}
          />
        </View>
        <View>
          <TextBox
            campo={'Endereço'}
            dado={dados.endereco}
            handleChange={handleChange}
            icone={''}
            nome={'endereco'}
          />
        </View>
        <View>
          <TextBox
            campo={'Telefone'}
            dado={dados.telefone}
            handleChange={handleChange}
            icone={''}
            nome={'telefone'}
          />
        </View>
        <View>
          <Text style={styles.text}>INFORMAÇÕES DE PERFIL</Text>
        </View>
        <View>
          <TextBox
            campo={'Nome de usuário'}
            dado={credenciais.username}
            handleChange={handleSignUp}
            icone={''}
            nome={'username'}
          />
        </View>
        <View>
          <TextBox
            campo={'Senha'}
            dado={credenciais.password}
            handleChange={handleSignUp}
            icone={''}
            nome={'password'}
            seguro={true}
          />
        </View>
        <View>
          <TextBox
            campo={'Confirmação de Senha'}
            dado={credenciais.confirm}
            handleChange={handleSignUp}
            icone={''}
            nome={'confirm'}
            seguro={true}
          />
        </View>
        <View>
          <Text style={styles.text}>FOTO DE PERFIL</Text>
        </View>
        <TouchableOpacity style={styles.picture}>
          <Icon name={'plus'} size={24} color={'#757575'} />
          <Text style={styles.pictureText}>adicionar foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onButtonPress()}>
          <Text style={styles.buttonText}>FAZER CADASTRO</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#B1B1B1',
    marginTop: 12,
    marginLeft: 16,
  },
  messageText: {
    fontSize: 14,
    color: '#434343',
    fontFamily: 'roboto',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#88c9bf',
    marginBottom: 24,
    marginLeft: 45,
    width: Dimensions.get('window').width - 90,
    height: 50,
    alignItems: 'center',
    paddingTop: 15,
    elevation: 5,
  },
  picture: {
    backgroundColor: '#e6e7e7',
    margin: 32,
    width: 128,
    height: 128,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 40,
    elevation: 5,
  },
  pictureText: {
    color: '#757575',
    fontFamily: 'roboto',
    fontSize: 14,
  },
  buttonText: {
    color: '#434343',
    fontFamily: 'roboto',
    fontSize: 14,
  },
  messageBox: {
    backgroundColor: '#cfe9e5',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 16,
    height: 80,
    width: 321,
    borderRadius: 5,
    alignSelf: 'center',
  },
});
export default CadastroPessoal;
