import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button';


function App() {
  const [color, setColor] = useState("olive");

  return (
   <div className='w-full h-screen duration-200'
   style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
       <Button color="red" colorname="Red" setColor={setColor}/>
       <Button color="orange" colorname="orange" setColor={setColor}/>
       <Button color="blue" colorname="blue" setColor={setColor}/>
       <Button color="green" colorname="green" setColor={setColor}/>
       <Button color="purple" colorname="purple" setColor={setColor}/>
       <Button color="brown" colorname="brown" setColor={setColor}/>
       <Button color="black" colorname="black" setColor={setColor}/>
      </div>
    </div>
   </div>
  )
}

export default App
