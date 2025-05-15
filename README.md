# 🎓 University Website

A responsive university website with Firebase backend integration. Users can read about the university, explore courses, submit blog posts, and contact the university via forms.

Live Site: [Your Vercel Deployment URL]

---

## 📁 Pages Overview

### 🏠 Home Page
- Brief introduction of the university
- Navigation to all other pages

### 📝 Blog Page (`Blog.js`)
- Submit blog posts with a title and content
- Posts are stored in Firestore (`blogPosts` collection)
- Realtime timestamp is added

### 📩 Contact Page (`Contact.js`)
- Contact form with name, email, and message
- Messages saved to Firestore (`contactMessages` collection)
- Success/failure alert shown after submission

### ℹ️ About Page
- Displays information about the university
- Mission, vision, and background

### 📚 Courses Page
- List of available academic programs and courses
- Could include links or brief course descriptions

---

## 🔧 Technologies Used

- **HTML/CSS/JavaScript**
- **Firebase Firestore (v9)**
- **Firebase Hosting (optional)**
- **Vercel** for deployment

---

## ⚙️ Firebase Configuration

Firebase setup is done in `firebase-config.js`:

```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
