// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdJnyeW7ebTytk6k5v5wKKHQ1R9wdrleA",
  authDomain: "los-sauces-99b63.firebaseapp.com",
  projectId: "los-sauces-99b63",
  storageBucket: "los-sauces-99b63.appspot.com",
  messagingSenderId: "138308812119",
  appId: "1:138308812119:web:5097184747da7ed68dd212",
  measurementId: "G-XRF97LZ1QK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);