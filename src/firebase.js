// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5ShCVOnBCpLzEeNDvcv9m8DO4Km_4Nbs",
  authDomain: "traffic-optimization-1e1bd.firebaseapp.com",
  databaseURL: "https://traffic-optimization-1e1bd-default-rtdb.firebaseio.com",
  projectId: "traffic-optimization-1e1bd",
  storageBucket: "traffic-optimization-1e1bd.firebasestorage.app",
  messagingSenderId: "908159201247",
  appId: "1:908159201247:web:b1f1b507ba450879af5e6a",
  measurementId: "G-V1H4GBDSVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };