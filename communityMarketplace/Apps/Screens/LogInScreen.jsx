import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const LogInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
 
  return (
    <>
      <View className="flex-1 bg-purple-400">
        <Image
          source={require("./../../assets/images/loginC.png")}
          className="w-full h-[400px] object-cover"
        />

        <View className="p-4 mt-15  items-center content-center bg-gray-200 rounded-3xl opacity-90">
          <Text className="text-[25px] font-bold">LogIn to your Account</Text>

          <KeyboardAvoidingView>
            <View style={{ marginTop: 20 }}>
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
                  marginTop: 20,
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
                  secureTextEntry={true}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: email ? 16 : 18,
                  }}
                  placeholder="enter your Password"
                />
              </View>
              <View
                style={{
                  marginTop: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text>Keep me Logged In</Text>
                <Pressable
                >
                <Text style={{ color: "#007FFF", fontWeight: "500" }}>
                  Forgot Password
                </Text>
                </Pressable>
              </View>
              <TouchableOpacity  
              onPress={() => navigation.navigate("HomeScreen")}
              className=" mt-10 w-full p-4 bg-blue-500 rounded-full">
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <Pressable
                onPress={() => navigation.navigate("SignUp")}
                style={{ marginTop: 15 }}
              >
                <Text
                  style={{ textAlign: "center", color: "gray", fontSize: 16 }}
                >
                  Don't have an Account? SignUp
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({});
