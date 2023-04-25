import { useContext, useEffect, useState } from "react";
import { FireContext } from "../components/Firebasecontext";
import ItemComp from "../components/ItemComp";
import { Helmet } from "react-helmet";
import { getProducts } from "@stripe/firestore-stripe-payments";

export default function Storepage(itemType) {
  const { store, setStore, payments } = useContext(FireContext);

  async function pullProds() {
    const i = await getProducts(payments, {
      includePrices: true,
      activeOnly: true,
      // where: [["metadata.type", "==", {  }]],
    });
    setStore(i);

    return;
  }
  useEffect(() => {
    pullProds();
    console.log(itemType.itemType);
  }, []);

  return (
    <>
      <Helmet>
        <meta charset='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='About us, here at Renatured Teas & Coffee' />
        <meta property='og:title' content={"Shops"} />
        <meta property='og:description' content='About us, here at Renatured Teas & Coffee' />
        <meta
          property='og:image'
          content='https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png'
        />
        <title>{"Shop "}</title>
      </Helmet>

      <h1 className='lg:text-6xl md:text-4xl text-2xl text-center mt-8 p-2 bg-slate-600 rounded-3xl'>
        <span className='mr-8'>
          <span className='text-green-700'>Re</span>
          <span className=' text-amber-900'>
            Natured
            <span className=' absolute text-3xl'>™</span>
          </span>
        </span>
        Shop
      </h1>
      <div className='main-container container flex z-0 justify-center min-h-[100vh] max-w-[100vw] relative text-center'>
        <div className='content container p-2 m-24 min-w-[95vw] h-[fit] bg-amber-900 rounded-xl border-[3px] border-green-800 opacity-90 shadow-xl shadow-slate-700 overflow-y-scroll'>
          <div className='grid p-2 mb-8 justify-center md:grid-cols-2  lg:grid-cols-4 w-[100%] h-[100%]'>
            {store.map((item) => (
              <ItemComp props={item} key={item.id} />
            ))}

            {/* {store.map((item) => console.log(item))} */}
          </div>
        </div>
      </div>
    </>
  );
}
