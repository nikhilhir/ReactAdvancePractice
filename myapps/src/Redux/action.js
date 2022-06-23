import { actionTypes } from "./actionTypes";

export const incrementNumber = (num) =>{
    return{
        type:"INCREMENT",
        payload:num
    }

}

export const decrementNumber=(num)=>{

 return{
    type:"DECREMENT",
 }

}