import { actionTypes } from "./actionTypes";

//import * as types from "./actionTypes"
const initialState = 0;

const reducerNumber = (state=initialState,action)=>{

    switch(action.type){
        // case types.INCREMENT:
        //     return{...state,count:state.count+payload} 
        case "INCREMENT": return state + action.payload;
        case "DECREMENT":return state- action.payload;

        default:return state;

    }
}

export default reducerNumber;