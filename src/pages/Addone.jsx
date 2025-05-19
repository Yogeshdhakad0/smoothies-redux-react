


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addonee } from '../features/Smoothie/Smoothieslice';

function Addon({ card }) {
  const { addone } = useSelector((state) => state.Smoothie);
  const dispatch = useDispatch();
console.log()
  const handleSelectChange = (e) => {
    const value = Number(e.target.value); 
   
    dispatch(Addonee({ id:card, value })); 
  };

  return (
    <div className="">
      <label className="block text-gray-700">Select Add-on:</label>
      <select
        required
        className="block p-2 border rounded w-full text-gray-600 text-sm"
        onChange={handleSelectChange}
      >
        <option value="">Select Add-on</option>
        {addone && addone.map((item, index) => (
          <option key={index} value={item.price}>
            {item.name} - ${item.price}
          </option>
        ))}
      </select>    
    </div>
  );
}

export default Addon;
