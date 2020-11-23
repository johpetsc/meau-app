import React, {PureComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CampoTexto extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {dado, icone, campo, seguro, handleChange, nome} = this.props;

    return (
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.viewInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={campo}
            placeholderTextColor={'#bdbdbd'}
            onChangeText={(texto) => handleChange(texto, nome)}
            secureTextEntry={seguro}
            autoCapitalize="none"
            value={dado}
          />
          {/*{entrada && (*/}
          {/*  <TouchableOpacity>*/}
          {/*    <Icon style={styles.inputIconSubmit} name={icone} size={20} />*/}
          {/*  </TouchableOpacity>*/}
          {/*)}*/}
          <Icon style={styles.icon} name={icone} size={16} />
        </View>
      </ScrollView>
    );
  }
}

const colors = {
  branco: '#fff',
  cinzaEscuro: '#666',
  cinza: '#e6e7e8',
  botaoBorda: '#199a24',
  azul: '#344380',
};

const styles = StyleSheet.create({
  loading: {
    marginRight: 5,
  },
  icon: {
    color: colors.cinza,
    marginRight: 10,
  },
  iconButton: {
    color: colors.branco,
    marginRight: 10,
  },
  viewInputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.cinza,
    alignItems: 'center',
    marginTop: 5,
    marginRight: 16,
    marginLeft: 16,
    minHeight: 50,
  },
  viewButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  viewImage: {
    alignItems: 'center',
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    color: 'black',
  },
  inputIconSubmit: {
    paddingRight: 10,
    paddingLeft: 10,
    color: colors.cinza,
  },
});
