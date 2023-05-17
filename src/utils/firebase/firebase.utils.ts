// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWidthRedirect,
  signInWidthPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwOESYX9agQWG275SyPO4PXQYaoOLA-Aw",
  authDomain: "mini-clothing.firebaseapp.com",
  projectId: "mini-clothing",
  storageBucket: "mini-clothing.appspot.com",
  messagingSenderId: "644920877289",
  appId: "1:644920877289:web:9ba3001c2b7e7a51e55078",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
