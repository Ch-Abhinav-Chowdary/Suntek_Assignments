import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Form />
    </div>
  )
}

export default App
