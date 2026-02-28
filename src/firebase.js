import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc, increment } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3DNX9fLVXkTyIUlLzrH5Peb9HFnFG9c8",
    authDomain: "topce-5bc6f.firebaseapp.com",
    projectId: "topce-5bc6f",
    storageBucket: "topce-5bc6f.firebasestorage.app",
    messagingSenderId: "178473671409",
    appId: "1:178473671409:web:6246297486d661a9896750"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
