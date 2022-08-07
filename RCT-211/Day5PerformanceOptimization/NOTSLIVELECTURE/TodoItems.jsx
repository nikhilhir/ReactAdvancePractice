import React, { useEffect, useMemo, useState } from "react";

const expensiveOperation = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    continue;
  }
  return true;
};

const TodoItems = ({ status, id, title, toggleStatus, deleteTask }) => {
  //this function is going to take some time for executing
  const isItDone = useMemo(() => expensiveOperation(200), []); //synchronous

  console.log("Rendering TodoItems", id);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginRight: "20px" }}>{title}</div>
      <div>{status ? "True" : "False"}</div>
      <button onClick={() => toggleStatus(id)}>Toggle</button>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
};

// const equalityFunction = (prev, curr) => {
//   console.log(prev.toggleStatus === curr.toggleStatus);
// };

export default TodoItems;

//useSelector((store) => store.state, shallowEqual)
