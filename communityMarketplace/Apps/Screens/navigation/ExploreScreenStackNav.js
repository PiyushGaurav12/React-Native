import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ExploreScreen from '../ExploreScreen';
import Product from '../../components/Product';



const Stack=createStackNavigator();


const ExploreScreenStackNav = () => {
    
  return (
    <Stack.Navigator>
        <Stack.Screen name='explore-tab' component={ExploreScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name='product-detail' component={Product} />  
    </Stack.Navigator>
  )
}

export default ExploreScreenStackNav

const styles = StyleSheet.create({})