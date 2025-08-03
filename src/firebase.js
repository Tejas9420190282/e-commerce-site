
// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRdTbSm2hSjYVdr020fvtxqH25clzC9pw",
  authDomain: "email-password-authentic-99334.firebaseapp.com",
  projectId: "email-password-authentic-99334",
  storageBucket: "email-password-authentic-99334.firebasestorage.app",
  messagingSenderId: "963344641314",
  appId: "1:963344641314:web:a7170f26a9f993e84ec97b",
  measurementId: "G-HNJ26WKP7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);


