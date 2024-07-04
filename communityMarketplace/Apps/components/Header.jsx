import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      {/* User info section */}
      <View className="flex flex-row mt-2 items-center gap:4">
        <Image
          source={require("./../../assets/images/loginC.png")}
          className="rounded-full w-16 h-12"
        />
        <View>
          <Text className="text-[16px]">Welcome</Text>
          <Text className="text-[18px] font-bold">User Name</Text>
        </View>
        {/* Wishlist icon */}
        
      </View>

      {/* search bar     */}
      <View className="p-2 px-5 mt-5 flex flex-row bg-gray-100 rounded-full border-[1px] border-blue-500 ">
        <Ionicons name="search" size={24} color="gray" />
        <TextInput placeholder="Search" className="ml-2"
        onChangeText={(value)=>console.log(value)}
          />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
