import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from "./firebase";

export const FireContext = createContext();
export function FireProvider({ children }) {
  ///////////////////////////////////////////////////////////////
  ////////////////FIREBASE USER/FUNCTIONS///////////////////////
  /////////////////////////////////////////////////////////////

  //Firebase auth instance
  const auth = getAuth(app);

  //Current user state object
  const [user, setUser] = useState();

  //Listen for changes to user auth status
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  // Call createUser firebase function, create user database entry uid=DB entry ID
  async function createNewUser(email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //create DB entry for each create user
        setDoc(doc(db, "Users", userCredential.user.uid), {
          uid: userCredential.user.uid,
          userType: "basic",
          userName: userCredential.user.displayName,
          emailForAds: userCredential.user.email,
        });
        //Send verification email
        sendEmailVerification(auth.currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  //UserFunctions
  //Call firebase sign in function
  function signInEmail(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(auth.currentUser);
      })
      .catch((error) => {
        if (error.code == "auth/wrong-password") {
          document.getElementById("log-in-password").classList.add("border-red-600");
          document.getElementById("log-in-pass").innerHTML = "Incorrect Password";
        }
        console.log(error.code);
        console.log(error.message);
      });
  }
  //update Username
  function updateUserProfile(newName) {
    console.log(newName);
    updateProfile(user, { displayName: newName })
      .then(() => {
        alert("Username changed to: " + newName);
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
  ///////////////////////////////////////////////////////////////
  /////////////////CART FUNCTIONS///////////////////////////////
  /////////////////////////////////////////////////////////////

  return (
    <FireContext.Provider
      value={{ signInEmail, createNewUser, signOutUser, updateUserProfile, auth, user }}
    >
      {children}
    </FireContext.Provider>
  );
}

export default createContext;
