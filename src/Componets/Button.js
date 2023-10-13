import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
export const Button = ({title, onPress, style, disabled, textstyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
      <Text style={textstyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export const SignUpButton = ({title, onPress, style, disabled, textstyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
      <Text style={textstyle}>{title}</Text>
    </TouchableOpacity>
  );
};
