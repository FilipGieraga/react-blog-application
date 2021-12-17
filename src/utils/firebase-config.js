import firebase from "firebase";
// npm i firebase@7.15.1-0 // stable version
const firebaseConfig = {
  apiKey: "AIzaSyBxCD1LpzAA7jfsVELkXvqZ4AFgQsfmnCg",
  authDomain: "blog-app-bdeeb.firebaseapp.com",
  databaseURL:
    "https://blog-app-bdeeb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-app-bdeeb",
  storageBucket: "blog-app-bdeeb.appspot.com",
  messagingSenderId: "533796552665",
  appId: "1:533796552665:web:941e61c820138e6d60e3c8",
  measurementId: "G-DGMG6KPNC2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
