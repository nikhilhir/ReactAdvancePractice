import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoFailure, getTodoRequest, getTotoSuccess,fetchGetTodo} from '../Redux/action'
import TodoInput from './TodoInput'
import axios from "axios"

const Todos = () => {
  //we need dispatch to update and modify data
  //and use selector to getting those task from store
  const dispatch=useDispatch()
  const tododata = useSelector((store)=>store.todos)
  // to get and fetch the data from db.json file
  // ********************************************
  // const fetchGetTodo = ()=>{
  //   dispatch(getTodoRequest())
  //   axios
  //   .get("http://localhost:8080/todos")
  //   .then((res)=>{
  //   dispatch(getTotoSuccess(res.data))
  // })
  //   .catch((err)=>dispatch(getTodoFailure(err)))
  // }
// **************************************************************************
  //use useEffect and tail only when the component mount at first time get the todo
//  useEffect(()=>{invokefun()},[]);
//  useEffect(()=>{invokefetchfun()},[])
 useEffect(()=>{
  dispatch(fetchGetTodo)
  //fetchGetTodo(dispatch)
 },[])
 console.log(tododata)

  return (
    <>
      <h4>Todos Application</h4>
      <TodoInput />
      {/* insted of passing props fetchGetTodo={fetchGetTodo} in input
      directly call input component from action */}
      {
        //? optional chaining truth value get error null undefined before . operator use optional chaining
        tododata?.length > 0 &&
          tododata?.map((elem) => {
            return <div key={elem.id}>{elem.title}</div>;
          })
      }
    </>
  );
}

export default Todos