import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


function MyApp(){// Everything inside this function is javascript and we can use any javascript code here and it will work as expected 

  // this will finally convert into the code we used in customreact,js file

  return(
    <>
    <h1>Welcome to my Custom react App</h1>
    </>
  )
}


// const reactElement = { // as this is the wrong syntax for react element we will not use this in our application but this is just to show how react will see the objects (in tree form)
//     // this shows how react will see the objects (in tree form)
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'click me to visit google'
// }



// const anotherElement = (
//   <a href='https://google.com' target='_blank'>click me to visit google</a>
// )


const anotherUser = "chai or react"



const newreactElement = React.createElement(
  'a', 
  {href:'https://google.com', target:'_blank'}, 
  'click me to visit google',
   anotherUser //its direct expression will be visible

) 
// this is the correct syntax for react element and this will work as expected


createRoot(document.getElementById('root')).render(
  <StrictMode> 
  {/* // this is not mandatory to use but it is a good practice to use it as it helps to identify potential problems in the application */}
    <App/>
    <MyApp />
    {/* MyApp() // this will also run as this is javascript function but we dont use this */}

    {/* {anotherElement}  */}
    {/* // this is js object and will work as this is a valid react element and it will be rendered in the DOM */}


    {/* reactElement // this will not work as this is not a valid react element but this is just to show how react will see the objects (in tree form) */}

    {newreactElement}
  
  </StrictMode>,
) 
