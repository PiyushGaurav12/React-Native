import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../firebaseConfig";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";

const AddPostScreen = () => {
  const [image, setImage] = useState(null);
  const db = getFirestore(app);
  const storage = getStorage();
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "Category"));
      const categories = [];
      querySnapshot.forEach((doc) => {
        console.log("Docs:", doc.data());
        categories.push(doc.data());
      });
      setCategoryList(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
    setLoading(false);
  };

  // used to pick image from gallary
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmitMethod = async (values) => {
    try {
      values.image = image;
      console.log("Submitted values:", values);

      if (image) {
        const resp = await fetch(image);
        const blob = await resp.blob();
        const storageRef = ref(storage, "communityPost/" + Date.now() + ".jpg");

        const snapshot=await uploadBytes(storageRef, blob);
        console.log("Uploaded a blob or file!");

        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log('Download URL:', downloadURL);

        values.image = downloadURL;

        // Optional: Display a success message to the user
        ToastAndroid.show("Image uploaded successfully!", ToastAndroid.SHORT);
      }

      const docRef=await addDoc(collection(db, "userPost"), values);
      console.log("Document written with ID: ", docRef.id);

      ToastAndroid.show('Post added successfully!', ToastAndroid.SHORT);

    } catch (error) {
      console.error("Error uploading image:", error);
      ToastAndroid.show(
        "Failed to upload image. Please try again.",
        ToastAndroid.SHORT
      );
    }
  };

  return (
    
    <View style={styles.container} >
      <Text style={styles.title}>Add New Post</Text>
      <Text style={styles.subtitle}>Create New Post and start selling</Text>
      <Formik
        initialValues={{
          title: "",
          desc: "",
          category: "",
          price: "",
          image: "",
          address: "",
        }}
        onSubmit={(values) => onSubmitMethod(values)}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            console.log("Title Absent");
            ToastAndroid.show("Title must be there", ToastAndroid.SHORT);
            errors.name = "title must be there";
          }
          if (!values.desc) {
            console.log("Description Absent");
            ToastAndroid.show("Description must be there", ToastAndroid.SHORT);
            errors.name = "Description must be there";
          }
          if (!values.price) {
            console.log("Price Absent");
            ToastAndroid.show("Price must be there", ToastAndroid.SHORT);
            errors.name = "price must be there";
          }
          return errors;
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <TouchableOpacity onPress={pickImage}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 100,
                    height: 100,
                    borderWidth: 10,
                    borderRadius: 15,
                    marginBottom: 5,
                  }}
                />
              ) : (
                <Image
                  source={require("./../../assets/images/imgplaceholder.png")}
                  style={{
                    width: 100,
                    height: 100,
                    borderWidth: 10,
                    borderRadius: 15,
                    marginBottom: 5,
                  }}
                />
              )}
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={values.title}
              onChangeText={handleChange("title")}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={values.desc}
              numberOfLines={5}
              onChangeText={handleChange("desc")}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={values.price}
              keyboardType="number-pad"
              onChangeText={handleChange("price")}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              numberOfLines={4}
              value={values.address}
              onChangeText={handleChange("address")}
            />

            {/* Category list dropdown */}

            <Text style={styles.dropdownLabel}>Select Category</Text>
            <View style={{ borderWidth: 1, borderRadius: 10, marginTop: 10 }}>
              <Picker
                selectedValue={values.category}
                onValueChange={handleChange("category")}
              >
                {categoryList.length === 0 && !loading ? (
                  <Picker.Item label="No categories available" value="" />
                ) : (
                  categoryList.map((item, index) => (
                    <Picker.Item
                      key={index}
                      label={item.name}
                      value={item.name}
                    />
                  ))
                )}
              </Picker>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
    
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor:"#F3CAF7"
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 17,
    fontSize: 17,
    textAlignVertical: "top",
    backgroundColor:"#B9D1FA"
  },
  dropdownLabel: {
    marginTop: 10,
    
  },
  submitButton: {
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
