// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhis8DNdB0EocB5yDe9ifxVm4W_e0oSNg",
  authDomain: "portfolio-58067.firebaseapp.com",
  databaseURL: "https://portfolio-58067-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-58067",
  storageBucket: "portfolio-58067.appspot.com",
  messagingSenderId: "557893874474",
  appId: "1:557893874474:web:a8ec16ae4a23e847256453",
  measurementId: "G-C5L1CPJYP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);

