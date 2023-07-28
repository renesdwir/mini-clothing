// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { UserAuthTypes } from "../../types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwOESYX9agQWG275SyPO4PXQYaoOLA-Aw",
  authDomain: "mini-clothing.firebaseapp.com",
  projectId: "mini-clothing",
  storageBucket: "mini-clothing.appspot.com",
  messagingSenderId: "644920877289",
  appId: "1:644920877289:web:9ba3001c2b7e7a51e55078",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey: any,
  objectsToAdd: any
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object: any) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async (prop: string) => {
  const collectionRef = collection(db, prop);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth: UserAuthTypes,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user: ", error);
    }
  }
  return userDocRef;
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: (user: any) => void) =>
  onAuthStateChanged(auth, callback);
