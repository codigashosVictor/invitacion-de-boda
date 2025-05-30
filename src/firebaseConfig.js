import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL8xpQEYJh1QorPeTJYyfD3lgdSgGSswQ",
  authDomain: "wedding-invitations-list.firebaseapp.com",
  projectId: "wedding-invitations-list",
  storageBucket: "wedding-invitations-list.firebasestorage.app",
  messagingSenderId: "757040786004",
  appId: "1:757040786004:web:d3436ae8a55c3b49e91bc1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
