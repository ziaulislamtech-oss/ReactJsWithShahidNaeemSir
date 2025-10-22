import React from 'react'

const EventFunciton = () => {
    function greeting(){
        alert("hellow  how are you");
    }
    const lahore=(cityName)=>{
        alert(cityName)
    }
  return (
    <>
    <button onClick={greeting} >greeting</button>
    <button onClick={()=>lahore('lahore')}>Lahore</button>
    <button onClick={()=>lahore('khayber')}>khayber</button>


    {/* {greeting()} */}
    </>
  )
}

export default EventFunciton
