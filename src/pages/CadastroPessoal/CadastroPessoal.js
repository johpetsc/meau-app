import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextBox from '../../components/TextBoxComponents/TextBox'
import Icon from 'react-native-vector-icons/EvilIcons';

const CadastroPessoal = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>As informações preenchidas serão divulgadas apenas para a pessoa com a qual você realizar o processo de adoção e/ou apadrinhamento, após a formalização de processo.</Text>
        </View>
        <View>
          <Text style={styles.text}>INFORMAÇÕES PESSOAIS</Text>
        </View>
        <View>
          <TextBox
            campo={'Nome completo'}
            icone={''}
          />
        </View>
        <View>
          <TextBox
            campo={'Idade'}
            icone={''}
          />
        </View>
        <View>
          <TextBox
            campo={'E-mail'}
            icone={''}
          />
        </View>
        <View>
          <TextBox
            campo={'Estado'}
            icone={''}
          />
        </View>
        <View>
          <TextBox
            campo={'Cidade'}
            icone={''}
          />
        </View>
        <View>
          <TextBox
            campo={'Endereço'}
            icone={''}
          />
        </View>
        <View>
          <TextBox
            campo={'Telefone'}
            icone={''}
          />
        </View>
        <View>
          <Text style={styles.text}>INFORMAÇÕES DE PERFIL</Text>
        </View>
        <View>
          <TextBox
            campo={'Nome de usuário'}
            icone={''}
          />
        </View>
        <View>
          <TextBox
            campo={'Senha'}
            icone={''}
            seguro={true}
          />
        </View>
        <View>
          <TextBox
            campo={'Confirmação de Senha'}
            icone={''}
            seguro={true}
          />
        </View>
        <View>
          <Text style={styles.text}>FOTO DE PERFIL</Text>
        </View>
        <TouchableOpacity style={styles.picture}>
          <Icon name={'plus'} size={24} color={'#757575'}/>
          <Text style={styles.pictureText}>adicionar foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>FAZER CADASTRO</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text:{
    color: '#B1B1B1',
    marginTop: 12,
    marginLeft: 16,
  },
  messageText:{
    fontSize: 14,
    color: '#434343',
    fontFamily: 'roboto',
    textAlign: 'center'
  },
  button:{
    backgroundColor: '#88c9bf',
    marginBottom: 24,
    marginLeft: 45,
    width: Dimensions.get('window').width - 90,
    height: 50,
    alignItems: 'center',
    paddingTop: 15,
    elevation: 5,
  },
  picture:{
    backgroundColor: '#e6e7e7',
    margin: 32,
    width: 128,
    height: 128,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 40,
    elevation: 5,
  },
  pictureText:{
    color: '#757575',
    fontFamily: 'roboto',
    fontSize: 14

  },
  buttonText:{
    color: '#434343',
    fontFamily: 'roboto',
    fontSize: 14
  },
  messageBox:{
    backgroundColor: '#cfe9e5',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 16,
    height: 80,
    width: 321,
    borderRadius: 5,
  }
});
export default CadastroPessoal;
