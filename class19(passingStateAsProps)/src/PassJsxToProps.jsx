import React, { Children } from 'react'

const PassJsxToProps = ({children,textColor,border}) => {
  return (
    <div style={{border:border, width:"350px" ,margin:"30px", padding:"20px" ,borderRadius:'10px', color:textColor}}>
      {children}
    </div>
  )
}

export default PassJsxToProps
