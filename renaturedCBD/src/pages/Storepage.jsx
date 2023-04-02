import React from "react";
import bgMain from "../img/coffee-1255164.jpg";
import logoR from "../img/logo-round.png";
import { useContext, useLayoutEffect, useState } from "react";
import { FireContext } from "../components/Firebasecontext";
import ItemComp from "../components/ItemComp";

export default function Storepage() {
  const { pullProds, store } = useContext(FireContext);

  document.title = "Shop";

  useLayoutEffect(() => {
    pullProds();
  }, []);

  return (
    <>
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
        <div className='content container p-2 m-24 min-w-[95vw] h-[85vh] bg-amber-900 rounded-xl border-[3px] border-green-800 opacity-90 shadow-xl shadow-slate-700 overflow-y-scroll'>
          <div className='grid p-2 m b-8 justify-center md:grid-cols-2  lg:grid-cols-4 w-[100%] h-[100%]'>
            {store.map((item) => (
              <ItemComp props={item} key={item.id} />
            ))}
            {store.map((item) => (
              <ItemComp props={item} key={item.id} />
            ))}
            {store.map((item) => (
              <ItemComp props={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
