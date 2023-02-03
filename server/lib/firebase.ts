// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOKpV1MaPULC3TTt6aLa3m-1P4pViLWBQ",
  authDomain: "nuxt-app-246b8.firebaseapp.com",
  databaseURL: "https://nuxt-app-246b8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nuxt-app-246b8",
  storageBucket: "nuxt-app-246b8.appspot.com",
  messagingSenderId: "609091023062",
  appId: "1:609091023062:web:31ac19b6ab0d7f8d4fd977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);