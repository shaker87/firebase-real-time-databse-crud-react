import "firebase/compat/database";
import firebase from "firebase/compat/app";


const firebaseConfig = {
    apiKey: "AIzaSyB58ISofE7CLJTevjf4OF84Uzwq8FmgUG8",
    authDomain: "fir-database-crud-92db6.firebaseapp.com",
    projectId: "fir-database-crud-92db6",
    storageBucket: "fir-database-crud-92db6.appspot.com",
    messagingSenderId: "1036152907917",
    appId: "1:1036152907917:web:b26a38fb97143c78f71ac4",
    measurementId: "G-TVX2SWNE39"
  };
// Initialize Firebase
// const fireDb = firebase.initializeApp(firebaseConfig)
const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref();


// export default fireDb.database().ref();