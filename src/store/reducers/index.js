import {combineReducers} from "redux"
import doctorReducer from "./doctorReducer";

const reducers = combineReducers({
    doctors:doctorReducer,
});

export default reducers;