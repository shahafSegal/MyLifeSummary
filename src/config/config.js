// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAJqRw1efxlqgdOWMuQXloyVJOj0GhAqOE",
  authDomain: "resumeapp-b2e2d.firebaseapp.com",
  projectId: "resumeapp-b2e2d",
  storageBucket: "resumeapp-b2e2d.appspot.com",
  messagingSenderId: "215874832198",
  appId: "1:215874832198:web:73232954a3da8ab9e44747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

const auth=getAuth(app)

export{db};

export {auth};