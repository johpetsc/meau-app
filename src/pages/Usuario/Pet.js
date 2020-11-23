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


const Pet = ({route, navigation}) => {
    const id = route.params.id;
    const dados = route.params.dados;

    const onInteressados = async (id, dados) => {  
        navigation.navigate('Interessados', {id:id, dados:dados});
    };

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
                <Text style={styles.textomenor}>Adulto</Text>
            </View>
        </View>
        <View style={styles.separator} />
        <Text style={styles.texto}>LOCALIZAÇÃO</Text>
        <Text style={styles.textomenor}>Samambaia Sul - Distrito Federal</Text>
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
                <Text style={styles.texto}>DOENÇAS    </Text>
                <Text style={styles.textomenor}>Nenhuma</Text>
            </View>
        </View>
        <View style={styles.separator} />
        <Text style={styles.texto}>TEMPERAMENTO</Text>
        <Text style={styles.textomenor}>{dados.temperamento}</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>EXIGÊNCIA DO DOADOR</Text>
        <Text style={styles.textomenor}>Termo de adoção, fotos da casa, visita prévia e acompanhamento durante três meses</Text>
        <View style={styles.separator} />
        <Text style={styles.texto}>MAIS SOBRE {dados.nome}</Text>
        <Text style={styles.textomenor}>{dados.sobre}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => onInteressados(id, dados)}>
            <Text style={styles.textomenor}>VER INTERESSADOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => onRemove(id, dados)}>
            <Text style={styles.textomenor}>REMOVER PET</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#88c9bf',
    width: 150,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  texto: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#589b9b',
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
    marginBottom: 20,
    marginLeft: 20,
  },
 rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 50
 },
 buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20
 }
});

export default Pet;
