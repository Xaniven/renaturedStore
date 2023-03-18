import React from "react";
import bgMain from "../img/coffee-1255164.jpg";
import logoR from "../img/logo-round.png";

export default function Aboutpage() {
  document.title = "About Us!";
  return (
    <div className='main-container container flex z-0 justify-center min-h-[100vh] max-w-[100vw] relative text-center'>
      <img src={bgMain} alt='' className='absolute min-h-[100%] w-[100vw] object-cover' />
      <div className='content container  p-8 m-24 max-w-[80vw] min-h-[auto] bg-amber-900 rounded-xl border-[3px] border-green-800 opacity-90 shadow-xl shadow-slate-700'>
        <img src={logoR} height='300px' width='300px' alt='' />
        <h1 className=' text-3xl text-gray-400  '>Hello World</h1>
        <div className=' sm:overflow-ellipsis text-sm lg:text-xl p-6 justify-evenly  w-[100%] h-[100%] flex sm:flex break-words '>
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
