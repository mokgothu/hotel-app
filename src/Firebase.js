// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLu7kVwwXhOacFv_SMvosc-i0vO6OpT0Q",
  authDomain: "hotel-app-fad28.firebaseapp.com",
  projectId: "hotel-app-fad28",
  storageBucket: "hotel-app-fad28.appspot.com",
  messagingSenderId: "644932245050",
  appId: "1:644932245050:web:5d044d78006efb2c548703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


export{auth, db};