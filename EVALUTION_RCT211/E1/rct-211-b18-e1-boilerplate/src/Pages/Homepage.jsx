import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { getProfileDetailrequest, getProfileDetailsFailure, getProfileDetailsSuccess } from "../Redux/action";
import ProfileDataRow from "../Components/ProfileDataRow";

const Homepage = () => {

const data = useSelector((store) => store.profileData);
const dispatch=useDispatch()

const getData = ()=>{
  dispatch(getProfileDetailrequest())
  axios
  .get("http://localhost:8080/profile")
  .then((res)=>dispatch(getProfileDetailsSuccess(res.data)))
  .catch((err)=>dispatch(getProfileDetailsFailure(err)))
}

useEffect(()=>{
  if(data.length===0){
    getData()
  }
},[])

console.log(data)

  return (
    <div>
      <table style={{ margin: "auto" }}>
        <thead style={{ fontWeight: "700" }}>
          <tr>
            <th style={{ width: "150px" }}>ID</th>
            <th style={{ width: "150px" }}>Image</th>
            <th style={{ width: "150px" }}>First Name</th>
            <th style={{ width: "150px" }}> Last Name</th>
            <th style={{ width: "150px" }}>Email</th>
            <th style={{ width: "150px" }}>Gender</th>
            <th style={{ width: "150px" }}>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          {/* Map through the profileData received from the json-server on mounting the component to show it in a table format */}
          {data?.length > 0 &&
            data.map((elem) => {
              return <ProfileDataRow key={elem.id} profile={elem} />;
              //////////////////////////////////////here pass the profile data as props
              // return <tr>
              //   <th>{elem.id}</th>
              //   <th>{elem.first_name}</th>
              //   <th><img src="" alt=""/></th>
              // </tr>;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
