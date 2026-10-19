Definition: Props (short for properties) are used to pass data from a parent component to a child component in React. Props are read-only.

Example:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Welcome name="Gaurav" />


Here, name="Gaurav" is passed from the parent to the child using props.
2. Prop Drilling
Definition: Prop drilling is the process of passing data through multiple intermediate components using props, even when those components do not need the data themselves.

Example:

App → Parent → Child → Grandchild

If App has some data that only Grandchild needs, the data must be passed through Parent and Child using props.

Problem: It makes code harder to manage when the component tree becomes large.
3. Context API
Definition: Context API is a built-in React feature that allows components to share data without passing props manually through every intermediate component.

Example use cases:
- Dark/light theme
- User authentication
- Language preferences
Key benefit: It helps avoid prop drilling.
4. Redux
Definition: Redux is a state management library that stores application state in a centralized store, allowing different components to access and update shared data through a predictable process.

Example use cases:
- Shopping cart
- User information
- Application-wide state
Key benefit: It makes shared state easier to manage in large applications.
5. Redux Toolkit (RTK)
Definition: Redux Toolkit is the official, recommended way to write Redux logic. It simplifies Redux by reducing boilerplate code and providing utilities such as configureStore and createSlice.

Example:
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
});


Key benefit: You can write Redux code more easily with less repetitive code.
6. Zustand
Definition: Zustand is a lightweight state management library for React that allows components to access and update shared state through a simple store, without requiring providers.

Example:
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () =>
    set((state) => ({ count: state.count + 1 }))
}));


Key benefit: Simple setup, minimal boilerplate, and easy state sharing between components.


<!-- working 

 -->


Context kya hota hai React mein?

Context ek mechanism hai jiske through hum data ko multiple components ke saath share kar sakte hain, bina har component ko props pass kiye.


 # React Context API – User Login Demo

## Project Overview
A simple React project demonstrating how to share user data between components using the **Context API** without passing props manually through multiple levels.

## Features
- Username and password input fields.
- Shared user state using React Context API.
- Updates user data when the Submit button is clicked.
- Displays a personalized welcome message in the Profile component.
- Shows a message when no user data is available.

## Project Structure
```text
src/
├── components/
│   ├── Login.jsx
│   └── Profile.jsx
├── Context/
│   ├── UserContext.js
│   └── UserContextProvider.js
├── App.jsx
└── main.jsx
```

## Concepts Used

### 1. React Context API
Allows components to share data without passing props through intermediate components.

### 2. createContext()
Creates the `UserContext` object used to share user data.

### 3. Context Provider
`UserContextProvider.jsx` maintains the shared user state using `useState()` and provides `user` and `setUser` to its child components.

### 4. useState()
Manages the username and password locally in `Login.jsx` and the shared user data in the provider.

### 5. useContext()
Accesses the shared context value in `Login.jsx` and `Profile.jsx`.

### 6. Conditional Rendering
`Profile.jsx` displays a login message when `user` is `null`; otherwise, it displays the username.

## How It Works
1. `App.jsx` wraps `Login` and `Profile` inside `UserContextProvider`.
2. `UserContext.js` creates the context.
3. `UserContextProvider.js` stores and shares the user state.
4. `Login.jsx` collects input and updates the shared state when Submit is clicked.
5. `Profile.jsx` reads the updated state and displays a welcome message.

## Installation and Setup

```bash
npm install
npm run dev
```

Open the local URL displayed in the terminal to run the application.

## Important Note
This is a learning project demonstrating React state management. It does not implement real authentication or secure password storage.
