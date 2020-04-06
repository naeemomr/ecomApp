import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBq1rrf9jqYu1levx_S2QlMnazqBGPjo00",
    authDomain: "crwn-db-37408.firebaseapp.com",
    databaseURL: "https://crwn-db-37408.firebaseio.com",
    projectId: "crwn-db-37408",
    storageBucket: "crwn-db-37408.appspot.com",
    messagingSenderId: "218950007867",
    appId: "1:218950007867:web:2533f5c11beb536d31701e",
    measurementId: "G-TVDDKFV07K"
};

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
