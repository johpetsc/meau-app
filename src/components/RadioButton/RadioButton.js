import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, TouchableOpacity} from 'react-native';

export default function RadioButton(props) {
  if (props.value) {
    return (
      <TouchableOpacity
        style={props.style}
        onPress={() => props.handleChange(props.label, props.chave)}>
        <Icon color={'#757575'} name={'radio-button-on'} size={24} />
        <Text>{props.label}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={props.style}
      onPress={() => props.handleChange(props.label, props.chave)}>
      <Icon
        color={'#757575'}
        flexDirection={'row'}
        name={'radio-button-off'}
        size={24}
      />
      <Text>{props.label}</Text>
    </TouchableOpacity>
  );
}
