//Complete the Custom Image component based on the props that it expects to receive
import React from "react";


export const Image = (props) => {
  const { src, alt, width, height, borderRadius, fit } = props;
  return <img src={src}
  alt={alt}
  style={{height,width,borderRadius,objectFit:fit}}
  />;
};
