import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "../Apps/Screens/LogInScreen";
import SignUpScreen from "../Apps/Screens/signUpScreen";
import LandingScreen from "../Apps/Screens/LandingScreen";
import HomeScreen from "../Apps/Screens/HomeScreen";


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandinScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
