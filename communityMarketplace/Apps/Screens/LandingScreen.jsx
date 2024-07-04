import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View className="flex-1 bg-purple-400 ">
        <Image
          source={require("./../../assets/images/landingpage.png")}
          className="w-full h-[400px] object-center"
        />

        <View className="p-8 mt-15 items-center content-center bg-gray-200 rounded-3xl opacity-90">
          <Text className="text-[25px] font-bold">Comunity Marketplace</Text>
          <Text className="p-5 text-[18px]">
            Buy and Sell Marketplace where you can buy and sell items and keep
            growing
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("LogIn")}
            className=" mt-20 w-full p-4 bg-blue-500 rounded-full"
          >
            <Text className=" text-white text-center text-[18px]">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LandingScreen;
