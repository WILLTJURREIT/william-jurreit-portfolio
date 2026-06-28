import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyATSVvKzAPlrHCTmkYo6wPlB5S7ngGm9Fo",
  authDomain: "william-portfolio-b1546.firebaseapp.com",
  projectId: "william-portfolio-b1546",
  storageBucket: "william-portfolio-b1546.firebasestorage.app",
  messagingSenderId: "708605175642",
  appId: "1:708605175642:web:895ba033f6750b10377563"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };