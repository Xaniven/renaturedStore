import React from "react";

export default function Footer() {
  return (
    <section className='relative z-2 h-[250px] max-w-[100vw] bottom-[100%]  p-6 bg-zinc-400 border-t-4 border-amber-800 text-left flex justify-center'>
      <div className='foot-main flex justify-around w-[100vw] p-4 '>
        <div className=''>
          Directory:
          <ul className='m-2 cursor-pointer '>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>About Us</li>
            <li className='hover:underline'>Store</li>
            <li className='hover:underline'>Your Orders</li>
          </ul>
        </div>
        <div className=''>
          Socials:
          <ul className='m-2 cursor-pointer'>
            <li className='hover:underline'>Twitter</li>
            <li className='hover:underline'>Instagram</li>
            <li className='hover:underline'>Facebook</li>
          </ul>
        </div>
        <div className=''>
          Legal:
          <ul className='m-2 cursor-pointer'>
            <li className='hover:underline'>Privacy Policy</li>
            <li className='hover:underline'>Shipping & Return Policy</li>
            <li className='hover:underline'>Contact Us</li>
          </ul>
        </div>
      </div>
      <p className='absolute bottom-0 text-xl underline p-4 '>
        {" "}
        <a href=''> Re:Natured 2023</a>
      </p>
    </section>
  );
}
