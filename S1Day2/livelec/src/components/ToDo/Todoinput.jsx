import { useState } from "react"
import React from 'react'
import {v4 as uuid} from "uuid"

const Todoinput = () => {
 
    const [text,settext]=useState('')
    const handleAdd=()=>{
      const payload ={id:uuid(),title:text,status:false};
      onClick(payload);
      settext("")
    }
  
  return (
    <div>
      <input type="text" placeholder="Add todo" value={text} onChange={(e)=>settext(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
  }

export default Todoinput