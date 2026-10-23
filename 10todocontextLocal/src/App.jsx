import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]); // by default empty aray

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    // here what we have done is we have used the setTodos function to update the state of todos by adding a new todo object to the beginning of the array. The new todo object is created by spreading the properties of the todo argument and adding a unique id using Date.now(). The prev parameter represents the previous state of todos, which is an array of todo objects. We use the spread operator to create a new array that includes the new todo object followed by all the previous todo objects.
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) =>
      //prev access mil gaya
      prev.map((prevTodo) =>
        //ab lagaya loop purani todos per
        prevTodo.id === id
          ? {
              ...prevTodo,
              //sari values ko spread kar diya
              completed: !prevTodo.completed,
            }
          : prevTodo,
      ),
    );
  };

  //now start local storage functionality to persist the todos across page reloads

  // using localstorage convert data into strings
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // using another useEffect to update the local storage whenever the todos state changes

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                {/* unique id   */}
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
