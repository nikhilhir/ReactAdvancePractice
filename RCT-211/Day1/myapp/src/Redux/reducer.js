import * as types from "./actionTypes"

const initialstate={
    counter:3
}

const reducer = (oldState=initialstate,action)=>{
    //const {type,payload}=action
    switch(action.type){
        case types.INCREMENT:       //oldstate shoould be increase by oldstate plic count
            return{...oldState,counter:oldState.counter + action.payload}
        case types.DECREMENT: 
            return {...oldState,counter:oldState.counter-action.payload}   
        default:
            return oldState;
    }
};

export {reducer}







// const reducer = (oldState,action)=>{
//     switch(action.type){
//         case "INCREMENT":       //oldstate shoould be increase by oldstate plic count
//             return{...oldState,counter:oldState.counter + action.payload}
//         case "DECREMENT": 
//             return {...oldState,counter:oldState.counter-action.payload}   
//         default:
//             return oldState;
//     }
// };

// export {reducer}