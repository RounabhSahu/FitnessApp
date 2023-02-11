// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore, } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeC6NKxTSFeNMenog5nnEQ8CmOw7ZiQRQ",
    authDomain: "fitness-870e1.firebaseapp.com",
    projectId: "fitness-870e1",
    storageBucket: "fitness-870e1.appspot.com",
    messagingSenderId: "8499369396",
    appId: "1:8499369396:web:d480f97d8ff963a83c0ee1",
    measurementId: "G-DB4F6GZ2QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);