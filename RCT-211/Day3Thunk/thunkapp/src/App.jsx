import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePages from './Pages/HomePages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePages/>
    </div>
  )
}

export default App
