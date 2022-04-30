// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuQiZE4mqExRBwc0KU--S7oSN3V9XOaQw",
  authDomain: "assignment-11-49b4b.firebaseapp.com",
  projectId: "assignment-11-49b4b",
  storageBucket: "assignment-11-49b4b.appspot.com",
  messagingSenderId: "398460372232",
  appId: "1:398460372232:web:181c7c2dee55137d7258bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;