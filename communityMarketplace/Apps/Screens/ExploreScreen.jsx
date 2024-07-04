import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import PostItem from "../components/PostItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const ExploreScreen = ({navigation}) => {
  const db = getFirestore(app);
  const [productList, setProductList] = useState([]);
  const [numColumns, setNumColumns] = useState(2); // State to manage the number of columns

  useEffect(() => {
    getAllProducts();
  }, []); // Empty dependency array to ensure this runs once on mount

  const getAllProducts = async () => {
    try {
      // Query to get all documents from 'userPost' collection
      const q = collection(db, "userPost");
      const snapshot = await getDocs(q);

      const products = [];
      snapshot.forEach((doc) => {
        products.push(doc.data());
      });
      setProductList(products);
    } catch (error) {
      console.error("Error fetching user posts: ", error);
    }
  };

  const toggleLayout = () => {
    setNumColumns((prevNumColumns) => (prevNumColumns === 2 ? 3 : 2));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.replace('product-detail', )}>
      <PostItem item={item} />
     </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Explore More</Text>
      <View>
        <Feather name="layout" size={30} color="#8A518A" onPress={toggleLayout} />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="bg-purple-200">
      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContentContainer}
        numColumns={numColumns} // Use the state variable for number of columns
        key={numColumns} // Change the key prop to force a re-render
        columnWrapperStyle={styles.row} // Add styling for row
      />
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
 
  container: {
    padding: 20,
    paddingTop: 32,
  },
  header: {
    borderRadius: 10,
    // backgroundColor: "#DBE5E0",
    flexDirection: "row",
    padding: 20,
    paddingTop: 12,
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContentContainer: {
    paddingHorizontal: 20,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
});
