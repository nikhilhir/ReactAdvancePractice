
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoFailure, addTodoRequest, addTotoSuccess,fetchGetTodo } from '../Redux/action'

const TodoInput = () => {
  const dispatch = useDispatch();
  //here we are going to use usestate bcoz its localcomponent it self only
  const [task, settask] = useState("");

  //wheever we click on button post request is made
  const addTodobtn = () => {
    //if currentask already is their
    if (task) {
      const payload = {
        //this in bd,json file
        title: task,
        status: false,
      };
      //After add task input box empty
      settask("")

      dispatch(addTodoRequest());
      axios
        .post("http://localhost:8080/todos", payload)
        .then((res) => {
          dispatch(addTotoSuccess());
          //for that approch res.data to show data write reducer function for get data
        })
        //here we are using approch two without writing reducer file we get data show in get todo bu using pass props in todo file function call props
        //use fetchgettodo function already is in todo file by using props
        //.then(() => dispatch(fetchGetTodo()))
        //both are working
        //.then(() => fetchGetTodo(dispatch))
        .then(() => dispatch(fetchGetTodo))
        .catch((err) => {
          dispatch(addTodoFailure());
        });
    }
  };
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => settask(e.target.value)}
        placeholder="ADD TASK"
      />
      <button onClick={addTodobtn}>ADD TODO</button>
    </div>
  );
};

export default TodoInput