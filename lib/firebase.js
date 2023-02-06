// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";
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

// helper functions

export async function getUserWithUsername(username) {
  console.log(username);
  const usersRef = collection(firestore, "users");
  const q = query(usersRef, where("username", "==", username), limit(1));
  const userDoc = (await getDocs(q)).docs[0];
  console.log(userDoc.data());
  return userDoc;
}

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
