import React from 'react'

const JsCode = () => {
    let myName = 'ziaulislam';
    let Age = 24;
    const employInfo={
        Name : 'mubashi',
        age  : 23,
        salary : 200000
    }
    function addition(a,b){
        return a +b;
    }
  return (
    <div>
      <h1> user information</h1>
      <p>hellow guys my name is  {myName} and i am {Age} years old </p>

      <h1>emoloyement Information </h1>
      <p>hello this is our employment, name {employInfo.Name}. His age is {employInfo.age}
        and he earns {employInfo.salary} per-month.
          </p>
          <p>your addition is {addition(11,4)}</p>
    </div>
  )
}

export default JsCode
