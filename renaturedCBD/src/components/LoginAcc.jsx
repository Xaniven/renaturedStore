import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { FireContext } from "./Firebasecontext";

export default function LoginAcc(userState) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signInEmail } = useContext(FireContext);
  if (userState.userState == null)
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
          <label htmlFor='password'>Password:</label>
          <input
            required
            ref={passwordRef}
            type='password'
            name='log-in password'
            className='border-2 border-black pl-2'
            id=''
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              signInEmail(emailRef.current.value, passwordRef.current.value);
            }}
            className='m-2 border-green-800 border-2 p-2 rounded-lg  shadow-xl active:bg-green-600 '
          >
            Log-in
          </button>
          <Link
            to='newuser'
            className='text-center underline underline-offset-1 hover:text-green-800 pointer-events-auto'
          >
            Create an account here!
          </Link>
        </div>
      </form>
    );
  else if (userState.userState != null) {
    return <>logged in</>;
  }
}
