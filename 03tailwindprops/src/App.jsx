import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    name: 'gaurav',
    age: 21
  }

  let newArr =[1 ,2 , 4] 
  return (
    <>
      <h1 className="bg-green-700 , text-black , p-4  , m-bottom">Tailwind Test</h1>

      <Card username="Chai or Code" someObj = {myobj} someArr ={newArr} btnText="click me"/>

      {/* myobj is passed as variable and will work fine */}

      <Card username ="Gaurav coder" btnText = "Visit me"/>

      {/* these use name and btntext ->>> all are properties we have to handle all these in the main Card.jsx in function */}

      {/* duplicate card */}
      {/* now we need data different in both cards then we will use props  */}
    </>
  );
}

export default App;
