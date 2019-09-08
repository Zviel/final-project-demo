import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBIlWATgx3BI_rJGkBeuW0InHkPnN5UPXc",
    authDomain: "ecademy-c4c4f.firebaseapp.com",
    databaseURL: "https://ecademy-c4c4f.firebaseio.com",
    projectId: "ecademy-c4c4f",
    storageBucket: "ecademy-c4c4f.appspot.com",
    messagingSenderId: "735279907784",
    appId: "1:735279907784:web:549f681588bd56489e36fd"
};
//using this method will update the database only if the user is signed in with his google account
export const createUserProfileDocument = async(userAuth,additionalData)=> {
    if(!userAuth) return; //if there is no user
    // a query will return a document or a collection of documents - this is called a query reference.
    //firestore will give us an object - getting the current reference to where the user is saved in the database
    //using one of the CRUD methods to query , actually gets us a snapshot of the DB and we will get the object form the DB that we need

    //getting the user reference
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //if the user does not exists we will create a new one
    if(!snapShot.exists){
        const { displayName , email} = userAuth;
        const createdAt = new Date();
        const firstName = "";
        const lastName = "";
        const birthDate = new Date();
        const gender = '';
        //because this is an async request to the DB
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                firstName,
                lastName,
                birthDate,
                gender,
                ...additionalData
            });
        }catch (e) {
            console.log('error creating a user',e.message);
        }
    }
    //we might need this user reference to some other code for our website
    return userRef;


};

firebase.initializeApp(config);

export const auth = firebase.auth();// for using the google authentication
export const firestore = firebase.firestore(); // for using a database

const provider = new firebase.auth.GoogleAuthProvider();// form the authentication library
provider.setCustomParameters({prompt: 'select_account'}); //always trigger the google popup  for authentication for sign up
export const signInWithGoogle = () => auth.signInWithPopup(provider);//there are all kinds of popups , we want to use only the sign in popup with the provider
export default firebase;