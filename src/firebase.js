



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBNALZHiYVlsaeDbvo_cVPWucTbrhnS1bs",
//   authDomain: "ecom-project-875c4.firebaseapp.com",
//   projectId: "ecom-project-875c4",
//   storageBucket: "ecom-project-875c4.appspot.com",
//   messagingSenderId: "377022934368",
//   appId: "1:377022934368:web:d1a5509d43e66a69138205"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// export const db = getFirestore(app);
// export const storage = getStorage(app);



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjUea-nQkn-dzvAlF_XbRwymmUL2PtPag",
  authDomain: "react-firebase-crud-908c6.firebaseapp.com",
  projectId: "react-firebase-crud-908c6",
  storageBucket: "react-firebase-crud-908c6.appspot.com",
  messagingSenderId: "878602629724",
  appId: "1:878602629724:web:83c36ea7fe273de796ac99",
  measurementId: "G-C17M9X6YPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);