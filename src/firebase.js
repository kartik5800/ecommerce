import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNALZHiYVlsaeDbvo_cVPWucTbrhnS1bs",
  authDomain: "ecom-project-875c4.firebaseapp.com",
  projectId: "ecom-project-875c4",
  storageBucket: "ecom-project-875c4.appspot.com",
  messagingSenderId: "377022934368",
  appId: "1:377022934368:web:d1a5509d43e66a69138205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);



