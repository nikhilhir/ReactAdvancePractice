import {legacy_createStore} from "redux";

import {reducer} from "./reducer"

const Store=legacy_createStore(reducer,{counter:5});

export {Store};

