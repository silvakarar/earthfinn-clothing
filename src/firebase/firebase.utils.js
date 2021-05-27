import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
  apiKey: "AIzaSyDIfoqEWVQJQwr266lXsmPTwNZb17qE7BI",
  authDomain: "earthfinn-clothing.firebaseapp.com",
  projectId: "earthfinn-clothing",
  storageBucket: "earthfinn-clothing.appspot.com",
  messagingSenderId: "800077985454",
  appId: "1:800077985454:web:b69a9d31cb629e7bab9f3f",
  measurementId: "G-646VN8LZPE",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exits) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user");
    }
  }
  return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
