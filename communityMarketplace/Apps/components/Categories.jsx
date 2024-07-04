import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Categories = ({ categoryList }) => {
  const navigation=useNavigation();
  // console.log("Category List:", categoryList); // Log categoryList to verify data

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        data={categoryList}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          // console.log("Item:", item); // Log individual items to verify data
          return (
            <TouchableOpacity key={item.id} onPress={()=>navigation.navigate('item-list')} style={styles.itemContainer}>
              <Image 
                source={{ uri: item.icon }}
                style={styles.icon}
                onError={(e) => console.log("Image Load Error: ", e.nativeEvent.error)} // Log image load errors
              />
              {/* Display category name */}
              {/* <Text style={styles.itemText}>{item.name}</Text>  */}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    
  },
  icon: {
    width: 70,
    height: 60,
    marginRight: 15,
    backgroundColor: '#E104C3', // Placeholder background color to help debug
    borderWidth: 2, // Thickness of the border
    borderColor: '#000', // Color of the border
    borderRadius: 20, // Rounded corners
  },
  itemText: {
    fontSize: 16,
  },
});
