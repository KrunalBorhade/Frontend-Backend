import { useState } from 'react'
import {Product} from "./Components/Product"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Product />
    </div>
  )
}

export default App
