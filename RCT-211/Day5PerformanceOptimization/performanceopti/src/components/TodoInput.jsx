import React from 'react'
//destructure the props hear ...item=> status,id,title
const TodoInput = ({status,id,title,toggleStatus,deleteTask}) => {

  
  return (
    <div style={{ display: "flex", margin: "5px", justifyContent: "center" }}>
      {/* <div style={{ paddingRight: "20px", border: "1px solid" }}>{title}</div> */}
      <div style={{ marginRight: "20px" }}>{title}</div>
      <div>{status ? "True" : "False"}</div>
      <button style={{margin:"0 10px"}} onClick={()=>toggleStatus(id)}>Toggle</button>
      <button onClick={()=>deleteTask(id)}>Delete</button>
    </div>
  );
}

//dont think to rerender all thing based on shalloequal change thing
// const shalloequal=(prevProps,currentProps)=>{
//   return if previous prop id == current prop.id && status
//   if not same only to rerender
// }
const shalloequal=(prevProps,currentProps)=>{
  return  (prevProps.id  == currentProps.id  && prevProps.status===currentProps.status)
  
}
//dont more use react.memo it not rendering component it not  help to fing bug and error

export default React.memo(TodoInput,shallowEqual)
//due to unneccesary rendering for stop we  use higher order component
//React.memo if i got same input i am not rendering 