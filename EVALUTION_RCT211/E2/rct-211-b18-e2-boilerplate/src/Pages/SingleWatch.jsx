import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getwatch } from "../Redux/AppReducer/action";

const SingleWatch = () => {
  const {id} = useParams();
  const dispatch=useDispatch();
  const watchdata = useSelector((state) => state.Apppreducer.watches);
  const [currentwatchh,setCurrentwatch]=useState({});


  useEffect(()=>{
    if(watchdata.length===0){
      dispatch(getwatch());
    }
  },[dispatch, watchdata.length])
  //console.log("singlepage",watchdata)

  useEffect(()=>{
   if(id){
    const currentw = watchdata.find((watches)=>watches.id===Number(id));
    currentw && setCurrentwatch(currentw);
   }
  },[id, watchdata])
  console.log("singlepage", watchdata);


  return (
    <div style={{textAlign:"center"}}>
      <h2>{currentwatchh?.name}</h2>
      <div>
        <img src={`${currentwatchh.image}`} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentwatchh?.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
