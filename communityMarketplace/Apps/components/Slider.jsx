import { FlatList, Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';

const Slider = ({ sliderList }) => {
  // console.log("Slider List in Slider Component:", sliderList);

  return (
    <View style={styles.container}>
      {sliderList.length === 0 ? (
        <Text>No sliders available</Text>
      ) : (
        <FlatList 
          data={sliderList}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.Image }}
                style={styles.image}
                onError={(e) => console.log("Image Load Error: ", e.nativeEvent.error)}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
  imageContainer: {
    marginBottom: 10,
    alignItems: 'center', // Ensure images are centered
  },
  image: {
    height: 200,
    width: 300, // Set a fixed width for the image
    resizeMode: 'cover',
    marginHorizontal: 10, // Add margin between images
    borderRadius: 10, // Add border radius for better styling
  },
});
