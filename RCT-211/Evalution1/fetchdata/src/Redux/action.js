// Write the action object creators in this file
import axios from 'axios';
import * as types from './actionTypes';



const getdata =()=>(dispatch)=>{
    dispatch({type:types.GET_PROFILE_DETAILS_REQUEST});
    axios
      .get("/profile")
      .then((r) =>
        dispatch({ type: types.GET_PROFILE_DETAILS_SUCCESS, payload: r.data })
      )
      .catch((e) => dispatch({ type: types.GET_PROFILE_DETAILS_FAILURE }));
}

export {getdata}

