

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object (replace these with your own Firebase config values)
const firebaseConfig = {
  apiKey: "AIzaSyByubPF9kXMVD3ji7MfIxKO32uCKyhRfVs",
  authDomain: "kayanfrontend-8cc9d.firebaseapp.com",
  projectId: "kayanfrontend-8cc9d",
  storageBucket: "kayanfrontend-8cc9d.firebasestorage.app",
  messagingSenderId: "448270334960",
  appId: "1:448270334960:web:8465678cb40a8d6313fb35",
  measurementId: "G-SHM7W124SC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };





