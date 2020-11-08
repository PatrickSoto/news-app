import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem'; //* importación de componente
import Constants from 'expo-constants'
import axios from 'axios'
import Loading from '../components/Loading'


const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Constants.manifest.extra.newsApiKey}`;


const styles = StyleSheet.create({
  container: {
    flex: 1, //* Misma pantalla que resetCss
    backgroundColor: '#000000',
  },
});