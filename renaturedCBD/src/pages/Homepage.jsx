import { IoLeafSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Homepage() {
  document.title = "Re:Natured!";
  return (
    <>
      <Helmet>
        <meta charset='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        <meta name='description' content='About us, here at Renatured Teas & Coffee' />
        <meta property='og:title' content={"Shops"} />
        <meta property='og:description' content='About us, here at Renatured Teas & Coffee' />
        <meta property='og:image' content='' />
        <title>{"ReNatured Teas & Coffee"}</title>
      </Helmet>
      <div className='h-auto max-w-[100vw] flex  '>
        <div className='left-side w-0 lg:w-[60vw] min-h-[155vh] lg:ml-8 lg:p-4 lg:m-6 flex-row justify-evenly z-20 lg:z-0'>
          <section className='flex justify-evenly relative z-20 lg:z-0 p-6 my-6 min-h-[60vh] w-[100vw] lg:w-[93vw] shadow-2xl bg-slate-600  bg-opacity-80  border-green-800 border-4 rounded-2xl '>
            <div className='w-[100%] h-[100%] text-center lg:text-left'>
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
                We specilize in high quality flavourful teas, and ethically sourced coffee to bring
                you a new enjoyable expirence using all natural terpenes.
              </p>
              <div className='flex-col text-center place-items-center p-2 w-fit lg:w-[60vw] bg-slate-400 bg-opacity-50 rounded-xl '>
                <p className=' text-xl pt-4'>Join Our Maillist, Get 25% Off Your First Order!*</p>
                <button className='m-4 border-black bg-green-800 hover:bg-green-600 border-2 p-2 px-6 rounded-lg  shadow-xl '>
                  <Link to='newuser' className=' flex '>
                    <IoLeafSharp size='36px' /> <span className='pt-1'>Join Our Maillist!</span>
                  </Link>
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
          <section className=' relative z-20 p-8 my-6 h-[fit] w-[99vw] lg:w-[60vw] shadow-2xl bg-slate-500 bg-opacity-80 border-green-800 border-4 rounded-2xl '>
            <h1 className=' text-4xl mb-8 z-20'>What Are Terpenes?</h1>
            <p className='w-[45vw] text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea possimus quod eum
              molestias commodi ipsum quae dolorem dolore. Laudantium consequuntur natus accusantium
              minus possimus fugiat sint explicabo quas totam eum.
            </p>
          </section>
          <section className=' relative z-20 p-8 my-6 h-[fit] w-[99vw] lg:w-[60vw] shadow-2xl bg-slate-500 bg-opacity-80 border-green-800 border-4 rounded-2xl '>
            <h1 className=' text-4xl mb-8 z-20'>"Terp Brew" (Terpene Infused Coffees)</h1>
            <p className='w-[45vw] text-xl'>
              With both caffinated and decafe blends, we strive to bring somthing new to your
              morning coffee expirence. Terepene rich coffee add a new life to the flavour of your
              morning brew, bringing a bright way to start the day.
            </p>
          </section>
          <section className='lg:absolute relative z-20 p-8 my-6 h-[fit] w-[99vw] lg:w-[60vw] shadow-2xl bg-slate-500 bg-opacity-80 border-green-800 border-4 rounded-2xl '>
            <h1 className=' text-4xl mb-8'>Terpene Infused Teas</h1>
            <p className='z-20 w-[45vw] text-xl'>
              Our teas are rich in terpenes to take the flavour expirence of your tea to the next
              level. These special blends of flavourful teas and aromatic food grade terpenes will
              change how you look at your favourite teas, and raise the bar!
            </p>
          </section>
        </div>
        <div className='right-side top-0  sticky lg:w-[40vw] h-[100vh] lg:h-[85vh] z-1 lg:z-10'>
          <spline-viewer url='https://prod.spline.design/PibOZ9DNXlOJ2g2n/scene.splinecode'></spline-viewer>
        </div>
      </div>
    </>
  );
}

export default Homepage;
