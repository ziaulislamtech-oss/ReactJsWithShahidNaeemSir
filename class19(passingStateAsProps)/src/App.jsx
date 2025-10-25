import React from 'react'
import PassJsxToProps from './PassJsxToProps'

const App = () => {
  return (
    <div>
      <PassJsxToProps textColor ="blue" border ="3px solid green">
        <h1>Student Card</h1>
        <h3>Name : Mubashir</h3>
        <h3>Roll No : 17</h3>
        <h3>Class : 12</h3>
      </PassJsxToProps>
      <PassJsxToProps>
        <h1>Student Card</h1>
        <h3>Name : shouaib</h3>
        <h3>Roll No : 21</h3>
        <h3>Class : 12</h3>
      </PassJsxToProps>
      <PassJsxToProps>
        <h1>Student Card</h1>
        <h3>Name : Abdussalam</h3>
        <h3>Roll No : 33</h3>
        <h3>Class : 18</h3>
      </PassJsxToProps>
      <PassJsxToProps>
        <h1>Student Card</h1>
        <h3>Name : Anwar</h3>
        <h3>Roll No : 17</h3>
        <h3>Class : bsc</h3>
      </PassJsxToProps>
    </div>
  )
}

export default App
