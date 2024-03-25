// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "landscapelistings.firebaseapp.com",
  projectId: "landscapelistings",
  storageBucket: "landscapelistings.appspot.com",
  messagingSenderId: "408133647932",
  appId: "1:408133647932:web:6a65aa067d5133af260d39",
  measurementId: "G-2671L1HLLN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);