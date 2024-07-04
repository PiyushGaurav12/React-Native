import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getDocs, getFirestore, collection } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddToCart = () => {
  const db = getFirestore(app);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const q = collection(db, 'addtocart');
      const snapshot = await getDocs(q);

      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCartItems(items);
    } catch (error) {
      console.error("Error fetching cart items: ", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.category}>[{item.category}]</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}/-</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Cart</Text>
      </View>
      <View >
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1} // Set the number of columns for grid layout
      />
      </View>
    </SafeAreaView>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#D9EFE4",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#DBE5E0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image: {
    width: '80%',
    height: 160,
  },
  infoContainer: {
    padding: 10,
  },
  category: {
    fontSize: 14,
    color: '#777',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#B96F96',
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
});
