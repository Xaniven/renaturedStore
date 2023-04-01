import React from "react";
import bgMain from "../img/coffee-1255164.jpg";
import logoR from "../img/logo-round.png";
import { useContext } from "react";
import { FireContext } from "../components/Firebasecontext";
export default function Storepage() {
  const { pullProds } = useContext(FireContext);
  document.title = "Shop";
  return (
    <div className='main-container container flex z-0 justify-center min-h-[100vh] max-w-[100vw] relative text-center'>
      <img src={bgMain} alt='' className='absolute min-h-[100%] w-[100vw] object-cover' />
      <div className='content container  p-8 m-24 max-w-[80vw] min-h-[auto] bg-amber-900 rounded-xl border-[3px] border-green-800 opacity-90 shadow-xl shadow-slate-700'>
        <div className='flex justify-center p-2 mb-4'>
          <img src={logoR} height='300px' width='300px' alt='' />
        </div>
        <button onClick={() => pullProds()}>Test Products</button>
        <h1 className=' text-3xl text-gray-400  '>Store page</h1>
      </div>
    </div>
  );
}
