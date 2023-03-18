import React from "react";

function Homepage() {
  return (
    <div className='h-[200vh] w-auto flex '>
      <div className='test w-[40vw] h-[100vh] '>
        <h1>blaha</h1>
      </div>
      <div className=' top-0 sticky w-[60vw] h-[100vh]'>
        <spline-viewer
          loading-anim
          url='https://prod.spline.design/4ywhzUu7rYokb2Bv/scene.splinecode'
        ></spline-viewer>
      </div>
    </div>
  );
}

export default Homepage;
