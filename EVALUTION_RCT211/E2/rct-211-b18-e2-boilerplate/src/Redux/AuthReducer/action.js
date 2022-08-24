//Write the ActionCreator functions here

import * as types from "./actionTypes";
import axios from "axios";

const login = (payload)=>(dispatch)=>{
    
    dispatch({type:types.LOGIN_REQUEST});

    return axios({
        method:"POST",
        url:"/api/login",
        baseURL:"https://reqres.in",
        data:payload,
    })
    .then((res)=>dispatch({type:types.LOGIN_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:types.LOGIN_FAILURE,payload:err}))
}

export {login}


// THE  IDEA BEFORE RETURN THR RETURN BEFORE AXIOS WE CAN USE .THEN PROPERTY 
//IN COMPONENT WHERE WE CALL DATA FROM ACTION FILE
//.THEN APPLY ON PROMISE WE RETURN AXIOS MEANS WE RETURN PROMICE TO COMPONENTd





// return axiox
// .get({
//     method:"POST",
//     url:"/api/login",
//     baseURL:"https://reqres.in",
//     data:payload,

// })