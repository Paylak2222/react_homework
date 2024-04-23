import publicAPI from "../../services/api/publicAPI";
import { call, put } from "redux-saga/effects";
import { doctorsAction } from "../actions";

function* DoctorSaga(action){
    try {
        const response = yield call(
            publicAPI.get,
             `get-doctors/?page=1&category=${action.payload}`   
        );
        yield put(doctorsAction.resolve(response.data.results));
    } catch (error) {
        yield put (doctorsAction.error(error.message))
    }
}

export default DoctorSaga