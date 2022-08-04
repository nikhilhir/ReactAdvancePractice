import { useState } from 'react'

 import './App.css'
import GithubSearchHooks from './components/GithubSearchHooks'
// import Button from './components/Button'
import Hooks from './components/Hooks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h3>Custom Hook</h3>
     <Hooks/>
     <GithubSearchHooks/>
     {/* <Button label="button"/> */}
        
    </div>
  )
}

export default App
