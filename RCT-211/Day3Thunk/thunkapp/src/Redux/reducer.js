import * as types from "actionType"

let initialState = {

    todos:[],
    isLoading:false,
    isError:false,

}

const TodoReducer = (state=initialState,action)=>{
   const {type,payload}=action;

   switch(type){
    default:
        return state;
   }
}

export {TodoReducer}


