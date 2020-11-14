import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SportsScreen from '../screens/SportsScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';
import { TabBarIOS } from 'react-native';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="News"
      component={ HomeScreen }
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Article"
      component={ ArticleScreen }
    />
  </Stack.Navigator>
  )
}


const SportsStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Sports"
      component={ SportsScreen }
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Article"
      component={ ArticleScreen }
    />
  </Stack.Navigator>
  )
}

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={ ClipScreen }/>
      <Stack.Screen name="Article" component={ ArticleScreen }/>
    </Stack.Navigator>
  )
}



const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = "home";
    } else if (route.name === 'Favorite') {
      iconName = "star"
    }

    if (route.name === 'Sports') {
      iconName = "futbol-o" 
    }

    // ¡Puede devolver cualquier componente que desee aquí!
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
})
export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={ screenOption }>
        <Tab.Screen name="Home" component={ HomeStack }/>
        <Tab.Screen name="Sports" component={ SportsStack }/>
        <Tab.Screen name="Favorite" component={ ClipStack }/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}