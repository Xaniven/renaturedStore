import { Link, useRouteError } from "react-router-dom";

import logoR from "../img/logo-round.png";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div
        className=' h-[50vh] w-[100vw] text-center flex justify-center p-10 mt-24'
        id='error-page'
      >
        <div className='w-[75vw] h-fit bg-amber-900 rounded-xl border-[3px] border-green-800 opacity-90 p-12 text-2xl '>
          <h1>Oops!</h1>
          <p> An unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <p className='mt-8'>
            <span className='text-4xl'>
              <Link to='/' className='underline'>
                Click Here
              </Link>
              <br /> To Return Home and Try Again
            </span>
          </p>

          <div className='w-[100%] flex justify-center p-2 my-4'>
            <img src={logoR} height='300px' width='300px' alt='' />
          </div>
        </div>
      </div>
    </>
  );
}
