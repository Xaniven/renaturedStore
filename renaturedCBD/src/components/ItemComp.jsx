import React from "react";
import logoR from "../img/logo-round.png";

export default function ItemComp(props) {
  return (
    <div
      key={props.id}
      className='flex flex-col justify-center justify-items-center w-fit h-fit border-2 border-black m-2 rounded-lg'
    >
      <img src={props.props.images} height='200px' width='200px' alt='' />
      <div className=' flex flex-col gap-2 bg-slate-400 rounded-lg text-left p-2 '>
        <p className=' text-2xl font-extrabold'>item: {props.props.name}</p>
        <p>{props.props.description}</p>
        <p className=' text-sm text-green-800'>${props.props.prices[0].unit_amount}</p>
        <button className='w-[100%] bg-green-700 hover:bg-green-800 py-2 mt-2'>Add to Cart</button>
      </div>
    </div>
  );
}
