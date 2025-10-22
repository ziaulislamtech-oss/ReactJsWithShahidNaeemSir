import React from 'react'

const MyImage = () => {
    let myPath = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=974"
  return (
    <div>
      <img src={myPath} alt="" />
    </div>
  )
}

export default MyImage
