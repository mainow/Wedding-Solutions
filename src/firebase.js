// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZXaUDRUDNZt2usTc3VV1ZLqgHEM_nre4",
  authDomain: "arami-s.firebaseapp.com",
  projectId: "arami-s",
  storageBucket: "arami-s.appspot.com",
  messagingSenderId: "729442816593",
  appId: "1:729442816593:web:c62ca7416beb21628e1e70",
  measurementId: "G-CDTFKLLT4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);