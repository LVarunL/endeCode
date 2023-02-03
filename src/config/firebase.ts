// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp-WTppP9rgwiCrB0Eejv3VjQzsit6cak",
  authDomain: "endecon-2b6a7.firebaseapp.com",
  projectId: "endecon-2b6a7",
  storageBucket: "endecon-2b6a7.appspot.com",
  messagingSenderId: "590374004645",
  appId: "1:590374004645:web:ddbc0d28d1ba27f16eea4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);