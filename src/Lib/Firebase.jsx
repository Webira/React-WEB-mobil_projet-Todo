// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
//import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7vBm-qtTutljdFPLNTdcrgY5hwh_KO-U",
  authDomain: "todosite-react.firebaseapp.com",
  projectId: "todosite-react",
  storageBucket: "todosite-react.appspot.com",
  messagingSenderId: "213281761734",
  appId: "1:213281761734:web:bbb27efd67d484d80daac7"
};

// Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app)

// Initialize le service d'authentification
    //export const firebaseAuth = getAuth(firebase)
// Initialise le service firestore (la base de données)
    //export const firebaseDb = getFirestore(firebase)