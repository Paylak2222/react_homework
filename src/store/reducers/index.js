import {combineReducers} from "redux"
import doctorsReducer from "./doctorsReducer";
import doctorProfileReducer from "./doctorProfileReducer";

const reducers = combineReducers({
    doctors:doctorsReducer,
    doctorProfile:doctorProfileReducer
});

export default reducers;