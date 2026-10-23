import {createContext , useContext} from 'react'

export const TodoContext = createContext({
    todos:[ // todos is a variable that holds an array of todo objects
        {
            id:1,
            todo:"Todo message",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    // addTodo is a function that takes a todo object as an argument and adds it to the todos array we will define functinality inthe app.jsx file
    updateTodo:(id, Todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
})

//custom hook to use the context
export const useTodo =() =>{
    return useContext(TodoContext)
    //use context hook to access the context value
}

// provider component to wrap the app and provide the context value
export const TodoProvider = TodoContext.Provider

