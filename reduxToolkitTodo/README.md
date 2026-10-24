<!-- Redux ->>>>> -->

redux is independent state management library

->>>to impliment redux into any framework in react we have (react-redux)




redux-toolkit vs redux

inse bhi pehle the (flux used by facebook)
flux ->> data flow not good 
then comes (redux) -> better version of flux -> redux states that changes should be made up by pure functions(reducers)
single source of truth hona chahiye
you should never change your state

problems in redux-> devtools setup problems very complex

then comes -<>>(redux -toolkit)
it has many abstruction
easy to create stores
have many built-in modules



Store hota hai  , reducer hota hai(store mai kuch bhi change karna hai reducer controls functionality)
, useselector , usedispatch


<!-- Installation ->>>>  -->

npm install @reduxjs/toolkit

npm install react-redux


What's Included

Redux Toolkit includes these APIs:

    configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

    createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.


    createAction(): generates an action creator function for the given action type string.


    createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.


    combineSlices(): combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.


    createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise


    createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store

    
    The createSelector utility from the Reselect library, re-exported for ease of use.
