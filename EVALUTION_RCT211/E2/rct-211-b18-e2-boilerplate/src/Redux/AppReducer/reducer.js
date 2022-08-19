// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionType";

const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,action) => {
  const {type,payload}=action;
  switch (type) {
    case types.GET_WATCHES_DATA_REQUEST:
      return {
        ...state,
        isLoading:true,
        isError:false,
      };
    case types.GET_WATCHES_DATA_SUCCESS:
      return {
        ...state,
        isLoading:false,
        isError:false,
        watches:payload,
      };
    case types.GET_WATCHES_DATA_FAILURE:
      return {
        ...state,
        isLoading:false,
        isError:true,
      };    
    default:
      return state;
  }
  
};

export { reducer };
