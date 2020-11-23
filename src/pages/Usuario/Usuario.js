import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UserData from '../../contexts/UserData';

const Usuario = ({navigation}) => {
  const [userData] = useContext(UserData);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.separator} />
      <Image
        source={
          {uri: userData.imageRef} || require('../../images/Meau_Icone.png')
        }
        style={styles.imagem}
      />
      <View style={styles.separator} />
      <Text style={styles.usertexto}>{userData.username}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.separator} />
        <Text style={styles.texto}>NOME COMPLETO</Text>
        <Text style={styles.textomenor}>{userData.nome}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>IDADE</Text>
        <Text style={styles.textomenor}>{userData.idade}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>EMAIL</Text>
        <Text style={styles.textomenor}>{userData.email}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>LOCALIZAÇÃO</Text>
        <Text style={styles.textomenor}>{userData.cidade}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>ENDEREÇO</Text>
        <Text style={styles.textomenor}>{userData.endereco}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>TELEFONE</Text>
        <Text style={styles.textomenor}>{userData.telefone}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>NOME DE USUÁRIO</Text>
        <Text style={styles.textomenor}>{userData.nome}</Text>
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
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'black',
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
