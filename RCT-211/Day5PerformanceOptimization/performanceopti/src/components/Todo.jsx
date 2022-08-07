import React from 'react'
import { useState } from 'react';
import TodoInput from './TodoInput';

const init=[
    {id:1,status:false,title: "Task 1"},
    {id:2,status:false,title: "Task 2"},
     {id:3,status:false,title: "Task 3"}
]

const Todo = () => {
  //const[variable,function]=usestate(initialvalue already in todo)
    const [todo,setTodo]=useState(init);
    //this is for input box current update 
    const[currentTodo,setCurrentTodo]=useState("");

    const handleinputChange=(e)=>{
        setCurrentTodo(e.target.value);
    }
    //console.log({...todo[0]})

    const toggleStatus = (id)=>{
      //if i get id==id then change the status
      let newTodo=todo.map((item)=>item.id===id ? {...item,status:!item.status}:item);
      setTodo(newTodo)
    }
    const deleteTask = (id)=>{
      //filter id should be not equal to id we getting from parameter
      let newTodo=todo.filter(item=> item.id!==id  )
      setTodo(newTodo)
    }

    const handleAddTask=(z)=>{
      //first check currentTodo present or not then create a payload
      //setTodo(...todo,payload)
      if(currentTodo){
        const payload={
          id:todo.length+1,
          status:false,
          title:currentTodo
        }
        setTodo([...todo,payload])
        setCurrentTodo("")
      }
   
    }


  return (
    <div>
      <h4>ToDo Application</h4>
      <input value={currentTodo} onChange={handleinputChange}/>
      <button onClick={handleAddTask}>ADD</button>
      {/* //if todo is truthi value then only map through it */}
      {todo.length && todo.map((elem)=>{
        return <TodoInput key={elem.id} {...elem} toggleStatus={toggleStatus} deleteTask={deleteTask}/>
        //passing props in todoInput id and props all data ...elem
      })}
    </div>
  )
}

export default Todo

//chech the profiler how to compoonent rendering extention


//useCallback returing the new function when todo was changing
