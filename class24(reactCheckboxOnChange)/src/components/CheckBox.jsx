import React, { useState } from 'react'

const CheckBox = () => {
    const [hoby,setHoby]=useState([]);
    const hobbies = (event)=>{
      console.log(event.target.value,event.target.checked);
      if(event.target.checked){
        setHoby([...hoby,event.target.value]);
      }else{
        setHoby([...hoby.filter((item)=> item != event.target.value)])
      }
    }
  return (
    <div className='parent'>
      <h2>Select your hobies</h2>
      <input type="checkbox" id='cooking' value='cooking' onChange={hobbies} />
      <label htmlFor="cooking">Cooking</label>
      <br /><br />
      <input type="checkbox" id='cricket' value='cricket' onChange={hobbies} />
      <label htmlFor="cricket">Cricket</label>
      <br /><br />
      <input type="checkbox" id='hockey' value='hockey' onChange={hobbies} />
      <label htmlFor="hockey">Hockey</label>
      <br /><br />
      <input type="checkbox" id='football' value='football' onChange={hobbies} />
      <label htmlFor="football">Football</label>
      <h2>{hoby.toString()}</h2>
    </div>
  )
}

export default CheckBox
