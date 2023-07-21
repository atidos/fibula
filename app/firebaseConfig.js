// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN5eN1m1doGPR_VJQCXn9zIH147Q6cHpI",
  authDomain: "fibula-1dceb.firebaseapp.com",
  projectId: "fibula-1dceb",
  storageBucket: "fibula-1dceb.appspot.com",
  messagingSenderId: "989196953774",
  appId: "1:989196953774:web:1ce78015ee8b01b07fa53f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);