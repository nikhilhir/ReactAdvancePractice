import React from 'react'
import { useTimeout } from '../Hooks/CustomHooks'

const Hooks = () => {
    const isReady=useTimeout(2000);
  return (
    <>
      <div>Custom Hooks</div>
      {isReady && "Ready"}
      {!isReady && "NOt Ready"}
    </>
  );
}

export default Hooks