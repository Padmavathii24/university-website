import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation (you can improve it)
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    await addDoc(collection(db, "contactMessages"), {
      name,
      email,
      subject,
      message,
      createdAt: serverTimestamp()
    });

    alert("Message sent successfully!");
    contactForm.reset();
  } catch (error) {
    alert("Error sending message: " + error.message);
  }
});
