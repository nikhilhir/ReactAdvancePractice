import React, { useEffect } from "react";
import {
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
} from "../../Redux/action";
import Todoinput from "./Todoinput";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);
console.log(todos)


  const addtodo=(payload)=>{

  }

  const fetchTodos = () => {
    //request,sucess,failure

    const requestAction = getTodoRequest();
    dispatch(requestAction);

    return axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        const successAction = getTodoSuccess(res.data);
        dispatch(successAction);
        //console.log(successAction);
      })
      .catch((err) => {
        const errorAction = getTodoFailure();
        dispatch(errorAction);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos)
  return (
    <>
      <h1>Todo</h1>
      <Todoinput onClick={addtodo}/>
      {todos.length &&
        todos.map((item) => {
          return <h2 key={item.id}>{item.title}</h2>;
        })}
    </>
  );
};

export default Todo;
