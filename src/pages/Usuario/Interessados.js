import React, {useContext, useEffect, useState} from 'react';
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
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';


const Interessados = ({route, navigation}) => {
    const id = route.params.id;
    const dados = route.params.dados;

    const onChat = () => {
        navigation.navigate('Processo', {interessados:listaInteressados, id:id, user:dados.userRef, nome:dados.nome});
    }
  const [listaInteressados, setListaInteressados] = useState([]);
  const [listaIds, setListaIds] = useState([]);

  const fetchPedidos = async (pedidos, ids) => {
    const Documents = await firestore()
    .collection('usuarios/' + dados.userRef + '/animais/' + id + '/pedidos')
      .get()
      .then((querrySnapshot) => {
        querrySnapshot.forEach((documentSnapshot) => {
          pedidos.push(documentSnapshot.data());
          ids.push(documentSnapshot.id);
          console.log("FETCH PEDIDOS")
          console.log(documentSnapshot.id, documentSnapshot.data());
        });
      });
  };

  const fetchInteressados = async (pedidos, interessados) => {
      for (const item of pedidos){
        const Documents = await firestore()
        .collection('usuarios')
        .doc(item.userRef)
        .get()
        .then((doc) => {
            interessados.push(doc.data());
            console.log("FETCH INTERESSADOS")
            console.log(doc.data());
        });
      }
  };

  const fetchImagem = async (interessados) => {
    for (const item of interessados) {
      if (item.imageRef) {
        item.url = await storage().ref(item.imageRef).getDownloadURL();
      }
    }
  };

  useEffect(() => {
    const interessados = [];
    const ids = [];
    const pedidos = [];
    fetchPedidos(pedidos, ids).then(() => {
        fetchInteressados(pedidos, interessados).then(() => {
            fetchImagem(interessados).then(() => {
                console.log(interessados);
                setListaInteressados(interessados);
                setListaIds(ids);
              });
        });
    });
  }, []);
  return (
    <ScrollView style={{flex: 1}}>
        <View style={styles.columnContainer}>
            <View style={styles.rowContainer}>
            {listaInteressados.map((item, index) => (
                <View style={styles.container}>
                    <Image
                        source={{uri: item.url} || require('../../images/Meau_Icone.png')}
                        style={styles.imagem}
                        />
                    <Text style={styles.usertexto}>{item.nome}</Text>
                    <Text style={styles.usertexto}>{item.idade} anos</Text>
                </View>
            ))}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onChat()}>
                    <Text style={styles.textomenor}>IR PARA CHAT</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#88c9bf',
    width: 200,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  imagem: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginVertical: 20,
    flexWrap: 'wrap'
 },
 columnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
 },
 container: {
    marginBottom: 20,
 },
 usertexto: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: 'black',
    alignSelf: 'center',
  },
});

export default Interessados;
