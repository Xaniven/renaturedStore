import React from "react";
import bgMain from "../img/coffee-1255164.jpg";

export default function Aboutpage() {
  return (
    <div className='main-container container flex z-0 justify-center min-h-[100vh] max-w-[100vw] relative text-center'>
      <img src={bgMain} alt='' className='absolute min-h-[100vh] w-[100vw] object-cover' />
      <div className='content container absolute p-8 m-24 max-w-[80vw] min-h-[50vh] bg-amber-900 rounded-xl border-[3px] border-green-800 opacity-90 shadow-xl shadow-slate-700'>
        <h1 className=' text-3xl text-gray-400  '>Hello World</h1>
        <div className=' sm:overflow-ellipsis text-sm lg:text-xl p-6  min-h-[fit] w-[100%] flex-col sm:flex'>
          <p className='m-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quam numquam culpa
            reprehenderit exercitationem eligendi voluptas animi, corrupti, cumque ipsum asperiores
            dolore veritatis, nobis dolorum! Consectetur ipsam, saepe, odit non eum natus odio
            labore nobis numquam ut, temporibus nisi! Corrupti quis eaque necessitatibus magnam nisi
            voluptates aspernatur dolorem ab. Consectetur?
          </p>
          <p className='m-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quam numquam culpa
            reprehenderit exercitationem eligendi voluptas animi, corrupti, cumque ipsum asperiores
            dolore veritatis, nobis dolorum! Consectetur ipsam, saepe, odit non eum natus odio
            labore nobis numquam ut, temporibus nisi! Corrupti quis eaque necessitatibus magnam nisi
            voluptates aspernatur dolorem ab. Consectetur?
          </p>
          <p className='m-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quam numquam culpa
            reprehenderit exercitationem eligendi voluptas animi, corrupti, cumque ipsum asperiores
            dolore veritatis, nobis dolorum! Consectetur ipsam, saepe, odit non eum natus odio
            labore nobis numquam ut, temporibus nisi! Corrupti quis eaque necessitatibus magnam nisi
            voluptates aspernatur dolorem ab. Consectetur?
          </p>
        </div>
      </div>
    </div>
  );
}
