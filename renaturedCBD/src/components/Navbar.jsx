import { useState, useContext } from "react";
import { FireContext } from "./Firebasecontext";
import "./nav.scss";
import logoMain from "../img/logo-main.png";
import { GiShoppingCart } from "react-icons/gi";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer";
import LoginAcc from "./LoginAcc";

//Main layout component => renders nav, router outlet, footer components

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { auth, signOutUser, user } = useContext(FireContext);

  const buttonStyles =
    "underline underline-offset-[3px] hover:text-green-600 hover:scale-110 text-xl drop-shadow-xl shadow-slate-600  ";

  return (
    <>
      <nav className='max-w-[100vw] h-[15vh] z-3 bg-slate-500 top-0 border-b-4 border-amber-800 shadow-slate-600 shadow-xl overflow-hidden'>
        <div className='fs-menu h-[100%] max-w-[100vw] flex justify-between lg:justify-around '>
          <div
            className='Hamburg lg:hidden space-y-2 absolute pl-6 pt-10'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-1 w-8 animate-pulse bg-green-600'></span>
            <span className='block h-1 w-8 animate-pulse bg-green-600'></span>
            <span className='block h-1 w-8 animate-pulse bg-green-600'></span>
          </div>
          <section className='MOBILE-MENU flex lg:hidden'>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div className='absolute top-0 right-0 px-8 py-8' onClick={() => setIsNavOpen(false)}>
                <svg
                  className='h-8 w-8 text-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </div>
              <ul className='flex flex-col items-center justify-between min-h-[250px]'>
                <li className='border-b border-gray-400 my-8 uppercase'>
                  <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 text-2xl"
                        : " hover:bg-green-600 p-2 rounded-lg"
                    }
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className='border-b border-gray-400 my-8 uppercase'>
                  <NavLink
                    to='about'
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 text-2xl"
                        : " hover:bg-green-600 p-2 rounded-lg"
                    }
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className='border-b border-gray-400 my-8 uppercase'>
                  <NavLink
                    to='store'
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 text-2xl"
                        : "hover:bg-green-600 p-2 rounded-lg"
                    }
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    Store
                  </NavLink>
                </li>
              </ul>
              more blah
            </div>
          </section>

          <div className='left-wrap basis-4/5 hidden lg:flex justify-between p-8 gap-6'>
            <button className={buttonStyles}>
              <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-600 text-2xl" : ""
                }
              >
                Home
              </NavLink>
            </button>
            <button className={buttonStyles}>
              <NavLink
                to='about'
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-600 text-2xl" : ""
                }
              >
                About Us
              </NavLink>
            </button>
            <button className={buttonStyles}>
              {" "}
              <NavLink
                to='store'
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-600 text-2xl" : ""
                }
              >
                Store
              </NavLink>
            </button>
          </div>
          {/* center image */}
          <div className='img-wrap flex w-[100%] justify-center'>
            <img
              src={logoMain}
              alt='Main logo image'
              className='absolute top-[-14px] h-[20vh]  hover:animate-pulse drop-shadow-xl shadow-slate-600 cursor-pointer '
            />
          </div>
          <div className='right-wrap basis-4/5 hidden lg:flex justify-between p-8 gap-6'>
            <div className='dropdown'>
              <button className={buttonStyles.toString() + "relative peer h-[100%]"}>
                {user == null ? "Log-In" : "Account"}
              </button>
              <div class='hidden absolute peer-hover:block hover:flex w-[auto] h-auto  drop-shadow-lg z-50 p-4 bg-slate-400 '>
                <LoginAcc userState={user} />
              </div>
            </div>
            <button
              className={buttonStyles}
              onClick={() => {
                user != null ? signOutUser(auth) : console.log(user);
              }}
            >
              {" "}
              {user != null ? "Sign-out" : "Create Account"}
            </button>

            <div className='relative cartCount p-2 mr-4 hover:animate-bounce'>
              <button>
                <GiShoppingCart size='48px' className={" " + buttonStyles.toString()} />
              </button>
              <span className='absolute bottom-0 m-1  left-8 h-6 w-6  bg-green-600 text-center rounded-3xl'>
                0
              </span>
            </div>
          </div>
          <div className='mobile-cart lg:hidden  absolute right-0 pt-8 pr-6'>
            <button>
              <GiShoppingCart
                size='40px'
                className={"hover:animate-bounce text-center relative  " + buttonStyles.toString()}
              />
              Cart: 0
            </button>
          </div>
        </div>
      </nav>
      {console.log(user)}
      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;
