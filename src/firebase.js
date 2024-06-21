// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA3Y6lCdFXMSFVpR2K1f5kQcPwNas4XGg",
  authDomain: "disaster-app-2e909.firebaseapp.com",
  projectId: "disaster-app-2e909",
  storageBucket: "disaster-app-2e909.appspot.com",
  messagingSenderId: "938800168419",
  appId: "1:938800168419:web:ded9cc216679d4408d74d6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp); // Use firebaseApp instead of FirebaseApp

export { auth };
export default firebaseApp;
