
import './App.css'

function App() {

// console.log(process.env.REACT_APP_APPWRITE_URL)
// this process is correct for create-react app

console.log(import.meta.env.VITE_APPWRITE_URL)
//as or application is in Vite

  return (
    <>
      <h1>A blog app with appwrite</h1>
    </>
  )
}

export default App
