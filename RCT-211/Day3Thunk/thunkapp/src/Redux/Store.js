import {legacy_createStore} from "redux"

import { TodoReducer } from "./reducer"

const store = legacy_createStore(TodoReducer);

export {store}