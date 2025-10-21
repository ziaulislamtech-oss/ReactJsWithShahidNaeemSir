import React from 'react'

const Component = () => {
  return (
    <div>
      <h1>hello this is me component from componenxt.jxs</h1>
      <SecondCom/>
    </div>
  )
}

export default Component
function SecondCom(){
    return(
        <>
        <h1>hello this is me second component from the same place as component</h1>
        </>
    )
}
