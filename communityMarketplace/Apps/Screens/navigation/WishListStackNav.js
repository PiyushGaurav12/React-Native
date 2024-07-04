import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Wishlist from '../../components/Wishlist';
import AddToCart from '../../components/AddToCart';

const Stack=createStackNavigator();
const WishListStackNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='wishlist' component={Wishlist}   options={{ headerShown: false }}/>
        <Stack.Screen name='addtocart' component={AddToCart}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default WishListStackNav

const styles = StyleSheet.create({})