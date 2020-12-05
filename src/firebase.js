import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA7bA_Dh2wr2NIY2WJ--LvrntELKoGkn8M",
  authDomain: "discord-redux-5877d.firebaseapp.com",
  projectId: "discord-redux-5877d",
  storageBucket: "discord-redux-5877d.appspot.com",
  messagingSenderId: "889812095114",
  appId: "1:889812095114:web:b682756a081e54f4bc1d73",
  measurementId: "G-REHG6WQCL2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;