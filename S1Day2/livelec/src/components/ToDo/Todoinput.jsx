import { useState } from "react"
import React from 'react'

const Todoinput = () => {
 
    const [text,settext]=useState()
    const handleAdd=()=>{}
  
  return (
    <div>
      <input type="text" placeholder="Add todo" value={text} onChange={(e)=>settext(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
  }

export default Todoinput