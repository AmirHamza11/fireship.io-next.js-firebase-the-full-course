// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, googleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo2AX1HcunK_hvgMFKLMJFYFcx3fSmP3g",
  authDomain: "nextfire-app-2ec74.firebaseapp.com",
  projectId: "nextfire-app-2ec74",
  storageBucket: "nextfire-app-2ec74.appspot.com",
  messagingSenderId: "506096649656",
  appId: "1:506096649656:web:903b793aadfd856d30fb4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const gAprovider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
