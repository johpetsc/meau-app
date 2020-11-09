import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

async function fetchUser(){
  const user = auth().currentUser;
  const userDocument = await firestore().collection('usuarios')
             .doc(user.uid).get()
             .then(documentSnapshot => {
                return documentSnapshot.data()});

  return userDocument;
}

const userDocument = fetchUser()
const dados = userDocument

const Usuario = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.inputContainer}>
            <View style={styles.separator} />
            <Text style={styles.texto}>NOME COMPLETO</Text>
            <Text style={styles.textoMenor}>{userDocument._W?.nome}</Text>
            <View style={styles.separator} />
            <Text style={styles.texto}>IDADE</Text>
            <Text style={styles.textoMenor}>{userDocument._W?.idade}</Text>
            <View style={styles.separator} />
            <Text style={styles.texto}>EMAIL</Text>
            <Text style={styles.textoMenor}>{userDocument._W?.["e-mail"]}</Text>
            <View style={styles.separator} />
            <Text style={styles.texto}>LOCALIZAÇÃO</Text>
            <Text style={styles.textoMenor}>{userDocument._W?.cidade}</Text>
            <View style={styles.separator} />
            <Text style={styles.texto}>ENDEREÇO</Text>
            <Text style={styles.textoMenor}>{userDocument._W?.endereco}</Text>
            <View style={styles.separator} />
            <Text style={styles.texto}>TELEFONE</Text>
            <Text style={styles.textoMenor}>{userDocument._W?.telefone}</Text>
            <View style={styles.separator} />
            <Text style={styles.texto}>NOME DE USUÁRIO</Text>
            <Text style={styles.textoMenor}>{userDocument._W?.nome}</Text>
      </View>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('CadastroPessoal')}>
        <Text style={styles.buttonText}>EDITAR PERFIL</Text>
      </TouchableOpacity>
    </ScrollView>
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
texto:{
    padding: 0,
    fontSize: 15,
    fontFamily: 'Roboto',
    color: 'lightgray',
    alignSelf: "center",
},
container: {
    flex: 1,
    marginTop: 10,
},
separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
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

export default Usuario;