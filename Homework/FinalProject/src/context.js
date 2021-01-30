import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCUddyXA53otiXwR_iAd2Zx4sxpL66MMp8",
    authDomain: "contacts-ed3b5.firebaseapp.com",
    databaseURL: "https://contacts-ed3b5-default-rtdb.firebaseio.com",
    projectId: "contacts-ed3b5",
    storageBucket: "contacts-ed3b5.appspot.com",
    messagingSenderId: "1047286884208",
    appId: "1:1047286884208:web:c3cd77184ae7ecef8211b5"
  };

    firebase.initializeApp(firebaseConfig);
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    
    export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
    }).catch((error) => {
    })
    }

    export const SignOut = () =>
    {
      auth.signOut().then( () => {
        console.log("Signed out")
      }).catch( (error) => {
        console.log(error.message)
      })
    }


