// src/app/firebase/firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbtpAdCj5fOA2JcB453nnaSg02i7ow9eo",
  authDomain: "continuous-9e3f2.firebaseapp.com",
  projectId: "continuous-9e3f2",
  storageBucket: "continuous-9e3f2.firebasestorage.app",
  messagingSenderId: "134228745713",
  appId: "1:134228745713:web:e9a5ce46a6fd2c5a02b850",
  measurementId: "G-K4RLKMQLGQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
