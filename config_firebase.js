// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYvJaMOrTx1M2E1oi29jSmWn5P9pZ-Lns",
  authDomain: "foodbites-b59ef.firebaseapp.com",
  projectId: "foodbites-b59ef",
  storageBucket: "foodbites-b59ef.appspot.com",
  messagingSenderId: "243184322408",
  appId: "1:243184322408:web:7f3f71abe4d8fd34cdb8dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;