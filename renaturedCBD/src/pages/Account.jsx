import { useContext } from "react";
import { FireContext } from "../components/Firebasecontext";

export default function Account() {
  const { user } = useContext(FireContext);
  document.title = "Account Settings";
  return (
    <div className='grid justify-items-center h-[90vh] mt-24'>
      <div className='grid justify-items-center bg-slate-600 h-fit bg-opacity-[85%] w-[80%] mt-8 rounded-xl shadow-2xl '>
        <div className=' flex p-4 gap-6'>
          <h1 className='text-4xl p-6 border-r-4 border-green-600'>Account Settings</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className='flex flex-col p-6 gap-4 w-[40vw]'
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
          </form>
        </div>
      </div>
    </div>
  );
}
