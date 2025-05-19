



import React, { useEffect } from "react";
import Distance from "./Distance";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function DispatchCard() {
  const { cart, selectedAddons } = useSelector((state) => state.Smoothie);
  
  const distan = Number( selectedAddons?.value || 0); // Fix for undefined value

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const addOnsTotal = cart.reduce((sum, item) => sum + Number(item.addons || 0), 0);
  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
console.log(distan)
  const shipping = 48;
  const tax = 59;
  const total = subtotal + shipping + tax + distan +addOnsTotal; 

const healdarsumbit=()=>{

    console.log(distan)
if(distan ||0){
  toast.success(' Confirm Order!', {
    position: "top-left",
    autoClose: 4000,
    
    theme: "dark",
    
  });
}


}




  return (
    <div className="border flex flex-col px-5">
      <div className="flex flex-row justify-between my-1 py-1">
        <span className="font-bold text-xl">Quantity</span>
        <span className="font-semibold text-lg">{totalQuantity}</span>
      </div>

      <div className="flex flex-row justify-between my-1 py-1">
        <span className="font-bold text-xl">Delivery Distance</span>
        <Distance />
      </div>

      <div className="flex flex-row justify-between my-1 py-1">
        <span className="font-bold text-xl">Add-ons</span>
        <span className="font-semibold text-lg">${addOnsTotal}</span>
      </div>

      <div className="flex flex-row justify-between my-1 py-1">
        <span className="font-bold text-xl">Subtotal</span>
        <span className="font-semibold text-lg">${subtotal}</span>
      </div>

      <div className="flex flex-row justify-between my-1 py-1">
        <span className="font-bold text-xl">Shipping</span>
        <span className="font-semibold text-lg">${shipping}</span>
      </div>

      <div className="flex flex-row justify-between my-1 py-1">
        <span className="font-bold text-xl">Tax</span>
        <span className="font-semibold text-lg">${tax}</span>
      </div>

      <div className="flex flex-row justify-between my-1 py-1">
        <span className="font-bold text-xl">Total</span>
        <span className="font-semibold text-lg">${total}</span>
      </div>

      <button onClick={healdarsumbit} className="w-full py-3 mb-2 px-2 font-bold rounded-xl bg-blue-500 hover:bg-blue-400">
        Conform Order
      </button>
    </div>
  );
}

export default DispatchCard;
