


import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Card from '../pages/Card';
import { useSelector } from 'react-redux';

function Navber() {
  const {cart}=useSelector(state=>state.Smoothie)

  return (
    <div className='border flex flex-row sm:flex-row sm:justify-between items-center px-3 py-2'>
      <h1 className='px-2 font-bold text-lg'>Shootiess</h1>
      
      <Link to='/'  className='flex-1 flex justify-center my-2 sm:my-0 font-bold text-xl'> Home </Link>


      
      <div className='flex flex-row px-3 py-2 space-x-4'>
        <h1 className='flex flex-col items-center'>
          <FaRegUserCircle className='text-xl' />
          <span className='font-semibold text-sm'>Login</span>
        </h1>
        <Link to="/card" className='flex flex-col items-center'>
          <FaCartShopping className='text-xl' />
          <div   className='font-semibold text-sm'>Cart
     
          {cart.length > 0 && (
            <span className="absolute top-2  bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cart.length}
            </span>
   )}

          </div>

        </Link>
      </div>
    </div>
  );
}

export default Navber;
