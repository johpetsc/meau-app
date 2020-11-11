import React, {PureComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ManifestButton extends PureComponent {
  render() {
    const {nome, sexo, idade, porte, endereco, imagem} = this.props;
    return (
      <View style={styles.button}>
        <View style={styles.titulo}>
          <Text>{nome}</Text>
          <Icon color={'black'} name={'heart'} size={15} />
        </View>
        <Image
          source={imagem}
          style={{width: Dimensions.get('window').width - 20, height: 170}}
        />
        <View style={styles.bottom}>
          <View style={styles.viewAcao}>
            <Text>{sexo}</Text>
            <Text>{idade}</Text>
            <Text>{porte}</Text>
          </View>
          <Text>{endereco}</Text>
        </View>
      </View>
    );
  }
}

const colors = {
  amarelo: '#ffd35880',
};

const styles = StyleSheet.create({
  labelStyle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#000000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 8,
  },
  button: {
    width: Dimensions.get('window').width,
    height: 300,
    padding: 10,
  },
  bottom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titulo: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.amarelo,
    marginBottom: -50,
  },
  viewAcao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
