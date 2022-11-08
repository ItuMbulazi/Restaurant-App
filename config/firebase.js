// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import 'firebase/storage';  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYspSbF0YaU3al7v6q0f_HFFbbvDZrbNE",

  authDomain: "japazansi.firebaseapp.com",

  projectId: "japazansi",

  storageBucket: "japazansi.appspot.com",

  messagingSenderId: "285584261466",

  appId: "1:285584261466:web:b90f9c22bf1214eedf3363",

  measurementId: "G-YPXHVT1YJC"



};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth=getAuth(app) ;

const storage = getStorage(app)


export  {db,auth, storage}