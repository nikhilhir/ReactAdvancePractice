import React, { useState } from 'react'

const Contact = () => {
    const [user,setuser] = useState({
        name:"",
        email:""
    })
    
    let name,value
    const getuserdata = (e)=>{
       name=e.target.name
       value=e.target.value

       setuser({...user,[name]:value})
    }
  return (
    <>
      <form>
        <span>contact us</span>
        <input
          type="text"
          name='name'
          value={user.name}
          onChange={getuserdata}
          
          required
        ></input>
        <br />
        <br />

        <span>email</span>
        <input
          type="text"
          name='email'
          value={user.email}
          onChange={getuserdata}
        //   autoCompleated="off"
          required
        ></input>

        <br />
        <br />

        <button >Submit</button>
      </form>
    </>
  );
}

export default Contact