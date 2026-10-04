import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor:color}}>

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

        <button 
        onClick={()=>setColor("red")}
        className='outline-none px-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"red"}}>Red</button>
        {/* onclick needs function not the returned value by that function  there we use callback which is a function
        */}
        <button 
        onClick={()=>setColor("green")}
        className='outline-none px-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"green"}}>Green</button>

        <button 
        onClick={()=>setColor("purple")}
        className='outline-none px-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"purple"}}>Purple</button>

        <button 
        onClick={()=>setColor("yellow")}
        className='outline-none px-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"yellow"}}>Yelloe</button>

        <button
        onClick={()=>setColor("orange")}
        className='outline-none px-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"orange"}}>orange</button>

        <button
        onClick={()=>setColor("blue")}
        className='outline-none px-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"blue"}}>blue</button>

        <button
        onClick={()=>setColor("pink")}
        className='outline-none px-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"pink"}}>Pink</button>

      </div>
    </div>

    </div>

  )
}

export default App
