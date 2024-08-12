// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbB5DGCY-oChYTcZMWZpDFIgGwfgbt3mw",
  authDomain: "lets-login-ee2ae.firebaseapp.com",
  projectId: "lets-login-ee2ae",
  storageBucket: "lets-login-ee2ae.appspot.com",
  messagingSenderId: "865306160270",
  appId: "1:865306160270:web:81934c93fa560858ecaddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db= getFirestore(app);
export default app;