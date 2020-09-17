import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextBox from '../../components/TextBoxComponents/TextBox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';

const CadastroAnimal = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View>
          <Text style={styles.introText}>
            Tenho interesse em cadastrar o animal para:
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonSelected}>
            <Text style={styles.buttonText}>ADOÇÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDisabled}>
            <Text style={styles.textDisabled}>APADRINHAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDisabled}>
            <Text style={styles.buttonText}>AJUDA</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.optionText}>Adoção</Text>
        </View>
        <View>
          <Text style={styles.text}>NOME DO ANIMAL</Text>
        </View>
        <View style={styles.textBox}>
          <TextBox campo={'Nome do animal'} icone={''} />
        </View>
        <View>
          <Text style={styles.text}>FOTO DO ANIMAL</Text>
        </View>
        <TouchableOpacity style={styles.picture}>
          <Icon name={'add-circle-outline'} size={24} color={'#757575'} />
          <Text style={styles.pictureText}>adicionar fotos</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>ESPÉCIE</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <View flexDirection={'row'}>
              <Icon color={'#757575'} name={'radio-button-off'} size={24} />
              <Text>Cachorro</Text>
            </View>
            <View style={styles.radioRow} left={124}>
              <Icon color={'#757575'} name={'radio-button-off'} size={24} />
              <Text>Gato</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>SEXO</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <Icon color={'#757575'} name={'radio-button-off'} size={24} />
            <Text>Macho</Text>
            <View style={styles.radioRow} left={124}>
              <Icon color={'#757575'} name={'radio-button-off'} size={24} />
              <Text>Fêmea</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>PORTE</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <Icon color={'#757575'} name={'radio-button-off'} size={24} />
            <Text>Pequeno</Text>
            <View style={styles.radioRow} left={124}>
              <Icon color={'#757575'} name={'radio-button-off'} size={24} />
              <Text>Médio</Text>
            </View>
            <View style={styles.radioRow} left={224}>
              <Icon color={'#757575'} name={'radio-button-off'} size={24} />
              <Text>Grande</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>IDADE</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <Icon color={'#757575'} name={'radio-button-off'} size={24} />
            <Text>Filhote</Text>
            <View style={styles.radioRow} left={124}>
              <Icon color={'#757575'} name={'radio-button-off'} size={24} />
              <Text>Adulto</Text>
            </View>
            <View style={styles.radioRow} left={224}>
              <Icon color={'#757575'} name={'radio-button-off'} size={24} />
              <Text>Idoso</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>TEMPERAMENTO</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <CheckBox />
            <Text>Brincalhão</Text>
            <CheckBox />
            <Text>Tímido</Text>
            <CheckBox />
            <Text>Calmo</Text>
          </View>
          <View style={styles.formRow}>
            <CheckBox />
            <Text>Guarda</Text>
            <CheckBox />
            <Text>Amoroso</Text>
            <CheckBox />
            <Text>Preguiçoso</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>SAÚDE</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <CheckBox />
            <Text>Vacinado</Text>
            <CheckBox />
            <Text>Vermifugado</Text>
          </View>
          <View style={styles.formRow}>
            <CheckBox />
            <Text>Castrado</Text>
            <CheckBox />
            <Text>Doente</Text>
          </View>
        </View>
        <View style={styles.textBox}>
          <TextBox campo={'Doenças do animal'} icone={''} />
        </View>
        <View>
          <Text style={styles.text}>EXIGÊNCIAS PARA ADOÇÃO</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <CheckBox />
            <Text>Termo de adoção</Text>
          </View>
          <View style={styles.formRow}>
            <CheckBox />
            <Text>Fotos de casa</Text>
          </View>
          <View style={styles.formRow}>
            <CheckBox />
            <Text>Visita prévia ao animal</Text>
          </View>
          <View style={styles.formRow}>
            <CheckBox />
            <Text>Acompanhamento pós adoção</Text>
          </View>
          <View left={60} style={styles.formRow}>
            <CheckBox />
            <Text>1 mês</Text>
          </View>
          <View left={60} style={styles.formRow}>
            <CheckBox />
            <Text>3 meses</Text>
          </View>
          <View left={60} style={styles.formRow}>
            <CheckBox />
            <Text>6 meses</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>SOBRE O ANIMAL</Text>
        </View>
        <View style={styles.textBox}>
          <TextBox campo={'Compartilhe a história do animal'} icone={''} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>COLOCAR PARA ADOÇÃO</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffd358',
    marginTop: 20,
    marginLeft: 24,
  },
  optionText: {
    color: '#434343',
    fontSize: 16,
    marginLeft: 24,
    marginTop: 16,
    fontWeight: '400',
  },
  messageText: {
    fontSize: 14,
    color: '#434343',
    fontFamily: 'roboto',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ffd358',
    marginBottom: 24,
    marginTop: 24,
    width: 232,
    height: 40,
    alignItems: 'center',
    elevation: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  picture: {
    backgroundColor: '#e6e7e7',
    margin: 32,
    width: 312,
    height: 128,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 40,
    elevation: 5,
  },
  pictureText: {
    color: '#757575',
    fontFamily: 'roboto',
    fontSize: 14,
  },
  buttonText: {
    color: '#434343',
    fontFamily: 'roboto',
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 28,
    marginRight: 28,
  },
  textBox: {
    marginLeft: 8,
  },
  formGroup: {
    marginLeft: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  introText: {
    fontSize: 14,
    color: '#757575',
    marginTop: 16,
    marginBottom: 16,
    margin: 24,
  },
  buttonSelected: {
    backgroundColor: '#ffd358',
    width: 100,
    height: 40,
    alignItems: 'center',
    elevation: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#f1f2f2',
    width: 100,
    height: 40,
    alignItems: 'center',
    elevation: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textDisabled: {
    color: '#bdbdbd',
    fontFamily: 'roboto',
    fontSize: 12,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
});
export default CadastroAnimal;
