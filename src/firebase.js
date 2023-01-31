import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjEUOwhO5iEEVM_ntuDf1arIpG6qgH0kU",
  authDomain: "disney-clone-e7c4e.firebaseapp.com",
  projectId: "disney-clone-e7c4e",
  storageBucket: "disney-clone-e7c4e.appspot.com",
  messagingSenderId: "1019815848870",
  appId: "1:1019815848870:web:febe5efc49750be1137d67",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
