import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h4>Performance..Optimization..</h4>
    <Todo/>
    </div>
  )
}

export default App
