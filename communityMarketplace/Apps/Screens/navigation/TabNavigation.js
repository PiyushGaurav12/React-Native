import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen";
import ExploreScreen from "../ExploreScreen";
import AddPostScreen from "../AddPostScreen";
import ProfileScreen from "../ProfileScreen";
import Wishlist from "./../../components/Wishlist";
import { Ionicons } from "@expo/vector-icons";
// import HomeScreenStackNav from "./homeScreenStackNav";
import ExploreScreenStackNav from "./ExploreScreenStackNav";
import WishListStackNav from "./WishListStackNav";



const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarActiveTintColor:'#000',
          tabBarInactiveTintColor: "#000",
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 13, marginBottom: 3 }}>
                Home
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="explore"
          component={ExploreScreenStackNav}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 13, marginBottom: 3 }}>
                Explore
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="addpost"
          component={AddPostScreen}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 13, marginBottom: 3 }}>
                AddPost
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="camera" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
            name="wishlist"
            component={WishListStackNav}
            options={{
              tabBarActiveTintColor: "red",
              tabBarLabel: ({ color }) => (
                <Text style={{ color: color, fontSize: 13, marginBottom: 3 }}>
                  Wishlist
                </Text>
              ),
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart-circle" size={size} color={color} />
              ),
            }}
          />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 13, marginBottom: 3 }}>
                Profile
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle" size={size} color={color} />
            ),
          }}
        />
          
      </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
