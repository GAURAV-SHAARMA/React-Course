import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
import { githubInfoLoader } from './components/Github/Github'
import './index.css'
import App from './App.jsx'



// one method
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


// Another method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      
      <Route path='/'  element={<Home/>}/>

      <Route path='about' element={<About/>}/>

      <Route path='contact' element={<Contact/>}/>

      <Route path='user/:userid' element={<User/>}/>

      <Route 
      loader={githubInfoLoader}
      // A loader is a function associated with a route that can fetch or prepare data before the route component renders.
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
