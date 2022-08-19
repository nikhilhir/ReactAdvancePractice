//Write the ActionCreator functions here

import * as types from "./actionTypes";
import axios from "axios";

const logindata = (payload)=>(dispatch)=>{
    
    dispatch({type:types.LOGIN_REQUEST});

    axios({
        method:"POST",
        url:"/api/login",
        baseURL:"https://requres.in",
        data:payload,
    })
    .then((res)=>dispatch({type:types.LOGIN_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:types.LOGIN_FAILURE,payload:err}))
}

export {logindata}


