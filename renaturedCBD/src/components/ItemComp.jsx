import { CartContext } from "./CartContext";
import { useContext, useState } from "react";

export default function ItemComp(props) {
  const { addToCart } = useContext(CartContext);

  const maxChar = 100;
  const pargraph = props.props.description.substring(0, maxChar) + "...Read More";
  const fullPara = props.props.description;

  const itemName = props.props.name.toString();
  const itemPrice = (props.props.prices[0].unit_amount / 100).toFixed(2).toString();
  const itemID = props.props.id.toString();
  const pURL = props.props.images;

  const obj = { name: itemName, price: itemPrice, id: itemID, photo: pURL };

  return (
    <div
      key={itemID}
      className='product-card flex flex-col justify-center justify-items-center min-w-80 h-fit max-w-auto border-2 border-black m-2  rounded-lg'
    >
      <div className='product- image grid justify-center'>
        <img src={pURL} height='256px' width='256px' alt='' />
      </div>
      <div className='product-desc flex flex-col justify-between min-h-[30vh] bg-slate-400 rounded-lg text-left p-2  '>
        <p className=' text-2xl  font-extrabold h-fit '>item: {itemName}</p>
        <div className='h-fit'>
          <p className='block peer hover:opacity-0 hover:absolute h-fit'>
            {fullPara.length <= maxChar ? fullPara : pargraph}
          </p>
          <p className=' hidden peer-hover:block h-fit'>{fullPara}</p>
        </div>
        <div className=''>
          <p className='  text-lg text-green-800 text-end'>${itemPrice}</p>

          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(obj);
              // { name: itemName, price: itemPrice, id: itemID }
            }}
            className='w-[100%] bg-green-700 hover:bg-green-800 py-2 mt-2 rounded-md '
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
