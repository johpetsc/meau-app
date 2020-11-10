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
import AnimalBox from '../../components/AnimalBox';

const listaIds = []

async function fetchAnimal(){
    const listaAnimais = []
    const Documents = await firestore().collectionGroup('animais')
             .get()
             .then(querrySnapshot => {
                 querrySnapshot.forEach(documentSnapshot => {
                    listaAnimais.push(documentSnapshot.data())
                    listaIds.push(documentSnapshot.id)
                     console.log(documentSnapshot.id, documentSnapshot.data())
                 })
               });

  return listaAnimais;
}

const listaAnimais = fetchAnimal()
const onPetPress = () => {
    console.log(listaIds)
    firestore()
      .collection('usuarios/SULKDjHeZQeEdgtlejit/animais/'+ listaIds[0] +'/pedidos')
      .add({
        interessado: '',
        tipo: 'Adoção',
      })
      .then(() => {
        console.log('Pedido feito!');
      });
}

const onButtonPress = () => {
    console.log(listaAnimais._W[0])
}
const Adotar = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <TouchableOpacity onPress={() => onPetPress()}>
            <AnimalBox
                nome={listaAnimais._W[0]?.nome}
                sexo={listaAnimais._W[0]?.sexo}
                idade={'ADULTO'}
                porte={listaAnimais._W[0]?.porte}
                endereco={'SAMAMBAIA SUL - DISTRITO FEDERAL'}
                imagem={require('../../images/Meau_Icone.png')} 
            />
      </TouchableOpacity>
        {/*<TouchableOpacity style={styles.button}  onPress={() => onButtonPress()}>
            <Text style={styles.buttonText}>EDITAR PERFIL</Text>
        </TouchableOpacity>*/}
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

export default Adotar;