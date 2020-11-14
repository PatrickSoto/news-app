import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { useSelector } from "react-redux"
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})

export default ClipScreen = ({navigation}) => {
  const user = useSelector(state => state.user)
  const { clips } = user;
  return (
    <SafeAreaView style={ styles.container }>
      <FlatList
        data={ clips }
        renderItem={({ item }) => (
          <ListItem
            imageUrl={ item.urlToImage }
            title={ item.title }
            author={ item.author }
            onPress={() => 
              navigation.navigate("Article", { article: item })
            } //*component.name
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};