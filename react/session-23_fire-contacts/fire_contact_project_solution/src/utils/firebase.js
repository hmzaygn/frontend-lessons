import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTPsB8wE4qUHu1OPX-NBQ1FEl__FGaYB0",
  authDomain: "fire-contact-solution-586a4.firebaseapp.com",
  databaseURL:
    "https://fire-contact-solution-586a4-default-rtdb.firebaseio.com",
  projectId: "fire-contact-solution-586a4",
  storageBucket: "fire-contact-solution-586a4.appspot.com",
  messagingSenderId: "234387678207",
  appId: "1:234387678207:web:4229311503791a944e7dca",
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
