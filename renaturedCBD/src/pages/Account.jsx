import { useContext, useEffect } from "react";
import { FireContext } from "../components/Firebasecontext";
import logoR from "../img/logo-round.png";

export default function Account() {
  document.title = "Account Settings";

  const { user } = useContext(FireContext);
  return (
    <div className='grid justify-items-center min-h-[90vh] my-24'>
      <div className='grid justify-items-center bg-slate-600 h-fit bg-opacity-[85%] w-[80%] mt-8 rounded-xl shadow-2xl '>
        <div className=' lg:flex p-4 gap-6'>
          <div className='border-b-4 lg:border-r-4 lg:border-b-0 border-green-600'>
            <h1 className='text-4xl p-6 '>Account Settings</h1>
            <img
              // src={user.photoUrl == undefined ? logoR : user.photoUrl}
              src={logoR}
              height='300px'
              width='300px'
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className='flex flex-col p-6 gap-4 lg:w-[40vw]'
          >
            <label htmlFor='text'>Change Username : {user.displayName}</label>
            <input
              className='rounded-lg'
              required
              type='userName'
              name='userName'
              id='changeuserName'
            />

            <label htmlFor='email'>Change Email Address: {user.email}</label>
            <input className='rounded-lg' required type='email' name='email' id='changeEmail' />

            <label htmlFor='password' id='changePass'>
              Change Password:
            </label>

            <input
              required
              className='rounded-lg'
              type='password'
              name='password'
              id='changePass'
            />
            <button
              type='submit'
              className='opacity-100 m-4 border-black bg-green-800 active:bg-green-800 hover:bg-green-600 border-2 p-2 px-6 rounded-lg  shadow-xl'
            >
              Save Changes
            </button>
            <button className='opacity-100 m-4 border-black bg-amber-700 active:bg-amber-800 hover:bg-amber-800 border-2 p-2 px-6 rounded-lg  shadow-xl'>
              Delete Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
