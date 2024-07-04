import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getDocs, getFirestore, collection } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import PostItem from '../components/PostItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const Wishlist = ({navigation}) => {
  const db = getFirestore(app);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const q = collection(db, 'wishlist');
      const snapshot = await getDocs(q);

      const products = [];
      snapshot.forEach((doc) => {
        products.push(doc.data());
      });
      setWishlist(products);
    } catch (error) {
      console.error("Error fetching wishlist: ", error);
    }
  };

  const renderItem = ({ item }) => <PostItem item={item} showHeartIcon={false} />;

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Wishlist</Text>
        <AntDesign name="shoppingcart" size={30} color="black" onPress={() => navigation.navigate('addtocart')}/>
      </View>
      <FlatList
        data={wishlist}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Set the number of columns for grid layout
        columnWrapperStyle={styles.row} // Add styling for row
      />
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#D9EFE4",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#DBE5E0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
});
