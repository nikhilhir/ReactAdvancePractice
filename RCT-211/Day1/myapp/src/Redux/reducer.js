const reducer = (oldState,action)=>{
    switch(action.type){
        case "INCREMENT":       //oldstate shoould be increase by oldstate plic count
            return{...oldState,counter:oldState.counter + action.payload}
        case "DECREMENT": 
            return {...oldState,counter:oldState.counter-action.payload}   
        default:
            return oldState;
    }
};

export {reducer}