import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCQsoo-pdgD_baBApuUjpOt6B9UWNRMyx4",
  authDomain: "practice-d9487.firebaseapp.com",
  projectId: "practice-d9487",
  storageBucket: "practice-d9487.appspot.com",
  messagingSenderId: "842461233302",
  appId: "1:842461233302:web:506a242a614216dc7202b7",
  measurementId: "G-2L598T1STK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const loginWithGoogle=new GoogleAuthProvider()
export const db = getFirestore(app);