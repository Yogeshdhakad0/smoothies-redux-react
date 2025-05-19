import React from 'react'
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { addCard, getaddone, getDistance, getsmooties } from '../features/Smoothie/Smoothieslice';
import { toast } from 'react-toastify';



function Home() {
  
      const {smoothies}=useSelector(state=>state.Smoothie)
      const dispatch=useDispatch()
     
  
      useEffect(() => {
          dispatch(getsmooties())
          dispatch(getaddone())
          dispatch(getDistance())
        }, []);
        const  addtocard=(data)=>{
   
          dispatch(addCard(data))
          toast.success('🎉 add to cart successfully!', {
           position: "top-left",
            autoClose: 1000,
            theme: "colored",
           
            });
        


        }

        
          
     
      
       
        
             


  return (

               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                 {smoothies.map((drink) => (
                   <div key={drink.id} className="rounded-lg border bg-card">
                     <div className="relative">
                       <div className="absolute top-2 right-2 z-10 rounded-full bg-purple-600 px-2 py-1 text-xs font-semibold text-white">
                         {drink.discount}% Off 
                       </div>
                       {console.log(drink.image)}
                       <img
                         src={drink.image || "/placeholder.svg"}
                         alt={drink.name}
                         className="rounded-t-lg object-cover w-full aspect-square"
                       />
                     </div>
                     <div className="p-4">
                       <h3 className="font-semibold">{drink.name}</h3>
                       <p className="text-sm text-muted-foreground">{drink.quantity}</p>
                       <div className="mt-2 flex items-center gap-2 mb-4">
                         <span className="font-bold">₹{drink.price}</span>
                         <span className="text-sm text-muted-foreground line-through">₹{drink.originalPrice}</span>
                       </div>
                       <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
     
      </span>
                       <button  onClick={()=>addtocard(drink)}  className="w-full font-bold rounded-lg bg-blue-400   cursor-pointer py-2 px-1">add to cart</button>
                     </div>
                   </div>
                 ))} 
            
               </div>
           
  )
}

export default Home
