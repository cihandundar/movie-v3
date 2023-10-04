import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBKWpkPeu2PnYvYY5AotnMEWfHT7kK6FiE",
  authDomain: "react-movie-1cad7.firebaseapp.com",
  projectId: "react-movie-1cad7",
  storageBucket: "react-movie-1cad7.appspot.com",
  messagingSenderId: "659286672860",
  appId: "1:659286672860:web:0d5d3f715e4a1c1a913b19",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
