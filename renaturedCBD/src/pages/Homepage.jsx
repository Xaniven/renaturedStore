import React from "react";

function Homepage() {
  document.title = "Re:Natured!";
  return (
    <div className='h-[200vh] w-auto flex '>
      <div className='left-side w-[40vw] h-[100vh] '>
        <h1>blaha</h1>
      </div>
      <div className='right-side top-0 sticky w-[60vw] h-[100vh]'>
        <spline-viewer
          loading-anim
          url='https://prod.spline.design/4ywhzUu7rYokb2Bv/scene.splinecode'
        ></spline-viewer>
      </div>
    </div>
  );
}

export default Homepage;
