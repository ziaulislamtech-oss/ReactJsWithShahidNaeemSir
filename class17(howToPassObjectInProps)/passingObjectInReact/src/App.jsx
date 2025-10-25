import ObjectData from "./components/ObjectData"
import PassingArray from "./PassingArray"


const App = () => {
  let studentOneInfo ={
    Name : 'Zia-Ul-Islam',
    Age  : 22,
    Uni  : 'NCS Peshawar'
  }
  let studentTwoInfo ={
    Name : 'Mubashir',
    Age  : 16,
    Uni  : 'In FCS'
  }
  let studentThreeInfo ={
    Name : 'Shouaib',
    Age  : 21,
    Uni  : 'Peshawar University'
  }
  let Number1 = 'one';
  let Number2 = 'two';
  let Number3 = 'three';
  let colors =['Red ','Green ','Purple ','Black']

  return (
    <div>
      <ObjectData order ={Number1} user={studentOneInfo} />
      <ObjectData order={Number2} user={studentTwoInfo}/>
      <ObjectData order={Number3} user={studentThreeInfo}/>
      <PassingArray color={colors}/>
      
    </div>
  )
}

export default App
