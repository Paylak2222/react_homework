import { DoctorTypes } from "../types"

function get(category) {
    return{
        type:DoctorTypes.REQUEST,
        payload:category
    }
}

function resolve(list) {
    return{
        type:DoctorTypes.RESOLVE,
        payload:list
    }
}

function error(error) {
    return{
        type:DoctorTypes.REJECT,
        payload:error
    }
}

export {get,resolve,error}