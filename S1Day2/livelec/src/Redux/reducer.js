import * as types from "./actionTypes";

const initialState = {
    todos:[],
    isloading:false,
    isError:false,
}


 const reducer = (state=initialState,action)=>{
    const {type,payload} = action;

    switch(type){

        case types.GET_TODO_REQUEST:
            return{
                ...state,
                isloading:true,
                isError:false

            }

        case types.GET_TODO_SUCCESS:
            return{
                ...state,
                isloading:false,
                isError:false,
                todos:[...state.todos,...payload]
            }  
        case types.GET_TODO_FAILURE:
            return{
                ...state,
                isloading:false,
                isError:true
            }  
        default:
            return state;      
    }
}

export default reducer