import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import AnimalBox from '../../components/AnimalBox';
import storage from '@react-native-firebase/storage';

const Adotar = ({navigation}) => {
  const [listaAnimais, setListaAnimais] = useState([]);
  const [listaIds, setListaIds] = useState([]);

  const onPetPress = (index) => {
    console.log(listaAnimais[index])
    navigation.navigate('Animal', {id:listaIds[index], dados:listaAnimais[index]});
  };

  const onButtonPress = () => {
    console.log(listaAnimais._W[0]);
  };

  const fetchAnimais = async (animais, ids) => {
    const Documents = await firestore()
      .collectionGroup('animais')
      .get()
      .then((querrySnapshot) => {
        querrySnapshot.forEach((documentSnapshot) => {
          animais.push(documentSnapshot.data());
          ids.push(documentSnapshot.id);
          console.log(documentSnapshot.id, documentSnapshot.data());
        });
      });
  };

  const fetchImagem = async (animais) => {
    for (const item of animais) {
      if (item.imageRef) {
        item.url = await storage().ref(item.imageRef).getDownloadURL();
      }
    }
  };

  useEffect(() => {
    const animais = [];
    const ids = [];
    fetchAnimais(animais, ids).then(() => {
      fetchImagem(animais).then(() => {
        console.log(animais);
        setListaAnimais(animais);
        setListaIds(ids);
      });
    });
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      {listaAnimais.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => onPetPress(index)}>
          <AnimalBox
            nome={item.nome}
            sexo={item.sexo}
            idade={item.idade}
            porte={item.porte}
            endereco={item.endereco}
            imagem={{uri: item.url} || require('../../images/Meau_Icone.png')}
          />
        </TouchableOpacity>
      ))}
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
});

export default Adotar;
