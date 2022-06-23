import { actionTypes } from "./actionTypes";

const initialState = 0;

const reducerNumber = (state=initialState,action)=>{

    switch(action.type){
        case "INCREMENT": return state+1;
        case "DECREMENT":return state-1;

        default:return state;

    }
}

export default reducerNumber;