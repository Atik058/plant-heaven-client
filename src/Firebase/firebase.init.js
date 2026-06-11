// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuVt8NKr5Q9Kihn8Vt8QsHk8KBFOGC1d0",
  authDomain: "plant-heaven.firebaseapp.com",
  projectId: "plant-heaven",
  storageBucket: "plant-heaven.firebasestorage.app",
  messagingSenderId: "468138467137",
  appId: "1:468138467137:web:ce19088177b15063840bc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);