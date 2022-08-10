import React, { useState } from 'react'
import Pin from './Pin'

const PinBox = () => {
    const [otp,setOtp]=useState("")
  return (
    <div>
        <Pin  length={5} setOtp={setOtp}/>
        <div>The Otp input is {otp}</div>
      
    </div>
  )
}

export default PinBox

