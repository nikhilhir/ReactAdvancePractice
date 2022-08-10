import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
// import "./pin.css";

const Pin = ({ length, setOtp }) => {
  const [inputBoxLength] = useState(new Array(length).fill(1));
  const inputRef = useRef([]);
  const changeHandler = (e, index) => {
    if(index < length-1){
    inputRef.current[index + 1].focus();
    }
  };

  const handlePastChange = ()=>{

  }
  return (
    <div>
        {/* //.map(element,index) */}
        {/* //we dont want to use first element that why we use backspace_, */}
      {inputBoxLength.map((_, index) => {
        return (
          <input
            style={ styleee }
            key={index}
            ref={(HTMLElement) => {
              //console.log(element)
              inputRef.current[index] = HTMLElement;
            }}
            // ref={inputRef}
            maxLength={1}
            onChange={(e) => changeHandler(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Pin;

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  setOtp: PropTypes.func,
};


const styleee = {
  width: 20,
  height: 20,
  padding: 10,
  fontsize:14,
  margin:5,
//   backgroundcolor:"red",
//   border:"5px solid green" ,


  
};

// input{
//     height:40px;
//     width:40px;
//     margin:1px
// }

//useRef()
//store some data mutable data across the component life-cycle
//across re-render
//access DOM nodes/element
//in simple it use to store the dom element in useref hook
//leke get emement by id
