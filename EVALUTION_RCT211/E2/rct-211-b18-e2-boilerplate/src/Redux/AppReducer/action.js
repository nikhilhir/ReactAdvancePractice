// //Write the ActionCreator functions here
// import axios from "axios";
// import * as types from "./actionType";


// // ***************
// //IT WILL GETTING SOME PARAMS IS PARAMS PRESENT PRESENT OR NEGLATING THAT PARAMS
// //THIS IS NECESSARY WHEN YPU USE AXIOS FOR ANY REQUESR
// //REMEMBER RETURN AXIOS DISPATCH({TYPE:TYPES.})

// const getwatch = (params) => (dispatch) => {
//   dispatch({ type: types.GET_WATCHES_DATA_REQUEST });
//   axios
//     .get("/watches", params)
//     .then((r) =>
//       dispatch({ type: types.GET_WATCHES_DATA_SUCCESS, payload: r.data })
//     )
//     .catch((e) => dispatch({ type: types.GET_WATCHES_DATA_FAILURE }));
// };

// export { getwatch };




// dispatch({type:tppes.CAPITAL})









import axios from "axios"
import * as types from "./actionType"

const getdata = (params)=>(dispatch)=>{
  dispatch({type:types.GET_WATCHES_DATA_REQUEST})
  return axios
  .get("/watches",params)
  .then((res)=>dispatch({type:types.GET_WATCHES_DATA_SUCCESS,payload:res.data}))
  .catch((err)=>dispatch({type:types.GET_WATCHES_DATA_FAILURE,err}))
}


export {getdata}










































