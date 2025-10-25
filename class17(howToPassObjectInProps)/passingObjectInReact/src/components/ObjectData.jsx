import React from 'react'

const ObjectData = ({user,order}) => {
  return (
    <div>
        <h1>Student {order}</h1>
        <h2> {user.Name} </h2>
        <h2> {user.Age} </h2>
        <h2> {user.Uni} </h2>

    </div>
  )
}

export default ObjectData
