import { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FireContext } from "./Firebasecontext";
import logoR from "../img/logo-round.png";

export default function LoginAcc(userState) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signInEmail, user, updateUserProfile } = useContext(FireContext);
  const [edit, setEdit] = useState(false);

  const newUN = document.getElementById("updatedName");

  if (userState.userState == null)
    //Log-in Component
    return (
      <form className=''>
        <div className='flex flex-col p-2 gap-4 '>
          <label htmlFor='email'>Email:</label>
          <input
            required
            ref={emailRef}
            type='email'
            name='log-in email'
            className='border-2 border-black pl-2 '
            id=''
          />
          <label htmlFor='password' id='log-in-pass'>
            Password:
          </label>
          <input
            required
            ref={passwordRef}
            type='password'
            name='log-in password'
            className='border-2 border-black pl-2'
            id='log-in-password'
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              signInEmail(emailRef.current.value, passwordRef.current.value);
            }}
            className='m-2 border-green-800 border-2 p-2 rounded-lg  shadow-xl active:bg-green-800 hover:bg-green-600'
          >
            Log-in
          </button>
          <Link
            to='newuser'
            className='text-center underline underline-offset-1 hover:text-green-700 pointer-events-auto'
          >
            Create an account here!
          </Link>
        </div>
      </form>
    );
  //TODO:Basic user profile profile picture, name, email, goto acccount button
  else if (userState.userState != null) {
    return (
      <>
        <div className='flex flex-col text-center justify-center h-fit w-fit gap-2 p-2'>
          <div className='flex justify-center p-2 w-[100%] '>
            <img
              src={user.photoUrl == undefined ? logoR : user.photoUrl}
              height='100px'
              width='100px'
            />
          </div>
          {/* <div className={edit ? " grid border-2 border-black" : "hidden"}>
            <label htmlFor='pfp'>
              Upload New Profile Picture <br /> <span className='text-xs'>( 3mb limit )</span>
            </label>
            <input type='file' id='pfp' />
          </div> */}
          <button
            onClick={() => setEdit(!edit)}
            className='underline text-green-800 hover:text-green-700 cursor-pointer text-xs'
          >
            {edit ? "Cancel" : "Quick Edit"}
          </button>
          <p className='bg-slate-300 rounded-xl p-2'>
            Welcome: {user.displayName == undefined ? "User" : user.displayName}
          </p>
          <div className={edit ? "flex flex-col w-[100%] gap-4" : "hidden"}>
            <label htmlFor='userName'>Set New Username:</label>
            <input type='text' name='userName' id='updatedName' />
            <button
              className='border-black bg-green-800 hover:bg-green-600 border-2 mb-4'
              onClick={(e) => {
                if (newUN.value != "") {
                  updateUserProfile(newUN.value);
                  setEdit(false);
                } else {
                  alert("Username Cannot Be Blank");
                }
              }}
            >
              Save
            </button>
          </div>
          <p className='bg-slate-300 rounded-xl p-2'>Email: {user.email}</p>
          <Link
            to='account'
            className='underline text-amber-700 hover:text-amber-900 text-sm cursor-pointer'
          >
            Change password
          </Link>
          <Link
            to='account'
            className='underline text-amber-700 hover:text-amber-900 text-sm cursor-pointer'
          >
            Account Settings
          </Link>
        </div>
      </>
    );
  }
}
