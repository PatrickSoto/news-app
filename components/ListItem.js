import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  
  itemContainer: {
    height: 90,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: "row" //* Horizontalmente // * columna Verticalmente
  },
  leftContainer: {
    width: 90
  },
  rightContainer: {
    flex: 1, //* Usa espacio
    padding: 10, 
    justifyContent: "space-between", //* Abre una brecha
  },
  text:{
    fontSize: 16,
    color: '#FFFFFF'
  },
  subText: {
    fontSize: 12,
    color: '#FFFFFF'
  }
 
});