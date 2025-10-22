import React, { useState } from 'react'
import MyImage from './MyImage'

const ToggleButton = () => {
    const [display,setDisplay]  = useState(true)
  return (
    <div>
      <h1>Toggle Button On | OFF</h1>
      <button onClick={()=>setDisplay(!display)} >ON | OFF</button>
      {
        // display?<h1>click the button and hide me</h1>:null
        display?<MyImage/>:null
        
    }

    </div>
    
)
}

export default ToggleButton
