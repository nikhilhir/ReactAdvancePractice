import * as types from "./actiontype"

//initial state empty array loading and error status
let initialState = {
     todos:[],
    isLoading:false,
    isError:false,
}

//reducer takes two thing as parameter first is state old state second is action object from dispatch method
const TodoReducer = (state=initialState,action)=>{
    //destructure action object to take out type and payload
   const {type,payload}=action;

   switch(type){

    case types.GET_TODO_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false,
        }
     case types.GET_TODO_SUCCESS:
        return {
          ...state,
          todos:payload,
          isLoading: false,
          isError: false,
        };
     case types.GET_TODO_FAILURE:
        return{
            ...state,
          isLoading:false,
          isError:true,

        }      
    default:
        return state;
   }
}

export {TodoReducer}

//for adding ADD no need to change in redux file


