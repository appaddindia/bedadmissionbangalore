// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-V2wak7O4TAd60wAFtUGkVsPpJ-aYuCE",
  authDomain: "bedadmissionbangalore.firebaseapp.com",
  projectId: "bedadmissionbangalore",
  storageBucket: "bedadmissionbangalore.appspot.com",
  messagingSenderId: "140418134790",
  appId: "1:140418134790:web:35d63199914faf9a8d2487",
  measurementId: "G-9LMHG9LYTT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
