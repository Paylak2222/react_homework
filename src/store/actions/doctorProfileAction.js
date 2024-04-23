import { DoctorProfileTypes } from "../types"

function get(id) {
    return{
        type:DoctorProfileTypes.REQUEST,
        payload:id
    }
}

function resolve(data) {
    return{
        type:DoctorProfileTypes.RESOLVE,
        payload:data
    }
}

function error(error) {
    return{
        type:DoctorProfileTypes.REJECT,
        payload:error
    }
}

export {get,resolve,error}