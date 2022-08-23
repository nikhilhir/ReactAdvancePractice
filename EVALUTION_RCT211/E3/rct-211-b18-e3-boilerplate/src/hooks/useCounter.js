/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/
// export const useCounter = () => {
//   const countValue = "";
//   const incCount = () => {};
//   const decCount = () => {};
//   return {
//     countValue,
//     incCount,
//     decCount,
//   };
// };
// **********************************given**************

import { useCallback, useState } from "react";

// import { useState } from "react";

// /* 
// 1. Complete the useCounter hook functionality here
// 2. Feel free to change any boilerplate logic present inside this custom hook
// 3. DO NOT CHANGE the name `useCounter` of this custom hook
// */
// export const useCounter = (init) => {
//   const [countValue, setCount] = useState(init.initialValue);
//   const incCount = (value) => {
//     if (countValue < init.maxValue) {
//       if (value == null) {
//         setCount(countValue + 1);
//       } else {
//         setCount(countValue + value);
//       }
//     }
//   };
//   const decCount = (value) => {
//     if (countValue > init.minValue) {
//       if (value == null) {
//         setCount(countValue - 1);
//       } else {
//         setCount(countValue - value);
//       }
//     }
//   };
//   return {
//     countValue,
//     incCount,
//     decCount,
//   };
// };
// ****************************************CUSTOM HOOK USECOUNTER*************************

export const useCounter =({initialCount,minvalue,maxValue})=>{

const [count,setCount]=useState(initialCount)

const onIncrement = useCallback(
  (incrementBy = 1) => {
    setCount((count) => {
      if (count >= maxValue) {
        return count;
      }
      if (maxValue === 0 && count === 0) {
        return 0;
      }
      return maxValue && count &&   incrementBy+count > maxValue
        ? count
        : count + incrementBy;
    });
  },
  [ maxValue]
);



const onDecrement = useCallback(
  (decrementBy =1)=>{
    setCount((count)=>{
      if(count <= minvalue){
        return count;
      }
      if(count===0 && minvalue===0){
        return 0;
      }
      return minvalue && count && count-decrementBy < minvalue ? count : count - decrementBy;
    })
  },
  [setCount,minvalue]
)

return {
  count,
  incCount: onIncrement,
  decCount: onDecrement,
};
}