import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextBox from '../../components/TextBoxComponents/TextBox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import RadioButton from '../../components/RadioButton/RadioButton';
import firestore from '@react-native-firebase/firestore';

const CadastroAnimal = ({navigation}) => {
  const [dados, setDados] = useState({
    nome: '',
    especie: 'Cachorro',
    porte: 'Pequeno',
    saude: [],
    sexo: 'Macho',
    sobre: '',
    temperamento: [],
    exigencias: [],
    doencas: '',
    idade: 'Filhote',
  });

  const handlePress = () => {
    firestore()
      .collection('usuarios/V5ghSlb7hqS0lKpDhAgn/animais')
      .add({
        dados,
      })
      .then(() => {
        console.log('User added!');
      });
  };

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
  };

  const handleChange = (value, nome) =>
    setDados((prevState) => ({...prevState, [nome]: value}));

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
          <TextBox
            campo={'Nome do animal'}
            dado={dados.nome}
            handleChange={handleChange}
            icone={''}
            nome={'nome'}
          />
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
            <RadioButton
              style={styles.radioRow}
              label={'Cachorro'}
              value={dados.especie === 'Cachorro'}
              chave={'especie'}
              handleChange={handleRadioButton}
            />
            <View style={styles.radioRow} left={124}>
              <RadioButton
                style={styles.radioRow}
                label={'Gato'}
                value={dados.especie === 'Gato'}
                chave={'especie'}
                handleChange={handleRadioButton}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>SEXO</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <RadioButton
              style={styles.radioRow}
              label={'Macho'}
              value={dados.sexo === 'Macho'}
              chave={'sexo'}
              handleChange={handleRadioButton}
            />
            <View style={styles.radioRow} left={124}>
              <RadioButton
                style={styles.radioRow}
                label={'Fêmea'}
                value={dados.sexo === 'Fêmea'}
                chave={'sexo'}
                handleChange={handleRadioButton}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>PORTE</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <RadioButton
              style={styles.radioRow}
              label={'Pequeno'}
              value={dados.porte === 'Pequeno'}
              chave={'porte'}
              handleChange={handleRadioButton}
            />
            <View style={styles.radioRow} left={124}>
              <RadioButton
                style={styles.radioRow}
                label={'Médio'}
                value={dados.porte === 'Médio'}
                chave={'porte'}
                handleChange={handleRadioButton}
              />
            </View>
            <View style={styles.radioRow} left={224}>
              <RadioButton
                style={styles.radioRow}
                label={'Grande'}
                value={dados.porte === 'Grande'}
                chave={'porte'}
                handleChange={handleRadioButton}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>IDADE</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <RadioButton
              style={styles.radioRow}
              label={'Filhote'}
              value={dados.idade === 'Filhote'}
              chave={'idade'}
              handleChange={handleRadioButton}
            />
            <View style={styles.radioRow} left={124}>
              <RadioButton
                style={styles.radioRow}
                label={'Adulto'}
                value={dados.idade === 'Adulto'}
                chave={'idade'}
                handleChange={handleRadioButton}
              />
            </View>
            <View style={styles.radioRow} left={224}>
              <RadioButton
                style={styles.radioRow}
                label={'Idoso'}
                value={dados.idade === 'Idoso'}
                chave={'idade'}
                handleChange={handleRadioButton}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>TEMPERAMENTO</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <CheckBox
              value={checkSelected('Brincalhão', dados.temperamento)}
              onValueChange={() => handleChecked('Brincalhão', 'temperamento')}
            />
            <Text>Brincalhão</Text>
            <CheckBox
              value={checkSelected('Tímido', dados.temperamento)}
              onValueChange={() => handleChecked('Tímido', 'temperamento')}
            />
            <Text>Tímido</Text>
            <CheckBox
              value={checkSelected('Calmo', dados.temperamento)}
              onValueChange={() => handleChecked('Calmo', 'temperamento')}
            />
            <Text>Calmo</Text>
          </View>
          <View style={styles.formRow}>
            <CheckBox
              value={checkSelected('Guarda', dados.temperamento)}
              onValueChange={() => handleChecked('Guarda', 'temperamento')}
            />
            <Text>Guarda</Text>
            <CheckBox
              value={checkSelected('Amoroso', dados.temperamento)}
              onValueChange={() => handleChecked('Amoroso', 'temperamento')}
            />
            <Text>Amoroso</Text>
            <CheckBox
              value={checkSelected('Preguiçoso', dados.temperamento)}
              onValueChange={() => handleChecked('Preguiçoso', 'temperamento')}
            />
            <Text>Preguiçoso</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>SAÚDE</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <CheckBox
              value={checkSelected('Vacinado', dados.saude)}
              onValueChange={() => handleChecked('Vacinado', 'saude')}
            />
            <Text>Vacinado</Text>
            <CheckBox
              value={checkSelected('Vermifugado', dados.saude)}
              onValueChange={() => handleChecked('Vermifugado', 'saude')}
            />
            <Text>Vermifugado</Text>
          </View>
          <View style={styles.formRow}>
            <CheckBox
              value={checkSelected('Castrado', dados.saude)}
              onValueChange={() => handleChecked('Castrado', 'saude')}
            />
            <Text>Castrado</Text>
            <CheckBox
              value={checkSelected('Doente', dados.saude)}
              onValueChange={() => handleChecked('Doente', 'saude')}
            />
            <Text>Doente</Text>
          </View>
        </View>
        <View style={styles.textBox}>
          <TextBox
            campo={'Doenças do animal'}
            dado={dados.doencas}
            handleChange={handleChange}
            icone={''}
            nome={'doencas'}
          />
        </View>
        <View>
          <Text style={styles.text}>EXIGÊNCIAS PARA ADOÇÃO</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formRow}>
            <CheckBox
              value={checkSelected('Termo de adoção', dados.exigencias)}
              onValueChange={() =>
                handleChecked('Termo de adoção', 'exigencias')
              }
            />
            <Text>Termo de adoção</Text>
          </View>
          <View style={styles.formRow}>
            <CheckBox
              value={checkSelected('Fotos de casa', dados.exigencias)}
              onValueChange={() => handleChecked('Fotos de casa', 'exigencias')}
            />
            <Text>Fotos de casa</Text>
          </View>
          <View style={styles.formRow}>
            <CheckBox
              value={checkSelected('Visita prévia ao animal', dados.exigencias)}
              onValueChange={() =>
                handleChecked('Visita prévia ao animal', 'exigencias')
              }
            />
            <Text>Visita prévia ao animal</Text>
          </View>
          <View style={styles.formRow}>
            <CheckBox
              value={checkSelected(
                'Acompanhamento pós adoção',
                dados.exigencias,
              )}
              onValueChange={() =>
                handleChecked('Acompanhamento pós adoção', 'exigencias')
              }
            />
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
          <TextBox
            campo={'Compartilhe a história do animal'}
            dado={dados.sobre}
            handleChange={handleChange}
            icone={''}
            nome={'sobre'}
          />
        </View>
        <TouchableOpacity onPress={() => handlePress()} style={styles.button}>
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