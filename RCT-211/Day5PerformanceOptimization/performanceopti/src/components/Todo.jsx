import React from 'react'
import { useState } from 'react';
import TodoInput from './TodoInput';
const init=[
    {id:1,status:false,title: "Task 1"},
    {id:2,status:false,title: "Task 2"}
]

const Todo = () => {
    const [todo,setTodo]=useState(init);
    const[currentTodo,setCurrentTodo]=useState("");

    const handleinputChange=(e)=>{
        setCurrentTodo(e.target.value);
    }
  return (
    <div>
      <h4>ToDo</h4>
      <input value={currentTodo} onChange={handleinputChange}/>
      <button>ADD</button>
      {todo.length && todo.map((elem)=>{
        return <TodoInput key={elem.id}{...elem}/>
      })}
    </div>
  )
}

export default Todo
