// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ7LDRoPna04vQhUQDK6zvk2JAMrDhVQg",
    authDomain: "login-f22f6.firebaseapp.com",
    projectId: "login-f22f6",
    storageBucket: "login-f22f6.appspot.com",
    messagingSenderId: "349433814890",
    appId: "1:349433814890:web:79fa3586292976f0b10f13"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth ();
export {auth};
