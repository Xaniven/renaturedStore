import { useRef, useContext } from "react";
import { FireContext } from "./Firebasecontext";
export default function NewUser() {
  const emailSignUp = useRef();
  const passSignUp = useRef();
  const { createNewUser } = useContext(FireContext);
  return (
    <div className='grid justify-items-center h-[85vh]'>
      <div className=' bg-slate-600 h-fit bg-opacity-70'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(emailSignUp.current.value);
            createNewUser(emailSignUp.current.value, passSignUp.current.value);
          }}
          className='flex flex-col p-6 gap-4 w-[60vw]'
        >
          <label for='email'>Email Address:</label>
          <input required ref={emailSignUp} type='email' name='email' id='email' />

          <label for='password'>Create a Password:</label>
          <input required ref={passSignUp} type='password' name='password' id='password' />
          <label for='passwordConfirm'>Re-enter Password:</label>
          <input required type='password' name='passwordConfirm' id='passwordConfirm' />
          <div className=''>
            <label for='checkbox'>
              Click here to agree to{" "}
              <span className=' underline hover:text-green-800 hover:cursor-pointer p-2'>
                Terms & Conditions.
              </span>
            </label>
            <input required type='checkbox' name='checkbox' id='tosBox' />
          </div>
          <button
            type='submit'
            className='opacity-100 m-4 border-black bg-green-800 hover:bg-green-600 border-2 p-2 px-6 rounded-lg  shadow-xl'
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
