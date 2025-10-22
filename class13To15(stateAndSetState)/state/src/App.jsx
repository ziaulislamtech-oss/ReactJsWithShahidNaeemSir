import React from 'react'
import State from './Components/State'
import CounterApp from './Components/CounterApp'
import ToggleButton from './Components/ToggleButton'
import MyImage from './Components/MyImage'
import NumberToWords from './Components/NumberToWords'

const App = () => {
  return (
    <div>
      <State/>
      <CounterApp/>
      <ToggleButton/>
      <MyImage/>
      <NumberToWords/>
    </div>
  )
}

export default App
