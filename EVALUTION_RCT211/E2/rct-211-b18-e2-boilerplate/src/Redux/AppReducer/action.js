//Write the ActionCreator functions here

import * as types from "./actionType";
import axios from "axios";

// const getwatchDataRequest=()=>{
//     return{
//         type:types.GET_PROFILE_DETAILS_REQUEST
//     }

// }

// ***************
//IT WILL GETTING SOME PARAMS IS PARAMS PRESENT PRESENT OR NEGLATING THAT PARAMS
//THIS IS NECESSARY WHEN YPU USE AXIOS FOR ANY REQUESR
//REMEMBER RETURN AXIOS DISPATCH({TYPE:TYPES.})
const getAppdata=(params)=>(dispatch)=>{
    dispatch({type:types.GET_WATCHES_DATA_REQUEST})
    axios
      .get("http://localhost:8080/watches",params)
      .then((res) =>
        dispatch({ type: types.GET_WATCHES_DATA_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: types.GET_WATCHES_DATA_FAILURE,payload:err }));
}

export {getAppdata}
