import {takeLatest} from "redux-saga/effects";
import {DoctorProfileTypes,DoctorTypes} from "../types";
import doctorProfileSaga from "./doctorProfileSaga";
import doctorSaga from "./doctorSaga";

function* rootSaga(){
    yield takeLatest(DoctorProfileTypes.REQUEST,doctorProfileSaga);
    yield takeLatest(DoctorTypes.REQUEST,doctorSaga);
}

export default rootSaga;