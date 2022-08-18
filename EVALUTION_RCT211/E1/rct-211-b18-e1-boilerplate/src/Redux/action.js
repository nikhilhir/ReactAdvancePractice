// Write the action object creators in this file
import * as types from "./actionTypes";

const getProfileDetailrequest= ()=>{
    return{
       type:types.GET_PROFILE_DETAILS_REQUEST,
    }
}
//for the success we are getting some kind of payload as well
const getProfileDetailsSuccess=(payload)=>{
    return{
        type:types.GET_PROFILE_DETAILS_SUCCESS,
        payload,
    }
}

const getProfileDetailsFailure=()=>{
    return{
        type:types.GET_PROFILE_DETAILS_FAILURE,
    }
}

export{getProfileDetailrequest,getProfileDetailsSuccess,getProfileDetailsFailure}
