import firebase from 'firebase/app';
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyDIfoqEWVQJQwr266lXsmPTwNZb17qE7BI",
    authDomain: "earthfinn-clothing.firebaseapp.com",
    projectId: "earthfinn-clothing",
    storageBucket: "earthfinn-clothing.appspot.com",
    messagingSenderId: "800077985454",
    appId: "1:800077985454:web:b69a9d31cb629e7bab9f3f",
    measurementId: "G-646VN8LZPE"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;