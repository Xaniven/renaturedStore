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
  const auth = getAuth(app);
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  function createNewUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

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
