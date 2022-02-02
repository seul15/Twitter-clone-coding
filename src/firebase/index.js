// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmGRwz2pIGOMMS76MqxB2ypuIfsP5E3qc",
  authDomain: "twitter-clone-4fb83.firebaseapp.com",
  projectId: "twitter-clone-4fb83",
  storageBucket: "twitter-clone-4fb83.appspot.com",
  messagingSenderId: "262684529462",
  appId: "1:262684529462:web:7411087423a3847fb6d997",
  measurementId: "G-K6EVKDH2KJ"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export const USER_COLLECTION = db.collection("users")