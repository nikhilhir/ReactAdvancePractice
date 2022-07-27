import {legacy_createStore} from "redux";

import {reducer} from "./reducer"

const Store=legacy_createStore(reducer,{count:5});

export {Store};

