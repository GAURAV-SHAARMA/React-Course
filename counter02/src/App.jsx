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

      counter = counter+1
      // now this process  user will not see the updation on the screen 
      
      setCounter(counter)// this will reflect updation on screen
    }
  }

  const removeValue = () =>{
    if(counter > 0) // remains above 0
    setCounter(counter-1)
   
  }

  return (
    <>
    <h1>CHai or React</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
