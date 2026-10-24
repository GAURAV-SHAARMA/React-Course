import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSlice'

export const store = configureStore(
    {
        reducer:todoReducer
        //ye apne pass ek hi hai
    }
)




// # Redux Store – Short Notes

// ## Definition
// A **Redux Store** is a centralized place that holds and manages the application's state.

// ## `configureStore()`
// - Provided by `@reduxjs/toolkit`.
// - Creates the Redux store.
// - Connects reducers to manage state updates.

// ## Reducer
// - A reducer determines how the state changes in response to actions.
// - It is created using `createSlice()` in Redux Toolkit.

// ## Example
// ```javascript
// import { configureStore } from '@reduxjs/toolkit'
// import todoReducer from '../features/todo/todoSlice'

// export const store = configureStore({
//     reducer: todoReducer
// })
// ```

// ## Important Points
// - `configureStore()` creates the store.
// - `todoReducer` manages the Todo state.
// - `export const store` makes the store available to other files.
// - A single reducer can be passed directly.
// - Multiple reducers can be combined in an object.

// ## Multiple Reducers
// ```javascript
// configureStore({
//     reducer: {
//         todo: todoReducer,
//         user: userReducer
//     }
// })
// ```

// **Remember:** The store holds the state, and reducers define how the state updates.
