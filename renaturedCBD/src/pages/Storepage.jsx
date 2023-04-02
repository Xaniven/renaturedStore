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
    <div className='main-container container flex z-0 justify-center min-h-[100vh] max-w-[100vw] relative text-center'>
      <div className='content container flex  p-8 m-24 max-w-[80vw] min-h-[auto] bg-amber-900 rounded-xl border-[3px] border-green-800 opacity-90 shadow-xl shadow-slate-700'>
        {store.map((item) => (
          <ItemComp props={item} key={item.id} />
        ))}
        {/* <ItemComp />; */}
      </div>
    </div>
  );
}
