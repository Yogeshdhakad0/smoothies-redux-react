import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cardd } from '../features/Smoothie/Smoothieslice';

function Distance() {
    const {Distance}=useSelector(state=>state.Smoothie)
    const dispatch=useDispatch()
      // const [selectedValue, setSelectedValue] = useState(""); // Store selected value
    // 
      const handleSelectChange = (e) => {
        const value = e.target.value;
        // setSelectedValue(value);
        dispatch(cardd({value}))
      };
    
  return (
    

<div className="">
      
      <select
        required
        className="block p-2  rounded-xl w-full text-gray-600 text-sm"
        // value={selectedValue} 
        onChange={handleSelectChange} 
      >
        <option value="">Select Add-on</option>
        {Distance.map((item, index) => (
          <option key={index} value={item.price}>
          {item.distance}  {item.name} - ${item.price}
          </option>
        ))}
      </select>    
    </div>
  )
}

export default Distance







