import * as types from "./actiontype"
import axios from "axios";

//these are action creator return action object
//action object is basically plain obj which return what need tobe done what happen
const getTodoRequest = ()=>{
    return{
     type:types.GET_TODO_REQUEST
    }
}
const getTotoSuccess = (payload) => {
  return {
    type:types.GET_TODO_SUCCESS,
    payload,
  };
};
const getTodoFailure = (errormessage) => {
  return {
    type:types.GET_TODO_FAILURE,
    payload:errormessage,
  };
};

//*************ADD IN TODO LIST IN DB FILE  POST request************* */

const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST,
  };
};
const addTotoSuccess = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload
  };
};
const addTodoFailure = (errormessage) => {
  return {
    type: types.ADD_TODO_FAILURE,
    payload: errormessage,
  };
};
//you can call fetgettodo fun directly from hear insted of component
const fetchGetTodo = (dispatch) => {
  dispatch(getTodoRequest());
  axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      dispatch(getTotoSuccess(res.data));
    })
    .catch((err) => dispatch(getTodoFailure(err)));
};

export {getTodoRequest,getTotoSuccess,getTodoFailure,addTodoRequest,addTotoSuccess,addTodoFailure,fetchGetTodo}