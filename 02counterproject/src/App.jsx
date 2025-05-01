import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)

  // let counter = 15

  // const addValue = () => {
  //   console.log("add value", Math.random());
  // } 
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
  } 

  const reduceValue = () =>{
    counter = counter - 1
    setCounter(counter)
  }
  return (
    <>
     <h1>Hello there</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue} >Add value</button>
     <br /> 
     <button onClick={reduceValue}>Decrease value</button>
    </>
  )
}

export default App
