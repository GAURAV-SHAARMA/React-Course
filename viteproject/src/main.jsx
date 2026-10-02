import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
  {/* // this is not mandatory to use but it is a good practice to use it as it helps to identify potential problems in the application */}
    <App />
  </StrictMode>,
) 
