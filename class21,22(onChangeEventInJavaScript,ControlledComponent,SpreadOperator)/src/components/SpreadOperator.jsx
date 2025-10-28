import React from 'react'

const SpreadOperator = () => {
    const maleStudents=['ZiaKhan','mubashir','Awais','hanzala'];
    const femaleStudents=['Mahnoor','kalsoom','ayesha'];
    const allStudents =[...maleStudents,...femaleStudents];
  return (
    <div>
      <h1>All Students</h1>
      {
        allStudents.map((Students,index)=>
            <h3 key={index}>{Students}</h3>
        )
      }
    </div>
  )
}

export default SpreadOperator
