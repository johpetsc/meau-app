import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

async function fetchUser() {
  const user = auth().currentUser;
  const userDocument = await firestore()
    .collection('usuarios')
    .doc(user.uid)
    .get()
    .then((documentSnapshot) => {
      console.log(documentSnapshot.data().imageRef);
      return documentSnapshot.data();
    });
  try{
    if (userDocument.imageRef) {
      console.log(userDocument.imageRef);
      const url = await storage().ref(userDocument.imageRef).getDownloadURL();
      userDocument.imageRef = url
    }
    }catch(e){
      console.log(e)
    }
    console.log(userDocument.imageRef)
  return userDocument;
}

const userDocument = fetchUser();
const user = auth().currentUser;

const Usuario = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.separator} />
      <Image
          source={{uri: userDocument._W?.imageRef} || require('../../images/Meau_Icone.png')}
          style={styles.imagem}
        />
      <View style={styles.separator} />
      <Text style={styles.usertexto}>{userDocument._W?.email}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.separator} />
        <Text style={styles.texto}>NOME COMPLETO</Text>
        <Text style={styles.textomenor}>{userDocument._W?.nome}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>IDADE</Text>
        <Text style={styles.textomenor}>{userDocument._W?.idade}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>EMAIL</Text>
        <Text style={styles.textomenor}>{user.email}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>LOCALIZAÇÃO</Text>
        <Text style={styles.textomenor}>{userDocument._W?.cidade}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>ENDEREÇO</Text>
        <Text style={styles.textomenor}>{userDocument._W?.endereco}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>TELEFONE</Text>
        <Text style={styles.textomenor}>{userDocument._W?.telefone}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>NOME DE USUÁRIO</Text>
        <Text style={styles.textomenor}>{userDocument._W?.nome}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Animais')}>
        <Text style={styles.buttonText}>EDITAR PERFIL</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
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
  texto: {
    padding: 0,
    fontSize: 15,
    fontFamily: 'Roboto',
    color: 'lightgray',
    alignSelf: 'center',
  },
  textomenor: {
    padding: 0,
    fontSize: 15,
    fontFamily: 'Roboto',
    color: 'black',
    alignSelf: 'center',
  },
  usertexto: {
    padding: 0,
    fontSize: 17,
    fontFamily: 'Roboto',
    color: 'black',
    alignSelf: 'center',
  },
  imagem: {
    width: 150, 
    height: 150, 
    alignSelf: 'center', 
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "black"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#73737300',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  socialContainer: {
    marginTop: 72,
    marginBottom: 8,
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
