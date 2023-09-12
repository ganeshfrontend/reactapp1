import { combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counterReducer";
import todolistReducer from "../reducers/todolistReducer";
const reducer=combineReducers({c:counterReducer,t:todolistReducer})
const store = new createStore(reducer)
export default store;