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


// * Operador de extensión de objeto
// * props Enviar datos de padre a hijo
const ListItem = ({ imageUrl, title, author, onPress }) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}> 
        <View style={styles.leftContainer}>
          {!! imageUrl &&( 
            <Image
              style={{ width: 90, height: 100 }}
              source={{uri: imageUrl}} 
            />
          )}
          </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>{/* 3 o más líneas..... */}
          {title}
          </Text>
          <Text style={styles.subText}>{author}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  export default ListItem;