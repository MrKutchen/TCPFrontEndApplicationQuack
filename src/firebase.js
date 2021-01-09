import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBFanF-JdrwAHDJ82Mqo8H97pN2lv-s7I",
    authDomain: "quack-demo.firebaseapp.com",
    projectId: "quack-demo",
    storageBucket: "quack-demo.appspot.com",
    messagingSenderId: "833088016571",
    appId: "1:833088016571:web:c86f15ddab6e709cb7d99e",
    measurementId: "G-25NCSRLZK9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
