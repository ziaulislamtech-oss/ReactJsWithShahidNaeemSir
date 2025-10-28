import React, { useState } from 'react'

const ControleComponent = () => {
        const [name,setName]=useState("");
        const [password,setPassword]=useState("");
        const [phno,setPhno]=useState("");
        function clearData(){
            setName("")
            setPhno("")
            setPassword("")
        }
  return (
    <div>
      <h1>Controlled Component</h1>
      <form action="#">
        <input type="text" value={name} placeholder='input your name' onChange={(event)=> setName(event.target.value)} />
        <br /><br />
        <input type="password" value={password} placeholder='input your password' onChange={(event)=> setPassword(event.target.value)} />
        <br /><br />
        <input type="tel" value={phno} placeholder='input your ph. no' onChange={(event)=> setPhno(event.target.value)} />
        <br /><br />
        <button>submit</button>
        <button onClick={clearData}>reset</button>
        <h2>{name}</h2>
        <h2>{password}</h2>
        <h2>{phno}</h2>
      </form>
    </div>
  )
}

export default ControleComponent
