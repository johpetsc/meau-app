import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useContext, useState} from 'react';
import RadioButton from '../../components/RadioButton/RadioButton';
import firestore from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UserData from '../../contexts/UserData';

const Processo = ({route, navigation}) => {
    const interessados = route.params.interessados;
    const id = route.params.id;
    const user = route.params.user;
    const nome = route.params.nome;
    const animal = route.params.dadosAnimal;

    const getUser = () => {
      for (const item of interessados) {
        if (item.nome == dados.usuario)
          return item.email
      }
      
    };
    async function deletePedidos(){
      const pedidosQuerySnapshot = await firestore()
      .collection('usuarios').doc(user).collection('animais').doc(id).collection('pedidos')
      .get();
      const batch = firestore().batch();
    
      pedidosQuerySnapshot.forEach(documentSnapshot => {
        batch.delete(documentSnapshot.ref);
      });
    
      return batch.commit();
    }

    const onFinalizar = () => {
      const para = getUser()
      animal.userRef = para
      deletePedidos().then(() => console.log('Pedidos deletados'))
      firestore().collection('usuarios').doc(user).collection('animais').doc(id).delete()
      .then(() => {
        console.log('Animal deleted!');
      });
      firestore().collection('usuarios/' + para + '/animais')
      .add({
        ...animal,
      })
      .then(() => {
        console.log('Animal added!');
      });
        navigation.navigate('Oba', {nome:nome});
    }

  const [dados, setDados] = useState({
    processo: 'Adoção',
    usuario: '',
    pet: [],
  });

  const checkSelected = (value, array) => {
    return array.includes(value);
  };

  const handleChecked = (value, chave) => {
    if (dados[chave].includes(value)) {
      setDados((prevState) => ({
        ...prevState,
        [chave]: prevState[chave].filter((item) => item !== value),
      }));
    } else {
      setDados((prevState) => ({
        ...prevState,
        [chave]: [...prevState[chave], value],
      }));
    }
  };

  const handleRadioButton = (value, chave) => {
    setDados((prevState) => ({...prevState, [chave]: value}));
    console.log(dados)
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <View>
          <Text style={styles.text}>SELECIONE O(S) ANIMAL(IS)</Text>
        </View>
      <View style={styles.formGroup}>
          <View style={styles.formColumn}>
            <CheckBox
              value={checkSelected(nome, dados.pet)}
              onValueChange={() => handleChecked(nome, 'pet')}
            />
            <Text>{nome}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>QUAL PROCESSO FOI FORMALIZADO?</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formColumn}>
            <RadioButton
              style={styles.radioRow}
              label={'Adoção'}
              value={dados.processo === 'Adoção'}
              chave={'processo'}
              handleChange={handleRadioButton}
            />
            <View style={styles.radioRow}>
              <RadioButton
                style={styles.radioRow}
                label={'Apadrinhamento'}
                value={dados.processo === 'Apadrinhamento'}
                chave={'processo'}
                handleChange={handleRadioButton}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>SELECIONE O USUÁRIO</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formColumn}>
        {interessados.map((item, index) => (
            <RadioButton
            style={styles.radioRow}
            label={item.nome}
            value={dados.usuario === item.nome}
            chave={'usuario'}
            handleChange={handleRadioButton}
          />
            ))}
         </View>
        </View>
        <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onFinalizar()}>
                    <Text style={styles.textomenor}>FINALIZAR PROCESSO</Text>
                </TouchableOpacity>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#589b9b',
    marginTop: 20,
    marginLeft: 24,
  },
  formGroup: {
    marginLeft: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  formColumn: {
    flexDirection: 'column',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    backgroundColor: '#88c9bf',
    width: 200,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
export default Processo;
