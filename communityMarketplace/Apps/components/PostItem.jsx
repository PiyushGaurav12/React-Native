import { Alert, Image, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../firebaseConfig'; // Import your firebase configuration
import { useNavigation } from '@react-navigation/native';

const PostItem = ({ item, showHeartIcon = true }) => {
  const db = getFirestore(app);
  const navigation = useNavigation();

  const addToWishlist = async (product) => {
    try {
      await addDoc(collection(db, "wishlist"), {
        image: product.image,
        category: product.category,
        title: product.title,
        price: product.price,
        address: product.address,
      });
      console.log("Product added to wishlist");
    } catch (e) {
      console.error("Error adding product to wishlist: ", e);
    }
  };

  const addToCart = async (product) => {
    try {
      await addDoc(collection(db, "addtocart"), {
        image: product.image,
        category: product.category,
        title: product.title,
        price: product.price,
        address: product.address,
      });
      console.log("Product added to cart");
    } catch (e) {
      console.error("Error adding product to cart: ", e);
    }
  };

  const handleWishlistPress = () => {
    Alert.alert('Add to wishlist', 'Click on ok to add', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => addToWishlist(item),
      },
    ]);
  };
  
  const handleAddToCartPress = () => {
    addToCart(item);
  };

 
  const handleItemPress = () => {
    navigation.navigate('ProductDetail', { product: item });
  };

  return (
    <TouchableOpacity onPress={handleItemPress} style={styles.itemContainer}>
      <View style={styles.itemContainer1}>
        {showHeartIcon && (
          <Ionicons
            name="heart-circle"
            size={30}
            color="red"
            style={styles.icon}
            onPress={handleWishlistPress}
          />
        )}
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text>[{item.category}]</Text>
        <Text>{item.title}</Text>
        <Text>{item.price}/-</Text>
        <Text>{item.address}</Text>
        <Button title="Add to Cart" onPress={handleAddToCartPress} />
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  itemContainer1: {
    position: 'relative',
    width: "100%",
    height: 160,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 5,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: 7,
    left: "80%",
    zIndex: 1,
  },
  detailsContainer: {
    backgroundColor: "#EDA5FA",
    padding: 10,
    borderRadius: 10,
  },
});
