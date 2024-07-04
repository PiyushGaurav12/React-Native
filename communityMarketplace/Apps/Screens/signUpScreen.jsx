import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  return (
    <>
      <View className="flex-1 bg-purple-300">
        <Image
          source={require("./../../assets/images/signup.png")}
          className="w-full h-[400px] object-contain"
        />

        <View className="p-4 mt-15  items-center content-center bg-gray-200 rounded-3xl opacity-90">
          <Text className="text-[25px] font-bold">Register your Account</Text>

          <KeyboardAvoidingView>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#D0D0D0",
                  borderRadius: 5,
                  marginTop: 70,
                }}
              >
                <FontAwesome5
                  style={{ marginLeft: 8 }}
                  name="user"
                  size={24}
                  color="gray"
                />
                <TextInput
                  value={name}
                  onChangeText={(text) => setName(text)}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: name ? 16 : 18,
                  }}
                  placeholder="enter your Name"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#D0D0D0",
                  borderRadius: 5,
                  marginTop: 10,
                }}
              >
                <MaterialIcons
                  style={{ marginLeft: 8 }}
                  name="email"
                  size={24}
                  color="gray"
                />
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: email ? 16 : 18,
                  }}
                  placeholder="enter your Email"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#D0D0D0",
                  borderRadius: 5,
                  marginTop: 10,
                }}
              >
                <MaterialIcons
                  style={{ marginLeft: 8 }}
                  name="lock"
                  size={24}
                  color="gray"
                />
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: email ? 16 : 18,
                  }}
                  placeholder="enter your Password"
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            onPress={() => console.log("Get started pressed")}
            className=" mt-10 w-full p-4 bg-blue-500 rounded-full"
          >
            <Text className=" text-white text-center text-[18px]  font-extrabold">
              Register
            </Text>
          </TouchableOpacity>
          <Pressable
            onPress={() => navigation.navigate("LogIn")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Already have an Account? SignIn
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default SignUpScreen;
