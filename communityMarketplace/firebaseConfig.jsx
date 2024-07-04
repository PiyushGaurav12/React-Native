// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9aQmKogVL-BO6Damk_o2gqdb5qmVh-l4",
  authDomain: "communitymarketplace-baf85.firebaseapp.com",
  projectId: "communitymarketplace-baf85",
  storageBucket: "communitymarketplace-baf85.appspot.com",
  messagingSenderId: "952080771634",
  appId: "1:952080771634:web:c752db73afa4796068ea2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export { app, db };


