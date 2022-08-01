import {applyMiddleware, legacy_createStore} from "redux"

import { TodoReducer } from "./reducer"
import thunk from "redux-thunk"

// ***************HOW THUNK WORK INTERNALLY*************

// const customMiddleware=(store)=>(next)=>(action)=>{
//     //action actionobj  dispatch action is fun fetgetTodoa
//     if (typeof action === "function") {
//       return action(store.dispatch);
//     }
//     //action -> getTasks; (dispatch) => store.dispatch
//     //     // getTasks(dispatch);
//     //hear if we get function in ction file return dispatch
//     else if (typeof action === "object") {
//       return next(action);
//     }
// }
// *****************************************************

const store = legacy_createStore(TodoReducer,applyMiddleware(thunk));

export {store}



// import { applyMiddleware, legacy_createStore } from "redux";
// import { reducer } from "./reducer";
// import thunk from "redux-thunk";

// const customMiddleware = (store) => (next) => (action) => {
//   //action -> dispatch(action) -> getTasks();
//   if (typeof action === "function") {
//     //action -> getTasks; (dispatch) => store.dispatch
//     // getTasks(dispatch);
//     return action(store.dispatch);
//   } else if (typeof action === "object") {
//     return next(action);
//   }
// };

// const store = legacy_createStore(reducer, applyMiddleware(thunk));

// export { store };