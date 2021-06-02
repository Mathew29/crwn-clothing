import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlTQun8swgENd0wkP2VXknGb9E_u88xkA",
  authDomain: "crwn-db-49af4.firebaseapp.com",
  projectId: "crwn-db-49af4",
  storageBucket: "crwn-db-49af4.appspot.com",
  messagingSenderId: "920837758722",
  appId: "1:920837758722:web:4f5f072de46ebdbc2fec1b",
  measurementId: "G-NL6CTBN7BS",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
