import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Oba = ({route, navigation}) => {
    const nome = route.params.nome;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.message}>Oba!</Text>
      <View>
        <Text style={styles.text}>
          Ficamos muito felizes com o sucesso do seu processo! Esperamos que o bichinho esteja curtindo muito essa nova experiência!
        </Text>
        <Text style={styles.text}>
          Agora, que tal compartilhar a história do {nome} com todos os outros membros do Meau?
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>COMPARTILHAR HISTÓRIA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#88c9bf',
    marginTop: 50,
    marginBottom: 44,
    width: 232,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  inputContainer: {
    marginTop: 64,
    marginBottom: 58,
  },
  buttonText: {
    color: '#434343',
    fontFamily: 'roboto',
    fontSize: 12,
  },
  text: {
    color: '#757575',
    fontSize: 17,
    marginHorizontal: 30,
    fontFamily: 'roboto',
    textAlign: 'center',
    marginBottom: 30
  },
  message: {
    color: '#88c9bf',
    margin: 52,
    alignSelf: 'center',
    fontFamily: 'roboto',
    fontSize: 53,
  },
});

export default Oba;
