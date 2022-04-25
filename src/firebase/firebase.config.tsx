// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl_8NJCsxaO-J5Aj91vA8u9dar4BQ4Vyw",
  authDomain: "queuing-system-222ff.firebaseapp.com",
  projectId: "queuing-system-222ff",
  storageBucket: "queuing-system-222ff.appspot.com",
  messagingSenderId: "353391046887",
  appId: "1:353391046887:web:b0b9fc1d2bd3bcc9fef242",
  measurementId: "G-GEN7HECK0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);