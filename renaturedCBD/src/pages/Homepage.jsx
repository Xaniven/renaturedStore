import React from "react";

function Homepage() {
  document.title = "Re:Natured!";
  return (
    <div className='h-auto  w-auto flex lg:ml-8 '>
      <div className='left-side w-0 lg:w-[40vw] h-[200vh]  lg:p-4 lg:m-4 flex-row justify-evenly'>
        <section className='relative z-20 p-6 my-6 h-[60vh] w-[75vw] shadow-2xl'>
          <h1 className='text-6xl lg:text-8xl mb-8'>ReNatured Coffee</h1>
          <p className='z-20 w-[80vw]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime saepe earum
            perferendis nisi reprehenderit doloremque provident excepturi porro tempora temporibus
            necessitatibus, dignissimos expedita officia?
          </p>
          <button className='m-2 border-green-800 border-2 p-2 rounded-lg  shadow-xl '>
            {" "}
            Newsletter{" "}
          </button>
        </section>
        <section className=' relative z-20 p-8 my-6 h-[50vh] w-[75vw]'>
          <h1 className=' text-4xl mb-8 z-20'>ReNatured Coffee</h1>
          <p className='w-[80vw]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime saepe earum
            perferendis nisi reprehenderit doloremque provident excepturi porro tempora temporibus
            necessitatibus, dignissimos expedita officia?
          </p>
        </section>
        <section className='absolute z-20 p-8 my-6 h-[50vh] w-[75vw]'>
          <h1 className=' text-4xl mb-8'>ReNatured Coffee</h1>
          <p className='z-20 w-[80vw]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime saepe earum
            perferendis nisi reprehenderit doloremque provident excepturi porro tempora temporibus
            necessitatibus, dignissimos expedita officia?
          </p>
        </section>
      </div>
      <div className='right-side top-0 sticky w-[100vw] h-[100vh] -z-0  opacity-80'>
        <spline-viewer
          loading-anim
          url='https://prod.spline.design/4ywhzUu7rYokb2Bv/scene.splinecode'
        ></spline-viewer>
      </div>
    </div>
  );
}

export default Homepage;
