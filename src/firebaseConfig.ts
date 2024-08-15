// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA6FAnwyyg_X1YGtOtY1O3dUqLTavrczkE",
    authDomain: "my-first-firebase-75799.firebaseapp.com",
    databaseURL: "https://my-first-firebase-75799-default-rtdb.firebaseio.com",
    projectId: "my-first-firebase-75799",
    storageBucket: "my-first-firebase-75799.appspot.com",
    messagingSenderId: "343685344821",
    appId: "1:343685344821:web:acf42e92b1cf1b2162cb7c",
    measurementId: "G-BNTXEZ053W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
export const db = getFirestore(app);

// Firebase Authentication
export const auth = getAuth(app);
