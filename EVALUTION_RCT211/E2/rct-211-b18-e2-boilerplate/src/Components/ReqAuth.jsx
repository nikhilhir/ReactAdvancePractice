//Create the HOC for protected Routes
// REQUIRED AUTH IS HOC IT WILL CHECK USER IS AUTENTIVCATE OR NOT 
// BY IN MAIN ROUTER WE WRAP THE 
// WHEN WE CLICK IN WATCHCARD IMAGE OR ANY COMPONENT BY USE OF LINK WE REDIRECT
// TO SINGLE PRODUCT PAGE HEAR WATCHES/ID PAGE BUT IN MAIN ROUTER WE PROTECTED 
// OUR SINGLE PRODUCT PAGE BU REQAUTH COMPONENTS BY WRAP SO THAT IN REQUIRE AUTH PAGE WE WROTE THE LOGIC IS if
// IF THE USER IS NOT! !! AUTENTICATE THEN NAVIGATE TO /LOGIN FIRST ELSE RETURN IN THE CHILDREN IN OUR case
//hear children is single auth page
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// CASE CHILDREN IS SINGLE WATCH PAGE IT PROTECTED BY REQAUTH
const ReqAuth = ({children}) => {
    const Authorize = useSelector((state) => state.authReducer.isAuth);
    const location =useLocation();
    console.log("Auth",Authorize)

    if(!Authorize){
       return <Navigate to="/login" state={{from:location}} replace/>
       // state from means current usr location obj in state property pass current use location
       //before going to login page  //ket form or currentuserlocstion
    }
    else{
        return children
    }
};

export default ReqAuth;





// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";


// const ReqAuth = ({children}) => {
//      let location = useLocation();
//   let isAuth = useSelector((state) => state.AuthReducer.isAuth);

//   if (!isAuth) {
//     return <Navigate to={"/login"} state={{ from: location }} />;
//   }
//   return children;

// };

// export default ReqAuth;
