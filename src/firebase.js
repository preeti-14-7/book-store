
import "firebase/compat/auth";
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = ({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.RREACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.RREACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.RREACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.RREACT_APP_FIREBASE__MESSAGING_SENDER_ID,
  appId: process.env.RREACT_APP_FIREBASE_APP_ID,
  measurementId :process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
})

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = firebase.auth();
export default app;