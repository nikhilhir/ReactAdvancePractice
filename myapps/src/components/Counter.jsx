import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incrementNumber,decrementNumber} from '../Redux/action';

const Counter = () => {
  const result=useSelector((statete)=>statete.reducerNumber)
  const dispatch=useDispatch();
  return (
    <>
  <h1>Counter211</h1>
  <h3>{result}</h3>
  <button onClick={()=> dispatch(incrementNumber(5))}>INCREMENT</button>
  **
  <button onClick={()=> dispatch(decrementNumber(3))}>DECREMENT</button>
  </>
  )
}

export default Counter