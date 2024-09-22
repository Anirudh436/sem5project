// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sem5project-3a134.firebaseapp.com",
  projectId: "sem5project-3a134",
  storageBucket: "sem5project-3a134.appspot.com",
  messagingSenderId: "3275412216",
  appId: "1:3275412216:web:93b1b2111a01e05a97610d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);