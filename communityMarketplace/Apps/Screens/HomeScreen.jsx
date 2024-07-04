import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import LatestItemsList from "../components/LatestItemsList";



const HomeScreen = () => {
  const db = getFirestore(app);
  const [sliderList, setSliderList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [latestItemList, setLatestItemList] = useState([]);

  useEffect(() => {
    getSliders();
    getCategoryList();
    getLatestItemList();
  }, []);

  // getiing image for slider from firebase
  const getSliders = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Slider"));
      const sliders = [];
      querySnapshot.forEach((doc) => {
        sliders.push({ id: doc.id, ...doc.data() });
      });
      console.log("Fetched Sliders:", sliders); // Debugging statement
      setSliderList(sliders);
    } catch (error) {
      console.error("Error fetching sliders: ", error);
    }
  };

  // getting categories list from firebase
  const getCategoryList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Category"));
      const categories = [];
      querySnapshot.forEach((doc) => {
        console.log("Docs:", doc.data()); // Debugging statement
        categories.push(doc.data());
      });
      console.log("Fetched Categories:", categories); // Debugging statement
      setCategoryList(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getLatestItemList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "userPost"));
      const latestItems = [];
      querySnapshot.forEach((doc) => {
        console.log("Docs:", doc.data()); // Debugging statement
        latestItems.push(doc.data());
      });
      // console.log('Fetched Categories:', latestItems); // Debugging statement
      setLatestItemList(latestItems);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <ScrollView>
      <View className="py-8 px-6 bg-purple-200">
        <Header />
        <Slider sliderList={sliderList} />
        <Categories categoryList={categoryList} />
        <LatestItemsList latestItemList={latestItemList} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
