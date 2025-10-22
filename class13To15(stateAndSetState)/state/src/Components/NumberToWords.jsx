import React, { useState } from 'react'

const NumberToWords = () => {
    let [count,setCount]=useState(0);
  return (
    <div>
      <h1>Number to Words</h1>
      <h1>{count}</h1>
      <h1></h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>
      <button onClick={()=>setCount(count=0)}>reset</button>
      {
       count==0?<h1>Zero</h1>
       :count==1?<h1>One</h1>
       :count==2?<h1>Two</h1>
       :count==3?<h1>Three</h1>
       :count==4?<h1>four</h1>
       :count==5?<h1>five</h1>:
       <h1>out of range</h1>
      
      }
    </div>
  )
}

export default NumberToWords
