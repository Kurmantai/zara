// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFtL5R5e4-Y5eeATHceYpuf1sz_qFWPm4",
  authDomain: "zara-b3939.firebaseapp.com",
  projectId: "zara-b3939",
  storageBucket: "zara-b3939.appspot.com",
  messagingSenderId: "453940299538",
  appId: "1:453940299538:web:1658221a87443403a095cb",
  measurementId: "G-FZCDWBEE45",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
