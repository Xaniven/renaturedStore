import React from "react";
import bgMain from "../img/coffee-1255164.jpg";

export default function Aboutpage() {
  return (
    <div className='h-[100vh] max-w-[100vw] relative'>
      <img src={bgMain} alt='' className='h-[100vh] w-[100vw] object-cover opacity-90 ' />
      <div className='absolute top-0  w-[100%] text-center'>
        <h1 className=' text-3xl text-gray-400'>Hello World</h1>
        <p>hihi</p>
      </div>
    </div>
  );
}
