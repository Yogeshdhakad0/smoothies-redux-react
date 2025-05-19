import React from 'react'
import { useSelector } from 'react-redux'
import Swop from './Swop'

function Swoping() {
    const {cart}=useSelector(state=>state.Smoothie)


if(cart.length===0){
  return(
  <div  className=' flex items-center justify-center text-center  flex-col '>
    <h1 className='font-extrabold text-2xl'>Shopping Cart</h1>
    <img className='h-80' src="https://www.loomly.com/hs-fs/hubfs/Imported_Blog_Media/earth-Apr-03-2024-12-19-31-1897-AM.gif?width=540&height=540&name=earth-Apr-03-2024-12-19-31-1897-AM.gif" alt="" />
    <h2 className='font-extrabold text-2xl'>  Your Cart is Empty</h2>
  </div>
  )
}



    return (
        <div  className=' w-full  '>
      {
        cart.map((item)=><Swop key={item.id} card={item}/>)
      }
    </div>
  )
}

export default Swoping
