import { useState, useCallback } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if(character) str += "!@#$%^&*-_+=[]{}~"

    for (let i = 1; i <= array,length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
     
      pass = str.charAt (char)
    }
      setPassword(pass)
    
  },[length,number,character,setPassword])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700"> test 
    
    <h1 className="text-white text-center">Password generator</h1>
  <div className="flex shadow rounded-1g overflow-hidden mb-4">
    <input
    type="text"
    value={password}
    className="outline-none w-full py-1 px-3" 
    placeholder="Password"
    readOnly
    />
    <button>copy</button>
    </div>
    </div>
    
  )
}

export default App
