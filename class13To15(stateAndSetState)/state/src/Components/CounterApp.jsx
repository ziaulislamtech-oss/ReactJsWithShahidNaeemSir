import React, { useState } from 'react'

const CounterApp = () => {
    let [count,setCount] = useState(0);
  return (
    <div>
      <h1>count : {count} </h1>
      <button onClick={()=>setCount(count+1)} >increment</button>
      <button onClick={()=>setCount(count-1)} >decrement</button>
      <button onClick={()=>setCount(count=0)} >reset</button>
    </div>
  )
}

export default CounterApp
