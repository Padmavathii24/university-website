import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const blogForm = document.getElementById('blogForm');

blogForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('blogName').value.trim();
  const email = document.getElementById('blogEmail').value.trim();
  const message = document.getElementById('blogMessage').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    await addDoc(collection(db, "blogResponses"), {
      name,
      email,
      message,
      createdAt: serverTimestamp()
    });

    alert("Your interest has been submitted!");
    blogForm.reset();
  } catch (error) {
    alert("Error submitting response: " + error.message);
  }
});
