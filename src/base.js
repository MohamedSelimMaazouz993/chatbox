import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD7bXocG-ipTLH8PbGhr7NyGkL-mq-4e20",
  authDomain: "chatbox-app-47b32.firebaseapp.com",
  databaseURL: "https://chatbox-app-47b32-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatbox-app-47b32",
  storageBucket: "chatbox-app-47b32.appspot.com",
  messagingSenderId: "195405472830",
  appId: "1:195405472830:web:133849e39c4d0691cddd6f",
  measurementId: "G-MBDZ6XCTM1"
};

// Initialize Firebase
const base = initializeApp(firebaseConfig);


export default base
