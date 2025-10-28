import React, { useState } from 'react'

const InputBoxData = () => {
    const [val,setVal]=useState("")
  return (
    <div>
      <h1>input data</h1>
      <input type="text"  value={val} placeholder='Type something' onChange={(event)=>setVal(event.target.value)  }  />
      <h2>{val}</h2>
      <button onClick={()=> setVal("")}>Reset</button>
    </div>
  )
}

export default InputBoxData
