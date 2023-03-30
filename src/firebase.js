
import "firebase/compat/auth";
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = ({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE__MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
  measurementId :process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
})

 const app =  firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();

 const db = getFirestore(app);

 export {firebase, auth, db };