import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import ItemList from '../ItemList';

const HomeScreenStackNav = () => {
    const Stack = createStackNavigator();
  return (
    
    <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
          name="item-list"
          component={ItemList}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
  
  )
}

export default HomeScreenStackNav

const styles = StyleSheet.create({})