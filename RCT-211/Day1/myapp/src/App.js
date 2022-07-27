import { useState } from "react";
import "./App.css";
import { Store } from "./Redux/store";

function App() {
  const { dispatch } = Store;
  const { counter } = Store.getState();
  const [local,setlocal]=useState(0)

  Store.subscribe(()=>{
    setlocal((prev)=>prev+1)
  })

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
    console.log( Store.getState())
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };

  // const [counter, setcounter] = useState(0)

  // const handleIncrement =()=>{
  //   setcounter((prev)=>{
  //     return prev +1
  //   })
  // }
  //   const handleDecrement =()=>{
  //     setcounter((prev)=>{
  //       return prev +1
  //     })
  // }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>INC+</button>
      <button onClick={handleDecrement}>DEC-</button>
    </div>
  );
}

export default App;
