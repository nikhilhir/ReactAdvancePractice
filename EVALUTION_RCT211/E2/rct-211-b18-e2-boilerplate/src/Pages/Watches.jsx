import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import { getAppdata } from "../Redux/AppReducer/action";

const Watches = () => {
  const dispatch=useDispatch()
  const watch = useSelector((store)=>store.Appreducer.Watches)
console.log(watch);

  useEffect(()=>{
   //if(watch.length===0){
     dispatch(getAppdata());
   //}
      
    },[])
  console.log(watch)
  return (

    <div>
      <Filter />
      <div>
        {/* Map through the watch list here using WatchCard Component */}
      </div>
    </div>
  );
};

export default Watches;
