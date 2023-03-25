// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCAVAP9DJraNF29Tr_Z536-rb7wvH4zj0",
  authDomain: "renatured-e9993.firebaseapp.com",
  projectId: "renatured-e9993",
  storageBucket: "renatured-e9993.appspot.com",
  messagingSenderId: "732121970723",
  appId: "1:732121970723:web:ff1c9a9ef61e12f2539996",
  measurementId: "G-MGMT6K91YJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//global functions
