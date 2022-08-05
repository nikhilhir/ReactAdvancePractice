import React from 'react'

const TodoInput = ({status,id,title}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{status? "True" : "False"}</div>
    </div>
  )
}

export default TodoInput
