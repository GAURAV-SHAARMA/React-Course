import { useState, useCallback, useEffect,useRef } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);

  const [numberAllowed, setnumberAllowed] = useState(false);

  const [character, setcharacter] = useState(false);

  const [password, setpassword] = useState("");

  //useref hook

  const passwordRef =useRef(null) 

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //contains data jo password ke ander ayega



    if (numberAllowed) str += "0123456789";
    if (character) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberAllowed, character, setpassword]);

  // here we have to call this function again and again thats why we will use callback()

  // useCallback()->> it is a react hook that lets you cache a functio defination between <re-renders>(try to memorize)

  //useeffect hook ->> manage side effects like api calls
  // in mai koi bhi change honge to change karo password

  const copyPasswordtoClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])



  useEffect(()=>{
    passwordGenerator( )
  } , [length , numberAllowed , character , passwordGenerator])


  //useRef ->>  it is a hook that returns a mutable ref object whose .current property is initialized to the passed argument
  //useRef is a React Hook that lets you store a value between renders without causing a re-render when that value changes. It is also commonly used to access DOM elements directly.

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center whitespace-nowrap my-3 ">
        Password generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        <button
        onClick={copyPasswordtoClipboard}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ">
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-4">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={(e) => {
              setnumberAllowed(e.target.checked);
            }}
          />
          <label>Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultchecked={character}
            id="characterInput"
            onChange={(e) => {
              setcharacter(e.target.checked);
            }}
          />
          <label>character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
