import React from "react";
import logoR from "../img/logo-round.png";

export default function ItemComp(props) {
  let maxChar = 100;
  let pargraph = props.props.description.substring(0, maxChar) + "...Read More";
  let fullPara = props.props.description;

  return (
    <div
      key={props.key}
      className='product-card flex flex-col justify-center justify-items-center min-w-80 h-auto max-w-auto border-2 border-black m-2  rounded-lg'
    >
      <div className='product- image grid justify-center'>
        <img src={props.props.images} height='256px' width='256px' alt='' />
      </div>
      <div className='product-desc flex flex-col justify-between min-h-[30vh] bg-slate-400 rounded-lg text-left p-2  '>
        <p className=' text-2xl  font-extrabold h-fit '>item: {props.props.name}</p>
        <p className='h-fit'>
          <p className='block peer hover:opacity-0 hover:absolute h-fit'>
            {fullPara.length <= maxChar ? fullPara : pargraph}
          </p>
          <p class=' hidden peer-hover:block h-fit'>{fullPara}</p>
        </p>
        <div className=''>
          <p className='  text-lg text-green-800 text-end'>
            ${(props.props.prices[0].unit_amount / 100).toFixed(2)}
          </p>

          <button className='w-[100%] bg-green-700 hover:bg-green-800 py-2 mt-2 rounded-md bottom-0 relative'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
