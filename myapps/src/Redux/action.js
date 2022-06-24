// import { actionTypes } from "./actionTypes";
//import * as types from "./actionTypes";


// const incrementNumber=(payload)=>{
//     return{
//         type:types.INREMENT,
//         payload
//     }
// }
export const incrementNumber = (num) =>{
    return{
        type:"INCREMENT",
        payload:num
        // payload:num
    }

}

export const decrementNumber=(num)=>{

 return{
    type:"DECREMENT",
    payload:num
 }

}