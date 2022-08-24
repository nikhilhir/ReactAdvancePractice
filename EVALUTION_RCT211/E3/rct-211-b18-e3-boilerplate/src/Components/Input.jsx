//Complete the custom Input component based on the props that it expects to receive
import React from "react";
import "./Input.css"


export const Input = (props) => {
  const {type="text",size="md",varient,value,onChange,...rest} = props;
  return (
  <div>
    <input
      type={type}
      className={`${size} ${varient}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  </div>
  );
};
