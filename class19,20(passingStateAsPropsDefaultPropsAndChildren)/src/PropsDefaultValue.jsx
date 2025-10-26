import React from 'react'

const PropsDefaultValue = ({userName='Guest'}) => {
  return (
    <div>
      <h1>Assign Default Value to Props</h1>
      <h2>Hello {userName}..! </h2>
    </div>
  )
}

export default PropsDefaultValue
