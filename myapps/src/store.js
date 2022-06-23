import {legacy_createStore} from 'redux';

import rootReducer from "./Redux/rootReducer";

const store =legacy_createStore(rootReducer)


export default store;