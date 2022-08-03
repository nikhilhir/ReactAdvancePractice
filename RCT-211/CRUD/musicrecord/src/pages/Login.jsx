import React from 'react'

const Login = () => {
  const handlesubmit = ()=>{}
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <lable>User Name</lable>
          <input type="email" placeholder="@mail" />
           {/* value={email} onChange={()=>setEmail(e.target.value)} /> */}
        </div>

      </form>
    </div>
  )
}

export default Login