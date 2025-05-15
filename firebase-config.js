import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNaOQxBHygN4uccaIEF3ubxEQHVtxrjf8",
  authDomain: "universitywebsite-42e75.firebaseapp.com",
  projectId: "universitywebsite-42e75",
  storageBucket: "universitywebsite-42e75.firebasestorage.app",
  messagingSenderId: "849800760840",
  appId: "1:849800760840:web:834938c50daaba241f8bbd",
  measurementId: "G-YCDPQL8EYK"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
export const db = getFirestore(app);