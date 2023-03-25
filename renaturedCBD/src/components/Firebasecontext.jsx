import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "./firebase";

export const FireContext = createContext();
export function FireProvider({ children }) {
  //Firebase auth instance
  const auth = getAuth(app);

  //Current user state object
  const [user, setUser] = useState();

  //Listen for changes to user auth status
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  // Call createUser firebase function, create user database entry uid=DB entry ID
  function createNewUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  //Call firebase sign in function
  function signInEmail(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(auth.currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  //Sign out current user, log it console
  function signOutUser(auth) {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <FireContext.Provider value={{ signInEmail, createNewUser, auth, signOutUser, user }}>
      {children}
    </FireContext.Provider>
  );
}

export default createContext;
