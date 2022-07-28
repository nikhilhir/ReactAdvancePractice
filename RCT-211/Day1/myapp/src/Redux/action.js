const handleIncrement = () => {
    return ({ type: "INCREMENT", payload: 1 });
    //console.log( Store.getState())
  };

  const handleDecrement = () => {
    return ({ type: "DECREMENT", payload: 1 });
   // console.log( Store.getState())
  };

  export {handleIncrement,handleDecrement}