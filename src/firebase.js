// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDROz7OYZRqTnimEOEYqve1fWlRr0-5ns0",
  authDomain: "samentha-6f6d1.firebaseapp.com",
  databaseURL: "https://samentha-6f6d1.firebaseio.com",
  projectId: "samentha-6f6d1",
  storageBucket: "samentha-6f6d1.appspot.com",
  messagingSenderId: "38531568048",
  appId: "1:38531568048:web:eb04878c7a349c22c20675",
  measurementId: "G-7ZRRLTKSYT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;
