import "./nav.scss";
import { Outlet, NavLink, Link } from "react-router-dom";
import { useState, useContext, Suspense } from "react";
import { FireContext } from "./Firebasecontext";
import { CartContext } from "./CartContext";
import { IoLeafSharp } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import Footer from "./Footer";
import LoginAcc from "./LoginAcc";
import logoMain from "../img/logo-main.png";
import Spinner from "./Spinner";

//Main layout component => renders nav, router outlet, footer component
// at some point refactor as layout component with seperate nav comp

function Navbar() {
  const { auth, signOutUser, user } = useContext(FireContext);
  const { cart, checkoutSession, cartTotal, removeFromCart } = useContext(CartContext);

  //State Vars
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartLoad, setCartLoad] = useState(false);

  // Handle checkout button onClick
  async function handleCartSubmit() {
    setCartLoad(true);
    if (cart.length !== 0) {
      await checkoutSession(cart);
      setCartLoad(false);
    } else if (user === null) {
      alert("Please sign in");
    } else {
      alert("Cart is empty");
      setCartLoad(false);
    }
  }

  //button sytles var to reduce code clutter
  const buttonStyles =
    "underline underline-offset-[3px] hover:text-green-600 hover:scale-110 text-xl drop-shadow-xl shadow-slate-600  ";

  return (
    <>
      <nav className='max-w-[100vw] h-[15vh] z-3 bg-slate-500 top-0 border-b-4 border-amber-800 shadow-slate-600 shadow-xl overflow-hidden '>
        <div className='fs-menu h-[100%] max-w-[100vw] flex justify-between lg:justify-around '>
          <div
            className='Hamburg lg:hidden space-y-2 flex flex-col justify-center pl-4 w-[10vw] h-[15vh]'
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
                      isPending ? (
                        <Spinner />
                      ) : isActive ? (
                        "text-green-600 text-2xl"
                      ) : (
                        " hover:bg-green-600 p-2 rounded-lg"
                      )
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
                      isPending ? (
                        <Spinner />
                      ) : isActive ? (
                        "text-green-600 text-2xl"
                      ) : (
                        " hover:bg-green-600 p-2 rounded-lg"
                      )
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
                      isPending ? (
                        <Spinner />
                      ) : isActive ? (
                        "text-green-600 text-2xl"
                      ) : (
                        "hover:bg-green-600 p-2 rounded-lg"
                      )
                    }
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    Shop
                  </NavLink>
                </li>
              </ul>
              <div className='flex w-[100%] justify-evenly bg-slate-600 p-2'>
                <Link to='/' className='hover:text-green-600'>
                  <IoLeafSharp size='24px' /> Log-in
                </Link>
                <Link to='newUser' className='hover:text-green-600'>
                  <IoLeafSharp size='24px' /> Create Account
                </Link>
              </div>
            </div>
          </section>

          <div className='left-wrap basis-4/5 hidden lg:flex justify-between p-8 gap-6'>
            <button className={buttonStyles}>
              <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                  isPending ? <Spinner /> : isActive ? "text-green-600 text-2xl" : ""
                }
              >
                Home
              </NavLink>
            </button>
            <button className={buttonStyles}>
              <NavLink
                to='about'
                className={({ isActive, isPending }) =>
                  isPending ? <Spinner /> : isActive ? "text-green-600 text-2xl" : ""
                }
              >
                About Us
              </NavLink>
            </button>
            <div className='shop-dropdown'>
              <button className={buttonStyles.toString() + "relative peer h-[100%] w-[100%] top-0"}>
                Shop
              </button>
              <div className='hidden absolute focus-within:block peer-hover:block hover:flex  top-[11vh] w-[auto] h-auto  drop-shadow-lg z-50 p-4 bg-slate-400 rounded-lg'>
                <div className='flex flex-col p-2 gap-2 text-left'>
                  <NavLink
                    to='store/tea'
                    className={({ isActive, isPending }) =>
                      isPending ? <Spinner /> : isActive ? "text-green-600 text-2xl" : ""
                    }
                  >
                    Tea
                  </NavLink>
                  <NavLink
                    to='store/coffee'
                    className={({ isActive, isPending }) =>
                      isPending ? <Spinner /> : isActive ? "text-green-600 text-2xl" : ""
                    }
                  >
                    Coffee
                  </NavLink>
                </div>
              </div>
            </div>
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
            <div className='dropdown h-[100%] w-[100%]'>
              <button className={buttonStyles.toString() + "relative peer h-[100%] w-[100%] top-0"}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? <Spinner /> : isActive ? "text-green-600 text-2xl" : ""
                  }
                  to={user == null ? "" : "/account"}
                >
                  {user == null ? "Log-In" : "Account"}
                </NavLink>
              </button>
              <div className='hidden absolute focus-within:block peer-hover:block hover:flex right-[15vw] top-[11vh] w-[auto] h-auto  drop-shadow-lg z-50 p-4 bg-slate-400 rounded-lg'>
                <LoginAcc userState={user} />
              </div>
            </div>
            <button className='w-[100%] '>
              <Link
                to={user == null ? "newUser" : ""}
                className={"min-w-[100%] h-[100%] " + buttonStyles.toString()}
                onClick={() => {
                  user != null ? signOutUser(auth) : "";
                }}
              >
                {" "}
                {user != null ? "Sign-out" : "Create Account"}
              </Link>
            </button>
            <div
              onClick={() => setIsCartOpen((prev) => !prev)}
              className='relative cartCount p-2 mr-4 '
            >
              <button>
                <GiShoppingCart
                  size='48px'
                  className={"hover:animate-bounce " + buttonStyles.toString()}
                />
              </button>
              <span className='absolute bottom-0 m-1 p-1  left-8 h-8 w-8  bg-green-600 text-center rounded-3xl'>
                {cart.length}
              </span>
            </div>
          </div>
          <div
            id='Cart-window'
            className={isCartOpen ? "showCartNav grid-cols-1 gap-2 justify-start " : "hideCartNav"}
          >
            <div className='w-[95%] h-[80%] p-2 overflow-y-scroll'>
              {/* refactor into component */}
              {cart.length === 0 ? "Cart is Empty" : ""}

              {cart.map((item, key) => {
                return (
                  <div className=' flex border-2 border-green-700 h-[12vh] w-[100%]'>
                    <button
                      onClick={() => {
                        removeFromCart(key);
                      }}
                    >
                      Remove
                    </button>
                    <div className=''>
                      <img src={item.image} alt='' height='100px' width='100px' />
                    </div>
                    <div className='p-2 h-100 text-xl'>
                      <p>{item.name}</p>
                      <p>$ {item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='relative  h-[25%] w-[95%] border-amber-800 border-t-4'>
              <div className='text-2xl lg:text-4xl text-center m-2'>Sub-Total: $ {cartTotal}</div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCartSubmit();
                }}
                className=' absolute bottom-0 w-[100%] bg-green-600 rounded-xl p-4 mb-6'
              >
                {!cartLoad ? "Checkout" : <Spinner />}
              </button>
            </div>
          </div>
          <div
            onClick={() => setIsCartOpen((prev) => !prev)}
            className='mobile-cart lg:hidden  flex flex-col right-0 justify-center  h-[15vh] pr-4'
          >
            <button>
              <GiShoppingCart
                size='40px'
                className={"hover:animate-bounce text-center relative  " + buttonStyles.toString()}
              />
              {cart.length}
            </button>
          </div>
        </div>
      </nav>
      <div className='App max-w-[100vw]'>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default Navbar;
