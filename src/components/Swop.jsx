import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, removeCard } from '../features/Smoothie/Smoothieslice'
import Addon from '../pages/Addone'

function Swop({card}) {
    console.log(card)
const dispatch =useDispatch()
const  carddelete=(id)=>{
    
    dispatch(removeCard(id))
}
const incrementheadl=(id)=>{
  
    dispatch(increment(id))
}
const decrementheadlar=(id)=>{
   
    dispatch(decrement(id))
}
    
  return (






<div className='border flex flex-col sm:flex-row justify-between p-4 sm:p-6'>
      <div className='flex flex-col sm:flex-row items-center sm:items-start'>
        <img 
          className='w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover bg-center mx-2' 
          src={card.image} 
          alt="Smoothie" 
        />
        <div className='flex flex-col font-bold text-center sm:text-left mt-2 sm:mt-0'>
          <h1 className='text-base sm:text-lg'>{card.name}</h1>
          <div className='text-sm sm:text-base'>{card.price}</div>
          <Addon card={card.id} />
        </div>
      </div>
      
      <div className=' flex flex-col sm:flex-row items-center mt-3 sm:mt-0 p-2 sm:p-4 space-y-2 sm:space-y-0 sm:space-x-3'>
        <div className='border font-bold text-base flex space-x-4 py-1 px-3 rounded-lg'>
          <button className='px-2 border' onClick={()=>decrementheadlar(card.id)}>-</button>
          <span> {card.quantity}</span>
          <button className='px-2 border' onClick={()=>incrementheadl(card.id)}>+</button>
        </div>
        <button className='w-full sm:w-auto font-bold text-base bg-amber-600 px-3 py-2 rounded-lg' onClick={()=>carddelete(card.id)}>Delete</button>
      </div>
    </div>


   
  )
}

export default Swop
