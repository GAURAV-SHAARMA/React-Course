import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    // dispatch ye react ka wire up method hai iss se add hota hai
    //dispatch reducers ko use karte huve store ke ander values mai changes karta hai 


// 1. useDispatch()
// Definition: useDispatch() is a React Redux hook used to dispatch actions to the Redux store to update the state.

// Example:
// import { useDispatch } from 'react-redux'
// import { addTodo } from '../features/todo/todoSlice'
// const dispatch = useDispatch()
// dispatch(addTodo("Learn Redux"))

// useDispatch() returns the dispatch function.
// dispatch() sends an action to the Redux store.
// addTodo() passes the data through action.payload.


    const addTodoHandler = (e) => {
        // ye method hamne bana rakah hai onsubmit mai to ispe functionallity
        e.preventDefault()
        dispatch(addTodo(input))
        //dipatch ke ander value pass 
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo