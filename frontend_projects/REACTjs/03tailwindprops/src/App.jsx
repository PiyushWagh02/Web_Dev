import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3'>hi how are you</h1>
    <Card/>
    </>
  )
}

export default App
