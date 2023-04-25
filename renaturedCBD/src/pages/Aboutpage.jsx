import React from "react";
import { Helmet } from "react-helmet";
import bgMain from "../img/coffee-1255164.jpg";
import logoR from "../img/logo-round.png";

export default function Aboutpage() {
  return (
    <div className='main-container container flex z-0 justify-center min-h-[100vh] max-w-[100vw] relative text-center'>
      <Helmet>
        <meta charset='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='About us, here at Renatured Teas & Coffee' />
        <meta property='og:title' content='About Us🌱' />
        <meta property='og:description' content='About us, here at Renatured Teas & Coffee' />
        <meta property='og:image' content='' />
        <title>About Us🌱</title>
      </Helmet>

      <img src={bgMain} alt='' className='absolute min-h-[100%] w-[100vw] object-cover' />
      <div className='content container flex flex-col gap-12  p-4 m-18 min-w-[100%] lg:max-w-[80vw] min-h-[auto]  opacity-90  '>
        <div className='flex justify-center p-2 '>
          <img src={logoR} height='300px' width='300px' alt='' />
        </div>

        <text className=' text-8xl opacity-100'>
          {" "}
          <span className='mr-8'>
            <span className='text-green-700'>Re</span>
            <span className=' text-amber-900'>
              Natured
              <span className=' absolute text-3xl'>™</span>
            </span>
          </span>
        </text>

        <section className=' flex flex-col lg:flex-row sm:overflow-ellipsis text-sm lg:text-xl p-6 justify-evenly  w-[100%] h-[fit]  sm:flex break-words  bg-slate-600 rounded-xl'>
          <div className=''>
            <h1 className=' text-3xl text-white italic underline-offset-2 underline'>
              Who are we?
            </h1>
            <p className='m-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quam numquam culpa
              reprehenderit exercitationem eligendi voluptas animi, corrupti, cumque ipsum
              asperiores dolore veritatis, nobis dolorum! Consectetur ipsam, saepe, odit non eum
              natus odio labore nobis numquam ut, temporibus nisi! Corrupti quis eaque
              necessitatibus magnam nisi voluptates aspernatur dolorem ab. Consectetur?
            </p>
          </div>
          <div className=''>
            <h2 className=' text-3xl text-white italic underline-offset-2 underline'>
              What are we planning to do?
            </h2>
            <p className='m-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quam numquam culpa
              reprehenderit exercitationem eligendi voluptas animi, corrupti, cumque ipsum
              asperiores dolore veritatis, nobis dolorum! Consectetur ipsam, saepe, odit non eum
              natus odio labore nobis numquam ut, temporibus nisi! Corrupti quis eaque
              necessitatibus magnam nisi voluptates aspernatur dolorem ab. Consectetur?
            </p>
          </div>
          <div className=''>
            <h3 className=' text-3xl text-white italic underline-offset-2 underline'>
              Why we want to do it!
            </h3>
            <p className='m-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quam numquam culpa
              reprehenderit exercitationem eligendi voluptas animi, corrupti, cumque ipsum
              asperiores dolore veritatis, nobis dolorum! Consectetur ipsam, saepe, odit non eum
              natus odio labore nobis numquam ut, temporibus nisi! Corrupti quis eaque
              necessitatibus magnam nisi voluptates aspernatur dolorem ab. Consectetur?
            </p>
          </div>
        </section>
        <section className=' flex flex-col lg:flex-row sm:overflow-ellipsis text-sm lg:text-xl p-6 justify-evenly  w-[100%] h-[fit]  sm:flex break-words  bg-slate-600 rounded-xl'>
          <div className=''>
            <h1 className=' text-3xl text-white italic underline-offset-2 underline'>
              <span className=' relative'>
                All that
                <span className='absolute -rotate-12 text-xs -top-4 left-24 w-[100%]'>
                  (no pun intended)
                </span>
              </span>{" "}
              sounds great, but how are we going to try and do it?
            </h1>
            <p className='m-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quam numquam culpa
              reprehenderit exercitationem eligendi voluptas animi, corrupti, cumque ipsum
              asperiores dolore veritatis, nobis dolorum! Consectetur ipsam, saepe, odit non eum
              natus odio labore nobis numquam ut, temporibus nisi! Corrupti quis eaque
              necessitatibus magnam nisi voluptates aspernatur dolorem ab. Consectetur?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
