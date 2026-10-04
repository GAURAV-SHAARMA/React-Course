import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(15)
  // let counter = 15
  
  const addValue =()=>{
    // console.log("Value Added" , Math.random()) 
    console.log("Value added", counter);
    if(counter < 20){// remain below 20

      // counter = counter+1
      // now this process  user will not see the updation on the screen 
      
      setCounter((prevCounter)=> prevCounter +1)
      setCounter((prevCounter)=> prevCounter +1)
      setCounter((prevCounter)=> prevCounter +1)
      setCounter((prevCounter)=> prevCounter +1)

      // this will give previous counter using callback
      // setCounter(prevCounter => prevCounter + 1) uses the latest state value provided by React to safely calculate the next state, which is especially useful when multiple state updates depend on the previous value.

      //>>> means initial counter = 0 ->> then first prevCOunter ake it 1 and then another make it 2 and another make it 3 nand another make it 4 ->>> thats why if we want 4 value after clicking the add value we will use this method of prevcounter

      // setCounter(counter+1)// this will reflect updation on screen
      // setCounter(counter+1)
      // setCounter(counter+1)

      // now if we write this multiple times then what happens->>>>  nothing the increment will be only one time means +1 on every click ->> because everytime counter will take refernce from 0 ->> setCounter(counter + 1) updates the counter by taking its current value and adding 1 to i

      // ->>> this will create batch of all setCounter and do it once
    }
  }

  const removeValue = () =>{
    if(counter > 0) // remains above 0
    setCounter(counter-1)
   
  }

  return (
    <>
    <h1>Chai or React</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
