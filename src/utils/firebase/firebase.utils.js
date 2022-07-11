import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDSeD5kA6A8jwmN03U58CDTZLHqnZfHnI8",
    authDomain: "crwn-clothing-db-8f1e1.firebaseapp.com",
    projectId: "crwn-clothing-db-8f1e1",
    storageBucket: "crwn-clothing-db-8f1e1.appspot.com",
    messagingSenderId: "650074584936",
    appId: "1:650074584936:web:2ac6d5224a373872f448dd"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists())
}