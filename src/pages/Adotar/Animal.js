import React, {useContext, useState} from 'react';
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
import firestore from '@react-native-firebase/firestore';
import sendMessage from '../../services/mensagemPedido';
import UserData from '../../contexts/UserData';


const onPetPress = (id, dados, userId, nome) => {
  console.log(dados);
  firestore()
    .collection('usuarios/' + dados.userRef + '/animais/' + id + '/pedidos')
    .add({
      tipo: 'Adoção',
      userRef: userId,
      animalRef: id,
    })
    .then(async () => {
      await sendMessage(dados.userRef, nome, dados.nome);
      console.log('Pedido feito!');
    });
};

const Animal = ({route, navigation}) => {
  const [userData] = useContext(UserData);
  const id = route.params.id;
  const dados = route.params.dados;
  return (
    <ScrollView style={{flex: 1}}>
      <Image
        source={{uri: dados.url} || require('../../images/Meau_Icone.png')}
        style={styles.imagem}
      />
      <Text style={styles.usertexto}>{dados.nome}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.rowContainer}>
            <View>
                <Text style={styles.texto}>SEXO</Text>
                <Text style={styles.textomenor}>{dados.sexo}</Text>
            </View>
            <View>
                <Text style={styles.texto}>PORTE</Text>
                <Text style={styles.textomenor}>{dados.porte}</Text>
            </View>
            <View>
                <Text style={styles.texto}>IDADE</Text>
                <Text style={styles.textomenor}>{dados.idade}</Text>
            </View>
        </View>
        <View style={styles.separator} />
        <Text style={styles.texto}>LOCALIZAÇÃO</Text>
        <Text style={styles.textomenor}>{dados.endereco}</Text>
        <View style={styles.separator} />
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.texto}>CASTRADO</Text>
            <Text style={styles.textomenor}>Não</Text>
          </View>
          <View>
            <Text style={styles.texto}>VERMIFUGO</Text>
            <Text style={styles.textomenor}>Sim</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.texto}>VACINADO</Text>
            <Text style={styles.textomenor}>Não</Text>
          </View>
          <View>
            <Text style={styles.texto}>DOENÇAS </Text>
            <Text style={styles.textomenor}>Nenhuma</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <Text style={styles.texto}>TEMPERAMENTO</Text>
        <Text style={styles.textomenor}>{dados.temperamento}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>EXIGÊNCIA DO DOADOR</Text>
        <Text style={styles.textomenor}>{dados.exigencias}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>MAIS SOBRE BIDU</Text>
        <Text style={styles.textomenor}>{dados.sobre}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPetPress(id, dados, userData.id, userData.nome)}>
        <Text style={styles.buttonText}>PRETENDO ADOTAR</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffd358',
    width: 232,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  texto: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#ffd339',
  },
  textomenor: {
    padding: 0,
    fontSize: 15,
    fontFamily: 'Roboto',
    color: 'gray',
  },
  usertexto: {
    padding: 20,
    fontSize: 17,
    fontFamily: 'Roboto',
    color: 'black',
  },
  imagem: {
    width: Dimensions.get('window').width,
    height: 180,
    alignSelf: 'center',
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
    marginBottom: 20,
    marginLeft: 20,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 50,
  },
});

export default Animal;
