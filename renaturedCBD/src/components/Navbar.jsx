import React from "react";
import logoMain from "../img/logo-main.png";
import { GiShoppingCart } from "react-icons/gi";

function Navbar() {
  const buttonStyles =
    "underline underline-offset-[3px] hover:text-green-400 hover:scale-150 text-xl drop-shadow-xl shadow-slate-600 ";
  return (
    <nav className='w-[100vw] h-[15vh] z-10 bg-slate-500 absolute top-0 border-b-4  border-black shadow-slate-600 shadow-xl '>
      <div className='fs-menu h-[100%] w-[100vw] flex justify-evenly'>
        <div className='nav-links  basis-2/5 hidden lg:flex lg:justify-evenly p-8 gap-6'>
          <button className={buttonStyles}>Home</button>
          <button className={buttonStyles}>About Us</button>
          <button className={buttonStyles}>Store</button>
        </div>
        <div className='imgWrap flex justify-center'>
          <img
            src={logoMain}
            alt='Main logo image'
            className='absolute top-[-14px] h-[20vh] hover:animate-pulse drop-shadow-xl shadow-slate-600 '
          />
        </div>
        <div className='auth-button basis-2/5 hidden lg:flex lg:justify-evenly p-8 gap-6'>
          <button className={buttonStyles}>Login</button>
          <button className={buttonStyles}>Sign-Up</button>
          <button>
            <GiShoppingCart
              size='48px'
              className={"hover:animate-bounce " + buttonStyles.toString()}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
