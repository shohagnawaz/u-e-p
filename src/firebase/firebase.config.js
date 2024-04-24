// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1l0nqbT-vHe5Lfi5PiAcEJ5ny80LAwpk",
  authDomain: "u-e-p-73509.firebaseapp.com",
  projectId: "u-e-p-73509",
  storageBucket: "u-e-p-73509.appspot.com",
  messagingSenderId: "242995111814",
  appId: "1:242995111814:web:5a673ca6639fa1e748ee07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;