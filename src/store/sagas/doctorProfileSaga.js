import publicAPI from "../../services/api/publicAPI";
import { call, put } from "redux-saga/effects";
import { doctorProfileAction } from "../actions";

function* DoctorProfileSaga(action){
    try {
        const response = yield call(
            publicAPI.get,
            `user/${action.payload}/?role=doctor`
        );
        yield put(doctorProfileAction.resolve(response.data));
    } catch (error) {
        yield put (doctorProfileAction.error(error.message))
    }
}


export default DoctorProfileSaga