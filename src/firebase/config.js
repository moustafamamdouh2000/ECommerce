import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
export const firebaseConfig = {
  apiKey: "AIzaSyD6fDrjGsfqcqBEbQ8AAiJsztzHI8h0FqE",
  authDomain: "e-commerce-f0607.firebaseapp.com",
  projectId: "e-commerce-f0607",
  storageBucket: "e-commerce-f0607.appspot.com",
  messagingSenderId: "809737746589",
  appId: "1:809737746589:web:7600955d505af63d457c74"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app