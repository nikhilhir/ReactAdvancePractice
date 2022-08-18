import * as types from "./actionTypes"

const initialState = {
  profileData: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState,action) => {
  const{type,payload}=action;
  switch (type) {
   case types.GET_PROFILE_DETAILS_REQUEST:
       return{
        ...oldState,
        isLoading:true,
        isError:false,
       };
    case types.GET_PROFILE_DETAILS_SUCCESS: 
        return {
          ...oldState,
          isLoading:false,
          isError:false,
          //hear we are storing the data for in profiledata
          profileData:payload,
    }
    case types.GET_PROFILE_DETAILS_FAILURE: 
      return{
           ...oldState,
          isLoading:false,
          isError: true,
    }
    default: 
      return oldState;
  };
  
  };

  

export { reducer }
