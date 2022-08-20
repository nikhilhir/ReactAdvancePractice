import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import { getAppdata } from "../Redux/AppReducer/action";

const Watches = () => {
  const dispatch=useDispatch()
  const location=useLocation()
  const watchdata = useSelector((state)=>state.Appreducer.Watches)
console.log(watchdata);

  useEffect(() => {
    if(watchdata.length===0){
      dispatch(getAppdata());
    }
    // let getwatchParams;
    // if (location.search || watchdata.length === 0) {
    //   getwatchParams = {
    //     params: {
    //       category: useSearchParams.getAll("category"),
    //     },
    //   };
    //   dispatch(getAppdata(getwatchParams));
    // }
  }, []);
   console.log(watchdata);
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
