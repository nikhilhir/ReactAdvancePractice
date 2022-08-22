import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const [email,setEmail]=useState("eve.holt@reqres.in");
  const [password,setPassword]=useState("")

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()

  const comingFrom = location.state?.form?.pathname || "/";
  console.log("COMMIngFORm",comingFrom);

  const handlesubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((res)=>{navigate(comingFrom,{replace:true});
      //REPLACE TRUE WORKS BROWZER STORE THE HISTORY IN THE FORM OF STACK
      //YOU DOND ADD THE OTHER PAGE ON TOP OF IT YOU JUST REPLACE THE PAGE
      //DONT ADD ONATHER HISTORY BUT REEPLACE THE PRIOUS ONE
    })
    }
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>LOGIN</h2>
      <form
        style={{ textAlign: "center", fontSize: "24px" }}
        onSubmit={handlesubmit}
      >
        <div>
          <label>User Email</label>
          <br />
          {/* ************************************************ */}
          <input
            data-testid="login-email"
            type="email"
            value={email}
            style={{ fontSize: "20px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          {/* ***************************************************************** */}
          <label>User Password</label>
          <br />
          <input
            data-testid="login-password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontSize: "20px" }}
          />
        </div>
        {/* ************************************************************* */}
        <button
          type="submit"
          data-testid="login-submit"
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            border: "none",
            padding: "8px 8px",
            marginTop: "1rem",
            width: "220px",
          }}
        >
         {isLoading ? "LOADING" : "LOGIN"} 
        </button>
      </form>
      "email": "eve.holt@reqres.in", "password": "cityslicka"
    </div>
  );
};

export default Login;
