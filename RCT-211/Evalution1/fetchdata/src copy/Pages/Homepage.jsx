import React, { useEffect } from "react";
 import { useSelector, useDispatch } from "react-redux";
 import {getdata} from "../Redux/action"
//  import axios from "axios"
// import { GET_PROFILE_DETAILS_FAILURE, GET_PROFILE_DETAILS_REQUEST, GET_PROFILE_DETAILS_SUCCESS } from "../Redux/actionTypes";

const Homepage = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  console.log(profile)

  useEffect(() => {
    if (profile?.length === 0) {
      dispatch(getdata());
    }
  }, [dispatch, profile?.length]);
  console.log(profile);

  // const getdataa= () => {
  //   dispatch(GET_PROFILE_DETAILS_REQUEST)
  //   axios.get("http://localhost:8080/profile")
  //   .then((r) => dispatch(GET_PROFILE_DETAILS_SUCCESS(r.data)))
  //   .catch((e) => dispatch(GET_PROFILE_DETAILS_FAILURE(e)))
  // }
  // useEffect(() => {
  //   getdataa()
  // })
  return (
    <div>
      <table>
        <thead style={{ fontWeight: "700" }}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper" style={{margin:"auto"}}>
          {/* Map through the profileData received from the json-server on mounting the component to show it in a table format */}
          {
            profile.map((elem)=>{
              return (
                <>
                  <tr>
                    <td>{elem.id}</td>
                    <td>{elem.profile_pic}</td>
                    <td>{elem.first_name}</td>
                    <td>{elem.last_name}</td>
                    <td>{elem.email}</td>
                    <td>{elem.gender}</td>
                    <td>{elem.country}</td>
                  </tr>
                </>
              );
              

              
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;




