

Tailwind Installation ->>

npm install tailwindcss @tailwindcss/vite

->>>>> In vite.config.js

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
->>>import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,
    ->>tailwindcss()
  ],
})


@import "tailwindcss";

->> In index.css



->>> props makes components reusable 

Props (Properties) are used to pass data from a parent component to a child component.

Props are similar to function arguments.

Example
function App() {
  return <User name="Gaurav" age={21} />;
}

function User(props) {
  return (
    <h1>
      My name is {props.name} and I am {props.age} years old.
    </h1>
  );
}

Here:

App
 ↓
name="Gaurav"
age={21}
 ↓
User

The User component receives these values through props.

Destructuring Props

Instead of:

function User(props) {
  return <h1>{props.name}</h1>;
}

We can use destructuring:

function User({ name }) {
  return <h1>{name}</h1>;
}
Important Points
Props are used for passing data between components.
Data normally flows from parent → child.
Props can contain strings, numbers, booleans, arrays, objects, functions, and JSX.
Props are read-only; a child should not directly modify its props.
Props help make components reusable and dynamic.
Props vs State
Props → Data received from parent
State → Data managed inside the component