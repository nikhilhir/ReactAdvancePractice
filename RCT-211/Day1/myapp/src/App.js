import { useState } from "react";
import "./App.css";
import { handleDecrement, handleIncrement } from "./Redux/action";
import { Store } from "./Redux/store";

function App() {
  const { dispatch } = Store;
  const { counter } = Store.getState();
  const [local,setlocal]=useState(0)

  console.log(counter)

  Store.subscribe(()=>{
    setlocal((prev)=>prev+1)
  })

  // const handleIncrement = () => {
  //   dispatch({ type: "INCREMENT", payload: 1 });
  //   console.log( Store.getState())
  // };

  // const handleDecrement = () => {
  //   dispatch({ type: "DECREMENT", payload: 1 });
  //   console.log( Store.getState())
  // };
//BY USING USESTATE
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
      <h1> "Counter",{ counter}</h1>
      <button onClick={()=>dispatch(handleIncrement())}>INC+</button>
      <button onClick={()=>dispatch(handleDecrement())}>DEC-</button>
    </div>
  );
}

export default App;
