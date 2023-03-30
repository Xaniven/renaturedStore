import { IoLeafSharp } from "react-icons/io5";

function Homepage() {
  document.title = "Re:Natured!";
  return (
    <div className='h-auto max-w-[100vw] flex  '>
      <div className='left-side w-0 lg:w-[40vw] min-h-[155vh] lg:ml-8 lg:p-4 lg:m-6 flex-row justify-evenly z-20 lg:z-0'>
        <section className='flex justify-evenly relative z-20 lg:z-0 p-6 my-6 min-h-[60vh] w-[100vw] lg:w-[93vw] shadow-2xl bg-slate-600  bg-opacity-80  border-green-800 border-4 rounded-2xl '>
          <div className='w-[100%] text-center lg:text-left'>
            <h1 className='relative text-6xl lg:text-8xl mb-8'>
              <span className='text-green-700'>Re</span>
              <span className=' text-amber-900'>
                Natured
                <span className=' absolute text-3xl'>™</span>
              </span>
              {"  "}
              Coffee & Teas
            </h1>
            <p className='z-20 w-auto text-center lg:text-left mb-6 lg:w-[60vw] text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime saepe earum
              perferendis nisi reprehenderit doloremque provident excepturi porro tempora temporibus
              necessitatibus, dignissimos expedita officia?
            </p>
            <div className='flex-col text-center place-items-center  w-fit lg:w-[60vw] bg-slate-400 bg-opacity-50 rounded-xl '>
              <p className=' text-xl pt-4'>Join Our Maillist, Get 25% Off Your First Order!*</p>
              <button className='m-4 border-black bg-green-800 hover:bg-green-600 border-2 p-2 px-6 rounded-lg  shadow-xl '>
                <div className=' flex '>
                  <IoLeafSharp size='36px' /> <span className='pt-1'>Join Our Maillist!</span>
                </div>
              </button>
              <p className=' opacity-60 text-sm pb-2'>
                *Subject to{" "}
                <span className=' underline hover:text-green-800 hover:cursor-pointer'>
                  Terms & Conditions.
                </span>
                Redemable once store opens (expected summer 2023). We do not share or sell your
                e-mail address to advertisers
              </p>
            </div>
          </div>
        </section>
        <section className=' relative z-20 p-8 my-6 h-[fit] w-[96.5vw] lg:w-[60vw] shadow-2xl bg-slate-500 bg-opacity-80 border-green-800 border-4 rounded-2xl '>
          <h1 className=' text-4xl mb-8 z-20'>"Terp Brew" (Terpene Infused Coffees)</h1>
          <p className='w-[55vw]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime saepe earum
            perferendis nisi reprehenderit doloremque provident excepturi porro tempora temporibus
            necessitatibus, dignissimos expedita officia?
          </p>
        </section>
        <section className='lg:absolute relative z-20 p-8 my-6 h-[fit] w-[96.5vw] lg:w-[60vw] shadow-2xl bg-slate-500 bg-opacity-80 border-green-800 border-4 rounded-2xl '>
          <h1 className=' text-4xl mb-8'>Terpene Infused Teas</h1>
          <p className='z-20 w-[55vw]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime saepe earum
            perferendis nisi reprehenderit doloremque provident excepturi porro tempora temporibus
            necessitatibus, dignissimos expedita officia?
          </p>
        </section>
      </div>
      <div className='right-side top-0  sticky w-[100%] h-[85vh] z-1 lg:z-10'>
        <spline-viewer
          loading-anim
          url='https://prod.spline.design/4ywhzUu7rYokb2Bv/scene.splinecode'
        ></spline-viewer>
      </div>
    </div>
  );
}

export default Homepage;
