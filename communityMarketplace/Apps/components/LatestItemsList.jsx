import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import PostItem from "./PostItem";

const LatestItemsList = ({ latestItemList }) => {
  // Slice the list to include only the first four items
  const limitedItemList = latestItemList.slice(0, 4);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest Items</Text>
      <FlatList
        data={limitedItemList}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PostItem item={item}/>
        )}
      />
    </View>
  );
};

export default LatestItemsList;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  
});
