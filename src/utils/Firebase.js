// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZefngrFaZK4rNc4oKhyJcV2PdFXxGRk0",
  authDomain: "netfixgpt-c3dbe.firebaseapp.com",
  projectId: "netfixgpt-c3dbe",
  storageBucket: "netfixgpt-c3dbe.appspot.com",
  messagingSenderId: "540011206176",
  appId: "1:540011206176:web:5b510fa6321dba9c538e45",
  measurementId: "G-T0MXT81L0Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
