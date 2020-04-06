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

export const createUserProfileDocument = async (userAuth, additionlData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    // Checking to see if userAUth Id exist in Databse

    if (!snapShot.exists) {
        // usering userReference to create the date in DATABSE

        // Datas needed
        // Destructing Data from userAuth to select only diplay name and email
        const { displayName, email } = userAuth;
        const createdDate = new Date();

        try {
            await userRef.set({
                // Inserting new Data and spreading the additonal Data 
                displayName, email, createdDate, ...additionlData
            })
        } catch (error) {
            console.log("Error Createing User", error.message)
        }

    }
    return userRef;

}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
