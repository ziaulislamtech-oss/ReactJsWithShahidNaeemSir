import React from 'react'
import card from '../assets/Css/card.module.css';
let imgPath="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387";

const StudentCard = () => {
  return (
    <div>
        <div>
        <h1 className={card.heading}>Student Card</h1>
        <img src={imgPath} alt="" />
      </div>
      
    </div>
  )
}

export default StudentCard
