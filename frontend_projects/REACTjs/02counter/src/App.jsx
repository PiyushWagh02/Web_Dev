import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    let counter = 15;

    const addValue = () =>{
        
      counter=counter+1;
      console.log(counter);

    }
  return (
    <>
     <h1>React course with hitesh {counter}</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <button>remove value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
