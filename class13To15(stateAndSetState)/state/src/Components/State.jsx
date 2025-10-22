import React, { useState } from 'react'

const State = () => {
  const [city,setCity]=useState("karachi");
  function changeCity(){
    setCity("Peshawar")
  }
  function changeCity(){
    setCity("Peshawar")
  }
  function changeCity(){
    setCity("Peshawar")
  }
  
  return (
    <div>
      <h1> We live in   {city} </h1>
      <button onClick={changeCity}>Chang city</button>
    </div>
  )
}

export default State
