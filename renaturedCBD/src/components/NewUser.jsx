import { useRef, useContext } from "react";
import { FireContext } from "./Firebasecontext";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  document.title = "New Account";
  const emailSignUp = useRef();
  const passSignUp = useRef();
  const { createNewUser } = useContext(FireContext);
  const nav = useNavigate();

  //check if both password fields match
  // refactor using onChange/useState for more responvive UX
  function check_pass() {
    if (
      document.getElementById("password").value == document.getElementById("passwordConfirm").value
    ) {
      return true;
    } else {
      document.getElementById("password").classList.add("border-red-500");
      document.getElementById("passwordConfirm").classList.add("border-red-500");
      document.getElementById("passMessage").innerHTML = "Passwords Don't Match";
      document.getElementById("passMessage2").innerHTML = "Passwords Don't Match";

      return false;
    }
  }
  return (
    <div className='grid justify-items-center h-[85vh]'>
      <div className=' bg-slate-600 h-fit bg-opacity-[85%] mt-8 rounded-xl shadow-2xl'>
        <h1 className=' text-center text-4xl p-6'>Create a New Account</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (check_pass() == true) {
              createNewUser(emailSignUp.current.value, passSignUp.current.value);
              nav("account");
            } else {
            }
          }}
          className='flex flex-col p-6 gap-4 lg:w-[60vw]'
        >
          <label htmlFor='email'>Email Address:</label>
          <input required ref={emailSignUp} type='email' name='email' id='email' />

          <label htmlFor='password' id='passMessage'>
            Create a Password:
          </label>

          <input
            required
            className='border-2  appearance-none '
            ref={passSignUp}
            type='password'
            name='password'
            id='password'
          />
          <label htmlFor='passwordConfirm' id='passMessage2'>
            Re-enter Password:
          </label>
          <input
            required
            className='border-2  appearance-none '
            type='password'
            name='passwordConfirm'
            id='passwordConfirm'
          />
          <div className=''>
            <label htmlFor='checkbox'>
              Click here to agree to{" "}
              <span className=' underline hover:text-green-800 hover:cursor-pointer p-2'>
                Terms & Conditions.
              </span>
            </label>
            <input required type='checkbox' name='checkbox' id='tosBox' />
          </div>
          <button
            type='submit'
            className='opacity-100 m-4 border-black bg-green-800 active:bg-green-800 hover:bg-green-600 border-2 p-2 px-6 rounded-lg  shadow-xl'
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
