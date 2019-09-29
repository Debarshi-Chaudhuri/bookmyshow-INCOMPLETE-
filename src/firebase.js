import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCjUF9PJZJos-tHuc9qantnqfXsvMqu14U",
    authDomain: "bookmyshow-d9212.firebaseapp.com",
    databaseURL: "https://bookmyshow-d9212.firebaseio.com",
    projectId: "bookmyshow-d9212",
    storageBucket: "bookmyshow-d9212.appspot.com",
    messagingSenderId: "750903254178",
    appId: "1:750903254178:web:73d4a362aa0b3769f8cbfb",
    measurementId: "G-30XTWCMP8N"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;