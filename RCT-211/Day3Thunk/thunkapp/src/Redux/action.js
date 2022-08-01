import * as types from "./actiontype"

const todoRequest = ()=>{
    return{
     type:types.ADD_TODO_REQUEST
    }
}
const totoSuccess = () => {
  return {
    type:types.ADD_TODO_SUCCESS,
    payload
  };
};
const todoFailure = () => {
  return {
    type:types.ADD_TODO_FAILURE
  };
};

export {todoRequest,totoSuccess,todoFailure}