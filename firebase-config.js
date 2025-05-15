import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXNqEMqqAMnc6sLaMH30hMYPHxnYZiDEg",
  authDomain: "finaluniversitywebsite.firebaseapp.com",
  projectId: "finaluniversitywebsite",
  storageBucket: "finaluniversitywebsite.firebasestorage.app",
  messagingSenderId: "622507692408",
  appId: "1:622507692408:web:444ea8bba94e880a1af88d",
  measurementId: "G-JB6LS8Z545"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
export const db = getFirestore(app);