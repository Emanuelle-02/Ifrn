import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DefaultStyles from '../styles/Global';

export function Button ({title, onPress, buttonColor}){

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={DefaultStyles.button} 
      backgroundColor = {buttonColor ? buttonColor : DefaultStyles.button.backgroundColor}>
        <Text style={DefaultStyles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
};