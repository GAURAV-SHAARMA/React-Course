import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <h1 className='text-center bg-green-500'>Learn about Redux Toolkit</h1>
    <AddTodo/>
    <Todos/>
  </>
  )
}

export default App
